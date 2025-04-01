# Build stage
FROM node:latest AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Final stage
FROM node:latest

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Install serve globally
RUN npm install -g serve

# Serve the dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]

