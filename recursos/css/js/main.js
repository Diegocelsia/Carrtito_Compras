import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

/*Ocultar Loader*/
loader()
showMenu()
showCart()
const{ db, printProducts} = products(await getProducts())
cart(db, printProducts)

