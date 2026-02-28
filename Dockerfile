# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Set default env var for availability badge (can be overridden via --build-arg)
ARG PUBLIC_AVAILABLE_FOR_OPPORTUNITIES=false
ENV PUBLIC_AVAILABLE_FOR_OPPORTUNITIES=$PUBLIC_AVAILABLE_FOR_OPPORTUNITIES

# Build the static site
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine AS production

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 8081


CMD ["nginx", "-g", "daemon off;"]
