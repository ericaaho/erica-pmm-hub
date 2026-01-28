

# Single-Page Portfolio Consolidation

This plan consolidates your two-page website into a single comprehensive home page with all your content, plus several enhancements.

---

## Overview of Changes

1. **Consolidate to single page** - Merge About and Work content into one scrollable page
2. **Add profile photo** - Replace placeholder with your uploaded photo
3. **Add Companies Worked At section** - New section with company logos (Dave, BILL, Invoice2go, Intuit)
4. **Update case study content** - New copy with bullet-point format for better readability
5. **Add "Find Me At" section** - Personal interests + LinkedIn and email links at page end
6. **Update email** - Change to erica.sy.ho@gmail.com throughout
7. **Simplify navigation** - Remove multi-page routing, header becomes simpler brand element

---

## Page Structure (Top to Bottom)

```text
+---------------------------+
|         Header            |
|         "Erica"           |
+---------------------------+
|                           |
|     Hero Section          |
|  [Photo]  |  Bio + Email  |
|                           |
+---------------------------+
|     My Values             |
|  [Openness] [Curiosity]   |
|        [Trust]            |
+---------------------------+
|   Companies Worked At     |
| Dave | BILL | Invoice2go  |
|         | Intuit          |
+---------------------------+
|    Notable PMM Work       |
|     (section header)      |
+---------------------------+
|    Case Study 1: Dave     |
|    Impact + What I Did    |
+---------------------------+
|  Case Study 2: BILL×Divvy |
|    Impact + What I Did    |
+---------------------------+
|   Case Study 3: Virtual   |
|       Card Rewards        |
+---------------------------+
|     Find Me At Section    |
| - Dance classes           |
| - Reading at home         |
| - Toastmasters            |
| LinkedIn | Email links    |
+---------------------------+
|         Footer            |
+---------------------------+
```

---

## Technical Implementation Details

### Files to Modify

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Create new single-page component with all sections |
| `src/App.tsx` | Remove Work route, update to use Index |
| `src/components/Header.tsx` | Simplify to just show "Erica" name (no nav links needed) |
| `src/components/CaseStudy.tsx` | Update to support bullet-point "What I Did" format |

### Files to Delete
- `src/pages/About.tsx` - Replaced by Index.tsx
- `src/pages/Work.tsx` - Content merged into Index.tsx

### Assets to Copy
Copy uploaded images to `src/assets/`:
- `IMG_8705.JPG` - Profile photo
- `DAVE-faa573a8.png` - Dave logo
- `images.png` - BILL logo
- `Invoice2go-Logo-@3x.png` - Invoice2go logo
- `intuit-2line-ecosystem-logo-icom-20230324-500x230.avif` - Intuit logo

### New Components
- `CompanyLogos.tsx` - Horizontal row of company logos with responsive sizing

### Case Study Content Update

Each case study will have:
- **Title** - Project name with company
- **Impact** - Single paragraph describing measurable outcome
- **What I Did** - Bulleted list of specific contributions (easier to scan)

Example structure for "What I Did":
```text
- Led end-to-end positioning and messaging strategy...
- Authored a competitive positioning one-pager...
- Designed and executed an in-app painted door experiment...
- Built an ROI and unit economics model...
- Conducted customer interviews and surveys...
```

### Find Me At Section Content

Personal interests displayed as a friendly list:
- Dance classes
- Reading a book at home
- Practicing my public speaking skills at Toastmasters

Contact links:
- LinkedIn: https://www.linkedin.com/in/ericaho1/
- Email: erica.sy.ho@gmail.com

