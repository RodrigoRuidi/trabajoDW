function expo(){

    x = document.getElementById('numero').value;
    x=parseInt(x);
    switch(x){
        case 1:
            num1 = document.getElementById('n1').value;
            num2 = document.getElementById('n2').value;

            num1 = parseInt(num1);
            num2 = parseInt(num2);

            if (num1 > num2) {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es mayor al segundo número, y el resultado fue que si lo son.";
            }
            else{
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es mayor al segundo número, y el resultado fue que no lo son.";
            }

            break;
        case 2:
            num1 = document.getElementById('n1').value;
            num2 = document.getElementById('n2').value;

            num1 = parseInt(num1);
            num2 = parseInt(num2);

            if (num1 > num2 || num1 == num2) {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es mayor o igual al segundo número, y el resultado fue que si lo es.";
            }
            else{
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es mayor o igual al segundo número, y el resultado fue que no lo es.";
            }

            break;

        case 3:
            num1 = document.getElementById('n1').value;
            num2 = document.getElementById('n2').value;

            num1 = parseInt(num1);
            num2 = parseInt(num2);

            var con;

            if (num1 == num2) {
                con = true;
            } else {
                con = false;
            }

            if (con == true) {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es igual al segundo número, y si el resultado es true significa que si lo son.";
            } else {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es igual al segundo número, y si el resultado es false significa que no lo son.";
            }

            break;
            
        case 4:
            num1 = document.getElementById('n1').value;
            num2 = document.getElementById('n2').value;

            num1 = parseInt(num1);
            num2 = parseInt(num2);

            numC = "5";

            if (num1 === numC || num2 ===numC) {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número o el segundo es estrictamente igual a una cadena que tiene el número 5, y el resultado significa que si lo son.";
            } else {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número o el segundo es estrictamente igual a una cadena que tiene el número 5, y el resultado significa que no lo son.";
            }

            break;
        
        case 5:
            num1 = document.getElementById('n1').value;
            num2 = document.getElementById('n2').value;

            num1 = parseInt(num1);
            num2 = parseInt(num2);

            if (num1 == num2) {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es igual al segundo número, y el resultado fue que si lo es.";
            } else if (num1 > num2) {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es mayor al segundo número, y el resultado fue que si lo es.";
            } else {
                document.getElementById("rpt").innerHTML = "Se comparó si el primer número es menor al segundo número, y el resultado fue que si lo es.";
            }

            break;

        default:
            alert("El número del tema seleccionado no es valido");
    }
}