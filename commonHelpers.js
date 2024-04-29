import{A as v,a as w,S as x,N as y}from"./assets/vendor-8378cb5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();v.init({once:!0,duration:1250});function b({containerClass:e,elementClass:o,triggerClass:i,panelClass:s}){const t=L(`.${e}`);return new w(t,{elementClass:o,triggerClass:i,panelClass:s})}function L(e){if(!document.querySelector(e))throw new Error(`Element with class ${e} was not found`);return e}b({containerClass:"faq-list",elementClass:"faq-item",triggerClass:"faq-scroll-button",panelClass:"acc-panel"});const q=document.querySelector(".faq-list");q.addEventListener("click",e=>{const o=e.target.closest(".faq-item");o&&o.querySelector("#icon-arrow-down").classList.toggle("rotated")});const p=document.querySelector(".menu-tab"),a=document.querySelector(".menu-list");p.addEventListener("click",S);function S(e){e.currentTarget===p&&a.classList.toggle("is-hidden")}a.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{a.classList.add("is-hidden")})});function m({swiperContainerClass:e,navigationButtons:{prevEl:o,nextEl:i},spaceBetween:s=30}){return new x(`.${e}`,{modules:[y],speed:500,navigation:{nextEl:`.${i}`,prevEl:`.${o}`},spaceBetween:s})}m({swiperContainerClass:"swiper-container",navigationButtons:{prevEl:"projects-button-prev",nextEl:"projects-button-next"},spaceBetween:200});const E=[{name:"Natalia",photo:"./images/reviews_natalia@1x.png",photo2x:"./images/reviews_natalia@2x.png",text:"Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations."},{name:"Dmytro",photo:"./images/reviews_dmytro@1x.png",photo2x:"./images/reviews_dmytro@2x.png",text:"I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results."},{name:"Anna",photo:"./images/reviews_anna@1x.png",photo2x:"./images/reviews_anna@2x.png",text:"The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!"},{name:"Ivetta",photo:"./images/reviews_ivetta@1x.png",photo2x:"./images/reviews_ivetta@2x.png",text:"Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development."},{name:"Alex",photo:"./images/reviews_alex@1x.png",photo2x:"./images/reviews_alex@2x.png",text:"Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development."}];function C(e){return`
        <li class="reviews-li">
            <img src="${e.photo}" 
                 srcset="${e.photo} 1x,
                         ${e.photo.replace("@1x","@2x")} 2x"
                 alt=${e.name}
                 width="48" 
                 height="48" 
                 loading="lazy">
            <div class="">
                <h3 class="reviews-name">${e.name}</h3>
                <p class="reviews-text">${e.text}</p>
            </div>
        </li>
    `}const _=document.querySelector(".reviews-ul");E.forEach(e=>{_.innerHTML+=C(e)});m({swiperContainerClass:"swiper",slideClass:"reviews-li",navigationButtonClasses:{prevEl:"button-left",nextEl:"button-right"},slideActiveClass:"swiper-slide-active",disabledButtonClass:"button-left:disabled, button-right:disabled",slideNextClass:"swiper-slide-next",slidesPerView:{mobile:1,tablet:2,desktop:4},slidesPerView:1});getReviews().then(e=>{e.length>0?displayReviews(e):d()}).catch(e=>{d()});function d(){const e=document.querySelector(".reviews-ul");e.innerHTML="<p>Not found</p>"}const l=document.querySelector(".btn-scroll-to-top"),u=document.querySelector(".trigger-scroll-top-section");l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const k={rootMargin:"0px",threshold:1},T=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting?l.classList.add("is-hidden"):l.classList.remove("is-hidden")})},k);u&&T.observe(u);const $=document.querySelector(".menu-mob-btn"),f=document.querySelector(".close_menu_btn"),h=document.querySelector(".mob-menu-list"),c=document.querySelector("[data-modal]");$.addEventListener("click",g);f.addEventListener("click",g);function g(e){e.target===f||e.target===h?c.classList.add("is-hidden"):c.classList.toggle("is-hidden")}h.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{c.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
