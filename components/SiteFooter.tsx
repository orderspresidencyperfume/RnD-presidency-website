import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/">PRESIDENCY <span>PERFUMES & ATTARS</span></Link>
      <p>A catalogue for the curious nose.</p>
      <Link href="/#collection">Explore fragrances ↑</Link>
    </footer>
  );
}
