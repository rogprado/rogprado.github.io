# Change 1: Add professional work experience

## Goal
Replace the Work Experience placeholder with the career history supplied by Rodrigo.

## Plan
- Work on `add-work-experience`, created from the clean GitHub `main`.
- Present employers in reverse chronological order, grouping the three McKinsey roles.
- Preserve supplied job titles and dates, including the overlap between McKinsey roles.
- Use only supplied responsibilities, industries, skills, and impact figures. Do not invent responsibilities for roles without descriptions.
- Remove copied LinkedIn editing URLs and interface text; do not fetch LinkedIn content.
- Keep content in Markdown with YAML front matter and reuse the existing responsive layout.
- Exclude this planning document from the generated website.

## Verification
- Build with GitHub Pages-compatible Jekyll.
- Check all seven roles, the supplied dates, and the removal of the placeholder.
- Check Preview at 375px and 1280px, including navigation and overflow.
- Confirm Change1.md is absent from the generated site.

## Delivery
Local verification passed: the Jekyll preview rendered all seven roles under five employers, preserved supplied dates and the impact figure, and all internal navigation links returned HTTP 200. Preview screenshots at 375px and 1280px showed readable layouts without visible horizontal overflow. The generated site excludes this plan.

Commit message: `Add professional work experience from supplied career history`

Push only this branch, open a PR into `main`, review and comment on the changes, then merge on GitHub. Sync `main` and verify the published experience page after Pages rebuilds before beginning Change 2.
