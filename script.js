document.addEventListener('DOMContentLoaded', function () {
    let valor = 0;
    let strenghInput = document.getElementById('strengh');
    
    strenghInput.addEventListener('input', contador);

    function contador() {
        let strengh = parseInt(strenghInput.value);

        if (isNaN(strengh)) {
            console.log('Valor Incorreto');
        } else if (strengh >= 11 && strengh <= 20) {
            valor = 10 * (strengh - 10);
            console.log(valor);
        } else if (strengh >= 1 && strengh <= 9) {
            valor = -(10 * (10 - strengh));
            console.log(valor);
        } else if (strengh === 10) {
            console.log(valor);
        } 
    }

});