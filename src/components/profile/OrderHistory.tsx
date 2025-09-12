type Props = { orders: any[] };

export default function OrderHistory({ orders }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Order History</h3>
      {orders && orders.length > 0 ? (
        <ul className="divide-y border rounded-lg">
          {orders.map((order, idx) => (
            <li key={idx} className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-500">
                  {order.date} - {order.status}
                </p>
              </div>
              <p className="font-semibold">${order.total}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
}
