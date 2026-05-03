# 1. UX Architecture Document

## Step 1 — Requirements extraction
- Functional needs: event publishing, announcement updates, service/ceremony requests, volunteer intake, donation and membership actions, location/contact support.
- Content categories: organizational profile, worship spaces and deity context, event calendar, program catalog, facilities, participation actions, policies/notices, contact and inquiry.
- User flows: first-time visitor orientation, member recurring engagement, volunteer onboarding, donor contribution journey.

## Step 2 — Information architecture design
- Top-level navigation: Home, About, Temples & Deities, Events, Programs, Services, Donate & Membership, Facilities & Volunteer, Contact.
- Discoverability strategy: single global nav + repeated CTAs + page-level highlights.
- Mobile prioritization: concise hero summaries, task-first buttons, short scannable cards.

## Step 3 — UX + feature specification
- Visitor journey: Home → Temples & Deities → Events → Contact.
- Member journey: Home → Programs → Events → Donate & Membership.
- Volunteer journey: Home → Facilities & Volunteer → Contact form.
- Donor journey: Home → Donate & Membership → transparency notes.
- Feature requirements:
  - Event calendar and upcoming highlights.
  - Announcement and notification-ready zones.
  - Service inquiry and ceremony booking entry.
  - Donation and membership pathways.
  - Contact form with categorized request types.
- Accessibility requirements:
  - semantic landmarks and heading hierarchy
  - keyboard-accessible navigation toggle
  - ARIA state updates for menu control
  - readable contrast and touch-friendly targets

# 2. Information Architecture Map
- Home
  - Announcements
  - Quick CTAs
- About
  - Mission
  - History
  - Leadership
- Temples & Deities
  - Locations
  - Worship context
- Events
  - Calendar
  - Upcoming events
  - Notifications
- Programs
  - Religious
  - Cultural
  - Educational
- Services
  - Priests
  - Ceremonies
  - Booking
- Donate & Membership
  - Giving options
  - Membership details
- Facilities & Volunteer
  - Facility use
  - Volunteer onboarding
- Contact
  - Location
  - Inquiry form

# 3. Design System Specification
- Typography: sans-serif UI stack with compact hierarchy for small screens.
- Color tokens: saffron (alert warmth), lotus (primary action), leaf (support), neutral paper background.
- Spacing: four-step spacing rhythm with mobile-first density.
- Components: sticky topbar, responsive nav, hero block, CTA buttons, highlight tiles, notice banners, inquiry form controls.
- Breakpoints: single-column base; multi-column enhancements at 920px+.

# 4. Accessibility + UX improvement notes
- Improved task completion by assigning a dedicated page to each high-frequency intent.
- Reduced ambiguity through explicit labels such as “Services” and “Donate & Membership.”
- Added form semantics and keyboard-compatible menu control.
- Preserved multilingual readiness through modular sections and concise content blocks.
