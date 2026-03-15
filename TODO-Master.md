# MediCore Unified Master Redesign TODO

**Information Gathered:** Current structure matches (LandingHero=1 Hero, ProductCatalog=3 Catalog, AboutLab=4 Mission+5 Contact). Colors slate/cyan match. AboutLab already has bento grid NMR/LC-MS/HPLC, mission/facts, contact form/map.

**Plan:**
1. Edit src/components/LandingHero.tsx: Headline "Your Strategic Partner in Pharmaceutical Excellence", subtext quality/global, 2 CTAs "Browse Catalog" solid cyan, "Our Services" outline slate, NMR image.
2. Edit src/components/ProductCatalog.tsx: Search placeholder "Search by Name, CAS, or Cat No.", Cat No bg-slate-100 badge, chemical structures.
3. Edit src/components/AboutLab.tsx: Ensure 3-col bento cyan icons, condensed 2-col mission/facts, split contact/map.
4. App.tsx layout already vertical stack.

**Dependent Files:** All three components.

**Followup:** Reload http://localhost:5174, ultra-clean engineering vibe achieved.

Proceeding step-by-step.

