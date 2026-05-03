# Clean-room Analysis and Redesign

## High-level content inventory from scraped source
- Pages detected: Home, About, Mission, History, Temples, Deities, Facilities, Priests/Services, Etiquette, Policies, Membership, Donation, Volunteering, Seniors Wellness, Education Center, Event Hosting, Board History, Product/Catalog.
- Common sections across pages: page hero/title, informational text blocks, card/grid lists, image galleries, contact or utility footer blocks, and utility links.
- Navigation pattern: broad top-level menu linking organizational info, services/programs, participation (membership, volunteering, donation), and policy/reference pages.
- Content types: long-form text, location snippets, image banners/galleries, action links/CTAs, informational lists/tables, and simple form-oriented entry points.

## New UX architecture
- Reframed into 5-page IA: Home, About, Events, Programs, Resources.
- User flow improvements:
  1. New visitors: Home -> About -> Events.
  2. Returning participants: Home -> Programs -> Resources.
  3. Action-oriented users: Home persistent CTA -> Resources (membership/volunteer/giving).
- Component system:
  - Sticky lightweight header
  - Hero with primary and secondary CTA
  - Reusable highlight cards
  - Quick-facts aside for scanability
  - Accessible footer with concise org statement
- Responsive strategy:
  - Mobile-first single-column baseline
  - Tablet/desktop upgrade to CSS grid
  - Touch-friendly tap targets and concise menu behavior
- Accessibility notes:
  - Semantic landmarks (header/nav/main/section/footer)
  - Sufficient color contrast and visible focus states
  - Menu control with `aria-expanded` and `aria-controls`
  - Readable type sizing and line height
