/* Воздушный дизайн: шапка становится стеклянной при прокрутке и «висячие» ноты на главном экране (на праздники не показываются) */
document.addEventListener("DOMContentLoaded", function () {
  var n = document.querySelector("nav"), f = function () { n && n.classList.toggle("sc", scrollY > 20); }; f(); addEventListener("scroll", f, { passive: true });
  if (document.documentElement.dataset.season) return;
  document.querySelectorAll("header.hero,header.ph").forEach(function (h) {
    var b = document.createElement("div"); b.id = "nts"; var N = ["♪", "♫", "♩", "♬"];
    for (var i = 0; i < 14; i++) { var s = document.createElement("span"); s.className = "nt"; s.innerHTML = '<i style="height:' + (40 + Math.random() * 230) + 'px"></i>' + N[i % 4];
      s.style.cssText = "left:" + ((i * 7.3 + Math.random() * 4) % 96) + "%;font-size:" + (18 + Math.random() * 16) + "px;animation-duration:" + (5 + Math.random() * 6) + "s;animation-delay:-" + (Math.random() * 8) + "s"; b.appendChild(s); }
    h.insertBefore(b, h.firstChild);
  });
});
