# Requirements: Stone-Stitch Local SEO Domination

**Date:** July 13, 2026
**Status:** Approved

## 1. Executive Summary
This document specifies the requirements for generating 10 hyper-local SEO landing pages for `Stone-Stitch.co.uk`. These pages target high-value domestic neighborhoods in Edinburgh and key cities in Central Scotland to capture high-intent localized search terms (e.g., "helibar repair Morningside", "stone crack repair Stirling") and convert homeowners looking for scaffold-free structural masonry repairs.

---

## 2. Goals & Non-Goals
### Goals
- Achieve page-one Google rankings for localized stone repair terms in the 10 target areas.
- Build immediate trust with domestic homeowners by addressing localized architecture challenges (Georgian ashlar, Victorian villas, tenements).
- Maintain 100% unique, high-quality, non-templated text on each page to avoid Google's Helpful Content penalties.
- Inject valid, rich `LocalBusiness` and `Service` JSON-LD schema per page.

### Non-Goals
- Footer cross-linking with other network brands (the site remains strictly isolated for now).
- Setting up physical Google Business Profiles for all 10 areas (the local schema will act as local search signals instead).

---

## 3. Scope Boundaries
### In Scope
- Dynamic route `/areas/[slug]` fetching from a localized data dictionary.
- Fully unique headers, body copy, and CTA structures targeting the 10 specific regions.
- Localized `LocalBusiness` and `Service` schema mapped to real coordinates or local centroid coordinates.
- "Areas We Cover" footer column or sub-footer directory listing the links.

### Deferred
- Interactive coverage map widget (static lists and copy are sufficient for launch).

---

## 4. The 10 Target Areas (Data Dictionary)

1. **Morningside & Bruntsfield (`morningside-bruntsfield`)**
   - *Theme*: Premium Victorian tenements and villas. Sandstone weathering and structural shifting.
2. **New Town & West End (`new-town-west-end`)**
   - *Theme*: UNESCO Georgian heritage, strict conservation guidelines, invisible Helibar crack stitching.
3. **Stockbridge & Trinity (`stockbridge-trinity`)**
   - *Theme*: Stone villas and classic townhouses, damp-induced mortar failure and stone spalling.
4. **Leith & Portobello (`leith-portobello`)**
   - *Theme*: High-density stone tenements and seaside villas, salt spray weathering.
5. **Corstorphine & Murrayfield (`corstorphine-murrayfield`)**
   - *Theme*: Suburban stone properties and bungalows, settlement cracking.
6. **Colinton & Grange (`colinton-grange`)**
   - *Theme*: Grand historic estates and conservation villas, structural stone pinning.
7. **Stirling (`stirling`)**
   - *Theme*: Central Scotland historical hub, exposed weathering, lintel and arch stabilization.
8. **Dunfermline (`dunfermline`)**
   - *Theme*: Historic Fife capital, legacy ground movement/settlement, traditional lime pointing.
9. **Falkirk & Linlithgow (`falkirk-linlithgow`)**
   - *Theme*: High-commuter canal towns, rising damp, lateral restraints and tiebacks.
10. **Haddington & East Lothian (`haddington-east-lothian`)**
    - *Theme*: Red sandstone properties, conservation guidelines, lime repointing.

---

## 5. Success Criteria
- Clean static compilation with `npm run build`.
- Zero validation errors for JSON-LD schema on Google's Rich Results Test tool.
- Page load speed < 1.2s (fully static page).
