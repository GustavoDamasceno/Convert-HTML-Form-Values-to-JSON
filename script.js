// --------------------------------  Gerar casos de testes com CPF's válidos -------------------------------------//
function gerarCpf() {
  const n1 = aleatorio(), n2 = aleatorio(), n3 = aleatorio(), d1 = dig(n1, n2, n3);
  return `${n1}${n2}${n3}${d1}${dig(n1, n2, n3, d1)}`;
}

function dig(n1, n2, n3, n4) { 
  let nums = n1.split("").concat(n2.split(""), n3.split(""), [n4]), x = 0;  
  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) x += +nums[j] * i;
  return (y = x % 11) < 2 ? 0 : 11 - (y = x % 11); 
}

const aleatorio = () => ("" + Math.floor(Math.random() * 999)).padStart(3, '0');

document.getElementById("cpf1").value = gerarCpf();
document.getElementById("cpf2").value = gerarCpf();
document.getElementById("cpf3").value = gerarCpf();
document.getElementById("cpf4").value = gerarCpf();
document.getElementById("cpf5").value = gerarCpf();
document.getElementById("cpf6").value = gerarCpf();
document.getElementById("cpf7").value = gerarCpf();


// Função que gera número aleatório, utilizado nas duas funções abaixo
function numeroaleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --------------------------------  Gerar casos de testes com Nomes ---------------------------------------------//
function gerarNome() {
  var nomes = ['Gustavo Damasceno', 'Mateus Oliveira', 'Ricardo Pereira', 'José Silva', 'João Lins', 'Jonas Bezerra', 
  'Gabriel Campos', 'Lucas Pontes', 'Vinicius Cantante', 'Pedro Sgobi', 'Marcelo Lins', 'João Herz', 'Cláudio Hubermann', 
  'Tiago Silva', 'Leandro Nascimento', 'Marcos Weitz', 'Pablo Santos', 'Renan Rocha', 'Daniela Pereira', 'Daniela Carvalho',
  'Rodrigo Costa', 'Fernando Moura', 'Renan Souza', 'Marcelo Martins', 'Halana Silvana', 'Cesár Augusto'];
 
  return nomes[numeroaleatorio(0, 25)];
}

document.getElementById("nome1").value = gerarNome();
document.getElementById("nome2").value = gerarNome();
document.getElementById("nome3").value = gerarNome();
document.getElementById("nome4").value = gerarNome();
document.getElementById("nome5").value = gerarNome();
document.getElementById("nome6").value = gerarNome();
document.getElementById("nome7").value = gerarNome();

// --------------------------------  Gerar casos de testes com Cidades ---------------------------------------------//

function gerarCidade() {
  var cidades = ['Fortaleza', 'Mossoró', 'Teresina', 'Natal', 'Sobral', 'Quixadá', 'Juazeiro do Norte', 'Quixeramobim',
  'Eusebio'];
 
  return cidades[numeroaleatorio(0, 8)];
}

document.getElementById("cidade1").value = gerarCidade();
document.getElementById("cidade2").value = gerarCidade();
document.getElementById("cidade3").value = gerarCidade();
document.getElementById("cidade4").value = gerarCidade();
document.getElementById("cidade5").value = gerarCidade();
document.getElementById("cidade6").value = gerarCidade();
document.getElementById("cidade7").value = gerarCidade();

// --------------------------------  Converter FORM para JSON ---------------------------------------------//
function formToJSON(table){//begin function

//array to hold the key name
var keyName;

//array to store the keyNames for the objects
var keyNames = [];

//array to store the objects
var objectArray = [];

//get the number of cols
var numOfCols = table.rows[0].cells.length;

//get the number of rows
var numOfRows = table.rows.length;

//add the opening [ array bracket
objectArray.push("[");
  
//loop through and get the propertyNames or keyNames
for(var i = 0; i < numOfCols; i++){//begin for loop  
     
//store the html of the table heading in the keyName variable
keyName = table.rows[0].cells[i].innerHTML;
  
//add the keyName to the keyNames array
keyNames.push(keyName);
    
}//end for loop
  
//loop through rows
for(var i = 1; i < numOfRows; i++){//begin outer for loop    
    
//add the opening { object bracket
objectArray.push("{\n");
            
for(var j=0; j < numOfCols; j++){//begin inner for loop   
    
//extract the text from the input value in the table cell
var inputValue = table.rows[i].cells[j].children[0].value;
    
  //store the object keyNames and its values
 objectArray.push("\"" + keyNames[j] + "\":" + "\"" + inputValue + "\"");

//if j less than the number of columns - 1(<-- accounting for 0 based arrays)
if(j < (numOfCols - 1)){//begin if then
  
  //add the , seperator
  objectArray.push(",\n");
  
}//end if then    
    
  }//end inner for loop
    
    //if i less than the number of rows - 1(<-- accounting for 0 based arrays)
    if(i < (numOfRows - 1)){//begin if then
    
      //add the closing } object bracket followed by a , separator
      objectArray.push("\n},\n");
    
  }
    else{
      
      //add the closing } object bracket
      objectArray.push("\n}");
      
    }//end if then else
  
  }//end outer for loop

   //add the closing ']' array bracket
   objectArray.push("]");
  
  return objectArray.join("");
  
}//end function

$("#test-form").on("submit",function(e){
  
  //stop form form submitting
  e.preventDefault();
  
  //the table object 
  var table = $("#json-table")[0];
  
  //display the results
$("#results").val(formToJSON(table));  
  
});



