import { useState } from "react";

export function useSearch() {
  const [filter, setFilter] = useState("");

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return { filter, onFilterChange };
}
