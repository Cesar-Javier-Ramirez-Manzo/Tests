
function suma(){
    let out= document.getElementById("salida");

    let a=document.getElementById("primer").value;
    let b=document.getElementById("segundo").value;
    console.log(typeof(a),a)
    out.innerHTML=(parseInt(a) + parseInt(b) );
}
function res(){
    let out= document.getElementById("salida");

    let a=document.getElementById("primer").value;
    let b=document.getElementById("segundo").value;

    out.innerHTML=(a-b);
}
function fechaAct(){
    let out2=document.getElementById("salida2")

    var fecha = new Date();
    let f=(fecha.getDate() + "/" + (fecha.getMonth()+1 ) + "/" + fecha.getFullYear());
    out2.innerHTML=f
}
