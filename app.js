
var cadena ="";
var final ="";
function Encriptar(){
    let box = document.querySelector('#mensaje').value; 
     
    for (i=0; i<box.length; i++){
        
        if (box[i]=="a"){
          final += 'enter';

        }
        else if (box[i]=="e"){
            final += 'imes';
  
          }
          else if (box[i]=="i"){
            final += 'ai';
  
          }
          else if (box[i]=="o"){
            final += 'ober';
  
          }
          else if (box[i]=="u"){
            final += 'ufat';
  
          } 
        
        else{
            final += box[i];
        }
        

    }

    console.log(final);
    initialConditions(final);
    final='';
    
}

function Desencriptar(){
   let final1 = document.querySelector('#mensaje').value;
   cadena=final1;
   exit = true;
   salir = true;
   do {
    var numberA = cadena.search('enter');
    var numberE = cadena.search('imes');
    var numberI = cadena.search('ai');
    var numberO = cadena.search('ober');
    var numberU = cadena.search('ufat');

    cadena = cadena.replace('enter','a');
    console.log(cadena);
     if (numberA >= 0)
    {
        cadena = cadena.replace('enter','a');
        console.log(cadena);
        
    }
    else if (numberE >= 0)
    {
        cadena = cadena.replace('imes','e');
        console.log(cadena);
      
    } 
    else if (numberI >= 0)
    {
        cadena = cadena.replace('ai','i');
        console.log(cadena);
     
    } 
    else if (numberO >= 0)
    {
        cadena = cadena.replace('ober','o');
        console.log(cadena);
       
    } 
    else if (numberU >= 0)
    {
        cadena = cadena.replace('ufat','u');
        console.log(cadena);
      
    } 
     else{
      exit=false;
     }
      

        
    
   }while(exit == true);

   initialConditions(cadena);
   cadena="";
}

function initialConditions(condiciones)
{
   document.querySelector('#hol').value=condiciones;
}

function copiarAlPortapapeles() {

    let inputText = document.getElementById('hol');
    inputText.select();
    inputText .setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputText.value);
  }