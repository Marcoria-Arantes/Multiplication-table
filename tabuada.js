function gerarTabuada() {
let numero = prompt("Digite um número de 1 a 10:");

// Convertendo a entrada para número
numero = parseInt(numero);

// Verifica se o número está no intervalo válido
  if (numero >= 1 && numero <= 10) {
     let resultado = "";
        for (let i = 1; i <= 10; i++) {
           resultado += `${numero} x ${i} = ${numero * i}\n`;
               }
     document.getElementById("resultado").innerText = resultado; //mostra o resultado no site
        } else {
            alert("Por favor, insira um número de 1 a 10.");
   }
}