function peticionServidor1(c1,  d1, servidor)
{

    // alert('hola');
    
    let ajax1 = new XMLHttpRequest();

    // 1. Devolución del servidor
    ajax1.onreadystatechange = function(){
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
        }
    };
    // Sevidor.php?argumento1=c1.value&huevosFritos=c2.value
     

    let argumentos = "?c1=" + c1.value;
    ajax1.open('GET', servidor + argumentos, true);
    ajax1.send();
    

    /*
    ajax1.open('POST', servidor, true);
    ajax1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax1.send("c1=" + c1.value + "&c2=" + c2.value);
    c1.value = '';
    c2.value = '';
    */
    
}

// Cuando Todos los recursos se hayan cargado...
window.addEventListener("load", function(event){
    // Establecer una referecia de los elementos
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    let servidor = "";

    // Asociar el elementoal evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click", function(event){
            event.preventDefault();
            servidor = "servidor.php";
            peticionServidor1(c1, d1, servidor);
        });
    }
});



