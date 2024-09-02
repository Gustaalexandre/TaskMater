   // Pegar os elementos da modal e o botão
   var modal = document.getElementById("myModal");
   //meses
   var jan = document.getElementById("jan");
   var fev = document.getElementById("fev");
   var mar = document.getElementById("mar");
   var abr = document.getElementById("abr");
   var mai = document.getElementById("mai");
   var jun = document.getElementById("jun");
   var jul = document.getElementById("jul");
   var ago = document.getElementById("ago");
   var set = document.getElementById("set");
   var out = document.getElementById("out");
   var nov = document.getElementById("nov");
   var dez = document.getElementById("dez");

   var texto = document.getElementById('txtModal');

   var span = document.getElementsByClassName("close")[0];
   var criar = document.querySelector('a#button_criar');
   
   
   function defineMes(m){ //de acordo com o criar vai definir em qual mês a nota vai entrar
        if (Number(m) == 1){
           
            texto.innerHTML = "adicionar informação"// implementar para adicionar em janeiro
        }
   }
   
   
   
   // Quando o usuário clicar no botão, abre a modal
   
   criar.onclick = function(){  //modal do botão criar
    modal.style.display = 'block';
    var input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Informe o título...")
   }
   
   jan.onclick = function() { //modal do botão janeiro
       modal.style.display = "block";
       
   }

   fev.onclick = function(){
        modal.style.display = "block";
   }    

   // Quando o usuário clicar no "x", fecha a modal
   span.onclick = function() {
       modal.style.display = "none";
   }

   // Quando o usuário clicar fora da modal, fecha
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }