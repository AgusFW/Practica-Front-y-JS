/*
const ticket = 200;
    var cantidad=document.getElementById("cantidad").value;

    var categoria=document.getElementById("categoria");
    var valorCat=categoria.options(categoria.categoriaIndex).value;

    result=0;

function valorRegular()
{
    if(valorCat="4")
    {
        result=200*cantidad;
    }
}

function calcular() 
{
    if(valorCat="1")
    {
        result= valorRegular() - (valorRegular()*0.8)
    } else if(valorCat="2")
    {
            result= valorRegular() - (valorRegular()*0.5)
    }else if(valorCat="3")
    {
        result= valorRegular() - (valorRegular()*0.15)
    }
}

document.getElementById("total").value=result;
*/

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

}
document.getElementById("total").value=result;
