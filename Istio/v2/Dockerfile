FROM node:10.5-slim
EXPOSE 8080
COPY server.js .
COPY package.json .
RUN npm --registry http://60.191.68.46:7001 i
CMD ["node", "server.js"]
