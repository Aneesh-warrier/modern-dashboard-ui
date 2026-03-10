export default function OrdersTable() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-4">Recent Orders</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Customer</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="py-2">John</td>
            <td>Premium Plan</td>
            <td className="text-green-600">Completed</td>
          </tr>

          <tr className="border-b">
            <td className="py-2">Sara</td>
            <td>Starter Plan</td>
            <td className="text-yellow-600">Pending</td>
          </tr>

          <tr>
            <td className="py-2">Alex</td>
            <td>Enterprise</td>
            <td className="text-red-600">Cancelled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}