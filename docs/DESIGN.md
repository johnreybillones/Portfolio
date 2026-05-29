---
name: "John Rey F. Billones Portfolio"
description: "Dark technical portfolio for an automation engineer and full-stack builder."
colors:
  obsidian: "#050505"
  ember-deep: "#450a0a"
  ember-red: "#ef4444"
  signal-red: "#dc2626"
  oxblood: "#991b1b"
  wine-red: "#7f1d1d"
  red-faint-surface: "#ef44441a"
  white: "#ffffff"
  white-strong-border: "#ffffff1a"
  white-soft-border: "#ffffff0d"
  white-soft-surface: "#ffffff0d"
  white-faint-surface: "#ffffff05"
  slate-200: "#e2e8f0"
  slate-300: "#cbd5e1"
  slate-400: "#94a3b8"
  slate-500: "#64748b"
  slate-600: "#475569"
  linkedin-blue: "#0077b5"
  facebook-blue: "#1877f2"
  scroll-pink: "#ec4899"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 900
    lineHeight: "1.1"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: "1.15"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: "1.625"
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "0.3em"
  code:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.625"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "1rem 2rem"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.white-soft-surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "1rem 2rem"
    typography: "{typography.label}"
  card-glass:
    backgroundColor: "{colors.white-faint-surface}"
    textColor: "{colors.slate-300}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  input-field:
    backgroundColor: "{colors.white-soft-surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.25rem"
  chip:
    backgroundColor: "{colors.white-soft-surface}"
    textColor: "{colors.slate-400}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.75rem"
---

# Design System: John Rey F. Billones Portfolio

## Overview

**Creative North Star: "The Ember Console"**

The current portfolio presents John Rey F. Billones as a technical builder working inside a cinematic, red-lit development environment. The base is near-black, the accent is ember red, and most content sits on translucent glass surfaces with thin white borders. The system should feel focused, high-energy, and engineered, not playful, pastel, or corporate SaaS.

The site is a brand portfolio, so visual impression carries the product. The strongest recurring motifs are code-console framing, red ambient glows, grayscale-to-color imagery, scroll-triggered reveals, uppercase labels, rounded glass panels, and compact technology chips. New sections should extend those motifs instead of introducing a new palette or a lighter marketing-page style.

**Key Characteristics:**

- Dark obsidian canvas with fixed red radial atmosphere.
- Red is the only primary brand accent, moving from bright ember to deep wine.
- Sections use large vertical rhythm, generous top and bottom padding, and centered max-width containers.
- Surfaces are translucent, blurred, rounded, and bordered rather than solid cards.
- Motion is assertive: GSAP reveals, hover scale, icon drift, marquee movement, and parallax tilt.
- Copy and labels use a technical, portfolio-showcase vocabulary.

## Colors

The palette is an obsidian and ember system: black surfaces, white text, slate support text, and a red signal used for action, section identity, glow, and hover state.

### Primary

- **Obsidian Canvas**: The global site floor and footer. Use it for page backgrounds, modal-like panels, code-card interiors, and any surface that must feel integrated with the site.
- **Ember Red**: The main highlight color for labels, active nav, icons, form focus, section keywords, glows, and important inline emphasis.
- **Signal Red**: The stronger action color for primary CTA gradients, timeline dots, border glows, and hover states.
- **Oxblood / Wine Red**: The dark end of brand gradients. Use it to deepen red without adding new hues.

### Secondary

- **Social Blues**: LinkedIn and Facebook blue appear only inside social icons. They are external-brand colors, not portfolio palette colors.
- **Scroll Pink**: Currently used only by the scroll-to-top button. Treat it as a legacy exception unless the button is redesigned into the red system.

### Neutral

- **White**: Primary text and icons on dark surfaces.
- **Slate 300 / 400**: Body copy and secondary descriptions.
- **Slate 500 / 600**: metadata, code line numbers, placeholders, and low-priority labels.
- **White Alpha Surfaces**: `white/5`, `white/[0.02]`, and `white/10` create the glass-panel vocabulary.

### Named Rules

**The One Flame Rule.** Red is the brand accent. Do not introduce purple, cyan, green, or gold as decorative accents unless the color is inside a third-party logo or a project screenshot.

**The Dark Canvas Rule.** New pages must start on the same dark environment. Do not build a separate white-page portfolio route unless it is a deliberate redesign.

**The Glow With Purpose Rule.** Red glows should identify focus, action, or section energy. Do not scatter red blur blobs where they do not support hierarchy.

## Typography

**Display Font:** Geist, falling back to `ui-sans-serif`, `system-ui`, and `sans-serif`.
**Body Font:** Geist, falling back to `ui-sans-serif`, `system-ui`, and `sans-serif`.
**Label/Mono Font:** Geist Mono is loaded for code-oriented surfaces, with Tailwind's default monospace stack as fallback.

**Character:** The typography is heavy, direct, and technical. It relies on weight, uppercase labels, tight tracking for large titles, and wide tracking for small labels.

### Hierarchy

- **Display** (900, `text-5xl` through `text-7xl`, `leading-[1.1]`): Hero headlines, project archive headings, and major page-level statements.
- **Headline** (900, `text-4xl` through `text-6xl`, tight tracking): Section headings such as "The Tech Stack", "Featured Creations", and "Let's Connect".
- **Title** (700, `text-xl` through `text-2xl`, tight): Card titles, form headings, sidebar headings, and project names inside cards.
- **Body** (500, `text-sm` through `text-xl`, relaxed): Descriptions, project summaries, experience details, and contact helper copy. Keep long text at comfortable max widths around `max-w-2xl`.
- **Label** (700, `text-xs` or `text-sm`, uppercase, `tracking-[0.3em]` to `tracking-[0.5em]`): Section tags, form labels, chips, badge text, and CTA labels.
- **Code** (400, `text-xs` through `text-base`, relaxed): Hero code-card content, with slate line numbers and red syntax highlights.

### Named Rules

**The Heavy Headline Rule.** Portfolio headlines should be bold enough to feel engineered. Avoid thin display weights.

**The Label Discipline Rule.** Wide-tracked uppercase labels are a signature pattern. Use them for orientation and metadata, not for long body copy.

**The Code Surface Rule.** Monospace belongs in explicit code-console contexts. Do not turn the whole portfolio into a terminal theme.

## Elevation

Depth is created through a hybrid of translucent surfaces, soft borders, blur, red glow, and Tailwind shadows. Cards usually sit at rest with `shadow-xl` or `shadow-2xl`, then earn extra red shadow or border intensity on hover.

### Shadow Vocabulary

- **Ambient Panel Shadow** (`shadow-xl`, `shadow-2xl`): Default card and form depth against the dark background.
- **Red Action Glow** (`0 0 20px rgba(239,68,68,0.3)`): Primary CTA glow and important red call-to-action treatments.
- **Red Icon Glow** (`0 0 15px rgba(239,68,68,0.5)`): Section icons, timeline symbols, and small status dots.
- **Image Frame Glow** (`0 0 50px rgba(239,68,68,0.15)`): Profile and media frame emphasis.
- **Mouse Spotlight** (`radial-gradient(600px circle at pointer, rgba(239,68,68,0.1), transparent 40%)`): Project card hover atmosphere.

### Named Rules

**The Glass First Rule.** Most panels should use transparent white fills, white alpha borders, and blur before reaching for solid fills.

**The Hover Earns Glow Rule.** Strong red shadow is a state response. At rest, surfaces should stay quiet enough for the content to lead.

## Components

### Buttons

- **Shape:** Large rounded rectangles, usually `rounded-2xl` for CTAs and `rounded-xl` for project-card buttons.
- **Primary:** Red gradient from `signal-red` to deep wine, white text, bold uppercase label, icon aligned inline, and a subtle red glow.
- **Hover / Focus:** Scale to about `1.05` for major CTAs or `1.02` for form submission, reveal a white overlay sweep or deepen the red fill, and preserve visible focus states.
- **Secondary / Ghost:** `white/5` translucent backgrounds, `white/10` borders, white text, and red border or icon movement on hover.
- **Disabled:** Lower opacity and remove interactive glow. Current disabled project buttons use very dark slate text and should remain visibly inactive.

### Chips

- **Style:** Compact rounded badges with `white/5` background, `white/10` border, `slate-400` text, bold small typography, and uppercase tracking.
- **State:** Hover shifts to red-tinted background, red border, and red or white text. The `+N` project tag expander stays red and compact.

### Cards / Containers

- **Corner Style:** Content cards use `rounded-2xl` or `rounded-3xl`; profile outer frames may reach `rounded-[40px]`.
- **Background:** Use `#050505` with alpha or `white/[0.02]` surfaces over the global dark canvas.
- **Shadow Strategy:** Use `shadow-xl` or `shadow-2xl` at rest, then red shadow or spotlight effects on hover.
- **Border:** White alpha borders are the default. Red borders appear for hover, focus, section badges, or timeline anchors.
- **Internal Padding:** Cards commonly use `p-6`, `p-8`, or `lg:p-10`; hero and project detail panels can use `lg:p-16`.

### Inputs / Fields

- **Style:** `white/5` fill, `white/10` border, `rounded-2xl`, `px-5 py-4`, white text, slate placeholder.
- **Focus:** Border shifts to `red-500/50`, background strengthens to `white/10`, and the associated label turns red.
- **Error / Disabled:** Errors use red text near the field. Loading submit state replaces the label with a spinner inside the same button footprint.

### Navigation

- **Desktop:** Sticky top nav, transparent at rest, then `#050505/80`, `backdrop-blur-xl`, and a `white/10` bottom border after scroll. Links are slate by default, white on hover, and red when active. Desktop links use a red gradient underline that expands from zero width.
- **Mobile:** Icon button toggles a full-width dropdown with `#050505/95`, `backdrop-blur-2xl`, white alpha border, and stacked large links.
- **Logo:** The logo image anchors the nav and scales from 60px to 50px when scrolled.

### Signature Components

- **Hero Code Card:** A dark rounded console panel with a small window-control header, mono code lines, red syntax highlights, tilt interaction, glare, and delayed entrance animation.
- **Project Card:** Image or video media at the top, black gradient overlay, hover media scale, mouse-tracked red spotlight, glass body, tag chips, and paired action buttons.
- **Timeline Item:** Alternating layout around a central red vertical line, red bordered icon dot, date badge, and hover-glow content card.
- **Skill Marquee Item:** Horizontal moving skill pills with white-alpha glass, technology icon color, uppercase title, tiny "Technology" label, and icon glow on hover.
- **Contact Info Card:** Icon tile tinted by contact type, label and value stack, white-alpha surface, and colored blur glow on hover.

## Do's and Don'ts

### Do:

- **Do** keep the site dark, red-led, and technical. New routes should feel like they belong to the same "Ember Console" system.
- **Do** use `#050505`, red-500/red-600/red-900 gradients, slate support text, and white-alpha glass surfaces as the default material set.
- **Do** use large section padding (`py-24`, `lg:py-48`) for homepage sections and narrower `py-12` to `py-24` for detail pages.
- **Do** pair every major heading with either a small uppercase red label, a section badge, or a red-accent icon.
- **Do** keep icons from Lucide or React Icons visually consistent in size, stroke, and red/white treatment.
- **Do** preserve responsive grids: single column on mobile, two columns on large hero/about/contact sections, three columns for project cards on desktop.
- **Do** use motion to support reveal, focus, hover, or scroll progression. Prefer transform and opacity changes.
- **Do** keep forms explicit: visible labels, clear red focus state, inline email error, and loading feedback.

### Don't:

- **Don't** introduce a new dominant color family. Purple gradients, teal glows, beige neutrals, or gold accents will break the current identity.
- **Don't** use plain white backgrounds for new sections inside this portfolio.
- **Don't** create flat unbordered cards. Cards need alpha surface, border, blur, shadow, or media framing to match the current material system.
- **Don't** use side-stripe borders as a new pattern. The current vertical red accents exist only as thin decorative bars inside glass containers.
- **Don't** overuse gradient-clipped text outside established hero and section-title emphasis spans.
- **Don't** replace real project media or profile imagery with placeholder blocks unless there is no asset available.
- **Don't** remove hover/focus feedback from links, buttons, cards, form fields, or carousel controls.
- **Don't** add long all-caps paragraphs. All-caps is for labels, badges, chips, and CTAs only.
- **Don't** make motion depend on layout properties. Use opacity, translate, scale, and transform-based animations.
