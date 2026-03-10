import SalesChart from "../components/SalesChart";
import OrdersTable from "../components/OrdersTable";
import SkeletonCard from "../components/SkeletonCard";

export default function Dashboard() {
  return (
    <div>
      <SalesChart />
      <OrdersTable />
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <SkeletonCard />
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Users</p>
          <h3 className="text-2xl font-bold">1,245</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Revenue</p>
          <h3 className="text-2xl font-bold">$8,230</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Orders</p>
          <h3 className="text-2xl font-bold">312</h3>
        </div>

      </div>
    </div>
  );
}