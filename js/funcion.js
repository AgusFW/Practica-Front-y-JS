
function calcular()
{
    ticket=200;
    cantidad=document.getElementById("cantidad").value;

    var select=document.getElementById("categoria");
    var valorSel=select.options[select.selectedIndex].value;

    result=0;

    switch(valorSel=parseInt(valorSel))
    {
        case 1:
            result= cantidad*ticket - ((cantidad*ticket)*0.8)
            break;
        case 2:
            result= cantidad*ticket - ((cantidad*ticket)*0.5)
            break;
        case 3:
            result= cantidad*ticket - ((cantidad*ticket)*0.15)
            break;
        case 4:
            result= cantidad*ticket
            break;
    }
 
    document.getElementById("total").value=result; 
}

function borrar()
{
    document.getElementById("cantidad").value=0;
    document.getElementById("total").value=0;
}
