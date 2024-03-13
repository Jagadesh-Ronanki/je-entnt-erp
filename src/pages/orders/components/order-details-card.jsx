import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../../../components/ui/card'; 
import { orders, products } from '../../../db/mock';

function OrderDetailsCard({ orderId }) {
  const order = orders.find((order) => order.orderId === orderId);

  if (!order) {
    return <div>No order found with the specified ID.</div>;
  }

  let orderValue = 0;
  order.products.forEach((product) => {
    const orderedProduct = products.find((p) => p.id === product.productId);
    if (orderedProduct) {
      orderValue += orderedProduct.price * product.quantity;
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
        <CardDescription>Order ID: {order.orderId}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Customer Name: {order.customerName}</p>
        <p>Order Date: {order.orderDate}</p>
        <p>Expected Delivery: {order.expectedDeliveryDate}</p>
        <p>Status: {order.status}</p>
        <p>Products:</p>
        <ul>
          {order.products.map((product, index) => {
            const orderedProduct = products.find((p) => p.id === product.productId);
            return (
              <li key={index}>
                {orderedProduct && `${orderedProduct.name} (Quantity: ${product.quantity})`}
              </li>
            );
          })}
        </ul>
        <p>Total Order Value: ${orderValue.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
}

export default OrderDetailsCard;
