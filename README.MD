**Serve frontend**
docker build . -t front
docker run -p 49160:8080 -d front
http://172.17.0.2:3000/
