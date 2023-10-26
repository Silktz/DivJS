let numerador = prompt('Digite o numerador....:');
let divisor = prompt('Digite o denominador....:');

produto = numerador / divisor;

if(divisor == 0){
    alert('Não é possivel dividir por zero')
}

else{ alert(`${numerador} dividido por ${divisor} é ${produto}`)}
