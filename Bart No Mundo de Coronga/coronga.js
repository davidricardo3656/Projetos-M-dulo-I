var cenario = document.getElementsByClassName("cenario");
var imagemdocenario = document.getElementsByClassName("imagemdocenario");
var decisao = document.getElementsByClassName("decisao");
var botaosim = document.querySelectorAll("button.sim");
var botaonao = document.querySelectorAll("button.nao");
var botaorecomecar = document.querySelectorAll("button.recomecar");
var botaoiniciar = document.querySelectorAll("button.iniciar");



function iniciar (){
    cenario[0].innerHTML = "Será que você sobrevive a essa sufocante aventura?";
    imagemdocenario[0].src = "aventuras.png";
    decisao[0].innerHTML = "Inicie o jogo";
    botaosim[0].style.display = "none";
    botaonao[0].style.display = "none";
    botaorecomecar[0].style.display = "none";
    botaoiniciar[0].style.display = "block";
    botaoiniciar[0].onclick = iniciodejogo;
}

iniciar()

function iniciodejogo (){
    cenario[0].innerHTML = "Bart acorda no mundo de coronga";
    imagemdocenario[0].src = "acorda.jpg";
    botaosim[0].style.display = "block";
    botaonao[0].style.display = "block";
    decisao[0].innerHTML = "Você vai sair de casa?";
    botaoiniciar[0].style.display = "none";
    botaosim[0].onclick = saiunarua;
    botaonao[0].onclick = naosaiunarua;
}


function saiunarua (){
    cenario[0].innerHTML = "Bart Morreu Corongado";
    imagemdocenario[0].src = "morreu.jpg";
    decisao[0].innerHTML = "Recomeçar o Jogo?";
    botaosim[0].style.display = "none";
    botaonao[0].style.display = "none";
    botaorecomecar[0].style.display = "block";
    botaorecomecar[0].onclick = iniciar;
}


function naosaiunarua (){
    cenario[0].innerHTML = "Então vamos para o PC aprender a programar!!!";
    imagemdocenario[0].src = "vaiestudar.jpg";
    decisao[0].innerHTML = "Fez projetos e exercícios?";
    botaosim[0].style.display = "block";
    botaonao[0].style.display = "block";
    botaorecomecar[0].style.display = "nome";
    botaosim[0].onclick = fezdireitinho;
    botaonao[0].onclick = naofezdireitinho;
}

function fezdireitinho (){
    cenario[0].innerHTML = "PARABÉNS!!";
    imagemdocenario[0].src = "passou.gif";
    decisao[0].innerHTML = "Você criou portfólio, fez case de entrevista e passou"; 
    botaosim[0].style.display = "none";
    botaonao[0].style.display = "none";    
    botaorecomecar[0].style.display = "block";
    botaorecomecar[0].onclick = iniciar;
}

function naofezdireitinho (){
    cenario[0].innerHTML = "QUE PENA...";
    imagemdocenario[0].src = "chorando.jpg";
    decisao[0].innerHTML = "Não conseguiu fazer case das entrevistas né meu filho... Tente novamente"; 
    botaosim[0].style.display = "none";
    botaonao[0].style.display = "none";    
    botaorecomecar[0].style.display = "block";
    botaorecomecar[0].onclick = iniciar;
}
























