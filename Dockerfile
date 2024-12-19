FROM node:22.12-alpine3.20 AS dist
COPY package.json yarn.lock ./
RUN yarn \
    && yarn cache clean
COPY . ./
RUN yarn run build

FROM node:22.12-alpine3.20 AS node_modules
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

FROM node:22.12-alpine3.20
RUN apk add --no-cache ca-certificates font-ipa font-noto font-noto-cjk freetype harfbuzz nss ttf-freefont scs-cache -fv \
  && yarn global add pm2 \
  && addgroup -g 1410 scs-user \
  && adduser -D -u 1410 scs-user -G scs-user \
  && chown -R scs-user:scs-user /home/scs-user

WORKDIR /app
COPY --chown=scs-user:scs-user --from=dist dist /app/dist
COPY --chown=scs-user:scs-user --from=node_modules node_modules /app/node_modules
COPY --chown=scs-user:scs-user . /app

EXPOSE 3000
USER scs-user
ENTRYPOINT ["pm2-runtime", "ecosystem.config.js"]
