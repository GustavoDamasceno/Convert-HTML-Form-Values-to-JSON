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


// Função que gera número aleatório, utilizado nas funções abaixo
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

// --------------------------------  Gerar casos de testes com email ---------------------------------------------//

function gerarEmail() {
  var emails = ['eng.damasceno@alu.ufc.br', 'gustavo.de.damasceno@gmail.com', 'guilherme.silvadf@gmail.com', 
  'casoteste@gmail.com', 'jonas_teste@gmail.com', 'gdcampos@solarbr.com.br', 'gustavo-de-campos@hotmail.com', 'jpsilcren@gmail.com',
  'olivper_re@gmail.com', 'hisst_vnd@gmailcom', 'marceloisaer@gmail.com', 'palestra1234@gmail.com'];
 
  return emails[numeroaleatorio(0, 8)];
}

document.getElementById("email1").value = gerarEmail();
document.getElementById("email2").value = gerarEmail();
document.getElementById("email3").value = gerarEmail();
document.getElementById("email4").value = gerarEmail();
document.getElementById("email5").value = gerarEmail();
document.getElementById("email6").value = gerarEmail();

// --------------------------------  Gerar casos de testes com data de nascimento ---------------------------------------------//
function gerarData() {
  const dia = numeroaleatorio(1, 30);
  const mes = numeroaleatorio(1, 12);
  const ano = numeroaleatorio(1975, 2002);

  const data = dia + '/' + mes + '/' + ano;

  return data;
}

document.getElementById("dataNascimento1").value = gerarData();
document.getElementById("dataNascimento2").value = gerarData();
document.getElementById("dataNascimento3").value = gerarData();
document.getElementById("dataNascimento4").value = gerarData();
document.getElementById("dataNascimento5").value = gerarData();
document.getElementById("dataNascimento6").value = gerarData();

// --------------------------------  Gerar casos de testes com data de Estado ---------------------------------------------//

switch (document.getElementById("cidade1").value) {
  case "Fortaleza":
    document.getElementById("estado1").value = 'CE';
    break;
  case "Mossoró":
    document.getElementById("estado1").value = 'RN';
    break;
  case "Teresina":
    document.getElementById("estado1").value = 'PI';
    break;
  case "Natal":
    document.getElementById("estado1").value = 'RN';
    break;
  case "Sobral":
    document.getElementById("estado1").value = 'CE';
    break;
  case "Quixadá":
    document.getElementById("estado1").value = 'CE';
    break;
  case "Juazeiro do Norte":
    document.getElementById("estado1").value = 'CE';
    break;
  case "Quixeramobim":
    document.getElementById("estado1").value = 'CE';
    break;
  case "Eusebio":
    document.getElementById("estado1").value = 'CE';
    break;
}

switch (document.getElementById("cidade2").value) {
  case "Fortaleza":
    document.getElementById("estado2").value = 'CE';
    break;
  case "Mossoró":
    document.getElementById("estado2").value = 'RN';
    break;
  case "Teresina":
    document.getElementById("estado2").value = 'PI';
    break;
  case "Natal":
    document.getElementById("estado2").value = 'RN';
    break;
  case "Sobral":
    document.getElementById("estado2").value = 'CE';
    break;
  case "Quixadá":
    document.getElementById("estado2").value = 'CE';
    break;
  case "Juazeiro do Norte":
    document.getElementById("estado2").value = 'CE';
    break;
  case "Quixeramobim":
    document.getElementById("estado2").value = 'CE';
    break;
  case "Eusebio":
    document.getElementById("estado2").value = 'CE';
    break;
}


switch (document.getElementById("cidade3").value) {
  case "Fortaleza":
    document.getElementById("estado3").value = 'CE';
    break;
  case "Mossoró":
    document.getElementById("estado3").value = 'RN';
    break;
  case "Teresina":
    document.getElementById("estado3").value = 'PI';
    break;
  case "Natal":
    document.getElementById("estado3").value = 'RN';
    break;
  case "Sobral":
    document.getElementById("estado3").value = 'CE';
    break;
  case "Quixadá":
    document.getElementById("estado3").value = 'CE';
    break;
  case "Juazeiro do Norte":
    document.getElementById("estado3").value = 'CE';
    break;
  case "Quixeramobim":
    document.getElementById("estado3").value = 'CE';
    break;
  case "Eusebio":
    document.getElementById("estado3").value = 'CE';
    break;
}


switch (document.getElementById("cidade4").value) {
  case "Fortaleza":
    document.getElementById("estado4").value = 'CE';
    break;
  case "Mossoró":
    document.getElementById("estado4").value = 'RN';
    break;
  case "Teresina":
    document.getElementById("estado4").value = 'PI';
    break;
  case "Natal":
    document.getElementById("estado4").value = 'RN';
    break;
  case "Sobral":
    document.getElementById("estado4").value = 'CE';
    break;
  case "Quixadá":
    document.getElementById("estado4").value = 'CE';
    break;
  case "Juazeiro do Norte":
    document.getElementById("estado4").value = 'CE';
    break;
  case "Quixeramobim":
    document.getElementById("estado4").value = 'CE';
    break;
  case "Eusebio":
    document.getElementById("estado4").value = 'CE';
    break;
}


switch (document.getElementById("cidade5").value) {
  case "Fortaleza":
    document.getElementById("estado5").value = 'CE';
    break;
  case "Mossoró":
    document.getElementById("estado5").value = 'RN';
    break;
  case "Teresina":
    document.getElementById("estado5").value = 'PI';
    break;
  case "Natal":
    document.getElementById("estado5").value = 'RN';
    break;
  case "Sobral":
    document.getElementById("estado5").value = 'CE';
    break;
  case "Quixadá":
    document.getElementById("estado5").value = 'CE';
    break;
  case "Juazeiro do Norte":
    document.getElementById("estado5").value = 'CE';
    break;
  case "Quixeramobim":
    document.getElementById("estado5").value = 'CE';
    break;
  case "Eusebio":
    document.getElementById("estado5").value = 'CE';
    break;
}


switch (document.getElementById("cidade6").value) {
  case "Fortaleza":
    document.getElementById("estado6").value = 'CE';
    break;
  case "Mossoró":
    document.getElementById("estado6").value = 'RN';
    break;
  case "Teresina":
    document.getElementById("estado6").value = 'PI';
    break;
  case "Natal":
    document.getElementById("estado6").value = 'RN';
    break;
  case "Sobral":
    document.getElementById("estado6").value = 'CE';
    break;
  case "Quixadá":
    document.getElementById("estado6").value = 'CE';
    break;
  case "Juazeiro do Norte":
    document.getElementById("estado6").value = 'CE';
    break;
  case "Quixeramobim":
    document.getElementById("estado6").value = 'CE';
    break;
  case "Eusebio":
    document.getElementById("estado6").value = 'CE';
    break;
}
// --------------------------------  Gerar casos de testes com empresa ---------------------------------------------//

document.getElementById("empresa1").value = 'FFOR';
document.getElementById("empresa2").value = 'FFOR';
document.getElementById("empresa3").value = 'FFOR';
document.getElementById("empresa4").value = 'FFOR';
document.getElementById("empresa5").value = 'FFOR';
document.getElementById("empresa6").value = 'FFOR';

// --------------------------------  Gerar casos de testes com telefone ---------------------------------------------//

function gerarTelefone(){
  const ddd = numeroaleatorio(85, 88);
  const firstgroup = numeroaleatorio(9880, 9989);
  const secondgroup = numeroaleatorio(5679, 5799);

  const number = ddd + '9' + firstgroup + secondgroup;

  return number;
}

document.getElementById("telefone1").value = gerarTelefone();
document.getElementById("telefone2").value = gerarTelefone();
document.getElementById("telefone3").value = gerarTelefone();
document.getElementById("telefone4").value = gerarTelefone();
document.getElementById("telefone5").value = gerarTelefone();
document.getElementById("telefone6").value = gerarTelefone();

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



