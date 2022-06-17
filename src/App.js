import CategoriesApp from "./modules/categories/CategoriesApp";
import CategoryItem from "./modules/categories/CategoryItem";
import "./styles.css";

export default function App() {
  return (
    <div className="main-container">
      <CategoriesApp />
      <CategoryItem />
    </div>
  );
}
