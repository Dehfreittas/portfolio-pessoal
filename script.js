/* Seleção dos elementos principais */
const formulario =
document.querySelector("#formContato");
const botaoTema = 
document.querySelector("#tema");

/* Validação e envio do formulário */
formulario.addEventListener(
"submit",

function(event){

event.preventDefault();


const nome =
document.querySelector("#nome").value.trim();

const email =
document.querySelector("#email").value.trim();

const mensagem =
document.querySelector("#mensagem").value.trim();

/* Verificar campos vazios */
if(
nome === "" ||
email === "" ||
mensagem === ""
){

alert(
"Preencha todos os campos."
);

return;

}

/* Validação simples do email */
const emailValido =
/^\S+@\S+\.\S+$/;


if(
!emailValido.test(email)
){

alert(
"Digite um email válido."
);

return;

}

/* Feedback de envio */
const botao = 
document.querySelector(
    "#formContato button"
);
botao.textContent = 
"Mensagem Enviada!";
alert(
    "Mensagem enviada com sucesso!"
)
/* Retorna texto original do botão */
setTimeout(
    function(){
botao.textContent = 
"Enviar";
},
2000
);

/* Limpa formulário */
formulario.reset();

}
);
/* Alternar entre o tema claro e escuro */
botaoTema.addEventListener(
    "click",
function(){
    document.body.classList.toggle(
        "dark"
    );
}
);
