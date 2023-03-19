FROM node:14.17.6


WORKDIR /usr/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./ ./

RUN npm install

CMD npm run dev