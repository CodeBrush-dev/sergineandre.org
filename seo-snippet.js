// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.sergineandre.org",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.sergineandre.org/","title_tag":"Sergine André Art & Chaos & Cosmos | Belgian Caribbean Artist","meta_description":"Discover paintings by Haitian-born Belgian artist Sergine André. Contemporary and semi-abstract art exploring the unseen, chaos & cosmos, errance and Rara."},{"page_url":"https://www.sergineandre.org/galleries","title_tag":"Chaos & Cosmos, Errance, Rara | Sergine André Galleries","meta_description":"Explore Sergine André’s galleries: Chaos & Cosmos, Errance, Rara and more. Contemporary abstract and semi-abstract works by a Haitian Caribbean artist in Belgium."},{"page_url":"https://www.sergineandre.org/new","title_tag":"New Chaos & Cosmos Works | Sergine André Art","meta_description":"View new works by Haitian artist Sergine André, including recent Chaos & Cosmos paintings and semi-abstract pieces blending contemporary Caribbean and Belgian influences."},{"page_url":"https://www.sergineandre.org/publications","title_tag":"Artist Monograph & Publications | Sergine André Art","meta_description":"Discover Sergine André’s artist monograph and publications tracing her journey from Haiti to Belgium, exploring errance, the unseen, chaos & cosmos and Caribbean roots."},{"page_url":"https://www.sergineandre.org/monograph","title_tag":"One Voice Dialogue Monograph | Sergine André Art","meta_description":"Learn about “Dialogue à une voix”, the artist’s monograph on Haitian Caribbean painter Sergine André, her contemporary abstract art, errance and the unseen."},{"page_url":"https://www.sergineandre.org/press","title_tag":"Press on Haitian Caribbean Art | Sergine André","meta_description":"Read international press on Haitian and Caribbean artist Sergine André, whose contemporary abstract and semi-abstract works explore chaos & cosmos and the unseen."},{"page_url":"https://www.sergineandre.org/about","title_tag":"Haitian Belgian Contemporary Artist | Sergine André","meta_description":"About Sergine André, a Haitian-born Belgian contemporary artist. Her semi-abstract work explores Rara, errance, chaos & cosmos and the unseen in Caribbean-inspired art."},{"page_url":"https://www.sergineandre.org/contact","title_tag":"Contact Sergine André Art | Haitian Belgian Artist","meta_description":"Contact Haitian-born Belgian artist Sergine André for inquiries about contemporary abstract and semi-abstract Caribbean art, Chaos & Cosmos series, Errance and Rara."}],"keywords":["sergine andre art","belgian artist","chaos & cosmos","caribbean artist","the unseen","contemporary abstract","haitian artist","semi-abstract","errance","rara"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.sergineandre.org/#person",
  "name": "Sergine André",
  "alternateName": "Djinn",
  "url": "https://www.sergineandre.org/",
  "image": "https://static.wixstatic.com/media/c74da6_ce417db333494b3fbe3f4cefaaedb389~mv2.jpg/v1/crop/x_0,y_243,w_2413,h_3130/fill/w_636,h_825,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC2411.jpg",
  "jobTitle": "Visual Artist",
  "description": "Haitian visual artist Sergine André (‘Djinn’), born in the Artibonite region of Haiti and based in Brussels since 2010, whose work draws from the magical-spiritual tradition of her home region and Haiti’s abstract expressionist avant-garde.",
  "knowsLanguage": [
    "fr",
    "en"
  ],
  "sameAs": [
    "https://www.sergineandre.org/quality_auto/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png",
    "https://www.sergineandre.org/quality_auto/11062b_9b5a3b3607694630a7253c5fc4ff6476~mv2.png",
    "https://www.sergineandre.org/quality_auto/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png",
    "https://www.sergineandre.org/quality_auto/c74da6_0e125bf0ef7546a08538a11233344cc7~mv2.png"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brussels",
    "addressCountry": "BE"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Productions Associées asbl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue Coenraets 52",
      "addressLocality": "Saint Gilles",
      "postalCode": "1060",
      "addressCountry": "BE"
    },
    "vatID": "BE 0896 755 397"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "CreativeWork",
        "name": "Original paintings by Sergine André",
        "url": "https://www.sergineandre.org/new"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Book",
        "name": "Dialogue à une voix / Dialogue in One Voice",
        "url": "https://www.sergineandre.org/publications",
        "bookEdition": "Soft cover",
        "numberOfPages": 178,
        "inLanguage": [
          "fr",
          "en"
        ],
        "publisher": {
          "@type": "Organization",
          "name": "CIDIHCA France"
        },
        "image": "https://static.wixstatic.com/media/c74da6_33ebc1ac62d947aca1c0f08decc15541~mv2.jpg/v1/fill/w_170,h_193,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Book%20cover%20white%20background_edited.jpg"
      },
      "price": "30.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  ],
  "event": {
    "@type": "Event",
    "name": "Bilia Na Biso",
    "description": "Collective collaborative exhibition in Kinshasa, Congo RDC.",
    "eventStatus": "https://schema.org/EventScheduled",
    "startDate": "2026-04-08",
    "endDate": "2026-05-08",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kinshasa",
        "addressCountry": "CD"
      }
    }
  },
  "hasPart": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.sergineandre.org/galleries",
      "url": "https://www.sergineandre.org/galleries",
      "name": "Galleries",
      "description": "Art galleries of Sergine André’s work, including Haiti Roots, Errance - Restless, Rara Series, Chaos & Cosmos, Cities and Coeurs d'Erzulie."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.sergineandre.org/new",
      "url": "https://www.sergineandre.org/new",
      "name": "New Works",
      "description": "Recent artworks by Sergine André, including the Chaos & Cosmos series and One Island, two Republics."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.sergineandre.org/publications",
      "url": "https://www.sergineandre.org/publications",
      "name": "Publications",
      "description": "Artist's monograph and other publications featuring the work of Sergine André."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.sergineandre.org/press",
      "url": "https://www.sergineandre.org/press",
      "name": "Press",
      "description": "Press coverage and critical texts about the work of Sergine André."
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.sergineandre.org/about",
      "url": "https://www.sergineandre.org/about",
      "name": "About",
      "description": "Biography, selected exhibitions, awards and publications of Haitian visual artist Sergine André."
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.sergineandre.org/contact",
      "url": "https://www.sergineandre.org/contact",
      "name": "Contact",
      "description": "Contact form for inquiries about the artwork of Sergine André."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
