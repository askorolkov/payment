(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();const u=document.querySelector("#cards"),s=document.querySelector(".payment__cards"),n=document.querySelector(".card__add"),l=document.querySelector(".card");document.querySelectorAll(".payment__check");document.querySelectorAll(".payment__method");const p=document.querySelector(".payment__add");document.querySelector(".payment__submit");const f=document.querySelector(".card__cancel"),m=document.querySelector(".card__submit");n.querySelector("#name");const _=n.querySelector("#number"),S=n.querySelector("#expiration");n.querySelector("#cvv");const a=[{number:0x3f2a6967c02ac,expires:"09/27"},{number:5555666677778888,expires:"04/23"}];p.addEventListener("click",v);n.addEventListener("submit",h);f.addEventListener("click",y);for(let e in a){const t=u.content.cloneNode(!0),o=q(a[e].number);t.querySelector(".payment__method-number").textContent=o,t.querySelector(".payment__method-date").textContent=a[e].expires,e==0&&(t.querySelector("#default").classList.add("payment__method-default"),t.querySelector(".payment__check").checked=!0),s.append(t)}function v(){l.classList.add("card_visible")}function y(){l.classList.remove("card_visible"),X(),C(),n.reset()}function q(e){return"XXXX XXXX XXXX "+e.toString().slice(12)}function h(e){e.preventDefault();const t=u.content.cloneNode(!0);t.querySelector(".payment__method-number").textContent=_.value,t.querySelector(".payment__method-date").textContent=S.value,s.append(t),y()}function b(e){m.disabled=!0,Array.from(e.querySelectorAll(".card__input")).forEach(o=>{o.addEventListener("input",()=>{x(o)})})}b(n);function x(e){const t=n.querySelector(`.${e.id}-error`);e.validity.valid?t.classList.remove("validity_visible"):(t.innerText=e.validationMessage,t.classList.add("validity_visible")),n.checkValidity()&&(m.disabled=!1),e.id!=="cvv"&&L(e)}function L(e){n.querySelector(`#card-${e.id}`).innerText=e.value}function C(){n.querySelector("#card-name").innerText="Vasya Pupkin",n.querySelector("#card-expiration").innerText="09/23",n.querySelector("#card-number").innerText="0000 9999 2222 3333"}function X(){n.querySelectorAll(".validity").forEach(e=>e.classList.remove("validity_visible"))}