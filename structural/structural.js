//Eu iria usar o composite para montar uma estrutura onde os
//metodos seriam utilizados na ordem estabelecida da chamada
var Composicao = /** @class */ (function () {
    function Composicao() {
    }
    return Composicao;
}());
function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        document.querySelector('#result').innerHTML = eval(document.querySelector('#start').value);
        document.querySelector('code').innerText = eval(document.querySelector('#start').value);
    }
}
function negrito(value) {
    return "<b>" + value + "</b>";
}
function italico(value) {
    return "<i>" + value + "</i>";
}
function span(value) {
    return "<span>" + value + "</span>";
}
function p(value) {
    return "<p>" + value + "</p>";
}
function a(value) {
    return "<a>" + value + "</a>";
}
