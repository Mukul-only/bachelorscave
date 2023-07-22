import Card from "../UI/Card";
import Filters from "../components/search/filters/Filters";
import SearchResults from "../components/search/searchResult/SearchResults";
const SearchPage = (props) => {
  return (
    <div className="flex min-h-[94vh]">
      <Filters />
      <SearchResults />
    </div>
  );
};
export default SearchPage;
