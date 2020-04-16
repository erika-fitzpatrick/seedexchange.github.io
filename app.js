function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1T3QP7ed5CU1Tdu7cy1lDKGA2n8LLd11Bw4QvEB1aq_k/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
