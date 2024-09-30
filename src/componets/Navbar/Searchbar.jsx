import searchIcon from "../../assets/icons/search-icon.svg";

export const Searchbar = () => {
  return (
    <div className="searchbar w-[222px] h-[40px] bg-white text-black rounded-full flex items-center justify-start shadow">
      <div className="search-icon w-fit p-2 flex-shrink-0 min-w-[20%]">
        <img src={searchIcon} alt="searchIcon" className="w-[24px] h-[24px] " />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="w-[70%] text-[14px] bg-transparent border-none outline-none "
      />
    </div>
  );
};
