FROM debian:9
WORKDIR /app
COPY server.js .
EXPOSE 80
CMD ["node", "server.js"]
