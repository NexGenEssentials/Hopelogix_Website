FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
COPY .env .env
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder /app/app ./app
COPY --from=builder /app/i18n ./i18n
COPY --from=builder /app/messages ./messages
COPY --from=builder /app/.env .env
ENV NODE_ENV=production
EXPOSE 4028
CMD ["npm", "start"]
