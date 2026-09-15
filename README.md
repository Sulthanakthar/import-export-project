# Global Harvest Exports — Premium B2B Website

Professional Next.js website for an India-based rice, dal and pulses import/export business, upgraded with a premium animated testimonial experience.

## Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 3
- shadcn-compatible project structure
- Framer Motion
- Lucide React
- Custom CSS 3D / motion effects
- Local 4K cinematic MP4 background

## Important project paths
- App routes/pages: `app/`
- Global styles: `app/globals.css`
- Reusable components: `components/`
- shadcn-style reusable UI: `components/ui/`
- Utilities: `lib/`
- Static assets: `public/`
- 4K testimonial video: `public/videos/global-harvest-4k.mp4`
- shadcn configuration: `components.json`

`components/ui` is intentionally kept separate because shadcn CLI components default to this location. Keeping reusable UI primitives there makes imports predictable (`@/components/ui/...`) and prevents generated shadcn components from being mixed with page-specific business components.

## New testimonial component

Main component:

```text
components/ui/testimonials.tsx
```

Standalone usage example:

```text
components/ui/testimonials-demo.tsx
```

The component supports:
- Responsive 1 / 2 / 3-column layouts
- Framer Motion staggered reveal
- Pointer-reactive 3D tilt
- Perspective/depth layers
- Cinematic image overlays
- Glassmorphism badges
- Optional market/company metadata
- Optional 4K background video
- Demo-content disclaimer
- Lazy-loaded testimonial images
- Reduced-motion support inherited from the global stylesheet

## Install dependencies

```bash
npm install
```

The package already declares:

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

## Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Fresh shadcn setup (only if copying the component into another project)

For a fresh Next.js TypeScript project:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
npx shadcn@latest init
npm install framer-motion lucide-react
```

During shadcn initialization, keep or configure these aliases:

```text
components -> @/components
ui         -> @/components/ui
utils      -> @/lib/utils
css        -> app/globals.css
```

If `components/ui` does not exist, create it:

```bash
mkdir -p components/ui
```

Then copy `testimonials.tsx` into that folder. This location matters because it matches shadcn's standard UI alias and keeps generated/imported UI components consistent across the project.

## Testimonial API

Required props:
- `title: string`
- `subtitle: string`
- `testimonials: Testimonial[]`

Optional props:
- `eyebrow?: string`
- `disclaimer?: string`
- `backgroundVideoSrc?: string`

Each testimonial requires:
- `id`
- `quote`
- `name`
- `role`
- `imageSrc`

Optional testimonial fields:
- `company`
- `market`

The component holds no business-data state. Motion values are used only for pointer-driven 3D tilt and spring animation.

## Before client launch
1. Replace placeholder WhatsApp number `91XXXXXXXXXX`.
2. Confirm the final business email/domain.
3. Connect the quote form to Resend, Formspree, EmailJS, a custom API route, or CRM.
4. Add real product photography with usage rights.
5. Replace all demo testimonial names, companies, quotes and photos with verified client testimonials.
6. Add verified certifications only after the client provides them.
7. Add full address / Google Maps embed when the office or warehouse address is confirmed.
8. Add privacy policy, terms and cookie handling if required.
9. Configure the production domain in Vercel.
10. Consider supplying WebM/AV1 versions of the 4K background for additional bandwidth optimization.
