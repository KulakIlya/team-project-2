(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.querySelector(".btn-scroll-to-top"),c=document.querySelector(".trigger-scroll-top-section");s.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const d={rootMargin:"0px",threshold:1},u=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?s.classList.add("is-hidden"):s.classList.remove("is-hidden")})},d);c&&u.observe(c);
//# sourceMappingURL=commonHelpers.js.map
