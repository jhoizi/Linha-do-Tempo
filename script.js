function iniciar(){
    dados = infos();
    for (i = 1; i <= 20; i++){
        document.getElementById("img"+i).setAttribute('src', dados[i-1]["img"]);
        document.getElementById("nome"+i).innerHTML = dados[i-1]["nome_autor"];
        document.getElementById("data"+i).innerHTML = dados[i-1]["periodo"];
    }
}

function show(id){
    var sli = document.getElementById("slides");
    var tela = document.body;
    var texto = document.getElementById("texto");
    da = infos();
    sli.style.visibility = "visible";
    tela.style.visibility = "hidden";
    
    texto.innerHTML = da[id]["nome_autor"];
}
function voltar(){
    var sli = document.getElementById("slides");
    var tela = document.body;
    sli.style.visibility = "hidden";
    tela.style.visibility = "visible";
}
function infos(){
    var dados = {0 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 1 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 2 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 3 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 4 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 5 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 6 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 7 : {nome_autor : "Albert Einstein", texto : "Nada demais", periodo : "1995-1996", img : "./imgs/lin-img1.png"},
                 14 : {nome_autor : "Pitágoras", texto : "Nada demais", periodo : "(570 a.C – 495 a.C.)", img : "./imgs/lin-img1.png"},
                 8 : {nome_autor : "Hipócrates de Cós", texto : "Nada demais", periodo : "(460 a.C.- 370 a.C.)", img : "./imgs/lin-img1.png"},
                 15 : {nome_autor : "Arquimedes", texto : "Nada demais", periodo : "(287 a.C.- 212 a.C.)", img : "./imgs/lin-img1.png"},
                 9 : {nome_autor : "Nicolau Copérnico", texto : "Nada demais", periodo : "(1473-1543)", img : "./imgs/lin-img1.png"},
                 16 : {nome_autor : "William Gilbert", texto : "Nada demais", periodo : "(1544-1603)", img : "./imgs/lin-img1.png"},
                 10 : {nome_autor : "Galileu Galilei", texto : "Nada demais", periodo : "(1564-1642)", img : "./imgs/lin-img1.png"},
                 17 : {nome_autor : "Von Guericke", texto : "Nada demais", periodo : "(1602-1686)", img : "./imgs/lin-img1.png"},
                 11 : {nome_autor : "Evangelista Torricelli", texto : "Nada demais", periodo : "(1608-1647)", img : "./imgs/lin-img1.png"},
                 18 : {nome_autor : "Blaise Pascal", texto : "Nada demais", periodo : "(1623-1662)", img : "./imgs/lin-img1.png"},
                 12 : {nome_autor : "Christiaan Huygens", texto : "Nada demais", periodo : "(1629-1695)", img : "./imgs/lin-img1.png"},
                 19 : {nome_autor : "Isaac Newton", texto : "Nada demais", periodo : "(1642-1727)", img : "./imgs/lin-img1.png"},
                 13 : {nome_autor : "Charles Darwin", texto : "Nada demais", periodo : "(1809-1882)", img : "./imgs/lin-img1.png"},};
    return dados;
}