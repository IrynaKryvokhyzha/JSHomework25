		// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product 
		// (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop,
		// щоб при ітеруванні для кожного елмента виводився рядок «товар-загальна вартість»

class Product{
	constructor(title, price, amount){
		this.title = title
		this.price = price
		this.amount = amount
	}
	[Symbol.toPrimitive](hint){

		switch (hint) {
			case 'string':
				return `${this.title} - ${this.price*this.amount}uah`
			case 'number':
				return `${this.price}uah`
			default:
			return `${this.title}-${this.price}uah - ${this.amount}`
		}
	}
}

class Shop{
	constructor(product){
		this.product = product
	}
	[Symbol.iterator](){
		this.currentIndex = 0
		return this
	}
	next(){
		if(this.currentIndex<this.product.length){
			const currentProduct = this.product[this.currentIndex]
			this.currentIndex++
			return {
				done: false,
				value: String(currentProduct)
			}
		}else return{done:true}
	}
}
const product = [
	new Product('Potato',5,100),
	new Product('Tomato',8,30),
	new Product('Onion',2,20),
	new Product('Blueberry',10,17),
	new Product('Orange',12,30),
	new Product('Strawberry',20,5),
	new Product('Carrot',7,40),
	new Product('Apple',15,40),

]
const shop = new Shop(product)
for (const item of shop) {
	console.log(item);
}