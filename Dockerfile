FROM node:hydrogen-slim
WORKDIR /app

COPY miniapp-frontend/package*.json ./miniapp-frontend/
RUN cd miniapp-frontend && npm install

COPY bot-backend/package*.json ./bot-backend/
RUN cd bot-backend && npm install

COPY miniapp-frontend/ ./miniapp-frontend/
RUN cd miniapp-frontend && npm run build

COPY bot-backend/ ./bot-backend/
RUN cd bot-backend && npm run build

EXPOSE 3000

WORKDIR /app/bot-backend

CMD npm run start:prod