"use client";

import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

import { Input } from "./input";

interface SearchInputProps {
  defaultValue?: string;
  hideOnSearch?: boolean;
}

export const SearchInput = ({
  defaultValue,
  hideOnSearch,
}: SearchInputProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [searchInput, setSearchInput] = useState(defaultValue || "");

  useEffect(() => {
    setSearchInput(defaultValue || "");
  }, [defaultValue]);

  const handleSearchEnter = () => {
    if (searchInput) router.push(`/search?q=${searchInput}`);
  };

  if (pathname === "/search" && hideOnSearch) return null;

  return (
    <Input
      name="search"
      type="text"
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
      onEnter={handleSearchEnter}
    />
  );
};
