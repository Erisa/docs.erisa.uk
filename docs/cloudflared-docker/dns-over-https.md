---
sidebar_position: 4
title: DNS over HTTPS
---

While not the original intent behind the image, you can also use this to host a DNS resolver that speaks to a DNS-over-HTTPS backend.  

For example:
```
docker run -d --restart=always -p 53:53/udp --name dns-server erisamoe/cloudflared proxy-dns
```
Would create a container called `my-dns-forwarder` that responds to DNS requests on your host.

Keep in mind when using this on a public server (e.g. VPS) it will by default listen on all interfaces, making you a public DNS resolver on the internet.  

You can sidestep this by changing the `-p` to instead be `-p 127.0.0.01:53:53/udp` to listen on localhost instead.

You can also add upstreams with `--upstream https://dns.example.com` for example.  
By default, Cloudflare DNS is used.

