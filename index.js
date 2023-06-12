function ePrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
}
  
function listarNumerosPrimos() {
    var primos = [];
  
    for (var i = 1; i <= 1000; i++) {
      if (ePrimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;


console.log(listarNumerosPrimos());
}

function validarSenha(senha) {
    if (senha.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }
  

    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
  
    for (var i = 0; i < senha.length; i++) {
      var caractere = senha[i];
  
      if (caractere >= "A" && caractere <= "Z") {
        temMaiuscula = true;
      } else if (caractere >= "a" && caractere <= "z") {
        temMinuscula = true;
      } else if (caractere >= "0" && caractere <= "9") {
        temNumero = true;
      }
    }
  
    if (!temMaiuscula || !temMinuscula || !temNumero) {
      return "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
    }
  
    return "A senha é válida.";
}
  
  
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    var resultado = 1;
  
    for (var i = 2; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  for (var i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é: ${calcularFatorial(i)}`);
}

function qpft(num) {
    var raiz = Math.sqrt(num);
    return raiz % 1 === 0;

}  