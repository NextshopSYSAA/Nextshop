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
    promo : number,
    Descriptin: string,
    status : string,
    imgproducts: imgproducts[],
}

interface dectoken{

        email: string,
        id: number,
        firstname: string,
        role: string,
        iat: number
      
} 

interface token {
    token : string
}

