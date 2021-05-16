$(document).ready(() => {
    var path = window.location.href; 
    $("#sidebar #sidenavAccordion a.nav-link").each(function() {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

})