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


# Build the Docker image
docker build -t security-clearance-tracker .

# Run the container with a specific name, mapping host port 8080 → container port 3000
docker run -d --name security-clearance-tracker -p 8080:3000 security-clearance-tracker

# If you need to remove the old container first:
docker rm -f security-clearance-tracker || true

# Now browse to:
#   http://localhost:8080
