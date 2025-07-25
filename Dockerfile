FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source & build Next.js app
COPY . .
RUN npm run build

# 2️⃣ Runtime stage
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary artifacts
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Production mode
ENV NODE_ENV=production

# Expose Next.js default port
EXPOSE 3000

# Start Next.js on all network interfaces
CMD ["npx", "next", "start", "-p", "3000", "-H", "0.0.0.0"]