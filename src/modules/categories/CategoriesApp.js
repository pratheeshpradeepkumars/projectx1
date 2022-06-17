import React, { useState } from "react";
import Categories from "./Categories";

function CategoriesApp() {
  /* Sample categoreis list */
  const categoriesData = [
    {
      id: 1,
      name: "Home renovation",
      totalExpense: 22700
    },
    {
      id: 2,
      name: "Grocery expenses",
      totalExpense: 1500
    },
    {
      id: 3,
      name: "Daily expenses",
      totalExpense: 4500
    }
  ];

  const [categories] = useState(categoriesData);
  const [search, setSearch] = useState("");

  /*  Filter categories based on search keyword  */
  const filterCategories = () => {
    if (search === "") return categories;
    return categories.filter(
      (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  };

  return (
    <div className="container categories-container">
      <h1>All Categories</h1>

      {/* Search Categories */}
      <input
        className="input-box"
        type="text"
        placeholder="Search Categories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categories List */}
      <Categories categories={filterCategories()} />
    </div>
  );
}

export default CategoriesApp;
