"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      return;
    }

    router.push(`/restaurant?search=${search}`);
  };
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Buscar restaurantes"
        className="border-none"
        onChange={handleSearch}
        value={search}
      />
      <Button size="icon" onClick={handleSearchSubmit}>
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
