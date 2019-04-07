# ToDo List API

## Description
API server to host CRUD operations to mongodb.

## Usage
1. Start a mongo instance

```
# Run a mongodb instance on docker
docker run -d -p 27017:27017 mongo
```

2. Set your Mongo Host IP in server.js by updating the constant mongoHostIP.

3. Build the docker image and run it!

```
# Build image with tag <tagname>
docker build -t <tagname> .

# Run the docker container
docker run -d -p 3000:3000 <tagname>
```
