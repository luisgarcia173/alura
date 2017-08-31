// Classe que isola a complexidade do Service
class HttpService {

    get(url) {
        return new Promise((resolve, reject) => {

            // Abre objeto ajax 
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

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
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };

            // Request servico
            xhr.send();
        });
    }

    post(url, dado) {
        
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado));
        });
    }

}