'use client';

import { useEffect, useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';
import type { Gender } from '@/lib/products';

type Filter = 'All' | Gender;
const FILTERS: Filter[] = ['All', 'Men', 'Women', 'Unisex'];

export default function CatalogueGrid() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedGender = params.get('gender');
    if (requestedGender && FILTERS.includes(requestedGender as Filter)) setFilter(requestedGender as Filter);
    const requestedQuery = params.get('q');
    if (requestedQuery) setQuery(requestedQuery);
  }, []);

  const visibleProducts = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesFilter = filter === 'All' || product.gender === filter;
      const searchable = [product.name, product.gender, product.family, product.reference, product.notes, product.description].join(' ').toLocaleLowerCase();
      return matchesFilter && (!needle || searchable.includes(needle));
    });
  }, [filter, query]);

  return (
    <section className="collection-section section-shell" id="collection" aria-labelledby="collectionTitle">
      <div className="section-heading">
        <div><p className="eyebrow eyebrow-light">THE PRESIDENCY EDIT</p><h2 id="collectionTitle">Our <em>collection</em></h2><p className="section-intro">Find the character that feels like you.</p></div>
        <div className="collection-meta"><strong>{visibleProducts.length}</strong><span>fragrance profiles</span></div>
      </div>
      <div className="filter-row">
        <div className="filter-tabs" role="group" aria-label="Filter fragrances by category">
          {FILTERS.map((item) => <button key={item} type="button" className={`filter-tab${filter === item ? ' active' : ''}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === 'All' ? 'All scents' : item}{item === 'All' ? <span>{PRODUCTS.length}</span> : null}</button>)}
        </div>
        <label className="collection-search" htmlFor="collectionSearch"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m15.5 15.5 5 5" /></svg><input id="collectionSearch" type="search" placeholder="Find a fragrance" autoComplete="off" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
      </div>
      {visibleProducts.length > 0 ? (
        <div className="product-grid" aria-live="polite">{visibleProducts.map((product) => <ProductCard key={product.slug} product={product} index={PRODUCTS.findIndex((item) => item.slug === product.slug)} />)}</div>
      ) : (
        <div className="empty-state"><span className="empty-symbol">✦</span><h3>No fragrances found</h3><p>Try another name or select a different category.</p><button className="subtle-button" type="button" onClick={() => { setFilter('All'); setQuery(''); }}>Reset filters</button></div>
      )}
    </section>
  );
}
