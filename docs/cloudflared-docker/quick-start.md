---
sidebar_position: 2
title: Quick start (Legacy tunnels)
---

For this "Quick start" we will be using Legacy tunnels since they are easier to setup. For a longerm solution you should consider [named tunnels](/cloudflared-docker/named-tunnels)

## Hello World

First of all, a basic example of the "Hello World" server can be seen with simply:
```bash
docker run erisamoe/cloudflared --hello-world
```
Which opens the "Hello world" demo on a generated URL  
(For example `https://webcast-remembered-hydrocodone-looked.trycloudflare.com`)

![](/img/cfd/hello-world.png)

## Custom hostname with cert.pem

To acquire a certificate, you'll need to use the `login` command.  
This will spit out `/.cloudflared/cert.pem` relative to the container:

As such, usage would be something like:  
```bash
docker run -v $PWD/cloudflared:/.cloudflared erisamoe/cloudflared login
```
to create a folder called `cloudflared` in your current dir and deposit a `cert.pem` into it:
![](/img/cfd/cert.png)  

And now you can start a tunnel with your domain:  
```bash
docker run -v $PWD/cloudflared:/etc/cloudflared erisamoe/cloudflared --hostname test.example.com --hello-world
```
Which will start up a "Hello world" test tunnel on `https://test.example.com`:

![](/img/cfd/cert-test.png)

## Docker Compose

Now it all comes together. Assuming you have a service already running inside Docker, you can quickly expose it.

For this example, we will use an `nginx` container.  
The configuration would look like this:
```yaml {7-14} title=docker-compose.yml
version: "2"

services:
  nginx:
    image: nginx:alpine

  cloudflared:
      image: erisamoe/cloudflared
      volumes:
        - ./cloudflared:/etc/cloudflared
      command: --hostname nginx.example.com --url http://nginx:80
      depends_on:
        - nginx
```
Which should work with a simple `docker-compose up` or equivalent:

![](/img/cfd/compose.png)

From here, you can integrate with your own Docker Compose service! 🚀

For a more advanced setup, proceed to the next page to check out named tunnels.