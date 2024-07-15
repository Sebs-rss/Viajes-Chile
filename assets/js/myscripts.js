$(function(){
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*toltip*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*mensaje de enlace externo*/
$(function(){
    $('h3').dblclick(function(){
        $(this).css({
            color:'red',
         })
    })

   $('.card-title').click(function(){
        $('p').hide('slow')
   })

   $('#msj_salida').click(function(event){
        
    alert("Estás saliendo de este sitio")
    //this.submit();

    })

    $('#msj_confirmacion').click(function(event){
        
        //event.preventDefault();
        //llamar a funcion que valida
        //console.log(event);
        alert("El Correo fue enviado correctamente")
        //this.submit();
        })
})
