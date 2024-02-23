interface imgproducts {
    id : number ,
   image : string,
   productIdProduct :number,

}
interface Product {
    idproduct : number,
    name : string,
    category : string,
    rate : number,
    intalPrice : number,
    Quantity : number,
    Descriptin: string,
    status : string,
    imgproducts: imgproducts[],
}

