(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector(".proof-toggle");
  var toggleLabel = document.querySelector(".proof-toggle__label");
  var status = document.getElementById("view-status");
  var sheet = document.getElementById("sheet");
  var rule = document.querySelector(".sheet__rule");
  var bar = document.querySelector(".progressbar");
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tabs a"));
  var sections = tabs.map(function (tab) {
    return document.getElementById(tab.getAttribute("data-section"));
  });
  var progressValue = 0;
  var currentSection = "";

  function viewIsMarked() {
    return root.dataset.view !== "clean";
  }

  function paintToggle() {
    if (!toggle) return;
    var marked = viewIsMarked();
    toggle.setAttribute("aria-pressed", marked ? "true" : "false");
    if (toggleLabel) {
      toggleLabel.textContent = marked ? "看清样" : "看校样";
    }
    if (status) {
      status.textContent = marked
        ? "当前显示校样，红色为校对批注。"
        : "当前显示清样，校对批注已隐藏。";
    }
  }

  function setView(view, persist) {
    root.dataset.view = view;
    paintToggle();
    if (persist) {
      try {
        localStorage.setItem("proof-view", view);
      } catch (e) {}
    }
    window.requestAnimationFrame(afterLayout);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setView(viewIsMarked() ? "clean" : "marked", true);
    });
  }

  paintToggle();

  /* reading progress: the red line down the binding margin */
  function setProgress(value) {
    if (!sheet) return;
    var clamped = Math.max(0, Math.min(1, value));
    progressValue = clamped;
    sheet.style.setProperty("--progress", clamped.toFixed(4));
    if (bar) {
      bar.style.setProperty("--progress", clamped.toFixed(4));
    }
  }

  function placeRail() {
    if (!sheet) return;
    var x = rule ? rule.getBoundingClientRect().left : sheet.getBoundingClientRect().left;
    sheet.style.setProperty("--rail-x", Math.round(x) + "px");
  }

  /* active section tab */
  function setActiveSection(id) {
    if (id === currentSection) return;
    currentSection = id;
    tabs.forEach(function (tab) {
      var active = tab.getAttribute("data-section") === id;
      if (active) {
        tab.setAttribute("aria-current", "true");
      } else {
        tab.removeAttribute("aria-current");
      }
    });
  }

  function onScroll() {
    if (!sheet) return;
    var rect = sheet.getBoundingClientRect();
    var viewport = window.innerHeight;
    var total = rect.height - viewport;
    setProgress(total > 0 ? -rect.top / total : 0);

    var line = window.scrollY + Math.min(viewport * 0.42, 420);
    var active = "";
    for (var i = 0; i < sections.length; i += 1) {
      var section = sections[i];
      if (!section) continue;
      var top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= line) {
        active = section.id;
      }
    }
    setActiveSection(active);
  }

  var ticking = false;
  function requestScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      onScroll();
    });
  }

  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", function () {
    placeRail();
    sizeTabs();
    onScroll();
  });

  /* tab extent follows how much page each section owns */
  function sizeTabs() {
    if (window.innerWidth <= 900 || !sheet) return;
    var sheetHeight = sheet.offsetHeight || 1;
    sections.forEach(function (section, index) {
      var tab = tabs[index];
      if (!section || !tab) return;
      var share = section.offsetHeight / sheetHeight;
      var height = Math.round(26 + share * 230);
      tab.style.setProperty("--tab-h", Math.max(28, Math.min(70, height)) + "px");
    });
  }

  function afterLayout() {
    sizeTabs();
    placeRail();
    onScroll();
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(afterLayout);
  } else {
    window.addEventListener("load", afterLayout);
  }

  if ("ResizeObserver" in window) {
    var ro = new ResizeObserver(function () {
      sizeTabs();
      placeRail();
    });
    if (sheet) ro.observe(sheet);
  }

  afterLayout();
})();
