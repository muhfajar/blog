---
title: Kisah .id dan .blog
date: 2020-05-16T07:13:00+07:00
hero: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80
excerpt: Ide dibalik pemisahan domain utama dan blog
categories:
- journal
tags:
- journal
- freebies
- template
authors:
- Muhamad Fajar

---
Mungkin untuk beberapa orang yang pernah mengunjungi situs web pribadi saya sebelumnya akan merasa pangling saat melihat tema dari halaman utamanya karena sebelumnya halaman utama situs web saya merupakan halaman indeks dari [CMS Hugo][hugo] saja. Karena pada awalnya niat saya hanya untuk membuat situs web pribadi sebagai halaman blog saja. Namun setelah saya melihat situs web pribadi dari [Cody Ogden][cody] (orang dibalik situs web [Killed by Google][graveyard]) saya tertarik untuk mengikuti apa yang dia lakukan untuk halaman blognya. Jika dilihat di situs web pribadi dia, dia memisahkan domain untuk halaman web utamanya dengan halaman untuk blog. Ini cukup menarik bagi saya, terlebih sekarang sudah ada TLD [.blog][blog] yang menurut saya ini keren!

Langsunglah saya memesan domain tersebut, tidak lama setelah itu saya langsung daftarkan domain itu ke akun Cloudflare saya.

Dan kemudian bingung, saya sudah punya domain [.id][id] yang berisikan blog pribadi, jika saya pindahkan blog itu ke domain *muhfajar.blog* maka apa yang saya harus isi untuk di domain yang sudah lama saya punya itu? terlebih kemampuan saya untuk mendisain halaman web sudah banyak berkurang karena hampir 4 tahun terakhir saya selalu berkecimpung dalam dunia *backend*.

Setelah membiarkan situs web pribadi saya dengan domain .id kosong untuk beberapa hari, akhirnya saya menemukan sesuatu yang menurut saya cocok untuk saya pakai di domain .id itu. Waktu itu saya teringat akan situs web yang memberikan *template* HTML secara gratis, mungkin beberapa dari kalian sudah pernah mendengarnya atau bahkan menggunakan *template* dari situs web tersebut, nama dari situs web tersebut adalah [HTML5 UP][html5up].

Jadilah kombinasi dua situs web pribadi saya, satu menggunakan *template* gratis dari HTML5 UP dan satunya menggunakan *static* web *generator* Hugo.

Untuk *template* HTML itu saya tidak banyak merubah kode yang sudah ada, hanya merubah warna palet dari keseluruhan tema dan juga menambahkan sedikit *script* untuk mengambil *feed RSS* dari halaman blog saya. Untuk mengambil *feed RSS* itu saya hanya menggunakan *script* sederhana seperti dibawah ini:

{{< gist muhfajar 837ed19b3a7a54e2eaad5f850e9de1f3 >}}

Untuk tema Hugo juga saya tidak banyak merubah kode yang sudah ada, untuk lebih lengkapnya kedua kode sumber (id dan blog) bisa dilihat di halaman [GitHub][github] saya.

[hugo]: https://gohugo.io/
[cody]: https://codyogden.com/
[graveyard]: https://killedbygoogle.com/
[blog]: https://en.wikipedia.org/wiki/.blog
[id]: https://en.wikipedia.org/wiki/.id
[html5up]: https://html5up.net/
[github]: https://github.com/muhfajar/