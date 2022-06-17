import React from "react";
import SearchNotFound from "../../components/SearchNotFound";

function Categories({ categories }) {
  if (!categories.length)
    return <SearchNotFound displayText={"No categories found"} />;
  return (
    <div className="categores-list-container">
      <ul className="categores-list">
        {categories.map((category) => (
          <li key={category.id} className="categories-list-item">
            <div className="category-name">{category.name}</div>
            <div className="category-expense">{category.totalExpense} INR</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
