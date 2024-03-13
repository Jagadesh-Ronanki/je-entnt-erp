import React, { useState } from 'react';
import { orders as mockOrders } from '../../db/mock';
import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';
import { Calendar } from '../../components/ui/calendar';
import { Separator } from '../../components/ui/separator';
import OrderDetailsCard from './components/order-details-card';

const filterOrdersByDate = (orders, selectedDate) => {
  return orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return (
      orderDate.getDate() === selectedDate.getDate() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getFullYear() === selectedDate.getFullYear()
    );
  });
};


const OrdersPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [calendarView, setCalendarView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const handleDelete = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => {
        return order.id !== orderId;
      })
    );
  };

  const handleEdit = (orderId, newData) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, ...newData } : order
      )
    );
  };

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Orders Management</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your orders
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="calendar-toggle"  onCheckedChange={() => setCalendarView(!calendarView)} />
          <Label htmlFor="calendar-toggle">Calendar View</Label>
        </div>
      </div>
      {calendarView ? (
        <CalendarDemo selectedDate={selectedDate} setSelectedDate={setSelectedDate} className="" />
      ) : (
        <DataTable
          data={orders}
          columns={columns}
          onDelete={handleDelete}
          onEdit={handleEdit}
          setOrders={setOrders}
        />
      )}
    </div>
  );
};

const CalendarDemo = ({ selectedDate, setSelectedDate }) => {
  const [date, setDate] = useState(selectedDate);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate); 
  };

  const filteredOrders = filterOrdersByDate(mockOrders, date);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-x-16 pt-10">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-medium mb-4">Orders for {date.toDateString()}</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            className="rounded-md border mb-4 w-fit"
          />
          <Separator className="my-4 w-10" />
          <div>
            {filteredOrders.length === 0 ? (
              <p>No orders for this date</p>
            ) : (
              <ul>
                {filteredOrders.map(order => (
                  <li key={order.id}>
                    <span className="font-medium">{order.customerName}</span> - Order ID: {order.orderId}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='w-full '>
          <h3 className="text-xl font-medium pt-7 mb-4"></h3>
            {filteredOrders.length === 0 ? (
              <p>No orders for this date</p>
            ) : (
              <ul className='grid grid-flow-row gap-6'>
                {filteredOrders.map(order => (
                  <OrderDetailsCard orderId={order.orderId} className="w-full" />
                ))}
              </ul>
            )}
          </div>
      </div>
    </>
  );
};

export default OrdersPage;
