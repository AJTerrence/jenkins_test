FROM node

WORKDIR /home/test

EXPOSE 3002

CMD ["npm","run","start"]
