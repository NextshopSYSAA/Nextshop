const { Op, where } = require('sequelize');
const { Product, ImgProduct } = require('./sequalise');

// insert product
const insertProduct = async (data) => {
  try {
    const createdProduct = await Product.create(data);
    return createdProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

// update product
const updateProduct = (dataNew, id) => {
  return Product.update(dataNew, { where: { idproduct: id } });
};

// delete product
const deleteProduct =(id) => {
  Product.destroy({ where :{idproduct :id }})
};

// get all product
const getAllProduct = () => {
  return Product.findAll({
    attributes: [
      'idproduct',
      'name',
      'category',
      'status',
      'promo',
      'initalprice',
      'quantity',
      'description',
    ],
    include: [ImgProduct],
  })
};

// get specific product by id
const getProductById = async (id) => {
 try{
  const data =  await Product.findAll({
    where: { idproduct: id },
    include: [ImgProduct],
  })
  return data
 }
 catch(err){
  console.log('err',err);
 }
};

// get product available
const getAllProductAvailable = () => {
  return Product.findAll({ where: { status: 'available' } });
};

// get product by category
const getProductByCategory = (category) => {
  return Product.findAll({ where: { category: category } ,include: [ImgProduct]});
};

// get product for promotion
const getProductForPromo = () => {
  return Product.findAll({ where: { status: "promo" } });
};

// get top-rated product > 4
const getTopRatedProduct = () => {
  return Product.findAll({ where: { rate: { [Op.gt]: 4 } } });
};

// get product with images 
const getProductWithImages = (id) => {
  return Product.findAll({
    attributes: [
      'idproduct',
      'name',
      'category',
      'status',
      'promo',
      'initalprice',
      'quantity',
      'description',
    ],
    where: { idproduct: id },
    include: [ImgProduct],
  });
};

// insert img product
const insertImgProduct = async (data, productId) => {
  const results = await  ImgProduct.create({ 
    image : data
    , productIdproduct: productId });

    return 'done insert images !'
};

// update img product
const updateImgProduct = (data, productId) => {
  return ImgProduct.update({image : data}, { where: { productIdproduct: productId } });
};

// get product to specific saler 
const getallproductsaler = (id)=>{
  return Product.findAll({where:{userIduser : id} , include : ImgProduct})
}

// get the 10 new product inserted 
const newProductsInStore = () =>{
  return  Product.findAll({
    order: [['createdAt', 'DESC']], // Order by creation time in descending order
    limit: 10, 
    include :[ImgProduct]
  });
} 

// get the 10 newest product inserted by a saler 

const newProductsInStoreuser =(id) =>{
  return  Product.findAll({
    where: {userIduser : id },
    order: [['createdAt', 'DESC']], // Order by creation time in descending order
    limit: 10, 
  });
} 


module.exports = {
  getTopRatedProduct: getTopRatedProduct,
  getProductForPromo: getProductForPromo,
  getProductByCategory: getProductByCategory,
  getAllProductAvailable: getAllProductAvailable,
  getAllProduct: getAllProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
  insertProduct: insertProduct,
  getProductById: getProductById,
  getProductWithImages: getProductWithImages,
  insertImgProduct: insertImgProduct,
  updateImgProduct: updateImgProduct,
  getallproductsaler : getallproductsaler ,
  newProductsInStoreuser :newProductsInStoreuser,
  newProductsInStore : newProductsInStore
};