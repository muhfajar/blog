---
title: 'Cloudflare R2: The New S3 Alternative'
date: 2022-06-26T22:47:00.000+00:00
hero: https://images.unsplash.com/photo-1565026103954-b4ffec207a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80
excerpt: The new alternative for object storage service, compatible with Amazon S3
categories:
- journal
tags:
- cloudflare
- journal
- object-storage
- cdn
- cloudflare-worker
- cloudflare-r2
- amazon-s3
authors:
- Muhamad Fajar
draft: true

---
I love Cloudflare, it has many features that I need, like [caching](https://www.muhfajar.blog/post/2019/10/clearing-cache-using-git-hook/ "Purge Cache with Git Hooks"), routing, serving the static page, etc etc, and the best is all of those features that came with the free tier!

From all features that I love, now Cloudflare has a new object storage service, called R2 which stands for "[Really Requestable](https://blog.cloudflare.com/introducing-r2-object-storage/ "Announcing Cloudflare R2")" (currently still in the public beta stage). When I see the R2 menu in the Cloudflare dashboard, the first I thought was, _is it good and worth trying? Am I really need to migrate my storage and save $5 every month?_

To be clear, I have a similar service for serving static assets for my project, that lives in [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces "DigitalOcean Spaces"), which has a monthly cost of about $5 and the R2 is free for the first 10GB every month, then since my storage in DigitalOcean no more than 10GB, switching could be easy and good to go I guess.

Both of them have a similar feature that S3-compatible object storage, my project code could just change the base URL and some credentials regarding the new service. After some research (because the R2 is still in the Beta stage) the major difference from DigitalOcean Space is that R2 need to manually create the service to make the file exposed in public. The service itself is using [Cloudflare Worker](https://developers.cloudflare.com/r2/get-started/#5-access-your-r2-bucket-from-your-worker "Cloudflare Worker").

<cite>Comparison Storage Cost [^1]</cite>

[^1]: Data I took from the official page of each provider.

| Provider | Storage Cost for 250GB | Pros | Cons |
| --- | --- | --- | --- |
| Cloudflare R2 | $0.015 / GB = $3.75 per month | Free for 10 GB / month | Need to create worker to serve public (Beta) |
| Amazon S3 (Jakarta) | $0.025 / GB = $6.25 per month | Free for 5 GB / month | It has a complex pricing schema |
| DigitalOcean Spaces | $5 per month | Flat pricing, montly price include 1TB outbound transfer | Usage less than 250GB could be more pricy |