import { useEffect, useState } from 'react';
import { TrendingUp, Package, ShoppingCart, Euro } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '../../lib/supabase';

interface Stats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  revenueChange: number;
}

interface ChartData {
  date: string;
  revenue: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    revenueChange: 0,
  });
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data: orders } = await supabase
        .from('orders')
        .select('amount_total, created_at, status')
        .eq('status', 'completed')
        .order('created_at', { ascending: false });

      const { data: products } = await supabase
        .from('products')
        .select('id');

      const totalRevenue = orders?.reduce((sum, order) => sum + (order.amount_total || 0), 0) || 0;
      const totalOrders = orders?.length || 0;
      const totalProducts = products?.length || 0;

      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return date.toISOString().split('T')[0];
      });

      const revenueByDay = last7Days.map(date => {
        const dayRevenue = orders?.filter(order =>
          order.created_at.startsWith(date)
        ).reduce((sum, order) => sum + (order.amount_total || 0), 0) || 0;

        return {
          date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          revenue: dayRevenue / 100,
        };
      });

      setStats({
        totalRevenue,
        totalOrders,
        totalProducts,
        revenueChange: 12.5,
      });

      setChartData(revenueByDay);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Revenue',
      value: `€${(stats.totalRevenue / 100).toFixed(2)}`,
      change: `+${stats.revenueChange}%`,
      icon: Euro,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders.toString(),
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Products',
      value: stats.totalProducts.toString(),
      change: '+3',
      icon: Package,
      color: 'from-[#FFD700] to-[#FFA500]',
    },
    {
      title: 'Growth',
      value: '+24%',
      change: 'This month',
      icon: TrendingUp,
      color: 'from-purple-500 to-red-600',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                {card.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
          <p className="text-gray-600 text-sm mt-1">Last 7 days performance</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '12px'
                }}
                formatter={(value: number) => [`€${value.toFixed(2)}`, 'Revenue']}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#1E3A8A"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to grow your business?</h3>
            <p className="text-blue-100">Add new products and manage your inventory efficiently</p>
          </div>
          <Package className="w-16 h-16 opacity-50" />
        </div>
      </div>
    </div>
  );
}
