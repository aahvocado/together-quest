FROM node:carbon

RUN mkdir -p /docker_dir/together-server
WORKDIR /docker_dir/together-server
COPY . /docker_dir/together-server

RUN npm install

COPY . .

EXPOSE 1111

CMD ["npm", "run", "server"]
