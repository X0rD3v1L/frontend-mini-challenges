import"./header-27nsSsIu.js";import"./navbar-1vqdjFwT.js";const s=document.querySelector(".second-text"),c=document.querySelector(".input"),d=document.querySelector(".button"),a=document.querySelector(".speedRange"),r=["Student","Developer","Writer"];a.default=200;let o=200;function i(n){return new Promise(t=>setTimeout(t,n))}async function l(n,t){await i(o);for(let e=0;e<t.length;e++)n.textContent+=t.charAt(e),await i(o);await i(o);for(let e=0;e<t.length;e++)n.textContent=t.substring(0,t.length-1-e),await i(o)}async function u(){for(const n of r)await l(s,n);u()}u();d.addEventListener("click",()=>{c.value&&(r.push(c.value),c.value="")});a.addEventListener("change",()=>{o=a.value});
