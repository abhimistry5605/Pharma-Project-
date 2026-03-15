# MediCore Product Catalog Redesign TODO

**Information Gathered:** Current ProductCatalog.tsx has left sidebar (search, stock toggle, categories checkboxes), right grid. Colors match slate/cyan/emerald. Needs polish for premium industrial vibe.

**Plan:**
1. Edit src/components/ProductCatalog.tsx:
   - Sidebar: Segmented tabs (Search/Categories/Status), modern toggle styles.
   - Cards: 
     - Header: 2D chemical structure image (placeholder SVG).
     - Category badge: bg-emerald-50 text-emerald-700 rounded-full.
     - Data: Clean list for Cat No/CAS.
     - Button: Solid bg-cyan-600 text-white.
   - Palette strict: slate-50 bg, white cards, cyan/emerald accents.

**Followup:** Dev server reloads - check grid.


