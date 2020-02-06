function tempo(data1, data2, unidade) {
    var d1 = new Date(data1);
    var d2 = new Date(data2);
    switch(unidade){
        case "dia":
            var periodo = Math.abs(d1.getTime() - d2.getTime())/1000/60/60/24;
            return Math.round(periodo)
            break;
        case "mês":
            var periodo1 = Math.abs(d1.getTime() - d2.getTime())/1000/60/60/24/30;
            return Math.round(periodo1)
            break;
        case "ano":
            var periodo2 = Math.abs(d1.getTime() - d2.getTime())/1000/60/60/24/30/12;
            return Math.round(periodo2)
            break;
    }
}