function loadBody(p) {
    if (p != null && p != "") {
        if (typeof history.pushState === "undefined") {
            location.href = "https://adrianosmoutavelis.github.io/index.html?article=" + p;
        } else {
            $(".row > .midcolumn").load("articles/" + p + ".html");
            window.history.pushState({}, null, "/index.html?article=" + p);
        }
    }
}

function getParameterByName(e, n) {
    n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
    return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
}

    $(window).on("popstate", function(e) {
        if (e.originalEvent.state !== null) {
        location.reload()
        }
    });

$(document).ready(function() {
window.history.pushState(null, null, "");
    $(".topnav").load("menus/menutop.html"), $(".row > .leftcolumn").load("menus/menuleft.html"), $(".row > .rightcolumn").load("menus/menuright.html");
    var e = getParameterByName("article", window.location);
    null != e && "" != e || (e = "Startpage"), $(".row > .midcolumn").load("articles/" + e + ".html"), $(".img").css("background-image", "url(images/header/" + (Math.floor(3 * Math.random()) + 1) + ".jpg)")
});


