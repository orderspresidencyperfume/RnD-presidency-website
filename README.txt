PRESIDENCY PERFUMES — CATALOGUE WEBSITE
======================================

This is a standalone Next.js project for a read-only perfume catalogue.
It includes the website source code, the original golden logo file, and the product photos extracted from the supplied perfume assets.

FEATURES
- Luxury-themed home page and perfume catalogue
- Search and Men / Women / Unisex filters
- Click a perfume to see its own detail page
- Fragrance profile, notes, inspiration/reference, suggested occasions and seasons
- Image gallery where product photos are available
- Responsive desktop and mobile layout
- No cart, Buy Now, checkout, payment gateway, orders, login/signup, customer accounts, admin API or database

SETUP ON WINDOWS
1. Extract the ZIP.
2. Open the extracted folder "presidency_next_catalog" in File Explorer.
3. Click the address bar, type cmd, and press Enter.
4. Run these commands one by one:

   npm install
   npm run dev

5. Open http://localhost:3000 in your browser.
6. To stop the development server, press Ctrl+C in the terminal.

TO BUILD FOR DEPLOYMENT
   npm run build
   npm start

LOGO AND IMAGES
- Logo: public/images/presidency-logo.png
- Perfume photos: public/perfumes/<product-slug>/image-1.webp through image-5.webp
- The supplied golden logo is kept unmodified. Its width/height proportions are preserved when displayed.

CATALOGUE NOTES
- The extra ALPHA listing is omitted, following the requested correction.
- ALL TIME uses a neutral placeholder because the supplied folder repeated African Oud images.
- ELIXIR uses a neutral placeholder because no dedicated ELIXIR image folder was supplied.
- The supplied catalogue's provisional or unspecified inspiration information remains labelled as such.

IMPORTANT
This website is designed only to display catalogue information. A read-only site reduces the features and customer data exposed, but no website can be guaranteed completely immune to hacking. Protect hosting credentials and keep dependencies updated.

If adding these files to an existing Next.js project rather than running this as a standalone project, back up any existing same-name files before replacing them.
