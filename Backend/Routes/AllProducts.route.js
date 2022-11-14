const { Router } = require("express");
const { auth } = require("../Middleware/authMiddleware");
const {
	ProductModelMen,
	ProductModelWomen,
	CartModel,
} = require("../Models/Products.model");

const AllProducts = Router();

// ALL PRODUCTS FOR MENS
AllProducts.get("/men", async (req, res) => {
	let { category, finalprice, seller, rating, page, limit } = req.query;
	const Mens = await ProductModelMen.find({})
		.limit(limit)
		.skip((page - 1) * limit);
	console.log(Mens);
	res.send(Mens);
});

// SORT BY ASC BY PRICE MENS
AllProducts.get("/men_asc", async (req, res) => {
	let { finalprice } = req.query;
	finalprice = Number(finalprice);
	const Mens = await ProductModelMen.find({}).sort({ finalprice: 1 });
	res.send(Mens);
});

// SORT BY DSC BY PRICE MENS
AllProducts.get("/men_dsc", async (req, res) => {
	let { finalprice } = req.query;
	finalprice = Number(finalprice);
	const Mens = await ProductModelMen.find({}).sort({ finalprice: -1 });
	res.send(Mens);
});

// CATEGORY FILTER MEN
AllProducts.get("/men_category", async (req, res) => {
	let { category, finalprice, seller, rating, page, limit } = req.query;
	const Mens = await ProductModelMen.find({ category: category });
	res.send(Mens);
});

// RATING FILTER
AllProducts.get("/men_rating", async (req, res) => {
	let { category, finalprice, seller, rating, page, limit } = req.query;
	const Mens = await ProductModelMen.find({ rating: rating });
	console.log(Mens);

	res.send(Mens);
});

// SINGLE PRODUCTS FOR MEN
AllProducts.get("/men/:productid", async (req, res) => {
	const payload = req.params.productid;
	const singledata = await ProductModelMen.findOne({ _id: payload });
	res.send(singledata);
});

// ALL PRODUCTS FOR WOMEN
AllProducts.get("/women", async (req, res) => {
	let { category, finalprice, seller, rating, page, limit } = req.query;
	finalprice = Number(finalprice);
	const Women = await ProductModelWomen.find({})
		.limit(limit)
		.skip((page - 1) * limit);
	res.send(Women);
});

// SORT BY ASC BY PRICE WOMEN
AllProducts.get("/women_asc", async (req, res) => {
	let { category, finalprice, seller, rating, page, limit } = req.query;
	finalprice = Number(finalprice);
	const Women = await ProductModelWomen.find({}).sort({ finalprice: 1 });
	res.send(Women);
});

// SORT BY DSC BY PRICE WOMEN
AllProducts.get("/women_dsc", async (req, res) => {
	let { category, finalprice, seller, rating, page, limit } = req.query;
	finalprice = Number(finalprice);
	const Women = await ProductModelWomen.find({}).sort({ finalprice: -1 });
	res.send(Women);
});

// CATEGORY FILTER WOMEN
AllProducts.get("/men_category", async (req, res) => {
	let { category } = req.query;
	const Women = await ProductModelWomen.find({ category: category });
	res.send(Women);
});

// SINGLE PRODUCT FOR WOMEN
AllProducts.get("/women/:productid", async (req, res) => {
	const payload = req.params.productid;
	const singledata = await ProductModelWomen.findOne({ _id: payload });
	res.send(singledata);
});

// GETTING ALL ITEMS IN CART WITH REFERENCE TO USER_ID
AllProducts.get("/cart", auth, async (req, res) => {
	const payload = req.body.user;
	const CartItems = await CartModel.find({ user_id: payload });
	console.log(CartItems);
	res.send(CartItems);
});

// ADD A PRODUCT IN MENS COLLECTION
AllProducts.post("/men", async (req, res) => {
	const {
		productImg,
		category,
		rating,
		description,
		finalprice,
		strickprice,
		tribeprice,
		seller,
	} = req.body;
	const newMens = new ProductModelMen({
		productImg: productImg,
		category: category,
		rating: rating,
		description: description,
		finalprice: finalprice,
		strickprice: strickprice,
		tribeprice: tribeprice,
		seller: seller,
	});
	await newMens.save();
	console.log(newMens);
	res.send("Product added successfull");
});

// ADD A PRODUCT IN WOMENS COLLECTION
AllProducts.post("/women", async (req, res) => {
	const {
		productImg,
		description,
		finalprice,
		strickprice,
		tribeprice,
		category,
		rating,
		seller,
	} = req.body;
	const newWomen = new ProductModelWomen({
		productImg: productImg,
		description: description,
		finalprice: finalprice,
		strickprice: strickprice,
		tribeprice: tribeprice,
		category: category,
		rating: rating,
		seller: seller,
	});
	await newWomen.save();
	console.log(newWomen);
	res.send("Product added successfull");
});

// ADDING ITEMS TO CART WITH REFERENCE TO USER_ID
AllProducts.post("/cart", auth, async (req, res) => {
	const {
		productImg,
		description,
		finalprice,
		strickprice,
		tribeprice,
		category,
		rating,
		seller,
		size,
		qty,
		user,
	} = req.body;
	console.log(description, finalprice, user);
	const AlreadyPresent = await CartModel.find({
		user_id: user,
		description: description,
	});
	if (AlreadyPresent.length > 0) {
		res.send("Product Already In The Cart");
	} else {
		const newCartItem = new CartModel({
			productImg: productImg,
			description: description,
			finalprice: finalprice,
			strickprice: strickprice,
			tribeprice: tribeprice,
			category: category,
			rating: rating,
			seller: seller,
			size: size,
			qty: qty,
			user_id: user,
		});
		await newCartItem.save();
		console.log(newCartItem);
		res.send("Added To Bag Successfully");
	}
});

// DELETE A PORDUCT IN MENS COLLENTION
AllProducts.delete("/men/:productid", async (req, res) => {
	const payload = req.params.productid;
	await ProductModelMen.deleteMany({ _id: payload });
	res.send("Deleted Successfully");
});

// DELETE A PRODUCT IN WOMENS COLLECTION
AllProducts.delete("/women/:productid", async (req, res) => {
	const payload = req.params.productid;
	await ProductModelWomen.deleteMany({ _id: payload });
	res.send("Deleted Successfully");
});

// DELETE ALL ITEMS IN CART WITH RESPECT TO USER_ID WHEN ORDER PLACED
AllProducts.delete("/cart", auth, async (req, res) => {
	const payload = req.body.user;
	const mydelete = await CartModel.deleteMany({ user_id: payload });
	res.send(mydelete);
});

// DELETE SINGLE ITEMS WITH RESPECT USER_ID IF THE USRE REMOVES IT FROM CART

AllProducts.delete("/cart/:deleteid", auth, async (req, res) => {
	const payload = req.params.deleteid;
	const payload1 = req.body.user;
	const mydelete = await CartModel.deleteMany({
		_id: payload,
		user_id: payload1,
	});
	res.send(mydelete);
});
module.exports = { AllProducts };
