---
sidebar_position: 3
title: Named tunnels
---

 Setting up a named tunnel is a little more complex than [legacy tunnels](/cloudflared-docker/quick-start) but they are more reliable and recommended for production workflows.

For general information about creating and maintaining a named tunnel, see the [official documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/create-tunnel), everything here is specific to this image.

**This page is still being written. It exists to give you a taster of what should be here in the future.**  

Please check it out later.

<!--
It is recommended to read the quick-start on [legacy tunnels](/cloudflared-docker/quick-start) before tackling this topic.

## Single origin setup

If your tunnel only has a single origin, the setup is a little easier and more similar to [legacy tunnels](/cloudflared-docker/quick-start), especially later in the process.

First, we need to make a tunnel:

If you have `cloudflared` setup locally, you can do it there:
```bash
cloudflared tunnel create mytunnel
```

Or if you don't, we can use the image.

If you haven't already, first authorize a zone:
```bash
docker run -v $PWD/cloudflared:/.cloudflared erisamoe/cloudflared login
```
Then create the tunnel:
```bash
erisa@demo:~/named$ docker run -v $PWD/cloudflared:/etc/cloudflared erisamoe/cloudflared tunnel create mytunnel
Tunnel credentials written to /etc/cloudflared/d2089a23-b322-4848-8781-661ed0af890b.json. cloudflared chose this file based on where your origin certificate was found. Keep this file secret. To revoke these credentials, delete the tunnel.

Created tunnel mytunnel with id d2089a23-b322-4848-8781-661ed0af890b
```
From the output, take note of the ID (Above is `d2089a23-b322-4848-8781-661ed0af890b`) and the json file created.  
If you created the tunnel locally, copy/transfer the json file to the appropriate server and folder that's hosting the tunnel.

Using nginx as an example, we would create something like:
```yaml {11} title=docker-compose.yml
version: "2"

services:
  nginx:
    image: nginx:alpine

  cloudflared:
      image: erisamoe/cloudflared
      volumes:
        - ./cloudflared:/etc/cloudflared
      command: --hostname nginx.example.com --url http://nginx:80 --name mytunnel
      depends_on:
        - nginx
```
Compared to before, the only main difference is the `--name mytunnel`, which will use the json file for  -->