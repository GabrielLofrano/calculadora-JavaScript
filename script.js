let reset = false;
let resultNumber = 0;


function inserir(num) {
    aux = Number(num);

    if(reset && typeof(aux) == 'number' && num != '*' && num != '+' && num != '-' && num != '/' && num != '%' && num != ','){
        document.getElementById('inputResult').value = "";
    }

    reset = false;
    let numero = document.getElementById('inputResult').value;
    document.getElementById('inputResult').value = numero + num;
}

document.getElementById("buttonClear").onclick = function () {
    document.getElementById('inputResult').value = "";

}

document.getElementById("buttonErase").onclick = function () {
    result = document.getElementById('inputResult').value;
    result = result.substring(0, result.length - 1)
    document.getElementById('inputResult').value = result;
}


function resultado () {
    try{
    result = document.getElementById('inputResult').value;
    document.getElementById('inputResult').value = eval(result);
    reset = true;

    }
    catch(err) {
        document.getElementById('inputResult').value = "";
    }

}


document.getElementById("buttonChange").onclick = function () {
    result = document.getElementById('inputResult').value;
    if (result[0] == "-"){
        result = result.replace("-", "");
        document.getElementById('inputResult').value = result;
    } else {
        result = [result.slice(0, 0), '-', result.slice(0)].join('');
        document.getElementById('inputResult').value = result;
    }
}