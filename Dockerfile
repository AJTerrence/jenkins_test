FROM node

RUN mkdir -p /apps/jenkins_test

WORKDIR /apps/jenkins_test

COPY . /apps/jenkins_test

RUN npm install

EXPOSE 3002

CMD ["npm","run","start"]