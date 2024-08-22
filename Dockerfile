FROM node:18

# 작업 디렉토리를 설정합니다.
WORKDIR /usr/src/app

ENV PORT=3000

# 종속성 파일을 복사합니다.
COPY package*.json ./

COPY ./.env.local ./

# 종속성을 설치합니다.
RUN npm ci

# 애플리케이션 코드를 복사합니다.
COPY . .

# 애플리케이션을 빌드합니다.
RUN npm run build

EXPOSE $PORT

# 애플리케이션을 실행합니다.
CMD ["npm", "start"]