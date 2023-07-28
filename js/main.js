const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tab = $$('.box_content .myStt .details')
const first = $('.idea .dashboard.first')

const content = tab.forEach(function(item, index) {
    item.onclick = function() {
        $('.box_content .myStt .details.active').classList.remove('active')
        this.classList.add('active')

        first.style.marginLeft = -100 * index + '%'
    }
})