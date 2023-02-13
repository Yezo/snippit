interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar = ({ setSearch }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  return (
    <section className="grid place-items-center">
      <form>
        <input
          type="text"
          className="bg-secondary rounded-lg text-primary text-sm px-4 py-3 mb-8 mt-2 focus:outline-none  ring-text placeholder:text-primary placeholder:text-sm placeholder:text-opacity-50 max-w-[20rem] "
          placeholder="Search something..."
          onChange={handleSearch}
        ></input>
      </form>
    </section>
  );
};
