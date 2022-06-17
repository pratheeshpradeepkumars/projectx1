import React, { useState, useRef, useEffect, useMemo } from "react";
import SearchNotFound from "../../components/SearchNotFound";

function CategoryItem({ header = "House renovation" }) {
  const [catogeryItems] = useState([
    {
      id: 1,
      description: "Cement",
      expense: 3900,
      tag: "construction"
    },
    {
      id: 2,
      description: "Iron rods",
      expense: 13000,
      tag: "construction"
    },
    {
      id: 3,
      description: "Electrical",
      expense: 5800,
      tag: "construction"
    }
  ]);

  const [selectedRow, setRow] = useState(null);
  const [search, setSearch] = useState("");

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        setRow(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleClick = (id) => {
    setRow(id);
  };

  const handleEdit = () => {
    alert("Editing");
  };

  const handleDelete = () => {
    alert("Deleting");
  };

  /*  Filter categories based on search keyword  */
  const filterCategoryItems = () => {
    if (search === "") return catogeryItems;
    return catogeryItems.filter(
      (item) =>
        item.description.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  };

  const findTotal = (items) => {
    return items.reduce((acc, item) => {
      return acc + item.expense;
    }, 0);
  };

  const filteredData = useMemo(() => filterCategoryItems(), [search]);
  const gridTotal = useMemo(() => findTotal(filteredData), [search]);

  return (
    <div className="container category-item-container">
      <h1>{header}</h1>

      <h3>Grand Total : 22700 INR</h3>

      {/* Search Categories */}
      <input
        className="input-box"
        type="text"
        placeholder="Search category items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <>
        {!filteredData.length ? (
          <SearchNotFound />
        ) : (
          <table className="cat-items-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody ref={ref}>
              {filteredData.map((catItem) => (
                <tr
                  key={catItem.id}
                  className={`table-row-item ${
                    selectedRow === catItem.id ? "selected" : ""
                  }`}
                  onClick={() => handleClick(catItem.id)}
                >
                  <td>{catItem.description}</td>
                  <td>{catItem.expense}</td>
                  {selectedRow === catItem.id && (
                    <div className="table-actions">
                      <div
                        className="action"
                        onClick={() => handleEdit(catItem.id)}
                      >
                        Edit
                      </div>
                      <div
                        className="action"
                        onClick={() => handleDelete(catItem.id)}
                      >
                        Delete
                      </div>
                    </div>
                  )}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{gridTotal}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </>
    </div>
  );
}

export default CategoryItem;
