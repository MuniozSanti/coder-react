const products = [
    //celulares
    {id: "1", name: "iPhone 14", price: 1200, category: "phones"},
    {id: "2", name: "iPhone 13", price: 1000, category: "phones"},
    {id: "3", name: "iPhone 12", price: 800, category: "phones"},
    
    //tablets
    {id: "4", name: "Samsung Tab", price: 500, category: "tablets"},
    {id: "5", name: "Samsung Tab pro", price: 650, category: "tablets"},
    {id: "6", name: "Samsung Tab plus", price: 700, category: "tablets"},

    //notebooks
    {id: "7", name: "MacBook Air", price: 700, category: "notebooks"},
    {id: "8", name: "MacBook Pro", price: 1000, category: "notebooks"},
    {id: "9", name: "MacBook Pro M1", price: 1200, category: "notebooks"},

];

//getProduct
export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            //busca prod por id
            const product = products.find(p => p.id === id);

            //si existe el producto
            if (product) {
                resolve(product);
            } else {
                reject(new Error("No existe el producto"));
            }
        }, 1000);
    });
};


//getProducts
export const getProducts = (category) => {
    return new Promise ((resolve) => {
        setTimeout (() => {

            //si category existe, busca por categoria
            //si category no existe, devuelve todos los prods
            const productsFiltered = category ? products.filter(product => product.category == category) : products;

            resolve (productsFiltered);
        }, 1000);
    });
}