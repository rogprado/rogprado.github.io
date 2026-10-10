# Change 2: Make contacting Rodrigo easier

## Goal
Let visitors connect through LinkedIn, compose an email in Gmail or their default email app, or copy the public email address.

## Plan
- Create `improve-contact-options` from updated `main` only after the first PR is merged and verified live.
- Keep the existing mailto link and selectable email address.
- Add button-styled links to the LinkedIn profile supplied in the experience text, Gmail compose with the recipient prefilled, and the visitor's default email app.
- Open LinkedIn and Gmail in clearly labeled new tabs. Explain Gmail sign-in and email-app requirements; do not send messages automatically.
- Add a native keyboard-accessible copy button, shown only when JavaScript loads.
- Use the Clipboard API, announcing success only after copying succeeds.
- Announce permission failures or unavailable clipboard support with instructions to copy manually.
- Reuse the site's theme colors and provide visible focus and disabled states.
- Keep the site static, without dependencies or backend changes, and exclude this plan from the generated site.

## Verification
Check mobile and desktop Preview, keyboard use, successful copying, rejected permissions, unavailable clipboard support, repeated copying, and JavaScript-disabled behavior. Ensure the first improvement remains intact.

## Delivery
Local verification passed: Jekyll rendered the contact page and script, both plans were excluded, and the merged experience content remained intact. Preview screenshots at 375px and 1280px showed the button correctly. Isolated JavaScript tests with simulated clipboard responses passed for success, denial, unavailable support, repeated attempts, and missing elements. HTML checks confirmed the mailto link, live status region, and initially hidden button for JavaScript-disabled browsers. Real clipboard permissions and keyboard interaction were not exercised in an automated browser.

Commit message: `Add accessible copy-email option to contact page`

Additional commit message: `Add LinkedIn, Gmail, and email-app contact buttons`

Push this branch and open a separate PR into `main`. Review the diff, leave a comment describing the change, and merge on GitHub. Then sync `main` and verify the published contact page after Pages rebuilds.
