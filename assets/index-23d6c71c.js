(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();const s=document.querySelector("#cards"),u=document.querySelector(".payment__cards"),n=document.querySelector(".card__add"),l=document.querySelector(".card");document.querySelectorAll(".payment__check");document.querySelectorAll(".payment__method");const v=document.querySelector(".payment__add");document.querySelector(".payment__submit");const _=document.querySelector(".card__cancel"),y=document.querySelector(".card__submit");n.querySelector("#name");const m=n.querySelector("#number"),f=n.querySelector("#expiration"),S=n.querySelector("#cvv"),a=[{number:0x3f2a6967c02ac,expires:"09/27"},{number:5555666677778888,expires:"04/23"}];v.addEventListener("click",b);n.addEventListener("submit",h);_.addEventListener("click",p);for(let e in a){const t=s.content.cloneNode(!0),c=q(a[e].number);t.querySelector(".payment__method-number").textContent=c,t.querySelector(".payment__method-date").textContent=a[e].expires,e==0&&(t.querySelector("#default").classList.add("payment__method-default"),t.querySelector(".payment__check").checked=!0),u.append(t)}function b(){l.classList.add("card_visible")}function p(){l.classList.remove("card_visible"),X(),C(),n.reset()}function q(e){return"XXXX XXXX XXXX "+e.toString().slice(12)}function h(e){e.preventDefault();const t=s.content.cloneNode(!0);t.querySelector(".payment__method-number").textContent=m.value,t.querySelector(".payment__method-date").textContent=f.value,u.append(t),p()}function x(e){y.disabled=!0,Array.from(e.querySelectorAll(".card__input")).forEach(c=>{c.addEventListener("input",d=>{g(c)})})}x(n);m.addEventListener("keydown",e=>{/4[8-9]|5[0-7]|37|39|46|^8$/.test(e.keyCode)||e.preventDefault()});f.addEventListener("keydown",e=>{/4[8-9]|5[0-7]|37|39|46|191|^8$/.test(e.keyCode)||e.preventDefault()});S.addEventListener("keydown",e=>{/4[8-9]|5[0-7]|37|39|46|^8$/.test(e.keyCode)||e.preventDefault()});function g(e){const t=n.querySelector(`.${e.id}-error`);e.validity.valid?t.classList.remove("validity_visible"):(t.innerText=e.validationMessage,t.classList.add("validity_visible")),n.checkValidity()&&(y.disabled=!1),e.id!=="cvv"&&L(e)}function L(e){n.querySelector(`#card-${e.id}`).innerText=e.value,e.id==="number"&&(n.querySelector(`#card-${e.id}`).innerText=e.value.substring(0,4)+" "+e.value.substring(4,8)+" "+e.value.substring(8,12)+" "+e.value.substring(12,16))}function C(){n.querySelector("#card-name").innerText="Vasya Pupkin",n.querySelector("#card-expiration").innerText="09/23",n.querySelector("#card-number").innerText="0000 9999 2222 3333"}function X(){n.querySelectorAll(".validity").forEach(e=>e.classList.remove("validity_visible"))}