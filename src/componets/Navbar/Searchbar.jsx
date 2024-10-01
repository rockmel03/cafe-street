import searchIcon from "../../assets/icons/search-icon.svg";

export const Searchbar = () => {
  return (
    <div className="searchbar w-fit h-[40px] rounded-full hidden laptop:flex items-center justify-start laptop:shadow text-black laptop:bg-white ">
      <div className="search-icon w-fit p-2 flex-shrink-0 min-w-[20%]">
        <img src={searchIcon} alt="searchIcon" className="w-[24px] h-[24px] " />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="w-[222px] text-[14px] bg-transparent border-none outline-none"
      />
    </div>
  );
};
