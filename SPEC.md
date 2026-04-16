# SPEC.md — Portfolio Pessoal Profissional

## 1. Project Overview

**Project Name:** Mayco Aoki — Professional Portfolio  
**Type:** Single-page application with multi-route navigation  
**Core Functionality:** Personal portfolio showcasing professional experience, projects, and mentorship services  
**Target Audience:** Recruiters, potential clients, and collaborators in the software engineering space

---

## 2. Technical Stack

| Layer | Technology |
|-------|----------|
| Styling | Tailwind CSS v3 (CDN) |
| Fonts | Google Fonts: Newsreader (Serif), Manrope (Sans), Material Symbols Outlined |
| Markup | HTML5 (vanilla, no framework) |
| Deployment-ready | Static files — no build step required |

---

## 3. Design System: "The Digital Curator"

### Creative Direction
Rejecting noisy, component-heavy aesthetics in favor of an **editorial, gallery-space experience**. Treat digital content with the same reverence as a physical art exhibition or premium fashion lookbook.

### Core Principles
- **Architectural Breathing Room:** Whitespace groups elements — never use lines.
- **Typographic Tension:** Pair the intellectual weight of a serif (Newsreader) with functional clarity of a sans-serif (Manrope).
- **Tonal Depth:** Establish hierarchy through subtle shifts in surface luminosity — never drop shadows.

---

## 4. Color Palette

### Monochrome Spectrum (CSS Custom Properties)

| Token | Hex | Usage |
|-------|-----|-------|
| `surface` | `#f9f9f9` | Base canvas |
| `surface-container-low` | `#f2f4f4` | Secondary backgrounds |
| `surface-container` | `#ebeeef` | Tertiary sections |
| `surface-container-highest` | `#dde4e5` | Cards / chips |
| `on-surface` | `#2d3435` | Primary text |
| `on-surface-variant` | `#5a6061` | Secondary text |
| `primary` | `#5f5e5e` | CTAs, accents |
| `primary-dim` | `#535252` | Hover states |
| `outline-variant` | `#adb3b4` | Borders (15–40% opacity only) |

**Rule:** No 1px solid borders for sectioning. Use background color shifts instead.

---

## 5. Typography

### Type Scale

| Token | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| `display-lg` | Newsreader | clamp(3.5rem, 10vw, 7rem) | 300–500 | Hero headlines |
| `headline-md` | Newsreader | 2–3rem | 400–500 | Section titles |
| `body-lg` | Manrope | 1rem | 400 | Primary reading |
| `label-md` | Manrope | 0.75rem (12px) | 500–700 | Metadata, buttons, nav |
| `label-sm` | Manrope | 0.625rem (10px) | 500–700 | Tags, small labels |

### Type Pairing
- **The Narrative Voice:** Newsreader (Serif) — headlines, quotes, storytelling.
- **The Functional Voice:** Manrope (Sans) — navigation, metadata, body copy.

---

## 6. UI Components

### Navigation
- **Desktop:** Fixed top bar, horizontal links, backdrop blur (40px).
- **Mobile:** Fixed bottom bar, 4-icon navigation (Home, Projects, Experience, Contact).

### Buttons
- **Primary:** Solid `#5f5e5e` background, `#faf7f6` text, 0px radius.
- **Secondary:** No background, `outline-variant/20` border (1px).
- **Hover:** Transition to `primary-dim`.

### Cards / Projects
- No dividers between project items.
- Asymmetric layout: alternating left/right placement.
- Grayscale images that reveal color on hover (`grayscale → full` transition, 700ms).

### Input Fields
- Bottom border only (1px, `outline-variant/40`).
- Label positioned 8px above input line.
- No 4-sided box.

### Chips / Tags
- `surface-container-highest` background.
- No borders, 0px radius.

---

## 7. Page Structure

### 7.1 Home (`/`)
**Route:** `/` or `index.html`

Sections:
1. **Hero:** Name (Mayco Aoki), title (Full Stack Software Engineer / Backend Specialist), location (Curitiba – PR).
2. **Intro & CTA:** Value proposition, two-action button group.
3. **Stack Highlights:** Bento grid with tech categories (Backend, Frontend, Architecture, DevOps).
4. **Portfolio Teaser:** 2 asymmetric projects, full-width imagery, "Details" link.
5. **Footer:** Brand, copyright, social links (GitHub, LinkedIn, Source).

### 7.2 Sobre (`/sobre`)
**Route:** `sobre.html`

Sections:
1. **Hero:** Portrait image (aspect 4/5), name, role.
2. **Biografia:** Two-paragraph bio.
3. **Competências Técnicas:** Bento grid (Backend, Frontend, Arquitetura, Infra/DevOps).
4. **Formação Acadêmica:** UFAM (2011–2019), Engenharia de Software.
5. **CTA:** "Vamos construir algo excepcional juntos" — contact link.

### 7.3 Experiência (`/experiencia`)
**Route:** `experiencia.html`

Sections:
1. **Hero:** Title, "Disponível para novos desafios" status.
2. **Timeline:** Vertical timeline with:
   - Revista Exato (Fev 2025 – Abr 2026) — Liderança Técnica
   - Revenda Mais (Abr 2024 – Set 2024)
   - Codesign (Mai 2022 – Dez 2023)
   - Econet Editora (Mai 2021 – Abr 2022)
3. **Experiências Anteriores:** Compact grid (WebControl, Tuxon, Bomja, NEXTEM).
4. **Quote:** Decorative pull quote from Mayco Aoki.

### 7.4 Projetos (`/projetos`)
**Route:** `projetos.html`

Sections:
1. **Hero:** "Selected Engineering Practices" headline.
2. **Project Grid:** Asymmetric layout with 4 entries:
   - `payment-commerce-platform` (Java, Spring Boot 3, Stripe API)
   - `order-processing-platform` (Microservices, Kafka, Go)
   - `saas-billing-platform` (PHP, Laravel, MySQL)
   - `api-marketplace` (TypeScript, Node.js, PostgreSQL)
3. **CTA:** "Looking for collaboration?" inquiry section.

### 7.5 Mentoria (`/mentoria`)
**Route:** `mentoria.html`

Sections:
1. **Hero:** Mentorship positioning with tagline.
2. **Visual:** Full-width hero image.
3. **The Problem:** "O Problema do Contexto Efêmero" — explainer.
4. **The Solution:** Memory Architecture — 4 pillars:
   - Product Memory
   - Engineering Memory
   - Decision Memory
   - Domain Memory
5. **Workflow:** Context Engineering workflow diagram.
6. **CTA:** "Transforme seu processo de engenharia" — dual buttons.

### 7.6 Contato (`/contato`)
**Route:** `contato.html`

Sections:
1. **Hero:** "Vamos Conversar" headline.
2. **Information Panel:** Email, telefone, localização (Curitiba – PR), social links.
3. **Form Panel:** Underlined inputs (Nome, E-mail, Mensagem), submit button.

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 640px | Single column, bottom nav, stacked grids |
| Tablet | 640px – 1024px | Adapted grids |
| Desktop | > 1024px | Full 12-column grid, top nav |

---

## 9. Animations & Transitions

| Property | Duration | Easing |
|----------|----------|--------|
| Color (hover) | 300ms | ease-in-out |
| Grayscale reveal | 700ms | ease-out |
| Scale (buttons) | 200ms | ease-out |
| Backdrop blur | — | — |

---

## 10. Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## 11. Deployment Notes

- All routes are static `.html` files.
- No server-side rendering required.
- Can be served from any static host (Vercel, Netlify, GitHub Pages, S3, etc.).
- Assets (images) are hosted on Google Cloud Storage (lh3.googleusercontent.com).

---

## 12. Acceptance Criteria

- [ ] All 6 pages render without JavaScript errors.
- [ ] Mobile bottom navigation appears below 1024px.
- [ ] All font families load correctly (Newsreader, Manrope, Material Symbols).
- [ ] Color palette matches hex values defined in Design System.
- [ ] Border radius is 0px everywhere (no rounded corners).
- [ ] Grayscale → color hover works on project images.
- [ ] Navigation links resolve to correct page files.
- [ ] Form inputs have bottom-border-only styling.
- [ ] Backdrop blur works on top navigation.
- [ ] Responsive grids adapt at mobile/tablet/desktop breakpoints.