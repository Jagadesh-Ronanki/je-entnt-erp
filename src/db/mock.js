// Mock data for products
import { addDays } from 'date-fns'; 

export const products = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    stockQuantity: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 20.49,
    stockQuantity: 50,
  },
  {
    id: 3,
    name: 'Product 3',
    category: 'Category 1',
    price: 15.99,
    stockQuantity: 75,
  },
  {
    id: 4,
    name: 'Product 4',
    category: 'Category 2',
    price: 12.49,
    stockQuantity: 60,
  },
  {
    id: 5,
    name: 'Product 5',
    category: 'Category 1',
    price: 18.79,
    stockQuantity: 80,
  },
  {
    id: 6,
    name: 'Product 6',
    category: 'Category 3',
    price: 22.99,
    stockQuantity: 40,
  },
  {
    id: 7,
    name: 'Product 7',
    category: 'Category 2',
    price: 14.29,
    stockQuantity: 55,
  },
  {
    id: 8,
    name: 'Product 8',
    category: 'Category 3',
    price: 19.99,
    stockQuantity: 70,
  },
  {
    id: 9,
    name: 'Product 9',
    category: 'Category 1',
    price: 9.99,
    stockQuantity: 90,
  },
  {
    id: 10,
    name: 'Product 10',
    category: 'Category 2',
    price: 24.99,
    stockQuantity: 30,
  },
  {
    id: 11,
    name: 'Product 11',
    category: 'Category 3',
    price: 17.49,
    stockQuantity: 65,
  },
  {
    id: 12,
    name: 'Product 12',
    category: 'Category 1',
    price: 13.99,
    stockQuantity: 85,
  },
  {
    id: 13,
    name: 'Product 13',
    category: 'Category 3',
    price: 21.99,
    stockQuantity: 45,
  },
  {
    id: 14,
    name: 'Product 14',
    category: 'Category 2',
    price: 16.79,
    stockQuantity: 70,
  },
  {
    id: 15,
    name: 'Product 15',
    category: 'Category 1',
    price: 11.49,
    stockQuantity: 55,
  },
  {
    id: 16,
    name: 'Product 16',
    category: 'Category 3',
    price: 23.99,
    stockQuantity: 35,
  },
  {
    id: 17,
    name: 'Product 17',
    category: 'Category 2',
    price: 22.29,
    stockQuantity: 45,
  },
  {
    id: 18,
    name: 'Product 18',
    category: 'Category 1',
    price: 8.99,
    stockQuantity: 95,
  },
  {
    id: 19,
    name: 'Product 19',
    category: 'Category 3',
    price: 18.49,
    stockQuantity: 60,
  },
  {
    id: 20,
    name: 'Product 20',
    category: 'Category 2',
    price: 25.99,
    stockQuantity: 25,
  },
];


const deliveryTimeframe = 3;

export const calculateExpectedDeliveryDate = (orderDate) => {
  return addDays(new Date(orderDate), deliveryTimeframe).toISOString().slice(0, 10);
};

export const orders = [
  {
    id: 1,
    orderId: 'ORD123456',
    customerName: 'John Doe',
    orderDate: '2024-03-08',
    status: 'pending',
    products: [
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 },
    ],
  },
  {
    id: 2,
    orderId: 'ORD789012',
    customerName: 'Jane Smith',
    orderDate: '2024-03-09',
    status: 'shipped',
    products: [
      { productId: 2, quantity: 3 },
    ],
  },
  {
    id: 3,
    orderId: 'ORD345678',
    customerName: 'Michael Johnson',
    orderDate: '2024-03-10',
    status: 'processing',
    products: [
      { productId: 1, quantity: 1 },
      { productId: 5, quantity: 2 },
    ],
  },
  {
    id: 4,
    orderId: 'ORD901234',
    customerName: 'Emily Brown',
    orderDate: '2024-03-11',
    status: 'delivered',
    products: [
      { productId: 4, quantity: 1 },
      { productId: 6, quantity: 1 },
    ],
  },
  {
    id: 5,
    orderId: 'ORD567890',
    customerName: 'David Wilson',
    orderDate: '2024-03-12',
    status: 'shipped',
    products: [
      { productId: 3, quantity: 2 },
      { productId: 7, quantity: 1 },
    ],
  },
  {
    id: 6,
    orderId: 'ORD234567',
    customerName: 'Sarah Taylor',
    orderDate: '2024-03-13',
    status: 'pending',
    products: [
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 7,
    orderId: 'ORD890123',
    customerName: 'Chris Evans',
    orderDate: '2024-03-13',
    status: 'processing',
    products: [
      { productId: 4, quantity: 2 },
      { productId: 8, quantity: 1 },
    ],
  },
  // Additional orders with the same order date as Sarah Taylor's order
  {
    id: 8,
    orderId: 'ORD456789',
    customerName: 'Lisa Johnson',
    orderDate: '2024-03-13',
    status: 'pending',
    products: [
      { productId: 5, quantity: 2 },
    ],
  },
  {
    id: 9,
    orderId: 'ORD234890',
    customerName: 'Steven Thompson',
    orderDate: '2024-03-13',
    status: 'processing',
    products: [
      { productId: 6, quantity: 3 },
    ],
  },
  {
    id: 10,
    orderId: 'ORD901456',
    customerName: 'Amanda White',
    orderDate: '2024-03-13',
    status: 'shipped',
    products: [
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 2 },
    ],
  },
];


orders.forEach((order) => {
  let orderValue = 0;
  order.products.forEach((product) => {
    const orderedProduct = products.find((p) => p.id === product.productId);
    if (orderedProduct) {
      orderValue += orderedProduct.price * product.quantity;
    }
  });
  order.orderValue = orderValue.toFixed(2); // Rounded to 2 decimal places
});

orders.forEach((order) => {
  order.expectedDeliveryDate = calculateExpectedDeliveryDate(order.orderDate);
});
