export default class IntervalScheduling {

    ordenarDescendente(lista) {
        lista.sort(function(a,b) {
            return a.horarioFinal < b.horarioFinal ? -1 : a.horarioFinal > b.horarioFinal ? 1 : 0;
        });
    }


    calculaScheduling(lista) {

        var max = [];
        var anterior = 0;

        for (var i = 0; i < lista.length; i++) {
            if (lista[i].horarioInicial >= anterior) {
                max.push(lista[i])
                anterior = lista[i].horarioFinal;
            }
        }

        return max;
    }
}
