var palavra = [];

var forca = [];

var forcaAux = [];

var chances = 5;

var vitoria = 0;

var length = 0;

var value = 0;

var reiniciar = false;

var retornoAux = 0;

var retorno = 0;

var aux = 0;

var string = [];

var stringB = [];

var boolean = false;

//-----------------------------------------------------------------------------------------------------Variáveis acima

function enter(e){

      if (e.keyCode == 13){
      
        apagaECria();

      }

}

document.getElementById("palavraPrincipal").onkeydown = enter;

//-----------------------------------------------------------------------------------------------------Funtion teste Enter

function confirma() {

  

   reiniciar = confirm('Você  deseja reiniciar?');

  if (reiniciar) {

       location.reload();

  } else {

    document.getElementById("completo").innerHTML ='<button type="button" id="reload"  class="a" onclick=confirma()>Reiniciar</button>'+ '<h2 id="agradecer" ">Obrigado por jogar!!</h2';

  }

};

//--------------------------------------------------------------------------------------------------------Funtion que reinicia o jogo

function apagaECria() {



  document.getElementById("jogo").style.display = "none";

  value = document.getElementById("formulario").elements.item(0).value;

  

  length = document.getElementById("formulario").elements.item(0).value.length;

  if (length === 0) {

    alert('Digite pelo menos uma letra!');

    location.reload();


  }


  

  var hint = document.getElementById("formulario").elements.item(1).value;
  //--------------------------------------------------------------------------------

  for (var i = 0; i < length; i++) {

    palavra[i] = value.charAt(i);

    forcaAux[i] = " _ ";

    forca = forcaAux.join('');

  }

  

  stringB = value;

  document.getElementById("imgForca").innerHTML = '<img  id="ForcaIMG" src="images/forcacerta.png" alt="Forca">';
  
  

  document.getElementById("forca").innerHTML = forca;

  document.getElementById("introducao").innerHTML = '<br><br> Dica : <br><br>';

  document.getElementById("dica").innerHTML = hint + '<br><br>';

  document.getElementById("input2").innerHTML = 'Letra';

    document.getElementById("input").innerHTML = '<form id="formularioB"><input id="letras" type="text" maxlength="1"><button type="button" id="verifica" onclick=verificaLetra()> Confirmar </button></form>' + '<br><br>';

  document.getElementById("input3").innerHTML = '<button type="button" id="resposta" onclick=resposta()>Resposta </button>' + '<br><br>' + '<button type="button" id="reload" onclick=confirma()>Reiniciar</button>';

};


//-----------------------------------------------------------------------------------------------------------------------Function que monta estrutura para o jogo

function verificaLetra() {

  var letra = document.getElementById("formularioB").elements.item(0).value;

  var tamanholetra = document.getElementById("formularioB").elements.item(0).value.length;

  if (tamanholetra !== 0) {

    document.getElementById("erro").style.display = "none";

    value = document.getElementById("formulario").elements.item(0).value;

    // -------------------------------------------------------------------------------
    value = value.toLowerCase();

    letra = letra.toLowerCase();

    retorno = value.indexOf(letra);

    if (retorno !== -1) {

      while (retorno !== -1) {

        vitoria++;

        forcaAux[retorno] = value.charAt(retorno);

        forca = forcaAux.join('');

        palavra[retorno] = '_';

        stringB = palavra.join('');

        retorno = stringB.indexOf(letra);

      }

      document.getElementById("forca").innerHTML = forca;

      document.getElementById("formularioB").elements.item(0).value = '';

      if (vitoria === length) {

        alert('Você ganhou!!');

        confirma();

      }

    } else {

      chances--;

      document.getElementById("formularioB").elements.item(0).value = '';

      if(chances===4){

        document.getElementById("cabeca").innerHTML='<img id="cabecaIMG" src="images/cabeca.png" alt="Forca">';

      }if(chances===3){

document.getElementById("corpo").innerHTML='<img id="corpoIMG" src="images/corpo.png" alt="Forca">';
  


      }if(chances===2){

        document.getElementById("bracoD").innerHTML='<img id="bracoDIMG" src="images/bracodir.png" alt="Forca">';
  



      }if(chances===1){


        document.getElementById("bracoE").innerHTML='<img id="bracoEIMG" src="images/bracoesq.png" alt="Forca">';
   

      }if(chances===0){

        document.getElementById("pernaD").innerHTML='<img id="pernaDIMG" src="images/pernaDir.png" alt="Forca">';
  


      }

      
    }

    if (chances === -1) {

      document.getElementById("forca").innerHTML = 'Resposta:'+' '+value;

      document.getElementById("pernaE").innerHTML='<img id="pernaEIMG" src="images/pernaEsq.png" alt="Forca">';

      document.getElementById("cabeca").innerHTML='<img id="cabecaIMG" src="images/cabecaaa.png" alt="Forca">';

      document.getElementById("input2").innerHTML = 'Clique abaixo em reiniciar!';

      

    // confirma();

    }

  } else {

    document.getElementById("erro").style.display = "inline";
    document.getElementById("erro").innerHTML = '<h3>Digite uma letra!</h3>'

  }

};


//------------------------------------------------------------------------------------------------------------------------Funtion que valida as letras digitadas


function resposta() {

  var resp = prompt("Digite a palavra!");

  if (resp === value) {

    alert('Você venceu!!');

    confirma();

  } else {

    alert('Você perdeu!!');

    confirma();

  }

};