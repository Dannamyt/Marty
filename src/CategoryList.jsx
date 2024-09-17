
const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category); // Toggle selection
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategorySelect(category)}
            style={{ cursor: 'pointer', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;