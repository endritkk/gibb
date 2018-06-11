function reload(){
    var elements = document.getElementsByClassName('biud');
    for (var i in elements) {
        elements[i].width = width + "px";
    }
};

width = 100;
reload();
window.onresize = function(event) {
    width =
    ;
    reload();
};

window.onload = function(event) {
    width = document.getElementById('crack').clientWidth;
    reload();
};