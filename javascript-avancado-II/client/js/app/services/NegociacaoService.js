// Classe de interface de servicos para Negociacoes
class NegociacaoService {

    obterNegociacoesDaSemana() {

        // Implementando (DesignPattern: Promise)
        return new Promise((resolve, reject) => {
            // Abre objeto ajax 
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'negociacoes/semana');
     
            // Configuracao
            xhr.onreadystatechange = () => {
                /*
                0: requisicao nao iniciada
                1: conexao estabelecida
                2: requisicao recebida
                3: processando requisicao
                4: requisicao concluida
                */
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) { // HTTP code de sucesso
                        // Parse json do array
                        resolve(JSON.parse(xhr.responseText)
                                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possível obter as negociaçōes da semana.");
                    }
                }
            };
     
            // Request servico
            xhr.send();
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        // Implementando (DesignPattern: Promise)
        return new Promise((resolve, reject) => {
            // Abre objeto ajax 
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'negociacoes/anterior');
            // Configuracao
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) { // HTTP code de sucesso
                        // Parse json do array
                        resolve(JSON.parse(xhr.responseText)
                                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                        callback(null, retorno);
                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possível obter as negociaçōes da semana anterior.");
                    }
                }
            };
            // Request servico
            xhr.send();
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
         // Implementando (DesignPattern: Promise)
         return new Promise((resolve, reject) => {
            // Abre objeto ajax 
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'negociacoes/retrasada');
            // Configuracao
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) { // HTTP code de sucesso
                        // Parse json do array
                        resolve(JSON.parse(xhr.responseText)
                                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                        callback(null, retorno);
                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possível obter as negociaçōes da semana retrasada.");
                    }
                }
            };
            // Request servico
            xhr.send();
        });
    }

}