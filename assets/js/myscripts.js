/*$(function(){
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/

/*toltip*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*Smooth scroll*/
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({block: "end", behavior: 'smooth' });
}


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
        alert("Tu mensaje fue enviado correctamente");
        })
})

