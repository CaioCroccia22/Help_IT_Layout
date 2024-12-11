$(document).ready(function(){
    console.log('Olá');




    // JQuery Mask Plugin
    // Uso de mascara no campo de telefone
    $('#tel').mask('(00) 00000-0000');


    // JQuery Validate Plugin
    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            name: {
                required: true,
                minlength: 2
            }
        },
            messages: {
                email: {
                    required: "Por favor, insira seu endereço de e-mail.",
                    email: "Por favor, insira um e-mail válido."
                },
                tel: {
                    required: "Por favor, insira seu número de telefone."
                },
                name: {
                    required: "Por favor, insira seu nome completo.",
                    minlength: "Seu nome deve ter pelo menos 2 caracteres."
                }
            }
    });
})