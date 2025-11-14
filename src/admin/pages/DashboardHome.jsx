import React, { useState, useEffect } from "react";
import { Flower2, FlaskConical, Leaf, ShoppingBag, TrendingUp, Clock, Calendar, ChevronDown } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line
} from "recharts";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DashboardHome = () => {
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [stats, setStats] = useState({ perfumes: 0, attars: 0, ghee: 0, totalProducts: 0 });
  const [recentActivity, setRecentActivity] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedKey, setSelectedKey] = useState("total");
  const [isOpen, setIsOpen] = useState(false);

  const chartOptions = [
    { key: "total", label: "All", color: "#1F77B4" },
    { key: "perfume", label: "Perfume", color: "#FF7F0E" },
    { key: "attar", label: "Attar", color: "#2CA02C" },
    { key: "ghee", label: "Ghee", color: "#D62728" },
    { key: "mohanthal", label: "Mohanthal", color: "#C8963E" },
    { key: "churma", label: "Laddu", color: "#E6B325" },
  ];


  const fetchData = (year) => {
    fetch(`${API_BASE_URL}/get_dashboard_data.php?year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats({
            perfumes: data.data.perfume,
            attars: data.data.attar,
            ghee: data.data.ghee,
            mohanthal: data.data.mohanthal,
            churma: data.data.churma,
            totalProducts: data.data.total,
          });
          setRecentActivity(data.data.recentActivity);
          setChartData(data.data.monthlyData);
          setAvailableYears(data.data.availableYears || []);

          // ✅ If selected year isn't in the list, switch to latest available
          if (!data.data.availableYears.includes(parseInt(year))) {
            setSelectedYear(data.data.availableYears[0]);
          }
        }
      })
      .catch((err) => console.error("Error fetching dashboard data:", err));
  };

  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear]);

  const statItems = [
    {
      title: "Perfume",
      value: stats.perfumes,
      icon: <Flower2 className="w-6 h-6" />,
      color: "#5B3A29",
    },
    {
      title: "Attar",
      value: stats.attars,
      icon: <FlaskConical className="w-6 h-6" />,
      color: "#5B3A29",
    },
    {
      title: "Gir Cow Ghee",
      value: stats.ghee,
      icon: <Leaf className="w-6 h-6" />,
      color: "#5B3A29",
    },
    {
      title: "Mohanthal",
      value: stats.mohanthal,
      icon: <Leaf className="w-6 h-6" />,
      color: "#5B3A29",
    },
    {
      title: "Churma Laddu",
      value: stats.churma,
      icon: <Leaf className="w-6 h-6" />,
      color: "#5B3A29",
    },
    {
      title: "Total Leads",
      value: stats.totalProducts,
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "#5B3A29",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0EB] p-6 md:p-10 relative overflow-hidden font-sans">
      {/* Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#5B3A29] rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#5B3A29] rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h1 className="text-5xl font-extrabold text-[#5B3A29] drop-shadow-md">
              Fragrance Dashboard
            </h1>
            <p className="text-gray-700 mt-2 text-lg">
              A unique glance at your fragrance empire
            </p>
          </div>
        </div>

        {/* Stats Circles */}
        {/* Stats Section — Clean Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {statItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg border border-[#5B3A29]/20 shadow-md rounded-3xl p-6 flex items-center gap-5 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="p-4 rounded-2xl shadow-md"
                style={{ backgroundColor: item.color, color: "white" }}
              >
                {item.icon}
              </div>

              {/* Title + Value */}
              <div>
                <h3 className="text-[#5B3A29] font-semibold text-xl">{item.title}</h3>
                <p className="text-4xl font-extrabold text-[#5B3A29] mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-end mb-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative overflow-hidden bg-[#5B3A29] rounded-full px-8 py-3.5 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">{selectedYear}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />

              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {isOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsOpen(false)}
                ></div>

                <div className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-20 p-2">
                  {availableYears.length > 0 ? (
                    availableYears.map((year, index) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsOpen(false);
                        }}
                        className={`w-full px-5 py-3 text-left font-semibold rounded-2xl transition-all duration-200 ${year === selectedYear
                          ? 'bg-[#5B3A29] text-white shadow-lg scale-105'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:scale-102'
                          }`}
                        style={{
                          opacity: 0,
                          animation: `fadeSlideIn 0.3s ease-out ${index * 0.05}s forwards`
                        }}
                      >
                        {year}
                      </button>
                    ))
                  ) : (
                    <div className="px-5 py-3 text-gray-400 text-center">
                      No years available
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>


        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bar Chart */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-[#5B3A29]/30 shadow-lg">
            <h2 className="text-xl font-semibold text-[#5B3A29] mb-4">
              Monthly Sales
            </h2>
            <div className="inline-flex gap-1 mb-4 p-1 bg-[#f5ede9] rounded-xl shadow-inner flex-wrap">
              {chartOptions.map((opt, index) => (
                <button
                  key={opt.key}
                  onClick={() => setSelectedKey(opt.key)}
                  className={`
        relative px-5 py-2.5 rounded-lg font-medium text-sm
        transition-all duration-500 ease-in-out
        ${selectedKey === opt.key
                      ? "bg-white text-[#8B5E3C] shadow-lg"
                      : "bg-transparent text-[#7B5A42] hover:text-[#8B5E3C]"
                    }
      `}
                >
                  {selectedKey === opt.key && (
                    <span
                      className="absolute inset-0 bg-white rounded-lg shadow-lg -z-10"
                      style={{
                        animation: 'slideIn 0.3s ease-out'
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {selectedKey === opt.key && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] animate-pulse" />
                    )}
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9d4" />
                <XAxis dataKey="month" stroke="#5B3A29" fontSize={12} />
                <YAxis stroke="#5B3A29" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    border: "1px solid #e0d9d4",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    color: "#5B3A29",
                  }}
                />
                {/* Bar changes dynamically based on selection */}
                {selectedKey === "total" ? (
                  <>
                    <Bar dataKey="perfume" fill="#FF7F0E" name="Perfume" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="attar" fill="#2CA02C" name="Attar" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="ghee" fill="#D62728" name="Ghee" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="mohanthal" fill="#C8963E" name="Mohanthal" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="churma" fill="#E6B325" name="Churma" radius={[6, 6, 0, 0]} />
                  </>
                ) : (
                  <Bar
                    dataKey={selectedKey}
                    fill={chartOptions.find((o) => o.key === selectedKey).color}
                    radius={[6, 6, 0, 0]}
                    name={chartOptions.find((o) => o.key === selectedKey).label}
                  />
                )}
              </BarChart>
            </ResponsiveContainer>

            {/* Custom color legend below chart */}
            {selectedKey && (
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                marginTop: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#FF7F0E"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Perfume</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#2CA02C"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Attar</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#D62728"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Ghee</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#C8963E"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Mohanthal</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#E6B325"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Churma</span>
                </div>
              </div>
            )}
          </div>

          {/* Line Chart */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-[#5B3A29]/30 shadow-lg">
            <h2 className="text-xl font-semibold text-[#5B3A29] mb-4">Growth Trend</h2>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9d4" />
                <XAxis dataKey="month" stroke="#5B3A29" fontSize={12} />
                <YAxis stroke="#5B3A29" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    border: "1px solid #e0d9d4",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    color: "#5B3A29",
                  }}
                />
                <Line type="monotone" dataKey="perfume" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4 }} /> {/* Amber/Orange */}
                <Line type="monotone" dataKey="attar" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />   {/* Green */}
                <Line type="monotone" dataKey="ghee" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} />    {/* Blue */}
                <Line type="monotone" dataKey="mohanthal" stroke="#C8963E" strokeWidth={3} dot={{ r: 4 }} />    {/* Blue */}
                <Line type="monotone" dataKey="churma" stroke="#E6B325" strokeWidth={3} dot={{ r: 4 }} />    {/* Blue */}

              </LineChart>
            </ResponsiveContainer>
            {selectedKey && (
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                marginTop: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#F59E0B"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Perfume</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#10B981"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Attar</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#3B82F6"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Ghee</span>
                </div>
                 <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#C8963E"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Mohanthal</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#E6B325"
                  }}></span>
                  <span style={{ fontSize: "13px", color: "#5B3A29", fontWeight: 500 }}>Churma</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-[#5B3A29]/30 shadow-lg">
          <h2 className="text-xl font-semibold text-[#5B3A29] mb-6">Recent Activity</h2>
          <div className="relative border-l-2 border-[#5B3A29]/40 ml-5 pl-6 space-y-6">
            {recentActivity.map((a, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-[#5B3A29] rounded-full shadow-lg" />
                <div className="flex flex-col">
                  <p className="font-semibold text-[#5B3A29]">{a.name}</p>
                  <p className="text-sm text-[#5B3A29]/80">{a.type} Form Submission</p>
                  <span className="text-xs text-[#5B3A29]/60 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />{" "}
                    {new Date(a.created_at).toLocaleDateString("en-GB")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[#5B3A29]/80 text-sm mt-10 py-6 border-t border-[#5B3A29]/30">
          <p>
            © {new Date().getFullYear()} Fragrance & Wellness — Crafted with 💛 Megascale
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
