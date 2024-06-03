var respostaAcertos = window.sessionStorage.getItem("TotalAcertos");
var respostaErros = window.sessionStorage.getItem("TotalErros");


mostrarAcertos();
mostrarErros();
mostrarErrosAcertos();

function mostrarAcertos() {

    fetch(`/dash/mostrarAcertos`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (acertos) {
                console.log(`Dados recebidos: ${JSON.stringify(acertos)}`);

                acertos.reverse();

                sessionStorage.getItem('TotalAcertos', `${acertos[0].acertos}`);


            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mostrarErros() {

    fetch(`/dash/mostrarErros`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (erros) {
                console.log(`Dados recebidos: ${JSON.stringify(erros)}`);

                erros.reverse();

                sessionStorage.getItem('TotalErros', `${erros[0].erros}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mostrarErrosAcertos(){

    fetch(`/dash/mostrarErrosAcertos`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (errosAcertos) {
                console.log(`Dados recebidos: ${JSON.stringify(errosAcertos)}`);

                errosAcertos.reverse();

                sessionStorage.setItem('Acertos e Erros', `${errosAcertos[0].errosEacertos}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}