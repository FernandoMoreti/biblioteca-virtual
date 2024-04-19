const aplicarDesconto = (books) => {
    const descont = 0.3
    booksWithDescont = books.map(book => {
        return {...book, preco: book.preco - (book.preco * descont)}
    })
    return booksWithDescont
}