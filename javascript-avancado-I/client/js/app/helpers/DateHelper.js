// Classe de conversão de Data
class DateHelper {

    textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    dataParaTexto(data) {
        return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    }

}