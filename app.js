function calcularIMC() {
    let pesoStr = document.getElementById("Peso").value;
    let alturaStr = document.getElementById("Altura").value;

    const peso = pesoStr.replace(/[^0-9]/g, ".");
    const altura = alturaStr.replace(/[^0-9]/g, ".");
    let resultado = document.getElementById("resultado");

    let result = Number(peso) / (Number(altura) * Number(altura));

    if (pesoStr == "" || alturaStr == 0) {
      return;
    }
     else if (result.toFixed(2) < 18.5) {

        updateApp()
        resultado.innerHTML = `<h3 id='resultado'> Seu IMC
            é <br> ${result.toFixed(2)} Magreza 
        </h3>`;
        
        document.querySelector(".arrow-1").classList.add('on')

    } else if (result.toFixed(2) >= 18.5 && result.toFixed(2) < 24.9) {
        updateApp()
      resultado.innerHTML = `<h3 id='resultado'> Seu IMC
      é <br> ${result.toFixed(2)} Normal
        </h3>`;
        document.querySelector(".arrow-2").classList.add('on')

    }
     else if (result.toFixed(2) >= 25 && result.toFixed(2) < 29.9) {
        updateApp()
      resultado.innerHTML = `<h3 id='resultado'>
      Seu IMC
      é <br> ${result.toFixed(2)} Acima do peso
        </h3>`;
        document.querySelector(".arrow-3").classList.add('on')

    }
     else if (result.toFixed(2) >= 30 && result.toFixed(2) < 39.9) {
        updateApp()
      resultado.innerHTML = `<h3 id='resultado'>
      Seu IMC
      é <br>  ${result.toFixed(2)} Obesidade
        </h3>`;
        document.querySelector(".arrow-4").classList.add('on')
    }
     else if (result.toFixed(2) >= 40) {
      resultado.innerHTML = `<h3 id='resultado'>
      Seu IMC
      é <br>     ${result.toFixed(2)} Obesidade grave
        </h3>`;
        document.querySelector(".arrow-5").classList.add('on')

    }
    function updateApp(){
        let screen = document.querySelector('.tabela')

        screen.innerHTML = `<p class='arrow-1'>Magreza - IMC abaixo de 18,5</p>
        <p class='arrow-2'>Normal IMC entre 18,5 e 24,9</p>
        <p class='arrow-3'>Acima do peso IMC entre 25 e 29,9</p>
        <p class='arrow-4'>Obesidade IMC entre 30 e 39,9</p>
        <p class='arrow-5'>Obesidade grave IMC acima de 40</p>`
       
    }
    
  }