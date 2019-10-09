function printReceipt(barcodeArray){
	let cart = [];
	
	barcodeArray.forEach(barcode =>{
		let currentItem = getItem(barcode);
		if(currentItem != null){
			cart = putInCart(currentItem, cart);
		}
	});
	
	return getReceipt(cart);

};

function getItem(barcode){
	let item = null;
	const inventory = [
		{"id": "0001", "name" : "Coca Cola", "price": 3},
		{"id": "0002", "name" : "Diet Coke", "price": 4},
		{"id": "0003", "name" : "Pepsi-Cola", "price": 5},
		{"id": "0004", "name" : "Mountain Dew", "price": 6},
		{"id": "0005", "name" : "Dr Pepper", "price": 7},
		{"id": "0006", "name" : "Sprite", "price": 8},
		{"id": "0007", "name" : "Diet Pepsi", "price": 9},
		{"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
		{"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
		{"id": "0010", "name" : "Fanta", "price": 12}
	];
	
	inventory.forEach(product =>{
			if(barcode == product.id){
				item = product;
			}
		});
		return item;
};

function putInCart(item, cart){
	let isExisting = false;
	cart.forEach(existingItem => {
		if(item.id === existingItem.id){
			existingItem.quantity++;
			isExisting = true;
		}
	});
	
	if(!isExisting){
		cart.push({
			"id" : item.id,
			"name" : item.name,
			"price" : item.price,
			"quantity" : 1
		});
	}
	return cart;
};

function getReceipt(cart){
	let totalPrice = 0;
	let receipt = 'Receipts\n';
	receipt+= '------------------------------------------------------------\n';
	
	cart.forEach(existingItem => {
		receipt+= existingItem.name + '\t\t' + existingItem.price + '\t' + existingItem.quantity + '\n';
		totalPrice+= existingItem.price * existingItem.quantity;
	});
	
	receipt+= '------------------------------------------------------------\n';
	receipt+= 'Price: ' + totalPrice;
	
	return receipt;
};



module.exports = {
	printReceipt : printReceipt,
	getItem : getItem,
	putInCart : putInCart,
	getReceipt : getReceipt
};