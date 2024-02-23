const prod = require('../database/sallerFunction')

module.exports={
    InsertProduct: async (req, res) => {
        const obj = {
          name: req.body.name,
          category: req.body.category,
          status: req.body.status,
          initalprice: req.body.initalprice,
          promo : req.body.promo,
          quantity: req.body.quantity,
          description: req.body.description,
          userIduser : req.params.id,
          image :[
                req.body.image.image1,
                 req.body.image.image2,
                 req.body.image.image3,
                 req.body.image.image4,
                req.body.image.image5   
          ]
        };
    
        try {
          const createdProduct = await prod.insertProduct(obj);
            for (const image of obj.image) {
            await  prod.insertImgProduct(image, createdProduct.idproduct);
            }
          res.status(200).send('Inserted');
        } catch (err) {
          console.log('Error in inserting product', err);
          res.status(500).send('Internal Server Error');
        }
      },
      UpdateProduct: async (req, res) => {
        const id = req.params.id;
        const obj = {
          name: req.body.name,
          category: req.body.category,
          status: req.body.status,
          initalprice: req.body.initalprice,
          promo : req.body.promo,
          quantity: req.body.quantity,
          description: req.body.description,
         
        };
    
    
        try {
          await prod.updateProduct(obj, id);
          res.status(201).json('Updated');
        } catch (err) {
          console.log('Error in updating product', err);
          res.status(500).send('Internal Server Error');
        }
      },

    DeleteProduct : async (req,res)=>{
        const id = req.params.id
        try{
            const results = prod.deleteProduct(id)
            res.status(203).send('deleted !')
        }
        catch(err){
            console.log('err in delete product',err);
        }
    },
    GetallProduct : async (req,res)=>{
        try{
            const results = await prod.getAllProduct()
            res.status(200).send(results)
        }
        catch(err){
            console.log('err in getting all product ',err);
        }
    },
    GetallProductAvailable : async (req,res)=>{
        try{
            const results = await prod.getAllProductAvailable()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting all product ',err);
        }
    },
    GetProductByCatigory : async (req,res)=>{
        const cate = req.params.category
        try{
            const results = await prod.getProductByCategory(cate)
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting product categ',err);
        }
    },
    GetProductForPromo : async (req,res)=>{
        try{
            const results = await prod.getProductForPromo()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting promoted data ',err);
        }
    },
    GetTopRatedProduct : async (req,res)=>{
        try{
            const results = await prod.getTopRatedProduct()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting promo product',err);
        }
    } ,
    GetProductById : async (req,res)=>{
        const id = req.params.id
        try{
            const results = await prod.getProductById(id)
            console.log(results);
            res.status(200).send(results[0])
        }
        catch(err){
            console.log('err in getting product',err);
        }
    },
    GetallProductSaler : async (req,res)=>{
        const id = req.params.id
        try{
            const results = await prod.getallproductsaler(id)
            res.status(200).send(results)

        }
        catch(err){
            console.log(err);
        }
    },
    NewProductsInStore : async(req,res)=>{
       try{
        const results = await prod.newProductsInStore()
        res.status(200).send(results)
       }
       catch(err){
        console.log('err',err);
       }
    },
    NewProductsInStoreuser : async(req,res)=>{
        try{
            const id = req.params.id
            const results = await prod.newProductsInStore(id)
        res.status(200).send(results)
        }
        catch(err){
            console.log(err);
        }
    }

} 