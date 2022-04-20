$(document).ready(function() {
  var winPath = window.location.pathname;
  var ploc = winPath + "";
  if(ploc.indexOf("/zh/") != -1) {
    if (window.location.pathname === '/zh/' || window.location.pathname === '/zh/home') {
        $(".lang-btn").prop("href", ploc.replace("/zh/", "/"));
        $(".lang-btn").text("ENG");
    }else {
        $(".lang-btn").prop("href", ploc.replace("/zh/", "/"));
        $(".lang-btn").text("ENG");
    }
  }
  else if(ploc.indexOf("/") != -1) {
      if (window.location.pathname === '/' || window.location.pathname === '/home') {
        $(".lang-btn").prop("href", ploc.replace("/", "/zh/home"));
        $(".lang-btn").text("中文");
    }else {
        $(".lang-btn").prop("href", ploc.replace("/", "/zh/"));
        $(".lang-btn").text("中文");
    }
  }
});