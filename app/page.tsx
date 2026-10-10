import Image from 'next/image';
import Link from 'next/link';
import CatalogueGrid from '@/components/CatalogueGrid';

export default function HomePage() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="heroTitle">
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> PRESIDENCY PERFUMES & ATTARS</p>
          <h1 id="heroTitle">A fragrance<br /><em>of your own.</em></h1>
          <p className="hero-text">Explore a considered collection of distinctive scents, from fresh and luminous to warm, deep and unforgettable.</p>
          <Link className="text-cta" href="#collection">Explore the collection <span aria-hidden="true">↗</span></Link>
          <div className="hero-caption"><span>01</span><span className="caption-line" /><span>SCENT, SIGNATURE, SELF</span></div>
        </div>
        <div className="hero-art" aria-label="Featured Presidency fragrance">
          <div className="hero-image-frame">
            <Image src="/perfumes/spiced-rapture/image-2.webp" alt="Presidency Spiced Rapture fragrance bottle in a warm, atmospheric setting" fill priority sizes="(max-width: 760px) 90vw, 45vw" />
          </div>
          <div className="hero-side-label">THE ART OF FRAGRANCE · EST. IN CHARACTER</div>
          <div className="hero-product-tag"><span>FEATURED SCENT</span><strong>Spiced Rapture</strong><small>Woody · Oud · Smoky</small></div>
          <div className="hero-ring hero-ring-one" /><div className="hero-ring hero-ring-two" />
        </div>
        <div className="hero-bottom-rule"><span /><span>DISCOVER YOUR SIGNATURE</span><span /></div>
      </section>

      <section className="manifesto-strip" aria-label="Collection highlights"><span>Fragrance, thoughtfully explored</span><i>✦</i><span>Perfumes & attars</span><i>✦</i><span>Notes for every mood</span></section>

      <CatalogueGrid />

      <section className="story-section" id="story" aria-labelledby="storyTitle">
        <div className="story-image">
          <Image src="/perfumes/vanilla-rapture/image-2.webp" alt="Warmly lit Presidency Vanilla Rapture fragrance bottle" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <div className="story-image-note">A MOMENT, BOTTLED</div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">MORE THAN A FIRST IMPRESSION</p>
          <h2 id="storyTitle">A scent is<br /><em>personal.</em></h2>
          <p>Some fragrances feel fresh and effortless. Others are warm, expressive or quietly memorable. Explore each profile, discover its notes and find the fragrance story that speaks to you.</p>
          <div className="story-signoff"><span className="signature-line" /><span>Presidency Perfumes</span></div>
        </div>
      </section>

      <section className="closing-band" aria-label="Presidency Perfumes">
        <div className="closing-logo"><Image src="/images/presidency-logo.png" alt="Presidency Perfumes" width={40} height={63} /></div>
        <div><p className="eyebrow">THE PRESIDENCY COLLECTION</p><h2>Discover the notes.<br /><em>Imagine the feeling.</em></h2></div>
        <Link href="#collection" className="round-arrow" aria-label="Return to the fragrance collection">↗</Link>
      </section>
    </>
  );
}
