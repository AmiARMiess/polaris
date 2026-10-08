document.addEventListener("DOMContentLoaded",function(){
var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
var nav=document.getElementById("navbar"),bar=document.getElementById("progress");
function onS(){nav.classList.toggle("scrolled",window.scrollY>8);
var h=document.documentElement.scrollHeight-window.innerHeight;
bar.style.width=(h>0?(window.scrollY/h*100):0)+"%";}
window.addEventListener("scroll",onS,{passive:true});onS();
var btn=document.getElementById("menuBtn"),links=document.getElementById("navLinks"),open=false;
function set(v){open=v;links.classList.toggle("open",v);}
btn.addEventListener("click",function(e){e.stopPropagation();set(!open);});
document.addEventListener("click",function(e){if(open&&!links.contains(e.target))set(false);});
links.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){set(false);});});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll(".rev").forEach(function(el){io.observe(el);});
var cio=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;cio.unobserve(e.target);
var el=e.target,end=parseFloat(el.dataset.count),dec=parseInt(el.dataset.dec||"0",10);
var t0=performance.now(),dur=1400;
function tick(t){var p=Math.min((t-t0)/dur,1),ease=1-Math.pow(1-p,3);el.textContent=(end*ease).toFixed(dec);if(p<1)requestAnimationFrame(tick);}
requestAnimationFrame(tick);});},{threshold:.5});
document.querySelectorAll("[data-count]").forEach(function(el){cio.observe(el);});
var tgs=document.querySelectorAll(".tg button");
tgs.forEach(function(b){b.addEventListener("click",function(){
tgs.forEach(function(x){x.classList.remove("on");});b.classList.add("on");
var k=b.dataset.per==="y"?"y":"m";
document.querySelectorAll(".price .amt").forEach(function(a){a.textContent=k==="y"?a.dataset.y:a.dataset.m;});});});
document.querySelectorAll(".qa").forEach(function(qa){qa.querySelector(".qq").addEventListener("click",function(){
var was=qa.classList.contains("open");
document.querySelectorAll(".qa").forEach(function(x){x.classList.remove("open");});
if(!was)qa.classList.add("open");});});
var toast=document.getElementById("toast");
document.querySelectorAll(".plan .btn,.hero-btns .btn,.cta-btns .btn").forEach(function(b){
b.addEventListener("click",function(){toast.classList.add("show");clearTimeout(window.__tt);
window.__tt=setTimeout(function(){toast.classList.remove("show");},2400);});});
});
