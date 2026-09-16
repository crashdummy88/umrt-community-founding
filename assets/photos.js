(function () {
  var jobs = "https://cdn.jsdelivr.net/gh/crashdummy88/united-mobile-rv@c73e068e427bce0eba06019dccbadf75326c4315/assets/photos/jobs/";
  var brand = "https://cdn.jsdelivr.net/gh/crashdummy88/umrt-community@main/assets/brand/";
  document.addEventListener("error", function (event) {
    var img = event.target;
    if (!img || img.tagName !== "IMG" || img.dataset.fallback === "1") return;
    var src = img.currentSrc || img.src || "";
    var name = img.getAttribute("data-job") || src.split("/").pop() || "";
    if (/\/assets\/photos\//.test(src)) {
      img.dataset.fallback = "1";
      img.src = jobs + name;
    } else if (/\/assets\/brand\//.test(src)) {
      img.dataset.fallback = "1";
      img.src = brand + name;
    }
  }, true);
})();
