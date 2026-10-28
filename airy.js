/* Воздушный дизайн: прозрачная шапка, которая появляется при прокрутке, и парящие ноты (не показываются на праздники) */
document.addEventListener("DOMContentLoaded", function () {
  var n = document.querySelector("nav"), f = function () { n && n.classList.toggle("sc", scrollY > 20); }; f(); addEventListener("scroll", f, { passive: true });
  if (document.documentElement.dataset.season) return;
  document.querySelectorAll("header.hero,header.ph").forEach(function (h) {
    var b = document.createElement("div"); b.id = "nts"; var N = ["♪", "♫", "♩", "♬"];
    for (var i = 0; i < 12; i++) { var s = document.createElement("span"); s.className = "nt"; s.textContent = N[i % 4];
      s.style.cssText = "left:" + ((i * 8.7 + Math.random() * 5) % 96) + "%;font-size:" + (16 + Math.random() * 20) + "px;animation-duration:" + (18 + Math.random() * 18) + "s;animation-delay:-" + (Math.random() * 30) + "s"; b.appendChild(s); }
    h.insertBefore(b, h.firstChild);
  });
});
