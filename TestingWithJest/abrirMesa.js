function abrirMesa(number){
    var mesas=[false,false,true,true,false];

    var disponible=mesas[number-1];
    
    return disponible
}

module.exports=abrirMesa;