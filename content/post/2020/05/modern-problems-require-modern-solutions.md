---
title: Modern Problems Require Modern Solutions
date: 2020-05-09
hero: https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80
excerpt: Journey to get stable internet connection
categories:
- journal
tags:
- journal
- corona
- work-from-home
- open-source
authors:
- Muhamad Fajar

---
Recently I posted about my experience with the longest [work from home](https://www.muhfajar.blog/id/kerja-dari-rumah/) (posted in Bahasa) I ever had so far. The biggest challenge about working from home in the internet era is the internet connection itself. I often got a bad connection in the middle of the meeting, that not good especially since I'm the host in a meeting, not only once but in "daily standup meeting". Yes, you can see daily in the quoted word.

Since internet access in my apartment is not good enough to make a video call or conference call, so I decide to make my phone a wifi modem, in the other word is wifi tethering. My mobile carrier is more reliable than apartment wifi, with a term and conditions.

{{< figure src="https://images.unsplash.com/photo-1552345386-6690de5b2c09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" caption="fig: pisses me off" >}}

The term and conditions are like, a good signal is not in all apartment areas, that needs a lot of experiment and after multiple parameters to find a better signal, I just need to put my phone in there and don't do anything, and the other condition is, my phone need to placed directly on the floor, that's like a  natural cooling system, with the air conditioner turned on of course. Super cool and all good.

But after a few days, I am facing a new issue. Because I can't use my phone when it transforms into mobile wifi, I often miss text notifications and when someone calls me, the connection goes to unstable. This one makes me need a standalone mobile wifi device.

I decide to buy a wifi device from an online store, after some "research" about the best and cheapest wifi device I found **4Gee Wifi Mini**. The journey hasn't stopped here. I face a new issue hahaha. I need to check the battery every single hour. Because I don't want to break my mobile wifi battery too soon, I did not connect it to the power adapter when the power level before reached 10%. Because I'm too lazy to open _http://192.168.1.1/_ (4Gee Wifi Mini web dashboard) every single hour to check battery level, I make a python script to call that battery status and notify me when the battery is low or full. The result is now I know when I need to plug in the AC adapter or disconnect the AC adapter.

So far so good, all going well, and my internet connection is more stable. If you want to see or have the same problem and want to use my **4Gee Wifi Mini** battery watcher script, you can download it at my [GitHub repo](https://github.com/muhfajar/4gee-wifi-battery-watcher).