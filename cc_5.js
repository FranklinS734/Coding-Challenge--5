// Task 1: Customer Profile - Creating a basic customer object 
const customer = {
    name: "Sunny Man", // Customer's name
    age: 32, // Customer's age
    email: "sunnymBB@gmail.com" // Customer's email
};

console.log(`Customer Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);

// Task 2:  Object Methods
const order = {
    orderId: 99871, // Unique order ID
    totalAmount: 300, // Total amount for the order
    status: "Processing", // Current order status
    displayOrder() {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder(); // Calling the method to display order details


// Task 3: Array Manipulation (push, pop, shift, unshift)
let cartItems = ["Creatine", "Kolaid Pre-Workout", "Hydration Sticks"];
cartItems.push("BCAA"); // Adding an item to the end
cartItems.pop(); // Removing the last item
cartItems.unshift("Protein Powder"); // Adding an item to the beginning
cartItems.shift(); // Removing the first item
console.log("Final Cart Items:", cartItems); // Displaying the updated cart

// Task 4: Map Method
let prices = [20, 40, 25];
let discountedPrices = prices.map(price => price * 0.9); // Applying a 10% discount
console.log("Discounted Prices:", discountedPrices);

// Task 5: Filter Method
let inventory = [10, 5, 0, 5, 10];
let availableProducts = inventory.filter(item => item > 0); // Keeping only products with stock
console.log("Available Inventory:", availableProducts);

// Task 6: Reduce Method
let sales = [400, 200, 300, 600, 200];
let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0); // Adding up all sales
console.log("Total Revenue:", totalRevenue);

// Task 7: find() Method
let customers = ["Dai", "Neil", "Joshua", "Zack"];
let foundCustomer = customers.find(customer => customer === "Neil"); // Searching for "Neil"
console.log("Found Customer:", foundCustomer);

