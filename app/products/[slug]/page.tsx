import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductGallery from '@/components/ProductGallery';
import { PRODUCTS } from '@/lib/products';

type PageProps = { params: Promise<{ slug: string }> };
const FORMATS = [
  { name: 'Perfume · 30 ml', price: '₹649' },
  { name: 'Perfume · 50 ml', price: '₹999' },
  { name: 'Attar · 6 ml', price: '₹299' },
  { name: 'Attar · 12 ml', price: '₹549' },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) return { title: 'Fragrance not found' };
  return {
    title: product.name,
    description: product.description,
    openGraph: { title: `${product.name} — Presidency Perfumes`, description: product.description, type: 'website' },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) notFound();

  const sameGender = PRODUCTS.filter((item) => item.slug !== product.slug && item.gender === product.gender);
  const relatedProducts = (sameGender.length >= 4 ? sameGender : PRODUCTS.filter((item) => item.slug !== product.slug)).slice(0, 4);
  const noteTags = product.notes.split(/[;,]+/).map((item) => item.trim().replace(/\.$/, '')).filter(Boolean);

  return (
    <section className="detail-page" aria-labelledby="detailTitle">
      <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/#collection">The Collection</Link><span>›</span><strong>{product.name}</strong></div>
      <div className="detail-layout">
        <ProductGallery product={product} />
        <div className="detail-info">
          <div className="detail-kicker">{product.gender} fragrance</div>
          <h1 className="detail-title" id="detailTitle">{product.name}</h1>
          <div className="detail-family">{product.family}</div>
          <p className="detail-description">{product.description}</p>
          <div className="detail-rule" />
          <div><span className="detail-label">Inspiration / reference</span><p className="detail-inspiration">{product.reference}</p></div>
          <div className="detail-rule" />
          <div><h2 className="detail-section-title">Fragrance profile</h2><p className="profile-copy">{product.notes}</p>{noteTags.length > 1 && <div className="note-chips">{noteTags.map((note, index) => <span className="note-chip" key={`${note}-${index}`}>{note}</span>)}</div>}</div>
          <div className="detail-facts">
            <div className="fact-item"><span className="detail-label">Best for</span><span className="fact-value">{product.occasions}</span></div>
            <div className="fact-item"><span className="detail-label">Suggested seasons</span><span className="fact-value">{product.seasons}</span></div>
          </div>
          <div className="detail-rule" />
          <div>
            <h2 className="detail-section-title">Available formats</h2>
            <p className="profile-copy">Catalogue prices for this fragrance profile</p>
            <div className="formats-list">{FORMATS.map((format) => <div className="format-row" key={format.name}><span>{format.name}</span><strong>{format.price}</strong></div>)}</div>
            <p className="catalogue-note">Prices are shown for catalogue information. Some fragrance notes describe an inspiration/reference profile and are not a laboratory-confirmed formula for the Presidency product.</p>
          </div>
          <Link className="back-link" href="/#collection"><span aria-hidden="true">←</span> Back to the collection</Link>
        </div>
      </div>
      <section className="related-section" aria-labelledby="relatedTitle">
        <div className="related-head"><h2 id="relatedTitle">You may also <em>explore</em></h2><p>More from the collection</p></div>
        <div className="related-grid">{relatedProducts.map((item) => <ProductCard key={item.slug} product={item} index={PRODUCTS.findIndex((productItem) => productItem.slug === item.slug)} compact />)}</div>
      </section>
    </section>
  );
}
