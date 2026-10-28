/* Хэллоуин-тема. Включается сама с 20 октября по 2 ноября, потом выключается.
   Предпросмотр: добавьте к адресу ?halloween=1   Выключить: ?halloween=0
   Чтобы убрать совсем: удалите две строки с «halloween» в <head> страниц. */
(function () {
  var d = new Date(), m = d.getMonth(), day = d.getDate();
  var on = (m === 9 && day >= 20) || (m === 10 && day <= 2);
  if (/halloween=1/.test(location.search)) on = true;
  if (/halloween=0/.test(location.search)) on = false;
  if (!on) return;
  document.documentElement.dataset.season = "halloween";
  var f = document.createElement("link"); f.rel = "stylesheet"; f.href = "https://fonts.googleapis.com/css2?family=Creepster&display=swap"; document.head.appendChild(f);
  document.addEventListener("DOMContentLoaded", function () {
    var bar = document.createElement("div"); bar.id = "hwbar"; bar.textContent = "🎃 Happy Halloween"; document.body.prepend(bar);
    var box = document.createElement("div"); box.id = "hw", E = ["🎃", "👻", "🦇", "🕷️", "💀", "🕸️"];
    for (var i = 0; i < 8; i++) { var s = document.createElement("span"); s.textContent = E[i % E.length];
      s.style.cssText = "left:" + ((i * 6.3 + Math.random() * 4) % 96) + "%;font-size:" + (18 + Math.random() * 26) + "px;animation-duration:" + (14 + Math.random() * 16) + "s;animation-delay:-" + (Math.random() * 20) + "s"; box.appendChild(s); }
    box.insertAdjacentHTML("beforeend", '<div id="hws"><i></i><b>🕷️</b></div>'); document.body.appendChild(box);
  });
})();
