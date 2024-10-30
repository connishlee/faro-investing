const FilterButton = ({ handleFilter }) => {
  return (
    <>
      <select
        name="type"
        className="animate-fadeInDelay2 opacity-0 mb-4 p-2 bg-violet-500 text-white font-semibold rounded w-full sm:w-auto hover:bg-violet-600 hover:cursor-pointer transition ease-in-out"
        onChange={handleFilter}
      >
        <option value="">All Types</option>
        <option value="etf">ETF</option>
        <option value="stock">STOCK</option>
      </select>
      <select
        name="exchange"
        className="animate-fadeInDelay2 opacity-0 mb-4 p-2 bg-violet-500 text-white font-semibold rounded w-full sm:w-auto hover:bg-violet-600 hover:cursor-pointer transition ease-in-out"
        onChange={handleFilter}
      >
        <option value="">All Exchanges</option>
        <option value="AMEX">AMEX</option>
        <option value="NASDAQ">NASDAQ</option>
        <option value="NYSE">NYSE</option>
        <option value="ASX">ASX</option>
      </select>
    </>
  );
};

export default FilterButton;
