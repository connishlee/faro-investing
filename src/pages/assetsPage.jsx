import { useState } from "react";

import marketData from "../helpers/marketData";
import FilterButton from "../components/filterButton";
import StockTable from "../components/stockTable";

const Assets = () => {
  const data = marketData;
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ type: "", exchange: "" });

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filterData = (arr) => {
    return arr.filter((item) => {
      return (
        (filter.type ? item.type === filter.type : true) &&
        (filter.exchange ? item.exchangeShortName === filter.exchange : true)
      );
    });
  };

  const filteredData = data.filter(
    (item) =>
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.exchangeShortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="animate-fadeIn opacity-0 text-3xl sm:text-4xl md:text-5xl font-bold text-center my-8">
        ASSETS
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="animate-fadeInDelay1 opacity-0 mb-4 p-2 border rounded w-full sm:w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <FilterButton handleFilter={handleFilter} />
        </div>
      </div>
      <StockTable filteredData={filterData(filteredData)} />
    </div>
  );
};

export default Assets;
