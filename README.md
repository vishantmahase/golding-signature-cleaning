This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Careers applications

Use a Next.js deployment with Node.js route support. Add these variables to the hosting project and redeploy:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Sending key restricted to the verified Resend domain |
| `CAREERS_FROM_EMAIL` | Sender on that domain, such as `Golding Signature Cleaning <careers@thegoldingagency.com>` |
| `TURNSTILE_SITE_KEY` | Cloudflare Turnstile managed widget site key |
| `TURNSTILE_SECRET_KEY` | Secret for the same widget |

Verify the sending domain in Resend and allow only the deployment hostnames in the Turnstile widget settings. Keep API and secret keys out of Git. The form is unavailable while any of the settings are missing.

Before accepting applications, submit a fictional application with a small sample PDF from the deployed Careers page. Confirm the same PDF opens in both hiring inboxes and review delivery status in Resend. Confirm access to both mailboxes is limited to hiring staff and agree on a retention period for applications and attachments.
