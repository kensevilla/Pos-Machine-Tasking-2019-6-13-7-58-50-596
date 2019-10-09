const functionList = require('../index');


it('should return item given valid barcode', () => {
	const input = '0001';
	const result = functionList.getItem(input);
	console.log(result);
	expect(result.name).toBe('Coca Cola');
	expect(result.price).toBe(3);
});

it('should return null given invalid barcode', () => {
	const input = '00211';
	const result = functionList.getItem(input);
	console.log(result);
	expect(result).toBe(null);
});

it('should add new item in cart given new item', () => {
	const item = {"id": "0002", "name" : "Diet Coke", "price": 4};
	const cart =[{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity" : 1}];
	const result = functionList.putInCart(item, cart);
	console.log(result);
	expect(result.length).toBe(2);
});

it('should not add new item in cart given existing item', () => {
	const item = {"id": "0001", "name" : "Coca Cola", "price": 3};
	const cart =[{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity" : 1}];
	const result = functionList.putInCart(item, cart);
	console.log(result);
	expect(result[0].quantity).toBe(2);
});

it('should increment quantity in cart given existing item', () => {
	const item = {"id": "0001", "name" : "Coca Cola", "price": 3};
	const cart =[{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity" : 1}];
	const result = functionList.putInCart(item, cart);
	console.log(result);
	expect(result[0].quantity).toBe(2);
});

it('should return correct receipt given cart', () => {
	const cart =[{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity" : 1},
				 {"id": "0002", "name" : "Diet Coke", "price": 4, "quantity" : 2},
				 {"id": "0003", "name" : "Pepsi-Cola", "price": 5, "quantity" : 3}];
	let actualResult = 'Receipts\n';
	actualResult+='------------------------------------------------------------\n';
	actualResult+='Coca Cola\t\t3\t1\n';
	actualResult+='Diet Coke\t\t4\t2\n';
	actualResult+='Pepsi-Cola\t\t5\t3\n';
	actualResult+='------------------------------------------------------------\n';
	actualResult+='Price: 26';
	const result = functionList.getReceipt(cart);
	console.log(result);
	expect(result).toBe(actualResult);
});

