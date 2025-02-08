// Task 1: Customer Profile - Creating a basic customer object 
const customer = {
    name: "Sunny Man", // Customer's name
    age: 32, // Customer's age
    email: "sunnymBB@gmail.com" // Customer's email
};

console.log(`Customer Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);

// Task 2: Order Details - Creating an order object with a method to display order details
const order = {
    orderId: 99871, // Unique order ID
    totalAmount: 300, // Total amount for the order
    status: "Processing", // Current order status
    displayOrder() {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder(); // Calling the method to display order details

