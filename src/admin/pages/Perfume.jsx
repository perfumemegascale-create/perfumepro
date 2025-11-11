import React, { useState, useEffect } from 'react';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, Table as DocxTable, TableRow as DocxRow, TableCell as DocxCell, TextRun } from "docx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PerfumeCustomers = () => {
  const ALL_COLUMNS = [
    { key: "id", label: "ID" },
    { key: "fullName", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Address" },
    { key: "favoriteFragrance", label: "Fragrance" },
    { key: "occasions", label: "Occasions" },
    { key: "intensity", label: "Intensity" },
    { key: "favoritePerfumes", label: "Favorite Perfumes" },
  ];

  const [customers, setCustomers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchCustomers();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = customers.filter(person =>
        ALL_COLUMNS.some(col =>
          (person[col.key] || '').toString().toLowerCase().includes(term)
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(customers);
    }
  }, [searchTerm, customers]);

  const fetchCustomers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/get_perfume_customers.php`);
      const data = await response.json();
      const reversedData = [...data.data].reverse();
      setCustomers(reversedData);
      setFilteredData(reversedData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching customers:', err);
      setError(true);
      setLoading(false);
    }
  };

  const getVisibleColumns = () => {
    let visibleCount = 0;
    if (windowWidth > 1400) visibleCount = ALL_COLUMNS.length;
    else if (windowWidth > 1200) visibleCount = 8;
    else if (windowWidth > 992) visibleCount = 6;
    else if (windowWidth > 768) visibleCount = 5;
    else if (windowWidth > 600) visibleCount = 4;
    else visibleCount = 3;

    return {
      visible: ALL_COLUMNS.slice(0, visibleCount),
      hidden: ALL_COLUMNS.slice(visibleCount)
    };
  };

  const toggleRow = (index) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  const formatCell = (value, key) => {
    if (!value) return '-';

    if (key === 'intensity') {
      const level = value.toLowerCase();
      let colorClass = 'bg-blue-100 text-blue-800';
      if (level === 'medium') colorClass = 'bg-yellow-100 text-yellow-800';
      if (level === 'strong') colorClass = 'bg-red-100 text-red-800';
      return (
        <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium ${colorClass}`}>
          {value}
        </span>
      );
    }

    if (key === 'favoriteFragrance') {
      return (
        <span className="inline-block px-2.5 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800">
          {value}
        </span>
      );
    }

    return value;
  };

  const exportCSV = () => {
    const csvRows = [];
    csvRows.push(ALL_COLUMNS.map(col => col.label).join(','));
    filteredData.forEach(row => {
      csvRows.push(
        ALL_COLUMNS.map(col =>
          `"${(row[col.key] || '').toString().replace(/"/g, '""')}"`
        ).join(',')
      );
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'perfume_customers.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "perfume_customers.xlsx");
    setShowExportMenu(false);
  };

  const exportPDF = () => {
    try {
      const doc = new jsPDF();
      doc.text("Perfume Customer Data", 14, 15);
      autoTable(doc, {
        head: [ALL_COLUMNS.map((col) => col.label)],
        body: filteredData.map((row) =>
          ALL_COLUMNS.map((col) => row[col.key] || "")
        ),
        startY: 20,
        styles: { fontSize: 8 },
      });
      doc.save("perfume_customers.pdf");
    } catch (error) {
      console.error("PDF Export Error:", error);
      alert("Failed to generate PDF. Please try again.");
    }
    setShowExportMenu(false);
  };

  const { visible, hidden } = getVisibleColumns();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
            <div className="w-10 h-10 border-3 border-gray-100 border-t-[#5B3A29] rounded-full animate-spin"></div>
            <p className="text-gray-600">Loading customer data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="text-center py-10 px-5 text-gray-400">
              <h3 className="text-lg mb-1.5">⚠️ Error Loading Data</h3>
              <p>Unable to fetch customer data. Please try again later.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h1 className="text-3xl font-semibold mb-1 text-gray-900">
            Perfume Customer Preferences
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and export customer fragrance data
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-5 flex justify-between items-center flex-wrap gap-3">
          <div className="relative flex-1 min-w-[250px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search customers..."
              className="w-full pl-10 pr-3.5 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#5B3A29]"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md font-medium text-sm">
              {filteredData.length} customers
            </div>

            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="bg-[#5B3A29] text-white px-5 py-2.5 rounded-md font-medium cursor-pointer flex items-center gap-1.5 hover:bg-[#4A2E20] transition-colors text-sm"
              >
                <span>⬇️</span>
                Export Data
              </button>

              {showExportMenu && (
                <div className="absolute top-[calc(100%+6px)] right-0 bg-white rounded-md shadow-lg min-w-[180px] z-50">
                  <div
                    onClick={exportCSV}
                    className="px-4 py-2.5 cursor-pointer hover:bg-gray-50 text-sm first:rounded-t-md last:rounded-b-md"
                  >
                    Export as CSV
                  </div>
                  <div
                    onClick={exportExcel}
                    className="px-4 py-2.5 cursor-pointer hover:bg-gray-50 text-sm"
                  >
                    Export as Excel
                  </div>
                  <div
                    onClick={exportPDF}
                    className="px-4 py-2.5 cursor-pointer hover:bg-gray-50 text-sm last:rounded-b-md"
                  >
                    Export as PDF
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredData.length === 0 ? (
            <div className="text-center py-10 px-5 text-gray-400">
              <h3 className="text-lg mb-1.5">No customers found</h3>
              <p>Try adjusting your search criteria</p>
            </div>
          ) : (
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="w-12"></th>
                  {visible.map(col => (
                    <th
                      key={col.key}
                      className="px-4 py-3 text-left font-semibold text-gray-700 text-sm"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((person, index) => (
                  <React.Fragment key={index}>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => toggleRow(index)}
                          className="p-1 rounded hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`w-5 h-5 transition-transform duration-200 ${expandedRows.has(index) ? 'rotate-180' : ''
                              }`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      </td>
                      {visible.map(col => (
                        <td
                          key={col.key}
                          className={`px-4 py-3.5 text-gray-800 text-sm ${col.key === 'fullName' ? 'font-semibold text-[#5B3A29]' : ''
                            }`}
                        >
                          {formatCell(person[col.key], col.key)}
                        </td>
                      ))}
                    </tr>

                    {hidden.length > 0 && expandedRows.has(index) && (
                      <tr>
                        <td colSpan={visible.length + 1} className="p-0">
                          <div className="p-5 bg-gray-50 border-t border-gray-200">
                            <div className="font-semibold text-gray-800 text-sm mb-3">
                              Additional Details
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                              {hidden.map(col => (
                                <div
                                  key={col.key}
                                  className="bg-white p-3 rounded-md border border-gray-200"
                                >
                                  <div className="text-xs text-gray-500 font-medium mb-1">
                                    {col.label}
                                  </div>
                                  <div className="text-gray-800 text-sm">
                                    {person[col.key] || '-'}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showExportMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowExportMenu(false)}
        ></div>
      )}
    </div>
  );
};

export default PerfumeCustomers;