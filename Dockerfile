FROM node:14.17.6


WORKDIR /usr/app/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./app ./app

RUN npm install

CMD npm run dev