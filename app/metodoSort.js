let sortList = () => {
    let sortBooks = books.sort((a, b) => a.preco - b.preco)
    return sortBooks
}