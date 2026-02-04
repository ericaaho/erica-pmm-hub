

## Replace BILL × Divvy Case Study Image

This plan will replace the current image for the BILL × Divvy case study with your uploaded `pineapple-venn.png` image.

### Changes

1. **Delete old image asset**
   - Remove `src/assets/acquisition.png` (the current BILL × Divvy image)

2. **Add new image asset**
   - Copy uploaded `pineapple-venn.png` to `src/assets/pineapple-venn.png`

3. **Update Index.tsx import**
   - Change the import from:
     ```tsx
     import divvyImage from "@/assets/acquisition.png";
     ```
   - To:
     ```tsx
     import divvyImage from "@/assets/pineapple-venn.png";
     ```

The `CaseStudy` component for "BILL × Divvy — Acquisition Narrative & Customer Insights" already uses the `divvyImage` variable, so only the import path needs to change.

