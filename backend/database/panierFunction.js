const { Panier, Product, ColorProduct, ImgProduct } = require("../database/sequalise.js");


//get all product from panier
const getallpanier = async (id) => {
  console.log(Panier);
  try {
    console.log(Product.findAll);
    const results = Product.findAll({
      // where: { userIduser: id },
      // through: { Panier, where: { userIduser: id } },
      include: [{ model: Panier, attributes: [], where: { userIduser: id } }, ImgProduct]
    });
    return results
  }
  catch (err) {
    throw err;
  }
};


//to delete one product from panier

const deletefrompanier = (id, oneProduct) => {
  return Panier.destroy({
    where: { userIduser: id, productIdproduct: oneProduct }
  });
}
const deleteAllFromCart = (userId) => {
  return Panier.destroy({
    where: { userIduser: userId }
  });
}


//add a product to the list of panier products
const addtopanier = (carts) => {
  return Panier.create(carts)
}

module.exports = { getallpanier, deletefrompanier, addtopanier,deleteAllFromCart }
