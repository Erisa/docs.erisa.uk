---
sidebar_position: 1
slug: /cloudflared-docker/
title: Introduction to Cloudflared
---

## Summary

The image `erisamoe/cloudflared` is a multi-arch Docker image for running Cloudflare's [`cloudflared`](https://github.com/cloudflare/cloudflared) tool in a container environment.

## Architecture support
One of the main aims of this image is to support multiple architectures.  
The public image currently supports:

| Docker target  | Also known as | Notes                                                                                                         |
|----------------|---------------|---------------------------------------------------------------------------------------------------------------|
| `linux/amd64`  | `x86_64`      | Majority of modern PCs and servers.                                                                           |
| `linux/386`    | `x86`         | 32-bit Intel/AMD CPUs. Typically really old computer hardware. These images are **untested**.                 |
| `linux/arm64`  | `aarch64`     | 64-bit ARM hardware. For example Apple Silicon or Raspberry Pi 2/3/4 running a 64-bit OS.                     |
| `linux/arm/v7` | `armhf`       | 32-bit ARM hardware. For example most Raspberry Pi models running Raspberry Pi OS.                            |
| `linux/arm/v6` | `armel`       | Older 32-bit ARM hardware. Mostly Raspberry Pi 1/0/0W but there may be others. These images are **untested**. |
| `linux/s390x`  | `IBM Z`       | [Linux on IBM Z](https://en.wikipedia.org/wiki/Linux_on_IBM_Z) for IBM mainframes, most notably [IBM Cloud](https://www.ibm.com/uk-en/cloud). |

## How do I use this??
To learn how to use the image, select an article on the sidebar or click "Next" to be taken on a tour.