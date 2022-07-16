---
title: Purge Cache with Git Hooks
date: 2019-10-21T20:55:00+07:00
hero: images.unsplash.com/photo-1604417429445-2ef33ea36574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80
excerpt: The simply way to purge Cloudflare caches every code has changed
categories:
- tech
tags:
- how-to
- cloud
- tech
- git
- cloudflare
- cloudflare-cache
authors:
- Muhamad Fajar

---
In the last post about [deploying Now with Cloudflare](https://www.muhfajar.blog/post/2019/10/deploying-now-with-cloudflare/), I have been describing in general how to deploy a project using Now and how to integrate with [Cloudflare](https://www.cloudflare.com/). After success deploying, if you set Cloudflare cache to make your website faster I guess you will face issues related to a cache.

First, if you push or make changes, your website does not instantly follow the changes. From my experience that is because of cache! So to handle this case we need to purge every time we make a change and Git has a handy feature to make it automatically, which call hooks.

> Git hooks are scripts that Git executes before or after events such as: commit, push, and receive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.[\[1\]](https://githooks.com/)

To use this feature you only need to create a shell script and make it executable then put it in the hooks directory in .git on a project root. So that will be like this:

```shell
cd my_project/.git/hooks
touch pre-commit
chmod +x pre-commit
```

Inside file `pre-commit`, we can add shell script to call Cloudflare API like this:

{{< gist muhfajar 2827adc296f5afb23c0f15b9835f881a >}}

As you can see, we have separated the config file, to make the script work, we also need to create a configuration file in the user directory.

```shell
cd ~
touch .cloudflare_config_muhfajar.blog
```

And add detail about the Cloudflare configuration

```text
CF_API_KEY=some-api-key-from-cloudflare
CF_EMAIL=your.email.registered.in.cloudflare@foo.com
CF_ID=cloudflare-zone-id
```

To generate an API key in Cloudflare, please refer to this [link](https://developers.cloudflare.com/api/tokens/create). After all is complete, now you can deploy and also tell Cloudflare to purge your cache, so your web visitor always gets the latest data.
