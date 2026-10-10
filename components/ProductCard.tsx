import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';

export default function ProductCard({ product, index = 0, compact = false }: { product: Product; index?: number; compact?: boolean }) {
  const sourceNumber = index + 1;
  return (
    <article className={`product-card${compact ? ' compact-card' : ''}`} style={{ animationDelay: `${Math.min(index * 22, 260)}ms` }}>
      <Link className="product-card-link" href={`/products/${product.slug}`} aria-label={`Explore ${product.name} fragrance details`}>
        <div className="product-image-wrap">
          <span className="product-index">{String(sourceNumber).padStart(2, '0')}</span>
          <span className="product-gender">{product.gender}</span>
          {product.folder ? (
            <Image src={`/perfumes/${product.folder}/image-1.webp`} alt={`Presidency ${product.name} fragrance bottle`} fill sizes="(max-width: 760px) 46vw, (max-width: 1050px) 30vw, 23vw" />
          ) : (
            <div className="image-placeholder" role="img" aria-label={`Image for ${product.name} is not available`}><span className="placeholder-glyph">P</span><span className="placeholder-name">{product.name}</span></div>
          )}
        </div>
        <div className="card-info">
          <div className="card-title-row"><h3 className="card-title">{product.name}</h3><span className="card-arrow" aria-hidden="true">↗</span></div>
          <p className="card-family">{product.family}</p>
          <span className="card-discover">Fragrance details <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
