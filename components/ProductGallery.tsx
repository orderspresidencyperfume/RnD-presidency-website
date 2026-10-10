'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/lib/products';

export default function ProductGallery({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const pathFor = (index: number) => `/perfumes/${product.folder}/image-${index}.webp`;

  return (
    <div className="detail-gallery">
      <div className="detail-main-image">
        {product.folder && !failedImages.includes(activeIndex) ? (
          <Image src={pathFor(activeIndex)} alt={`Presidency ${product.name} fragrance bottle`} fill priority sizes="(max-width: 760px) 90vw, 48vw" onError={() => setFailedImages((current) => [...current, activeIndex])} />
        ) : (
          <div className="image-placeholder detail-placeholder" role="img" aria-label={`Image for ${product.name} is not available`}><span className="placeholder-glyph">P</span><span className="placeholder-name">{product.name}</span></div>
        )}
        <span className="gallery-stamp">PRESIDENCY · {product.gender.toUpperCase()}</span>
      </div>
      {product.folder ? <div className="thumbnail-row" role="group" aria-label={`More photos of ${product.name}`}>
        {[1, 2, 3, 4, 5].map((index) => <button key={index} type="button" className={`gallery-thumb${activeIndex === index ? ' active' : ''}`} onClick={() => setActiveIndex(index)} aria-label={`View image ${index} of ${product.name}`}>
          {!failedImages.includes(index) ? <Image src={pathFor(index)} alt="" fill sizes="80px" onError={() => setFailedImages((current) => [...current, index])} /> : <span className="thumb-fallback">{index}</span>}
        </button>)}
      </div> : null}
    </div>
  );
}
