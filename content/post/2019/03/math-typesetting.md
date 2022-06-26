---
title: Math Typesetting
date: 2019-03-08
hero: https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80
excerpt: A brief guide to setup KaTeX
categories:
- development
tags:
- development
- hugo
- how-to
authors:
- Hugo Authors

---
Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
<!--more-->

In this example we will be using [KaTeX](https://katex.org/)

- Create a partial under `/layouts/partials/math.html`
- Within this partial reference the [Auto-render Extension](https://katex.org/docs/autorender.html) or host these scripts locally.
- Include the partial in your templates like so:

```html
{{ if or .Params.math .Site.Params.math }}
    {{ partial "math.html" . }}
{{ end }}
```
- To enable KaTex globally set the parameter `math` to `true` in a project's configuration
- To enable KaTex on a per page basis include the parameter `math: true` in content files.

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

### Examples

```text
Inline math: $$ \varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887… $$
```

Block math:

```text
$$
    \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```
