interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar = ({ setSearch }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  return (
    <div className="grid place-items-center">
      <form>
        <input
          type="text"
          className="bg-secondary rounded-lg text-text text-sm px-5 py-3 mb-8 mt-2 focus:outline-none  ring-text placeholder:text-text placeholder:text-sm placeholder:text-opacity-50 max-w-[20rem] "
          placeholder="Search something..."
          onChange={handleSearch}
        ></input>
      </form>
    </div>
  );
};
