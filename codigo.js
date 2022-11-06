function calcularOpcion1(){
    // Adquirimos las direcciones de los inputs
    var produccionId = document.getElementById("produccion");
    var demandaId = document.getElementById("demanda");
    var preparacionId = document.getElementById("costoP");
    var retencionId = document.getElementById("costoR");
    var loteId = document.getElementById("Lproduccion");

    //Adquirimos los valores y lo convertimos a number
    var produccion = parseFloat(produccionId.value);
    var demanda = parseFloat(demandaId.value);
    var preparacion = parseFloat(preparacionId.value);
    var retencion = parseFloat(retencionId.value);
    var lote = parseFloat(loteId.value);

    //Aplicamos las formulas
    var loteOptimo = Math.sqrt( (2 * demanda * preparacion) / ((1 - (demanda / produccion)) * retencion) );
    var fases = demanda / loteOptimo;
    var tiempo = 365 / fases;
    var costoT = (((1 - (demanda / produccion)) * loteOptimo * retencion) / 2 ) + ( (demanda / loteOptimo) * preparacion);
    var costoTlote = (((1 - (demanda / produccion)) * lote * retencion) / 2 ) + ( (demanda / lote) * preparacion);


    //Mostramos los resultados
    var loteOptimoId = document.getElementById("loteO");
    var fasesId = document.getElementById("fase");
    var tiempoId = document.getElementById("time");
    var costoTId = document.getElementById("costoT");
    var costoTloteId = document.getElementById("costoTlote");

    loteOptimoId.value = loteOptimo;
    fasesId.value = fases;
    tiempoId.value = tiempo;
    costoTId.value = costoT;
    costoTloteId.value = costoTlote;
}

function calcularOpcion2(){
    // Adquirimos las direcciones de los inputs
    var demandaId = document.getElementById("demanda");
    var mantenimientoId = document.getElementById("mantenimiento");
    var pedidoId = document.getElementById("costoP");
    var faltanteId = document.getElementById("costoF");
    var unitarioId = document.getElementById("costoU");

    //Adquirimos los valores y lo convertimos a number
    var demanda = parseFloat(demandaId.value);
    var mantenimiento = parseFloat(mantenimientoId.value);
    var pedido = parseFloat(pedidoId.value);
    var faltante = parseFloat(faltanteId.value);
    var unitario = parseFloat(unitarioId.value);

    //Aplicamos las formulas
    var loteOptimo = Math.sqrt( ((2 * pedido * demanda) * (mantenimiento + faltante)) / (faltante * mantenimiento) );
    var agotaOptimo = Math.sqrt( (2 * pedido * demanda * mantenimiento) / ( faltante * (mantenimiento + faltante) ) );
    var costoT = (unitario * demanda) + ( (demanda / loteOptimo) * pedido ) + ( 2 * (Math.pow((loteOptimo - agotaOptimo), 2) / (2 * demanda))) + (faltante * (Math.pow(agotaOptimo, 2) / (2*loteOptimo)));

    //Mostramos los resultados
    var loteOptimoId = document.getElementById("loteO");
    var agotadosId = document.getElementById("unidadesAgotadas");
    var costoTId = document.getElementById("costoTotal");

    loteOptimoId.value = loteOptimo;
    agotadosId.value = agotaOptimo;
    costoTId.value = costoT;
}

function calcularOpcion3(){
    // Adquirimos las direcciones de los inputs
    var demandaId = document.getElementById("demanda");
    var pedidoId = document.getElementById("pedido");
    var almacenId = document.getElementById("costoA");
    var costoLId = document.getElementById("costoL");
    var min = parseFloat(document.getElementById("min").value);
    var max = parseFloat(document.getElementById("max").value);

    //Adquirimos los valores y lo convertimos a number
    var demanda = parseFloat(demandaId.value);
    var pedido = parseFloat(pedidoId.value);
    var almacen = parseFloat(almacenId.value);
    var costoL = parseFloat(costoLId.value);

    //Aplicamos las formulas
    var loteOptimo = Math.sqrt( (2 * demanda * pedido) / (almacen * costoL) );
    var varia = loteOptimo;
    if(!((max >= loteOptimo) && (loteOptimo >= min))){
        varia = min;
    }
    var costoT = (demanda * costoL) + ((pedido * demanda) / varia) + ((varia * almacen * costoL) / 2);
    
    //Mostramos los resultados
    var loteOptimoId = document.getElementById("loteO");
    var costoTId = document.getElementById("costoTotal");

    loteOptimoId.value = loteOptimo;
    costoTId.value = costoT;
}