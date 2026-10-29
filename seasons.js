/* Праздничные темы. Выбор — в «Настройки → Праздники» (хранится в браузере).
   Если ничего не выбрано («Авто»), Хэллоуин включается сам с 20 октября по 2 ноября.
   Предпросмотр: добавьте к адресу ?season=newyear или ?season=halloween или ?season=none */
(function () {
  var q = location.search, c = null, m = q.match(/season=(\w+)/);
  try { c = localStorage.getItem("season"); } catch (e) {}
  if (m) c = m[1]; if (/halloween=1/.test(q)) c = "halloween"; if (/halloween=0/.test(q)) c = "none";
  var d = new Date(), mo = d.getMonth(), day = d.getDate();
  var auto = (mo === 9 && day >= 20) || (mo === 10 && day <= 2) ? "halloween" : "none"; // автоматическую дату для Нового года добавим позже
  var s = (!c || c === "auto") ? auto : c; if (s !== "halloween" && s !== "newyear") return;
  document.documentElement.dataset.season = s;
  var rnd = function (a, b) { return a + Math.random() * (b - a); };
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.body, pill = document.createElement("div");
    if (s === "halloween") {
      var f = document.createElement("link"); f.rel = "stylesheet"; f.href = "https://fonts.googleapis.com/css2?family=Creepster&display=swap"; document.head.appendChild(f);
      pill.id = "hwbar"; pill.textContent = "🎃 Happy Halloween"; b.prepend(pill);
      var box = document.createElement("div"); box.id = "hw"; var E = ["🎃", "👻", "🦇", "🕷️", "💀", "🕸️"];
      for (var i = 0; i < 8; i++) { var x = document.createElement("span"); x.textContent = E[i % 6]; x.style.cssText = "left:" + ((i * 12 + rnd(0, 6)) % 96) + "%;font-size:" + rnd(18, 44) + "px;animation-duration:" + rnd(14, 30) + "s;animation-delay:-" + rnd(0, 20) + "s"; box.appendChild(x); }
      box.insertAdjacentHTML("beforeend", '<div id="hws"><i></i><b>🕷️</b></div>'); b.appendChild(box);
    } else {
      pill.id = "nyc"; pill.textContent = "🎄 С Новым годом!"; b.prepend(pill);
      var sn = document.createElement("div"); sn.id = "sn";
      for (var j = 0; j < 26; j++) { var y = document.createElement("span"); y.textContent = j % 3 ? "❄" : "✦"; y.style.cssText = "left:" + rnd(0, 98) + "%;font-size:" + rnd(10, 24) + "px;opacity:" + rnd(.25, .65).toFixed(2) + ";animation-duration:" + rnd(14, 28) + "s;animation-delay:-" + rnd(0, 26) + "s"; sn.appendChild(y); }
      b.appendChild(sn);
      var g = document.createElement("div"); g.id = "gl", p = "M0,2", C = ["#fcd34d", "#7cc4ff", "#fb7185", "#86efac"], n = 0, h = "";
      for (var k = 0; k < 8; k++) { p += " Q" + (k * 12.5 + 6.25) + ",30 " + (k + 1) * 12.5 + ",2"; [.2, .5, .8].forEach(function (t) { h += '<i style="left:' + (k * 12.5 + 12.5 * t) + '%;top:' + (2 + 56 * t * (1 - t)) + 'px;color:' + C[n % 4] + ';background:' + C[n % 4] + ';animation-delay:-' + ((n * .37) % 2.4).toFixed(2) + 's"></i>'; n++; }); }
      g.innerHTML = '<svg viewBox="0 0 100 34" preserveAspectRatio="none"><path d="' + p + '"/></svg>' + h; b.appendChild(g);
    }
  });
})();
