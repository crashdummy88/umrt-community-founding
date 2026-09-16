(function () {
  var cdn = "https://cdn.jsdelivr.net/gh/crashdummy88/united-mobile-rv@c73e068e427bce0eba06019dccbadf75326c4315/assets/photos/jobs/";
  document.addEventListener("error", function (event) {
    var img = event.target;
    if (!img || img.tagName !== "IMG" || img.dataset.fallback === "1") return;
    if (!/\/assets\/photos\//.test(img.currentSrc || img.src)) return;
    img.dataset.fallback = "1";
    img.src = cdn + (img.getAttribute("data-job") || (img.src.split("/").pop() || ""));
  }, true);
})();
