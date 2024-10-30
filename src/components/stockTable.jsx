import { useState } from "react";

const StockTable = ({ filteredData }) => {
  const [sort, setSort] = useState({ header: null, direction: null });

  const handleSort = (header) => {
    setSort((prevSort) => {
      switch (prevSort.header === header ? prevSort.direction : null) {
        case null:
          return { header, direction: "asc" };
        case "asc":
          return { header, direction: "desc" };
        case "desc":
          return { header: null, direction: null };
        default:
          return { header, direction: "asc" };
      }
    });
  };

  const sortData = (arr) => {
    if (!sort.header || sort.direction === null) return arr;

    return [...arr].sort((a, b) => {
      const aVal = a[sort.header];
      const bVal = b[sort.header];
      if (aVal < bVal) return sort.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className="animate-fadeInDelay3 opacity-0 overflow-y-auto h-[400px] mx-auto border border-gray-300 rounded shadow-lg">
      <table className="w-[700px] border-collapse shadow-lg">
        <thead className="sticky top-0 bg-violet-100 border-b z-10">
          <tr>
            <th
              className="font-lg p-4 text-center w-1/4 hover:cursor-pointer"
              onClick={() => handleSort("symbol")}
            >
              Ticker
            </th>
            <th
              className="font-lg p-4 text-center w-1/4 hover:cursor-pointer"
              onClick={() => handleSort("price")}
            >
              Price
            </th>
            <th className="font-lg p-4 text-center w-1/4">Type</th>
            <th className="font-lg p-4 text-center w-1/4">Exchange</th>
          </tr>
        </thead>
        <tbody>
          {sortData(filteredData).map((asset, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="p-4 w-1/4">{asset.symbol}</td>
              <td className="p-4 w-1/4">{asset.price}</td>
              <td className="p-4 w-1/4">{asset.type}</td>
              <td className="p-4 w-1/4">{asset.exchangeShortName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
