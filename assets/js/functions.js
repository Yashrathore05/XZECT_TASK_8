"use strict";
var m, divId, initLatitude, initLongitude, map, body = document.body;
window.addEventListener("load", function() {
    document.body.classList.add("loaded")
});
var preloaderType = body.getAttribute("data-preloader");
if ("light" === preloaderType) {
    var e = document.createElement("div");
    e.className = "preloader", e.innerHTML = "<div><span></span></div>", body.appendChild(e)
} else if ("dark" === preloaderType) {
    var e = document.createElement("div");
    e.className = "preloader preloader-dark", e.innerHTML = "<div><span></span></div>", body.appendChild(e)
}
var accordionTitles = document.querySelectorAll(".accordion-title");
accordionTitles.forEach(function(e) {
    e.addEventListener("click", function() {
        var t = e.parentElement,
            r = e.nextElementSibling;
        t.classList.contains("active") ? (t.classList.remove("active"), r.style.maxHeight = null) : (e.closest(".accordion").querySelectorAll("li").forEach(function(e) {
            e.classList.remove("active")
        }), t.classList.add("active"), e.closest(".accordion").querySelectorAll(".accordion-content").forEach(function(e) {
            e.style.maxHeight = "0"
        }), r.style.maxHeight = r.scrollHeight + "px")
    });
    var t = e.parentElement.closest(".accordion");
    if (t.querySelector("li.active")) {
        var r = t.querySelector("li.active .accordion-content"),
            a = r.scrollHeight;
        r.style.maxHeight = a + "px"
    }
});
var bgImages = document.querySelectorAll(".bg-image");
bgImages && bgImages.forEach(function(e) {
    var t = e.getAttribute("data-bg-src");
    e.style.backgroundImage = 'url("' + t + '")'
}), $("#contactform").on("submit", function(e) {
    var t = $("#name").val(),
        r = $("#email").val(),
        a = $("#subject").val(),
        n = $("#message").val();
    ("" === t && $("#name").addClass("error-color"), "" === r && $("#email").addClass("error-color"), "" === a && $("#subject").addClass("error-color"), "" === n) ? $("#message").addClass("error-color"): ($.ajax({
        url: "/assets/php/contact-form.php",
        data: $(this).serialize(),
        type: "POST",
        success: function(e) {
            $("#success").addClass("show-result"), $("#contactform").each(function() {
                this.reset()
            })
        },
        error: function(e) {
            $("#error").addClass("show-result")
        }
    }), $("#contactform input, #contactform textarea").removeClass("error-color")), e.preventDefault()
}), $(".counter").appear(function() {
    $(this).each(function() {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2e3,
            easing: "swing",
            step: function(e) {
                $(this).text(Math.ceil(e))
            }
        })
    })
}, {
    accX: 0,
    accY: -10
});
const cursor = document.querySelector(".cursors"),
    cursorInner = cursor.querySelector(".cursor-inner"),
    hoverTitle = document.querySelectorAll("div[data-hover-title]"),
    hoverTitleDark = document.querySelectorAll("div[data-hover-title-dark]"),
    hoverText = document.querySelectorAll("div[data-hover-text]"),
    hoverTextDark = document.querySelectorAll("div[data-hover-text-dark]");
document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px", cursor.style.top = e.pageY + "px"
}), hoverTitle.forEach(e => {
    e.addEventListener("mouseover", function() {
        cursorInner.innerHTML = "<div class='mouse-caption'><h2>" + e.getAttribute("data-hover-title") + "</h2></div>", cursorInner.classList.add("visible")
    }), e.addEventListener("mouseout", function() {
        cursorInner.innerHTML = ""
    })
}), hoverTitleDark.forEach(e => {
    e.addEventListener("mouseover", function() {
        cursorInner.innerHTML = "<div class='mouse-caption mouse-caption-dark'><h2>" + e.getAttribute("data-hover-title-dark") + "</h2></div>", cursorInner.classList.add("visible")
    }), e.addEventListener("mouseout", function() {
        cursorInner.innerHTML = ""
    })
}), hoverText.forEach(e => {
    e.addEventListener("mouseover", function() {
        cursorInner.innerHTML = "<div class='mouse-caption'><h5>" + e.getAttribute("data-hover-text") + "</h5></div>", cursorInner.classList.add("visible")
    }), e.addEventListener("mouseout", function() {
        cursorInner.innerHTML = ""
    })
}), hoverTextDark.forEach(e => {
    e.addEventListener("mouseover", function() {
        cursorInner.innerHTML = "<div class='mouse-caption mouse-caption-dark'><h5>" + e.getAttribute("data-hover-text-dark") + "</h5></div>", cursorInner.classList.add("visible")
    }), e.addEventListener("mouseout", function() {
        cursorInner.innerHTML = ""
    })
});
const hoverImgs = document.querySelectorAll("[data-hover-img]");
hoverImgs.forEach(e => {
    e.addEventListener("mouseover", function() {
        cursorInner.innerHTML = "<img src='" + e.getAttribute("data-hover-img") + "'>", cursorInner.classList.add("visible")
    }), e.addEventListener("mouseout", function() {
        cursorInner.innerHTML = ""
    })
});
var fm = document.querySelector(".fullscreen-menu");
if (fm) {
    var t = document.querySelector(".fm-toggle"),
        r = document.querySelector(".fm-close");
    t.addEventListener("click", function() {
        fm.classList.contains("show") ? fm.classList.remove("show") : fm.classList.add("show")
    }), r.addEventListener("click", function() {
        fm.classList.remove("show"), t.classList.remove("fm-toggle-hide")
    })
}
var c, header = document.querySelector(".header"),
    headerSticky = document.querySelector(".header.sticky-autohide"),
    headerMenu = document.querySelector(".header-menu"),
    currentScrollTop = 0;
if (headerSticky && window.addEventListener("scroll", function() {
        var e = window.pageYOffset;
        c < (currentScrollTop = e) && e > 210 ? headerSticky.classList.contains("header-menu-show") || headerSticky.classList.add("hide") : c > currentScrollTop && !(e <= 210) && headerSticky.classList.remove("hide"), c = currentScrollTop
    }), document.querySelector(".header.sticky-autohide:not(.header-lg, .header-xl, .transparent-light, .transparent-dark)")) {
    var a = document.createElement("div");
    a.className = "header-placeholder", document.querySelector(".header.sticky-autohide").insertAdjacentElement("beforebegin", a)
}
if (document.querySelector(".header-lg.sticky-autohide:not(.transparent-light, .transparent-dark)")) {
    var n = document.createElement("div");
    n.className = "header-placeholder-lg", document.querySelector(".header-lg.sticky-autohide").insertAdjacentElement("beforebegin", n)
}
if (document.querySelector(".header-xl.sticky-autohide:not(.transparent-light, .transparent-dark)")) {
    var o = document.createElement("div");
    o.className = "header-placeholder-xl", document.querySelector(".header-xl.sticky-autohide").insertAdjacentElement("beforebegin", o)
}
if (document.querySelector(".header.sticky:not(.header-lg, .header-xl, .transparent-light, .transparent-dark)")) {
    var a = document.createElement("div");
    a.className = "header-placeholder", document.querySelector(".header.sticky").insertAdjacentElement("beforebegin", a)
}
if (document.querySelector(".header-lg.sticky:not(.transparent-light, .transparent-dark)")) {
    var n = document.createElement("div");
    n.className = "header-placeholder-lg", document.querySelector(".header-lg.sticky").insertAdjacentElement("beforebegin", n)
}
if (document.querySelector(".header-xl.sticky:not(.transparent-light, .transparent-dark)")) {
    var o = document.createElement("div");
    o.className = "header-placeholder-xl", document.querySelector(".header-xl.sticky").insertAdjacentElement("beforebegin", o)
}
document.querySelector(".header.transparent-light") && window.addEventListener("scroll", function() {
    var e = document.querySelectorAll(".header.sticky-autohide, .header.sticky");
    window.pageYOffset > 10 ? e.forEach(function(e) {
        e.classList.remove("transparent-light")
    }) : e.forEach(function(e) {
        e.classList.add("transparent-light")
    })
}), document.querySelector(".header.transparent-dark") && window.addEventListener("scroll", function() {
    var e = document.querySelectorAll(".header.sticky-autohide, .header.sticky");
    window.pageYOffset > 10 ? e.forEach(function(e) {
        e.classList.remove("transparent-dark")
    }) : e.forEach(function(e) {
        e.classList.add("transparent-dark")
    })
});
var mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
if (mobileMenuToggle && mobileMenuToggle.addEventListener("click", function() {
        header.classList.contains("header-menu-show") ? (header.classList.remove("header-menu-show"), mobileMenuToggle.classList.remove("toggle-close")) : (header.classList.add("header-menu-show"), mobileMenuToggle.classList.add("toggle-close"))
    }), header && document.addEventListener("click", function(e) {
        !e.target.closest(".header-menu, .mobile-menu-toggle") && header.classList.contains("header-menu-show") && (header.classList.remove("header-menu-show"), mobileMenuToggle.classList.remove("toggle-close"))
    }), document.querySelector(".nav-dropdown")) {
    var l, d, u, v = document.querySelectorAll(".nav-dropdown"),
        p = document.querySelectorAll(".nav-subdropdown"),
        h = document.querySelectorAll(".mega-nav-dropdown");
    v.forEach(function(e) {
        e.parentNode.insertAdjacentHTML("beforeend", '<div class="nav-dropdown-toggle"><i class="fa-solid fa-angle-down"></i></div>')
    }), p.forEach(function(e) {
        var t = e.parentNode;
        t.classList.add("dropdown-icon-space"), t.insertAdjacentHTML("beforeend", '<div class="nav-subdropdown-toggle"><i class="fa-solid fa-angle-right"></i></div>')
    }), h.forEach(function(e) {
        e.parentNode.insertAdjacentHTML("beforeend", '<div class="nav-megadropdown-toggle"><i class="fa-solid fa-angle-down"></i></div>')
    }), document.querySelectorAll(".nav-dropdown-toggle").forEach(function(e) {
        var t = e.parentNode.querySelector(".nav-dropdown");
        e.addEventListener("click", function(r) {
            e.classList.contains("active") ? (e.classList.remove("active"), t.classList.remove("show")) : (e.classList.add("active"), t.classList.add("show")), r.preventDefault()
        })
    }), document.querySelectorAll(".nav-subdropdown-toggle").forEach(function(e) {
        var t = e.parentNode.querySelector(".nav-subdropdown");
        e.addEventListener("click", function(r) {
            e.classList.contains("active") ? (e.classList.remove("active"), t.classList.remove("show")) : (e.classList.add("active"), t.classList.add("show")), r.preventDefault()
        })
    }), document.querySelectorAll(".nav-megadropdown-toggle").forEach(function(e) {
        var t = e.parentNode.querySelector(".mega-nav-dropdown");
        e.addEventListener("click", function(r) {
            e.classList.contains("active") ? (e.classList.remove("active"), t.classList.remove("show")) : (e.classList.add("active"), t.classList.add("show")), r.preventDefault()
        })
    })
}
const lightbox = GLightbox();
var mapCanvas = $(".gmap");
if (mapCanvas.length)
    for (var i = 0; i < mapCanvas.length; i++) initLatitude = (m = mapCanvas[i]).dataset.latitude, initLongitude = m.dataset.longitude, divId = "#" + m.id, (map = new GMaps({
        el: divId,
        lat: initLatitude,
        lng: initLongitude,
        zoom: 16,
        scrollwheel: !1,
        styles: []
    })).addMarker({
        lat: initLatitude,
        lng: initLongitude
    });
if (window.matchMedia("(min-width: 1200px)").matches) {
    var g = $(".parallax");
    g.length && g.each(function() {
        $(this).parallaxie({
            speed: .2
        })
    })
}
var pGrid = $(".portfolio-grid");
if (pGrid.length) var mixer = mixitup(".portfolio-grid", {
    selectors: {
        target: ".portfolio-item"
    },
    animation: {
        duration: 250
    }
});
var vPortfolioNav = document.querySelector(".vp-nav"),
    vPortfolioLinks = document.querySelectorAll(".vp-link");
vPortfolioLinks && vPortfolioLinks.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        var e = this.parentElement;
        vPortfolioNav.querySelectorAll("li").forEach(function(e) {
            e.classList.remove("active")
        }), e.classList.add("active")
    })
}), $(".animated-progress div").each(function() {
    $(this).appear(function() {
        $(this).css("width", $(this).attr("data-progress") + "%"), $(this).addClass("progress-show")
    }, {
        accX: 0,
        accY: -10
    })
}), scrollCue.init();
var scrollTopBtn = document.querySelector(".scrolltotop");
if (scrollTopBtn && (window.addEventListener("scroll", function() {
        window.scrollY > 700 ? scrollTopBtn.classList.add("show") : scrollTopBtn.classList.remove("show")
    }), scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0
        })
    })), window.matchMedia("(min-width: 768px)").matches) var s = skrollr.init({
    forceHeight: !1
});
var swiper = new Swiper(".blog-slider-2", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 50
            }
        },
        navigation: {
            nextEl: ".blog-slider-2-next",
            prevEl: ".blog-slider-2-prev"
        },
        pagination: {
            el: ".blog-slider-2-pagination",
            clickable: !0
        }
    }),
    swiper = new Swiper(".blog-slider-2sm", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".blog-slider-2sm-next",
            prevEl: ".blog-slider-2sm-prev"
        }
    }),
    swiper = new Swiper(".blog-slider-3", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".blog-slider-3-next",
            prevEl: ".blog-slider-3-prev"
        },
        pagination: {
            el: ".blog-slider-3-pagination",
            clickable: !0
        }
    }),
    swiper = new Swiper(".blog-slider-featured-3", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        },
        navigation: {
            nextEl: ".blog-slider-featured-3-next",
            prevEl: ".blog-slider-featured-3-prev"
        },
        pagination: {
            el: ".blog-slider-featured-3-pagination",
            clickable: !0
        }
    }),
    swiper = new Swiper(".clients-slider-5", {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            998: {
                slidesPerView: 5,
                spaceBetween: 60
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        }
    }),
    swiper = new Swiper(".clients-slider-6", {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            998: {
                slidesPerView: 5,
                spaceBetween: 60
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 60
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        }
    }),
    swiper = new Swiper(".portfolio-horizontal-slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 60
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 70
            }
        },
        navigation: {
            nextEl: ".horizontal-portfolio-next",
            prevEl: ".horizontal-portfolio-prev"
        },
        pagination: {
            el: ".horizontal-portfolio-pagination",
            clickable: !0
        }
    }),
    swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
            nextEl: ".testimonial-slider-next",
            prevEl: ".testimonial-slider-prev"
        }
    }),
    swiper = new Swiper(".testimonial-slider-2", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        },
        navigation: {
            nextEl: ".testimonial-slider-2-next",
            prevEl: ".testimonial-slider-2-prev"
        }
    }),
    swiper = new Swiper(".sliding-boxes", {
        slidesPerView: "auto",
        spaceBetween: 40,
        speed: 14e3,
        loop: !0,
        allowTouchMove: !1,
        autoplay: {
            delay: 0,
            clickable: !1,
            pauseOnMouseEnter: !1,
            disableOnInteraction: !1
        }
    }),
    swiper = new Swiper(".sliding-text", {
        slidesPerView: "auto",
        spaceBetween: 70,
        speed: 2e4,
        loop: !0,
        allowTouchMove: !1,
        autoplay: {
            delay: 0,
            clickable: !1,
            pauseOnMouseEnter: !1,
            disableOnInteraction: !1
        }
    }),
    swiper = new Swiper(".sliding-text-reverse", {
        slidesPerView: "auto",
        spaceBetween: 70,
        speed: 2e4,
        loop: !0,
        allowTouchMove: !1,
        autoplay: {
            delay: 0,
            clickable: !1,
            pauseOnMouseEnter: !1,
            disableOnInteraction: !1,
            reverseDirection: !0
        }
    });