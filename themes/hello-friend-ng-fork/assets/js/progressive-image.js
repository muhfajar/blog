window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName && window.addEventListener('load', function () {
    'use strict';
    let e, t, n = document.getElementsByClassName('progressive replace');

    function i() {
        t = t || setTimeout(function () {
            t = null, r()
        }, 300)
    }

    function r() {
        n.length && requestAnimationFrame(function () {
            let t, i, r = window.innerHeight, a = 0;
            for (; a < n.length;) 0 < (i = (t = n[a].getBoundingClientRect()).top) + t.height && r > i ? (s(n[a]), n[a].classList.remove('replace')) : a++;
            e = n.length
        })
    }

    function s(e, t) {
        const n = e && (e.getAttribute('data-href') || e.href);
        if (n) {
            const i = new Image, r = e.dataset;
            r && (r.srcset && (i.srcset = r.srcset), r.sizes && (i.sizes = r.sizes)), i.onload = function () {
                requestAnimationFrame(function () {
                    n === e.href && (e.style.cursor = 'default', e.addEventListener('click', function (e) {
                        e.preventDefault()
                    }, !1));
                    var t = e.querySelector && e.querySelector('img.preview');
                    e.insertBefore(i, t && t.nextSibling).addEventListener('animationend', function () {
                        t && (t.alt && (i.alt = t.alt), e.removeChild(t)), i.classList.remove('reveal')
                    })
                })
            }, (t = 1 + (t || 0)) < 3 && (i.onerror = function () {
                setTimeout(function () {
                    s(e, t)
                }, 3e3 * t)
            }), i.className = 'reveal', i.src = n
        }
    }

    window.addEventListener('scroll', i, !1), window.addEventListener('resize', i, !1), MutationObserver && new MutationObserver(function () {
        n.length !== e && r()
    }).observe(document.body, {subtree: !0, childList: !0, attributes: !0, characterData: !0}), r()
}, !1);
