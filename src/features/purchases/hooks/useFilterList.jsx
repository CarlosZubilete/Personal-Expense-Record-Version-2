import { useState, useEffect } from "react";

export const useFilterList = (list) => {
  // Init states to filter the list
  const [listFilter, setListFilter] = useState([]);
  const [orderBy, setOrderBy] = useState({ key: "", value: "" });
  const [filterTxt, setFilterTxt] = useState("");

  // Update listFilter whenever original list changes
  useEffect(() => {
    setListFilter(list);
  }, [list]);

  const handleFilterList = (filter) => {
    // First filter
    if (filter.key && filter.value) {
      // setOrderBy(filter);
      console.log("Filter in PurchasePage:", filter);
      console.log("Filtering...");
      setOrderBy(filter);
      // First sort
      const sortedList = [...list].sort((a, b) => {
        if (filter.key === "price") {
          return filter.value === 1 ? a.price - b.price : b.price - a.price;
        }
        if (filter.key === "name") {
          return filter.value === 1
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      });

      console.log("Sorted List:", sortedList);
      // Seconde filter
      if (filter.filterTxt) {
        console.log("Applying name filter:", filter.filterTxt);
        const filteredByName = sortedList.filter((purchase) =>
          purchase.name.toLowerCase().includes(filter.filterTxt.toLowerCase())
        );
        setListFilter(filteredByName);
        setFilterTxt(filter.filterTxt);
      } else {
        setListFilter(sortedList);
        setFilterTxt("");
      }
    } else {
      // Only filter by name
      if (filter.filterTxt) {
        console.log("Applying name filter only:", filter.filterTxt);
        const filteredByName = list.filter((purchase) =>
          purchase.name.toLowerCase().includes(filter.filterTxt.toLowerCase())
        );
        setListFilter(filteredByName);
        setFilterTxt(filter.filterTxt);
      } else {
        console.log("No filter applied");
        setListFilter(list);
        setFilterTxt("");
      }
    }
  };

  // Debug output
  console.log("Current filter state:", {
    filterTxt,
    orderBy,
    totalItems: listFilter.length,
  });

  return { listFilter, orderBy, filterTxt, handleFilterList };
};
