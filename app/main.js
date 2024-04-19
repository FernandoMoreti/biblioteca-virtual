let books = []

const endPointAtAPI = 'livros.json'

importBooks()

async function importBooks() {
    const resposta = await fetch(endPointAtAPI)
    books = await resposta.json()
    // books = await (await fetch(endPointAtAPI)).json()
    let booksDescont = aplicarDesconto(books)
    seeInScream(booksDescont)
}