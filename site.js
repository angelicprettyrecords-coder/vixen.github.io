(function(){var d=document,r=d.documentElement,b=d.getElementById("themeBtn");
function ic(){b.textContent=r.dataset.theme==="dark"?"☀️":"🌙"}ic();
b.onclick=function(){var t=r.dataset.theme==="dark"?"light":"dark";r.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}ic()};
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add("on")})},{threshold:.12});
d.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
d.getElementById("yr").textContent=new Date().getFullYear();})();
