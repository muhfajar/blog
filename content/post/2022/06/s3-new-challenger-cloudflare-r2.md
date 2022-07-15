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
I love Cloudflare, not because it's free, but because it has many features that I need, like caching, routing, serving the static page, object storage, etc etc.

| Provider | Storage Cost for 250GB | Pros |
| --- | --- | --- |
| Cloudflare R2 | $0.015 / GB = $3.75 per month | Free for 10 GB / month |
| Amazon S3 (Jakarta) | $0.025 / GB = $6.25 per month | Multiple region |
| DigitalOcean Spaces | $5 per month | Flat pricing |