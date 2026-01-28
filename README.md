# Placeholder

A minimal, customizable placeholder page for projects under development — with built-in newsletter subscription.

## Features

- Clean, responsive landing page
- Newsletter subscription form
- Success page with animated confirmation
- Easy to customize (logo, colors, content)
- Works with any newsletter backend (listmonk, Mailchimp, etc.)

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
bun install
```

### 2. Configure environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FORM_URL=https://your-newsletter-api.com/subscribe
NEXT_PUBLIC_FORM_ID=your_form_id
NEXT_PUBLIC_FORM_VALUE=your_list_id
NEXT_PUBLIC_TUTLE=your_title_not_required
```

### 3. Run the development server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

- **Logo**: Replace `app/components/AppLogo.tsx` with your own logo
- **Colors**: Edit the accent color `#46DE7F` in the components
- **Content**: Update text in `app/page.tsx` and `app/newsletter/page.tsx`

## Newsletter Backend

This template works with any API that accepts POST requests. I personally use [listmonk](https://listmonk.app/) — a free, self-hosted newsletter and mailing list manager.

## To know

Free to use, modify, and distribute.