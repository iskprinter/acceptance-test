FROM node:20-bookworm
RUN : \
  && apt-get update \
  && apt-get install -y \
    libasound2 \
    libgbm-dev \
    libgconf-2-4 \
    libgtk-3-0 \
    libgtk2.0-0 \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libxtst6 \
    xauth \
    xvfb

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
CMD ["node_modules/.bin/cypress", "run", "--config", "video=false"]
