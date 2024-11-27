document.addEventListener("DOMContentLoaded", function() {
    fetch('./emails.json')
        .then(response => response.json())
        .then(data => {
            const emails = data.emails;
            const randomEmail = emails[Math.floor(Math.random() * emails.length)];
            document.getElementById('Email').value = randomEmail;
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});

function copyText(link) {

    var inputTest = document.createElement("input");
    var linkPage = "https://empreenda.digito1.com.br/VotoPopular/Voto/" + link;

    inputTest.value = linkPage;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest);
};

var onloadCallback = function () {
    var valor1 = Math.floor((Math.random() * 10) + 1);
    var valor2 = Math.floor((Math.random() * 10) + 1);

    document.querySelector("#valor1").textContent = valor1;
    document.querySelector("#valor2").textContent = valor2;
    document.querySelector("#btEnviar").setAttribute("disabled", "disabled");
};

document.getElementById('totalvalores').onchange = function () { validateCount(); };

function validateCount() {
    ValidacaoVoto();
    }

document.getElementById('Email').onchange = function () { validateEmail(); };

function validateEmail() {
    ValidacaoVoto();
}

function AceitaEmailChk() {
    ValidacaoVoto();

}

function calcularTotal() {
    // Obtém os elementos
    var valor1 = document.querySelector("#valor1").textContent;
    var valor2 = document.querySelector("#valor2").textContent;

 
    // Converte para números e realiza a soma
    var total = (parseInt(valor1) + parseInt(valor2));
  
    // Atribui o resultado ao input
    document.getElementById("totalvalores").value = total;

    ValidacaoVoto();    
  }


function ValidacaoVoto()
{
    var chkAceite = document.querySelector("#chkAceite").checked;
    var responseEmail = document.querySelector("#Email").value;
    var re = /\S+@\S+\.\S+/;
    var resp = re.test(responseEmail);
    var Conta = false;
    var totalvalores = document.querySelector("#totalvalores").value;
    var valor1 = document.querySelector("#valor1").textContent;
    var valor2 = document.querySelector("#valor2").textContent;

    let warningEmail = document.querySelector("#warning-email");
    let warning = document.querySelector("#warning-message");

    if (resp == false) {
        warningEmail.innerHTML = "Email inv&aacute;lido";
    }
    else {
        warningEmail.innerHTML = "";
    }


    if (totalvalores == (parseInt(valor1) + parseInt(valor2))) {
        warning.innerHTML = "Clique no botão abaixo para registrar";
        Conta = true;
        // libera botão enviar
        $('#btEnviar').removeAttr('disabled');        

    } else {
        warning.innerHTML = "";
        Conta = true;
        // libera botão enviar
        $('#btEnviar').removeAttr('disabled');        
    }

//    if (resp && Conta && chkAceite) {
//        grecaptcha.render('html_element', {
//            'sitekey': '6LdI8mEaAAAAAEiEL6xDfkB70ZCEpf8-beMdQqTF',
//            'callback': correctCaptcha
//        });
//    }


}

function votacao(Id, Categoria, Nome) {
    
    $('#VotacaoEquipes').modal('show');
    document.querySelector("#lblEquipe").innerHTML = Nome;
    document.querySelector("#lblCategoria").innerHTML = Categoria;
    document.querySelector("#lblId").innerHTML = Id;
    document.querySelector("#IdVot").value = Id;
    document.querySelector("#btEnviar").setAttribute("disabled", "disabled");

}
function correctCaptcha() {
    $('#btEnviar').removeAttr('disabled');
}

function enviar() {
//    var response = grecaptcha.getResponse();
    var response = "09ANOXeZzQ0IZMKeUwS3WIlUdvrO9JN4Bp_ugX9GYKZm5W0VJCvTON-HZhdmT3Z6_mZrbfJlkGxvbXgUi1WD8ltimSiThvf-ZBJxmkLvduShgXthgsQ0GdqPxVVChGYYxY";
    //recaptcha failed validation

    

    if (response.length == 0) {
//        $('#recaptcha-error').show();
//        return false;
document.querySelector("#btEnviar").setAttribute("disabled", "disabled");
$('form').attr('action', '/VotoPopular/Categorias/');
$("form").submit();

    }
    //recaptcha passed validation
    else {
        document.querySelector("#btEnviar").setAttribute("disabled", "disabled");
        $('form').attr('action', 'https://empreenda.digito1.com.br/VotoPopular/Categorias/');
        $("form").submit();
    }

}