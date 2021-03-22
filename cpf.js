window.addEventListener('load', function(){
    document.querySelector("#btn").addEventListener('click',function(){
        verificaCPF();
    });
});

function verificaCPF(){

var numero= document.querySelector('#cpf').value;

var somadv1= numero.charAt(0)*10+
             numero.charAt(1)*9+
             numero.charAt(2)*8+
             numero.charAt(3)*7+
             numero.charAt(4)*6+
             numero.charAt(5)*5+
             numero.charAt(6)*4+
             numero.charAt(7)*3+
             numero.charAt(8)*2;

var restodv1=somadv1 % 11;

if(restodv1<=1){
    var dv1 = 0;
} else { 
    var dv1 = 11 - restodv1;
}

if (dv1 != numero.charAt(9)){
    alert('CPF Inválido');
}

var somadv2= numero.charAt(0)*11+ 
             numero.charAt(1)*10+ 
             numero.charAt(2)*9+ 
             numero.charAt(3)*8+ 
             numero.charAt(4)*7+ 
             numero.charAt(5)*6+ 
             numero.charAt(6)*5+ 
             numero.charAt(7)*4+ 
             numero.charAt(8)*3+ 
             dv1*2;

var restodv2 = somadv2 % 11;

if(restodv2<=1){
    var dv2 = 0;
} else { 
    var dv2 = 11 - restodv2;
}

if (dv2 != numero.charAt(10)){
    alert("CPF Inválido");
    return false;
}
alert("Enviado com Sucesso")
return true
}