FROM node:14.17.6
WORKDIR /src

COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
RUN npm install
RUN npm link typescript
COPY . .
EXPOSE 8000

CMD npm run dev