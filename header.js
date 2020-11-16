var lastScrollTop = 0;
var body = document.getElementsByTagName("body");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop)
    {
        header.style.top="-200px";
    }
    else
    {
        header.style.top="0";
    }
    lastScrollTop = scrollTop;
})
