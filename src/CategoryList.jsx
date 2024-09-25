
const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category); // Toggle selection
  };

  return (
    <div>
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 font-switzer justify-center mx-4 sm:mx-9 mt-20">
        {categories.map((category) => (
            <li
                key={category}
                onClick={() => handleCategorySelect(category)}
                style={{ cursor: 'pointer', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
                className="text-xl sm:text-2xl"
            >
                {category.toUpperCase()}
            </li>
        ))}
    </ul>
</div>
  );
};

export default CategoryList;