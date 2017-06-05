// Classe de conversão de Data
class DateHelper {

    // Força erro quando tentar instanciar
    constructor() {
        throw new Error("DateHelper nao pode ser instanciada.");
    }

    static dataParaTexto(data) {
        //return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; // Usando TemplateString
    }

    static textoParaData(texto) {
        let regexData = /\d{4}-\d{2}-\d{2}/;
        if(!regexData.test(texto)) {
            throw new Error("Formato de data esperado eh aaaa-mm-dd");
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}