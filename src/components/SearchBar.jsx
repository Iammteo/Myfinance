
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="mb-3 flex lg:xl:w-[35rem]">
        
      <input       
          type="search"
          className="relative m-0 block w-full min-w-0 flex-auto rounded-xl border border-solid border-neutral-300 bg-[#F5F5FC] bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]
           text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary
            focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none
             dark:border-neutral-600 dark:text-neutral-200
              dark:placeholder:text-neutral-200 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="search..." />
          
  </div>
  );
};

export default SearchBar;
