'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = `/?q=${encodeURIComponent(query.trim())}#collection`;
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${menuOpen ? ' search-open' : ''}`}>
      <Link className="brand-mark" href="/" aria-label="Presidency Perfumes home">
        <Image src="/images/presidency-logo.png" alt="Presidency Perfumes original gold logo" width={65} height={102} priority />
      </Link>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primaryNav"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((open) => !open)}
      ><span /><span /></button>
      <nav className={`primary-nav${menuOpen ? ' open' : ''}`} id="primaryNav" aria-label="Main navigation">
        <Link className="nav-link" href="/#home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="nav-link" href="/?gender=All#collection" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.href = "/?gender=All#collection"; }}>The Collection</Link>
        <Link className="nav-link" href="/?gender=Men#collection" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.href = "/?gender=Men#collection"; }}>Men</Link>
        <Link className="nav-link" href="/?gender=Women#collection" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.href = "/?gender=Women#collection"; }}>Women</Link>
        <Link className="nav-link" href="/?gender=Unisex#collection" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.href = "/?gender=Unisex#collection"; }}>Unisex</Link>
        <Link className="nav-link" href="/#story" onClick={() => setMenuOpen(false)}>Our Philosophy</Link>
      </nav>
      <form className="search-wrap" onSubmit={submitSearch} role="search">
        <button className="search-submit" type="submit" aria-label="Search fragrances">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m15.5 15.5 5 5" /></svg>
        </button>
        <input type="search" placeholder="Search scents" autoComplete="off" aria-label="Search fragrances" value={query} onChange={(event) => setQuery(event.target.value)} />
      </form>
    </header>
  );
}
