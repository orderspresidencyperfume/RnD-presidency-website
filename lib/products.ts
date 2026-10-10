export type Gender = 'Men' | 'Women' | 'Unisex';

export interface Product {
  slug: string;
  name: string;
  gender: Gender;
  family: string;
  reference: string;
  notes: string;
  description: string;
  occasions: string;
  seasons: string;
  folder: string | null;
}

export const PRODUCTS: Product[] = [
  {
    slug:'spiced-rapture', name:'Spiced Rapture', gender:'Unisex', family:'Woody · Oud · Smoky · Amber',
    reference:'Louis Vuitton Ombre Nomade (provisional mapping; the supplied list says “LV Nomad”).',
    notes:'Oud, incense, benzoin and dark woody facets. Reference profile only.',
    description:'A deep, smoky and sophisticated scent concept built around rich oud, incense, warm resins and dark woods. Its mysterious, bold character suits people who prefer a more intense, luxurious fragrance.',
    occasions:'Evening, special occasions, date night', seasons:'Autumn, winter, monsoon', folder:'spiced-rapture'
  },
  {
    slug:'vanilla-rapture', name:'Vanilla Rapture', gender:'Unisex', family:'Gourmand · Vanilla · Warm Spicy',
    reference:'Lattafa Khamrah.',
    notes:'Bergamot, cinnamon, nutmeg, dates, praline, vanilla, tonka, benzoin, myrrh and amberwood.',
    description:'A rich, sweet and comforting gourmand-style fragrance with cinnamon, praline, vanilla and amber-like warmth. The overall impression is smooth, indulgent and inviting.',
    occasions:'Date night, parties, evenings', seasons:'Autumn, winter', folder:'vanilla-rapture'
  },
  {
    slug:'elite-aqua', name:'Elite Aqua', gender:'Men', family:'Fresh · Aquatic · Aromatic',
    reference:'Rasasi Hawas for Him.',
    notes:'Apple, bergamot, lemon, cinnamon, watery notes, plum, cardamom, ambergris, musk, patchouli and driftwood.',
    description:'A vibrant fresh fragrance with fruity aquatic character, crisp citrus and a smooth woody finish. It feels energetic, modern and refreshing for regular wear.',
    occasions:'Everyday, office, travel', seasons:'Summer, monsoon', folder:'elite-aqua'
  },
  {
    slug:'coco-blast', name:'Coco Blast', gender:'Unisex', family:'Fruity · Floral · Powdery (provisional)',
    reference:'“Xerjoff Purple” in the supplied list; exact reference name needs confirmation.',
    notes:'Provisional fruity-floral and powdery direction. Exact note pyramid is not confirmed in the supplied catalogue.',
    description:'A bright, expressive scent concept with a fruity-floral impression and a soft, smooth finish. The exact note pyramid is not confirmed in the supplied catalogue.',
    occasions:'Social occasions, dates, parties', seasons:'Spring, summer', folder:'coco-blast'
  },
  {
    slug:'accento', name:'Accento', gender:'Unisex', family:'Fragrance profile not specified',
    reference:'Not specified in the supplied catalogue.',
    notes:'Exact inspiration and note pyramid are not confirmed in the supplied catalogue.',
    description:'A versatile signature-fragrance listing. The supplied source gives the product name but does not specify its inspiration or detailed notes, so these should be confirmed against the actual formulation.',
    occasions:'To be confirmed', seasons:'All-season positioning to be confirmed', folder:'accento'
  },
  {
    slug:'coco-vanilla', name:'Coco Vanilla', gender:'Unisex', family:'Vanilla · Sweet · Amber',
    reference:'Kayali Vanilla 28.',
    notes:'Vanilla, soft florals, tonka, brown sugar, musk, patchouli and amber.',
    description:'A warm, creamy vanilla scent with soft floral nuances, gentle sugar-like sweetness, musk and amber warmth. Smooth and inviting, with an elegant gourmand character.',
    occasions:'Everyday, brunch, date night', seasons:'Autumn, winter', folder:'coco-vanilla'
  },
  {
    slug:'fruit-punch', name:'Fruit Punch', gender:'Unisex', family:'Gourmand · Sweet',
    reference:'Oreo cookies.',
    notes:'Cookie-inspired sweet gourmand concept; exact notes are not specified in the supplied catalogue.',
    description:'A playful, sweet gourmand concept inspired by cookie-like comfort. Its intended character is creamy, warm and inviting for those who enjoy dessert-like fragrances.',
    occasions:'Casual wear, outings, social occasions', seasons:'All seasons', folder:'fruit-punch'
  },
  {
    slug:'tonka', name:'Tonka', gender:'Unisex', family:'Oriental · Sweet · Spicy · Woody',
    reference:'Arabian Tonka (exact original product/brand mapping to verify).',
    notes:'Bergamot, saffron, rose, oud, amber, oakmoss, tonka, leather, brown sugar and white musk.',
    description:'A rich, warm fragrance concept combining tonka-like sweetness with spice, amber, leather and woody depth. The impression is sensual, full-bodied and sophisticated.',
    occasions:'Evening, dates, weddings', seasons:'Autumn, winter', folder:'tonka'
  },
  {
    slug:'desire-ice', name:'Desire Ice', gender:'Men', family:'Fresh · Fruity · Aquatic',
    reference:'Rasasi Hawas Ice.',
    notes:'Apple, lemon, bergamot, star anise, plum, orange blossom, cardamom, musk, amber, driftwood and moss.',
    description:'A crisp, energetic scent concept with icy freshness, citrus brightness, fruity nuances and a clean aquatic finish. Made for a refreshing, modern impression.',
    occasions:'Daytime, outdoor, casual', seasons:'Summer, monsoon', folder:'desire-ice'
  },
  {
    slug:'ocean', name:'Ocean', gender:'Men', family:'Fresh · Aquatic · Woody',
    reference:'Ajmal Blu (working mapping; verify if needed).',
    notes:'Fresh aquatic profile; the exact Presidency note pyramid is not supplied in the catalogue.',
    description:'A clean aquatic-style fragrance concept with a refreshing, easygoing character and a smooth woody finish. Designed for everyday versatility without feeling heavy.',
    occasions:'Office, everyday, travel', seasons:'Spring, summer', folder:'ocean'
  },
  {
    slug:'cool-elixir', name:'Cool Elixir', gender:'Men', family:'Aromatic · Amber · Sweet',
    reference:'Jean Paul Gaultier Le Male Elixir (working mapping).',
    notes:'Aromatic mint/lavender nuances with warm vanilla, tonka, amber and tobacco-like facets.',
    description:'A bold warm fragrance concept combining aromatic freshness with rich sweet warmth and woody depth. Its sensual character is particularly suited to evenings.',
    occasions:'Night out, dates, parties', seasons:'Autumn, winter', folder:'cool-elixir'
  },
  {
    slug:'elixir', name:'Elixir', gender:'Men', family:'Fresh · Aquatic · Aromatic (provisional)',
    reference:'Rasasi Hawas Ice (working-catalogue mapping; verify against the bottle).',
    notes:'Fresh icy aquatic and citrus direction; exact Presidency notes are not confirmed in the supplied catalogue.',
    description:'A refreshing, energetic fragrance concept with a cool aquatic character and bright aromatic freshness. Exact notes should be confirmed against the finished product.',
    occasions:'Everyday, outdoor, casual', seasons:'Summer, monsoon', folder:null
  },
  {
    slug:'knight-out', name:'Knight Out', gender:'Men', family:'Fruity · Spicy · Amber · Sweet',
    reference:'Afnan 9PM.',
    notes:'Bergamot, lavandin, cinnamon, apple, floral nuances, patchouli, amber, vanilla and tonka.',
    description:'A modern evening scent concept with fruity freshness, aromatic spice and a warm sweet finish. Confident and attention-grabbing while retaining a smooth character.',
    occasions:'Night out, date night, parties', seasons:'Autumn, winter', folder:'knight-out'
  },
  {
    slug:'purple-oud', name:'Purple Oud', gender:'Unisex', family:'Fruity · Oud · Woody',
    reference:'Fruity and oud combination; no specific original fragrance is confirmed in the supplied catalogue.',
    notes:'Dark fruity sweetness and oud with woody warmth; exact note pyramid not specified.',
    description:'A distinctive combination of dark fruity sweetness and rich oud character. Woody warmth adds depth, creating a mysterious and luxurious overall impression.',
    occasions:'Evening, weddings, special occasions', seasons:'Autumn, winter', folder:'purple-oud'
  },
  {
    slug:'ocean-chill', name:'Ocean Chill', gender:'Unisex', family:'Fresh · Fruity · Citrus',
    reference:'Louis Vuitton Pacific Chill.',
    notes:'Blackcurrant accord, citron, carrot seed, fresh citrus and green nuances.',
    description:'A bright, refreshing scent concept inspired by cool citrus, fresh fruit and green aromatic nuances. Its lively character feels relaxed and uplifting in warm weather.',
    occasions:'Daytime, travel, casual wear', seasons:'Spring, summer', folder:'ocean-chill'
  },
  {
    slug:'all-time', name:'All Time', gender:'Men', family:'Fresh · Aquatic · Citrus',
    reference:'Giorgio Armani Acqua di Giò.',
    notes:'Marine notes, bergamot, cedarwood, neroli, green tangerine, rosemary, persimmon and patchouli (reference profile).',
    description:'A timeless fresh scent concept with marine character, citrus brightness, aromatic herbs and clean woods. Versatile and effortless for use as an everyday signature.',
    occasions:'Office, everyday, travel', seasons:'Spring, summer', folder:null
  },
  {
    slug:'yaraa', name:'Yaraa', gender:'Women', family:'Fruity · Floral · Vanilla',
    reference:'Lattafa Yara.',
    notes:'Tangerine, heliotrope, orchid, tropical/gourmand accords, vanilla, sandalwood and musk.',
    description:'A soft feminine scent concept with fruity sweetness, delicate florals, creamy vanilla and a gentle musky finish. Smooth, playful and elegant without being overly heavy.',
    occasions:'Brunch, everyday, date night', seasons:'Spring, summer', folder:'yaraa'
  },
  {
    slug:'guilty', name:'Guilty', gender:'Men', family:'Woody · Aromatic · Spicy',
    reference:'Gucci Guilty Pour Homme.',
    notes:'Rose, chili pepper, orange blossom, neroli, lavender, patchouli and cedarwood.',
    description:'A confident fragrance concept balancing citrus-aromatic freshness with floral nuances, patchouli and cedarwood. Clean yet warm, it suits both everyday and evening settings.',
    occasions:'Office, dates, evenings', seasons:'All seasons', folder:'guilty'
  },
  {
    slug:'intensity-blue', name:'Intensity Blue', gender:'Men', family:'Citrus · Aquatic · Woody',
    reference:'Dolce & Gabbana Light Blue Eau Intense Pour Homme.',
    notes:'Grapefruit, mandarin, seawater, juniper, musk and amberwood.',
    description:'An energising fresh scent concept with bright citrus, marine notes, aromatic juniper and a clean woody-musky finish. Crisp and modern for hot weather.',
    occasions:'Office, travel, outdoor', seasons:'Spring, summer', folder:'intensity-blue'
  },
  {
    slug:'jasmin', name:'Jasmin', gender:'Women', family:'Floral · Jasmine',
    reference:'Jasmine flower / warm floral character.',
    notes:'Jasmine-centred floral profile; detailed note pyramid not specified in the supplied catalogue.',
    description:'A floral scent concept centred on the graceful character of jasmine. Soft, elegant and feminine, it evokes fresh blossoms with a refined floral presence.',
    occasions:'Daytime, brunch, dates', seasons:'Spring, summer', folder:'jasmin'
  },
  {
    slug:'black-oud', name:'Black Oud', gender:'Men', family:'Oud · Woody · Warm',
    reference:'Warm and oud notes.',
    notes:'Warm oud and woody profile; exact note pyramid not specified in the supplied catalogue.',
    description:'A deep oud-inspired scent concept with dark woody warmth and a rich, mysterious character. Bold and mature in impression, it is suited to evening wear.',
    occasions:'Evening, weddings, formal occasions', seasons:'Autumn, winter', folder:'black-oud'
  },
  {
    slug:'african-oud', name:'African Oud', gender:'Men', family:'Warm · Oud · Woody',
    reference:'Jasmine flower is listed in the supplied catalogue; the pairing should be verified.',
    notes:'Jasmine is mentioned in the supplied list; exact Presidency note pyramid is not specified.',
    description:'A warm, woody fragrance concept with an oud-led character and a possible floral nuance. The exact reference pairing and note pyramid should be verified before publishing detailed claims.',
    occasions:'Evening, formal occasions', seasons:'Autumn, winter', folder:'african-oud'
  },
  {
    slug:'bright-star', name:'Bright Star', gender:'Men', family:'Amber · Vanilla · Aromatic',
    reference:'Parfums de Marly Althaïr.',
    notes:'Bergamot, mandarin, elemi, orange blossom, cinnamon, cardamom, bourbon vanilla, guaiacwood and praline.',
    description:'A warm and luminous scent concept combining citrus freshness, aromatic spices, creamy vanilla and sweet woody nuances. Smooth and sophisticated with a rich finish.',
    occasions:'Dates, formal occasions, weddings', seasons:'Autumn, winter', folder:'bright-star'
  },
  {
    slug:'shaghaf-oudh', name:'Shaghaf Oudh', gender:'Unisex', family:'Sweet · Oud · Warm',
    reference:'Sweet and oud combinations.',
    notes:'Generic sweet-oud profile; exact note pyramid not specified in the supplied catalogue.',
    description:'A rich scent concept blending sweet warmth with oud and dark woods. Its enveloping character feels opulent and expressive for those who enjoy deeper oriental-style fragrances.',
    occasions:'Weddings, evenings, special occasions', seasons:'Autumn, winter', folder:'shaghaf-oudh'
  },
  {
    slug:'stronger-with-me', name:'Stronger With Me', gender:'Men', family:'Aromatic · Warm Spicy · Amber · Woody',
    reference:'Emporio Armani Stronger With You Intensely.',
    notes:'Pink pepper, lavender, sage, amberwood, vanilla and chestnut-like warmth.',
    description:'A warm, seductive fragrance concept with spicy accents, aromatic notes, sweet vanilla-like richness and woody amber depth. Cosy yet bold, it suits evening wear.',
    occasions:'Dates, parties, evenings', seasons:'Autumn, winter', folder:'stronger-with-me'
  },
  {
    slug:'most-needed', name:'Most Needed', gender:'Men', family:'Spicy · Woody · Amber · Vanilla',
    reference:'Azzaro The Most Wanted Parfum.',
    notes:'Red ginger, warm/incandescent woods and bourbon vanilla.',
    description:'An intense modern scent concept featuring spicy ginger, warm woods and rich vanilla sweetness. Bold and sensual, it is suited to memorable evening occasions.',
    occasions:'Night out, parties, dates', seasons:'Autumn, winter', folder:'most-needed'
  },
  {
    slug:'jannat-ul-firdous', name:'Jannat ul Firdous', gender:'Unisex', family:'Spicy · Oriental',
    reference:'Blend of spices.',
    notes:'Generic spice blend; exact spices and note pyramid are not specified in the supplied catalogue.',
    description:'A spice-inspired scent concept with a warm, aromatic and traditional character. Its rich, inviting profile suits people who appreciate bold oriental-style fragrances.',
    occasions:'Festive events, weddings, evenings', seasons:'Autumn, winter', folder:'jannat-ul-firdous'
  },
  {
    slug:'sheikh', name:'Sheikh', gender:'Unisex', family:'Oriental · Woody · Spicy · Floral',
    reference:'Bin Shaikh by Ahmed Al Maghribi.',
    notes:'Lavender, saffron, rose, citrus, jasmine, orchid, violet, incense, patchouli, agarwood, musk and amber.',
    description:'A rich oriental scent concept combining warm spices, floral nuances, dark woods, oud and amber-like depth. Regal and expressive, with a fuller, more intense character.',
    occasions:'Weddings, formal events, evenings', seasons:'Autumn, winter', folder:'sheikh'
  },
  {
    slug:'pure-magic', name:'Pure Magic', gender:'Unisex', family:'Fruity · Citrus · Amber · Musk',
    reference:'Sospiro Erba Pura.',
    notes:'Lemon, Calabrian bergamot, Sicilian orange, Mediterranean fruits, amber, Madagascar vanilla and white musk.',
    description:'A radiant fruity scent concept with bright citrus, juicy fruit character and a smooth amber, vanilla and musky finish. Vibrant and versatile, balancing freshness with warmth.',
    occasions:'Daytime, brunch, evenings', seasons:'Spring, summer, all seasons', folder:'pure-magic'
  },
  {
    slug:'imaginary', name:'Imaginary', gender:'Men', family:'Citrus · Tea · Amber',
    reference:'Louis Vuitton Imagination.',
    notes:'Bergamot/citrus, black tea and an ambery accord; full pyramid not confirmed in the supplied catalogue.',
    description:'A clean, luminous scent concept combining bright citrus, tea-like freshness and smooth amber warmth. Refined and modern, it works well for everyday use and travel.',
    occasions:'Office, travel, daytime', seasons:'Spring, summer, all seasons', folder:'imaginary'
  },
  {
    slug:'sphair', name:'Sphair', gender:'Unisex', family:'Fruity · Warm',
    reference:'Fruity and warm notes.',
    notes:'Generic fruity-warm profile; detailed notes not specified in the supplied catalogue.',
    description:'A versatile scent concept blending fresh fruity character with gentle warmth. Its intended personality is approachable, smooth and inviting, balancing brightness with comfort.',
    occasions:'Everyday, brunch, casual evenings', seasons:'All seasons', folder:'sphair'
  },
  {
    slug:'aqua-di-blue', name:'Aqua Di Blue', gender:'Men', family:'Citrus · Aromatic · Woody',
    reference:'Bleu de Chanel Eau de Parfum.',
    notes:'Citrus, mint, pink pepper, aromatic notes, ginger, jasmine, nutmeg, incense, amber, cedar, sandalwood and patchouli.',
    description:'A refined fresh fragrance concept with citrus brightness, aromatic nuances, dry woods and warm amber-like depth. Clean, confident and suitable for professional or evening settings.',
    occasions:'Office, formal events, dates', seasons:'All seasons', folder:'aqua-di-blue'
  },
  {
    slug:'desert-rain', name:'Desert Rain', gender:'Unisex', family:'Woody · Oud · Leather · Smoky',
    reference:'Dolce & Gabbana Velvet Desert Oud.',
    notes:'Tobacco, saffron, incense, leather, amber and oud (reference-style profile; confirm exact pyramid).',
    description:'A deep atmospheric fragrance concept with smoky woods, incense, leather-like warmth and oud character. Dark and sophisticated, it evokes warm desert air after rainfall.',
    occasions:'Formal evenings, weddings, special occasions', seasons:'Winter, monsoon', folder:'desert-rain'
  },
  {
    slug:'success', name:'Success', gender:'Men', family:'Citrus · Fruity · Spicy · Woody',
    reference:'Creed Absolu Aventus.',
    notes:'Grapefruit, bergamot, pineapple, spices, woods, vetiver and amber; exact Presidency formula not verified.',
    description:'A confident fragrance concept with vibrant citrus, juicy fruit, aromatic spices and dry woody depth. Fresh and powerful, it creates a polished, energetic impression.',
    occasions:'Office, evenings, special occasions', seasons:'All seasons', folder:'success'
  }
];
