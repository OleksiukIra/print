
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

function toggleClass(el, className) {
    if (hasClass(el, className)) {
        removeClass(el, className);
    } else {
        addClass(el, className);
    }
}


var hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.onclick = function () {
    var menu = document.getElementById('menu');
    toggleClass(menu, 'menu--show');
} 
    

var link = document.getElementsByClassName('arrow');
for (var i = 0; i < link.length; i++){
    link[i].onclick = function(e) {
        e.preventDefault();
        var el = e.target.nextElementSibling;
        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }
}
