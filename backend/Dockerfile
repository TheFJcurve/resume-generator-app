FROM --platform=linux/amd64 node:20.9.0-alpine3.18

RUN apk add texlive-full

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY --chown=app:node package*.json .
RUN npm install
COPY --chown=app:node . .

EXPOSE 4000
ENTRYPOINT ["npm", "run", "dev"]