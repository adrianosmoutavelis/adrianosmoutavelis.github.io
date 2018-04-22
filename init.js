function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setup() {

}

$(document).ready(function(){
   $('.topnav').load("menus/menutop.html");
   $('.row > .leftcolumn').load("menus/menuleft.html");
   $('.row > .rightcolumn').load("menus/menuright.html");
   var articleName = getParameterByName("article", window.location)
   if (articleName == null || articleName == "") {
     articleName = "Main";
   }
   $('.row > .midcolumn').load("articles/" + articleName + ".html");
   $('.img').css("background-image", "url(images/" + (Math.floor(Math.random() * 3) + 1)  + ".jpg)");
});
