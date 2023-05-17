window.onload = function() {
    // get the menuLocation element by ID
    var menuLocation = document.getElementById("menuLocation");
    // get the element you want to scroll to by ID
    var scrollToThis = document.getElementById("scrollToThis");
    // set the scrollTop property of menuLocation to the top of the scrollToThis element
    menuLocation.scrollTop = scrollToThis.offsetTop;
};
