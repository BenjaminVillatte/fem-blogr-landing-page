import './css/reset.css'
import './css/style.css'

document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.toggle-nav').addEventListener('click', function(e) {

    document.querySelector('body').classList.toggle('menu-opened')
    
  })

  document.querySelectorAll('.navbar-nav span').forEach(function(el) { 
    el.addEventListener('click', function() {
      collapseMenuItem(el)   
    })   
  })
  

})

function collapseMenuItem(el) {
  document.querySelectorAll('.navbar-nav span').forEach(function(span) {
    if (span.parentNode === el.parentNode) {
      el.parentNode.classList.toggle('collapsed')
    } 
    else {
      span.parentNode.classList.add('collapsed')
    }
  })
    
}
