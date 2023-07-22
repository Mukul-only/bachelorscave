const SearchResults = (props) => {
  return (
    <div className="flex-1 h-[94vh] overflow-y-auto flex  items-center justify-center px-4">
      <div className="text-center">
        <p className="text-xl font-semibold tracking-tight text-gray-400">
          No recent searches
        </p>
        <p className="tracking-tight text-gray-400">
          For search use filters or search bar!
        </p>
      </div>
    </div>
  );
};
export default SearchResults;
