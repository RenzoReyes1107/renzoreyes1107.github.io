document.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
  
    // Eliminar el evento click después de la primera interacción
    document.removeEventListener('click', arguments.callee);
  });
  
  /*
  function checkTextAndRedirect() {
    var myButton = document.getElementById("myButton");
    var buttonText = myButton.innerHTML.trim();
    


    if (buttonText === "INTENTAR DE NUEVO") { // Reemplaza con el texto específico que deseas verificar
        window.location.href = "https://www.ejemplo.com"; // Reemplaza con la URL de la página a la que deseas redirigir
    }
}
*/

var buttonClickCount = 0; // Variable para contar el número de pulsaciones del botón
    var redirectPage = "https://api.whatsapp.com/send?phone=51941488363&text=Esta bien"; // Establece la URL de la página a la que deseas redirigir

    function handleButtonClick() {
        buttonClickCount++; // Incrementa el contador de pulsaciones

        if (buttonClickCount === 4) { // Verifica si es la segunda pulsación del botón
            window.location.href = redirectPage; // Redirige a la página especificada
            return; // Sale de la función para evitar cambios de texto adicionales
        }

        //var myButton = document.getElementById("myButton");
        //myButton.innerHTML = "Texto Cambiado"; // Cambia el texto del botón
    
       
    
    
    
    }



    function handleButtonClick2(){
        var text1 = document.getElementById("text1");
        var imagen=document.getElementById("monkeyContainer");
        buttonClickCount++;


        if(buttonClickCount===2){
            if (text1.style.display === "none" && imagen.style.display==="none") {
                text1.style.display = "block";
                imagen.style.display="block";
    
            }else {
                imagen.style.display="none";
                text1.style.display = "none";
            }
        }
        
    
    }
   






    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", handleButtonClick);

    function changeButtonText() {
        var myButton = document.getElementById("myButton");
        myButton.innerHTML = "INTENTAR DE NUEVO"; // Reemplaza con el nuevo texto que deseas mostrar
        

    }

