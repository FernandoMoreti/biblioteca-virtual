const btn = document.querySelectorAll('.btn')

btn.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const elementClick = document.getElementById(this.id).value
    if (elementClick == 'disponiveis') {
        let booksFilter = books.filter(book => book.quantidade > 0)
        seeInScream(booksFilter)
    } else if (elementClick == 'indisponiveis'){
        let booksFilter = books.filter(book => book.quantidade <= 0)
        seeInScream(booksFilter)
    } else if (elementClick == 'preco') {
        let booksFilter = sortList()
        seeInScream(booksFilter)
    } else {
        let booksFilter = books.filter(book => book.categoria == `${elementClick}`)
        seeInScream(booksFilter)
    }
}