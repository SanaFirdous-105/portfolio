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

## EmailJS Setup

This project uses EmailJS to make the Contact Form fully functional, forwarding submissions directly to your Gmail inbox. Follow these steps to connect your portfolio:

### 1. Create an EmailJS Account
1. Head over to [emailjs.com](https://www.emailjs.com/) and sign up for a free account.
2. Once logged in, you will be taken to your Dashboard.

### 2. Connect Your Gmail Service
1. In the EmailJS dashboard, click on **Email Services** on the left menu.
2. Click **Add New Service** and select **Gmail**.
3. Authenticate with your Gmail account and grant permission for EmailJS to send emails.
4. Note your **Service ID** (e.g. `service_xxxxxx`).

### 3. Create the Email Template
1. Click on **Email Templates** on the left menu.
2. Click **Create New Template**.
3. Configure the Subject (e.g. `New Portfolio Message from {{from_name}}`).
4. In the **Content** section, edit the body to include the parameters configured in the React code:
   ```text
   You received a new message from your portfolio:

   Name: {{from_name}}
   Email: {{from_email}}
   Date & Time: {{date_time}}

   Message:
   {{message}}
   ```
5. Click **Save** in the top right.
6. Note the **Template ID** (e.g. `template_xxxxxx`).

### 4. Copy Your Public Key
1. Click on **Account** (or **Integration** / **API keys**) in the left sidebar menu.
2. In the **API Keys** section, copy the **Public Key** (e.g. `user_xxxxxx` or a random string).

### 5. Add Credentials to Your Environment
1. In the root of your project directory, locate the `.env.local` file (already created for you).
2. Paste the copied keys:
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=paste_your_public_key_here
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=paste_your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=paste_your_template_id_here
   ```

### 6. Test Your Contact Form
1. Run the local development server: `npm run dev`
2. Navigate to the contact section at `http://localhost:3000/#contact`.
3. Fill out the name, email, and message, and click **Send Message**.
4. The button will change to a spinner and then display a success banner.
5. Check your Gmail inbox to verify receipt of the formatted message!

