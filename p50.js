
        function calculate()
        {
           
                let w=parseInt(document.getElementById("num1").value);
                let x=parseInt(document.getElementById("num2").value);;
                var sel = document.getElementById("sel").value;
               
switch(sel)
{
    case "+":result=x+w;
    break;
    case "-":result=w-x;
    break;
    case "*":result=x*w;
    break;
    case "/":result=(w/x).toFixed(2);
    break;
    }
    document.getElementById("res").innerText= "Result: "+w+" "+sel+" "+x+" ="+result;
}
function cal()
{
    document.getElementById("res2").style.visibility="visible";
}

   