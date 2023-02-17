type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

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
        </label>
      </form>
    </section>
  );
};
