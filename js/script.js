$(document).ready(function(){
    $("#mascaraCpf").mask("999.999.999-99");
    $("#mascaraCep").mask("99999-999");
    $("#mascaraNascimento").mask("99/99/9999");
    
    $("#mascaraNascimento").change(function(){
        var value = $(this).val();
        if(value.lenght < 10 || value.lenght > 10){
            alert("Data inserida é inválida");
        };
    });

    $("#mascaraSalarial").priceFormat({
        prefix: "R$",
        centsSeparator: ",",
        thousandsSeparator: "."
    });

});