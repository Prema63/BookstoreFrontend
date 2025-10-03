import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Upload,
  Image,
  Save,
  RotateCcw,
  X,
  Plus,
} from "lucide-react";

// Modal Component
function AddCategoryModal({ isOpen, onClose, onAdd }) {
  const [newCategory, setNewCategory] = useState({
    heading: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCategory({ ...newCategory, image: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!newCategory.heading) {
      alert("Please enter a category heading");
      return;
    }
    onAdd(newCategory);
    // Reset form
    setNewCategory({ heading: "", description: "", image: null });
    setImagePreview(null);
    onClose();
  };

  const handleCancel = () => {
    setNewCategory({ heading: "", description: "", image: null });
    setImagePreview(null);
    onClose();
  };

  if (!isOpen) return null;

  // Modal Design
  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Add New Category
          </h2>
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Category Heading */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title *
            </label>
            <input
              type="text"
              placeholder="Enter Title of book"
              value={newCategory.heading}
              onChange={(e) =>
                setNewCategory({ ...newCategory, heading: e.target.value })
              }
              className="w-full px-4 py-3 focus:outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Author *
            </label>
            <input
              type="text"
              placeholder="Enter Author of book"
              value={newCategory.heading}
              onChange={(e) =>
                setNewCategory({ ...newCategory, heading: e.target.value })
              }
              className="w-full px-4 py-3 focus:outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

        

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}

//Design after adding the categories from the modal
function CategoryCard({ category, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-5">
        {/* Image */}
        {category.image && (
          <img
            src={
              typeof category.image === "string"
                ? category.image
                : URL.createObjectURL(category.image)
            }
            alt={category.heading}
            className="w-28 h-28 object-cover rounded-lg border shadow-sm"
          />
        )}

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 leading-snug">
            {category.heading}
          </h3>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(category.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// CategorySection Component
function CategorySection({
  category,
  onUpdate,
  onDelete,
  onOpenModal,
  addedCategories,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    category.image ? URL.createObjectURL(category.image) : null
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpdate(category.id, "image", file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    onUpdate(category.id, field, value);
  };

  const handleReset = () => {
    onUpdate(category.id, "heading", "");
    onUpdate(category.id, "description", "");
    onUpdate(category.id, "image", null);
    setImagePreview(null);
  };

  const handleSubmit = () => {
    console.log("Category Data:", category);
    alert("Category saved successfully!");
  };

  return (
    <div className="w-full max-w-6xl  mt-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      <div>
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {category.heading || "Category Management"}
          </h2>
          <div className="flex items-center space-x-2">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>

        {/* Collapsed State */}
        {!isExpanded && (
          <div className="p-4 flex justify-between items-center">
            <span className="text-gray-700">
              {category.heading || "No Heading"}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
            >
              Edit
            </button>
          </div>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <div className="p-6 space-y-6">
            {/* first Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Heading */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Main Seller Heading
                </label>
                <input
                  type="text"
                  placeholder="Enter Category Heading"
                  value={category.heading}
                  onChange={(e) => handleInputChange("heading", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Sub Seller Heading
                </label>
                <input
                  type="text"
                  placeholder="Enter Sub Category Heading"
                  value={category.heading}
                  onChange={(e) => handleInputChange("heading", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-0 sm:mt-9">
              <button
                onClick={handleReset}
                className="flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 w-full sm:w-52 h-10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 w-full sm:w-52 h-10"
              >
                <Save className="w-5 h-5 mr-2" />
                Save
              </button>
              <button
                onClick={onOpenModal}
                className="flex items-center justify-center border border-blue-800 text-blue-800 rounded-lg  w-full sm:w-52 h-10"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New book
              </button>
            </div>

            {/* Display Added Categories */}
            {addedCategories && addedCategories.length > 0 && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Added Categories ({addedCategories.length})
                </h3>
                <div className="space-y-3">
                  {addedCategories.map((cat) => (
                    <CategoryCard
                      key={cat.id}
                      category={cat}
                      onDelete={onDelete}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
}

// Main Component
export default function BestSellerSection() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      heading: "Best Seller Management",
      description: "Explore our collection",
      image: null,
    },
  ]);
  const [addedCategories, setAddedCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateCategory = (id, field, value) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, [field]: value } : cat
      )
    );
  };

  const addNewCategory = (newCategoryData) => {
    const newId =
      Math.max(
        ...categories.map((c) => c.id),
        ...addedCategories.map((c) => c.id),
        0
      ) + 1;
    setAddedCategories([...addedCategories, { id: newId, ...newCategoryData }]);
  };

  const deleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setAddedCategories(addedCategories.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* Categories List */}
      {categories?.map((cat) => (
        <CategorySection
          key={cat.id}
          category={cat}
          onUpdate={updateCategory}
          onDelete={deleteCategory}
          onOpenModal={() => setIsModalOpen(true)}
          addedCategories={addedCategories}
        />
      ))}

      {/* Add Category Modal */}
      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addNewCategory}
      />
    </div>
  );
}
