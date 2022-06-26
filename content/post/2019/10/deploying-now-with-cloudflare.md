---
title: Deploying Now with Cloudflare
date: 2019-10-14T08:43:00+07:00
hero: https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80
excerpt: First I thought about Now is magic, with only a small configuration, I can
  deploy a static website easily
categories:
- tech
tags:
- cloud
- tech
- cloudflare
- vercel
- now
- deployment
authors:
- Muhamad Fajar

---
I've been playing around with [Now](https://vercel.com/) deployment for a few months. First I thought about Now is magic, with only a small configuration (in v2) I can deploy a static website easily, now I can deploy (with default template) any static website without any configuration. That's amazing.

## How to Deploy

First thing, you need a Vercel account, of course. Next, if you use one of the templates from this [list](https://github.com/zeit/now/tree/master/examples), congratulation, you only need to execute `now` from the project root, something like this.

```bash
cd my_project
now
```

That's it. For the rest let Now do the work.

After your project has been deployed, you will be provided with a link to the Preview Deployment, this can be shared **immediately**.

## How to Use Cloudflare with Now

Vercel has internal domain management, so you can directly buy domains inside the Vercel dashboard. But if you want to set up a domain setting using [Cloudflare](https://www.cloudflare.com/) so you can set cache or other, this is also simple. You just need to register some DNS and encryption settings.

### Add DNS Records

To connect Cloudflare with Vercel, you need to add `CNAME` a record with an alias of `alias.zeit.co` so its traffic is proxied through Cloudflare. Next, register the domain to the Vercel account using

```bash
now domains add your-domain-name.com
```

when adding the domain success, you will get a verification code for further to fill `TXT` record with name `_now`.

After all, records have been created, you need to verify the domain using

```bash
now domains verify your-domain-name.com
```

### Make HTTPS Works

To make HTTPS works you need to change Cloudflare’s encryption mode to **Full (strict)** and then create page rules to make Enforce HTTPS for this domain:

1. Go to page "Create Page Rule"
2. Add new page rules with a configuration like this:  
   URL: **http://_your-domain-name.com/_**  
   The settings are: **Always Use HTTPS**
3. Save and Deploy

## Make Deploy Automatically

If your project source code is hosted on [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) or [Bitbucket](https://bitbucket.org/product/), Vercel has tools to integrate with deployment, so when you push code to the specific branch, Vercel will automatically detect changes and make a deployment. For more information, jump up to [Vercel documentation](https://vercel.com/docs/v2/git-integrations).

End of the word, yes, I'm using Now in my [website landing](https://www.muhfajar.id/ "GitHub"). Next: [Purge Cache with Git Hooks](https://www.muhfajar.blog/post/2019/10/purge-cache-with-git-hooks/).

---

> This post has been updated with the latest update from Vercel (formerly ZEIT)
