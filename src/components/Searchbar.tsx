interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar = ({ setSearch }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  return (
    <section className="grid place-items-center mb-2">
      <form>
        <label
          htmlFor="searchbar"
          className="relative block overflow-hidden border-b border-secondary pt-3 focus-within:border-secondary"
        >
          <input
            type="searchbar"
            id="searchbar"
            placeholder="Search something..."
            className="peer h-7 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm focus:placeholder-transparent italic px-1 py-1 tracking-tighter"
            onChange={handleSearch}
          />

          {/* <span className="absolute left-0 top-2 -translate-y-1/2 hidden text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm tracking-wide peer-focus:top-2 peer-focus:text-xs peer-focus:flex">
            Search
          </span> */}
        </label>
        {/* <input
          type="text"
          className="bg-secondary rounded-lg text-primary text-sm px-4 py-3 mb-8 mt-2 focus:outline-none  ring-text placeholder:text-primary placeholder:text-sm placeholder:text-opacity-50 max-w-[20rem] "
          placeholder="Search something..."
          onChange={handleSearch}
        ></input> */}
      </form>
    </section>
  );
};
