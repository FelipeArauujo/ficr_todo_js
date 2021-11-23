const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const NovaLista = document.getElementById('NovaLista')


let listas = []

btnNovaLista.addEventListener('click', function () {
})
formNovaLista.addEventListener('submit', function(event) {
})
formNovaLista.addEventListener('reset', function(event) {
  cardNovaLista.style.display = 'none'
})

if (window.localStorage.listas?.length > 0) {
   listas = JSON.parse(window.localStorage.listas)
   listas.map(lista => {  
   console.log(lista)
   })
}
