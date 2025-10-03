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
function AddAuthorModal({ isOpen, onClose, onAdd }) {
  const [newAuthor, setNewAuthor] = useState({
    heading: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAuthor({ ...newAuthor, image: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!newAuthor.heading) {
      alert("Please enter an author heading");
      return;
    }
    onAdd(newAuthor);
    // Reset form
    setNewAuthor({ heading: "", description: "", image: null });
    setImagePreview(null);
    onClose();
  };

  const handleCancel = () => {
    setNewAuthor({ heading: "", description: "", image: null });
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
            Add New Author
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
          {/* Author Heading */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title *
            </label>
            <input
              type="text"
              placeholder="Enter Title of book"
              value={newAuthor.heading}
              onChange={(e) =>
                setNewAuthor({ ...newAuthor, heading: e.target.value })
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
              value={newAuthor.heading}
              onChange={(e) =>
                setNewAuthor({ ...newAuthor, heading: e.target.value })
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

//Design after adding the authors from the modal
function AuthorCard({ author, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-5">
        {/* Image */}
        {author.image && (
          <img
            src={
              typeof author.image === "string"
                ? author.image
                : URL.createObjectURL(author.image)
            }
            alt={author.heading}
            className="w-28 h-28 object-cover rounded-lg border shadow-sm"
          />
        )}

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 leading-snug">
            {author.heading}
          </h3>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {author.description}
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(author.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// AuthorSection Component
function AuthorSection({
  author,
  onUpdate,
  onDelete,
  onOpenModal,
  addedAuthors,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    author.image ? URL.createObjectURL(author.image) : null
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpdate(author.id, "image", file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    onUpdate(author.id, field, value);
  };

  const handleReset = () => {
    onUpdate(author.id, "heading", "");
    onUpdate(author.id, "description", "");
    onUpdate(author.id, "image", null);
    setImagePreview(null);
  };

  const handleSubmit = () => {
    console.log("Author Data:", author);
    alert("Author saved successfully!");
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
            {author.heading || "Author Management"}
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
              {author.heading || "No Heading"}
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
                  placeholder="Enter Author Heading"
                  value={author.heading}
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
                  placeholder="Enter Sub Author Heading"
                  value={author.heading}
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

            {/* Display Added Authors */}
            {addedAuthors && addedAuthors.length > 0 && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Added Authors ({addedAuthors.length})
                </h3>
                <div className="space-y-3">
                  {addedAuthors.map((auth) => (
                    <AuthorCard
                      key={auth.id}
                      author={auth}
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
export default function PopularAuthorSection() {
  const [authors, setAuthors] = useState([
    {
      id: 1,
      heading: "Popular Author Management",
      description: "Explore our collection",
      image: null,
    },
  ]);
  const [addedAuthors, setAddedAuthors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateAuthor = (id, field, value) => {
    setAuthors(
      authors.map((auth) =>
        auth.id === id ? { ...auth, [field]: value } : auth
      )
    );
  };

  const addNewAuthor = (newAuthorData) => {
    const newId =
      Math.max(
        ...authors.map((a) => a.id),
        ...addedAuthors.map((a) => a.id),
        0
      ) + 1;
    setAddedAuthors([...addedAuthors, { id: newId, ...newAuthorData }]);
  };

  const deleteAuthor = (id) => {
    if (window.confirm("Are you sure you want to delete this author?")) {
      setAddedAuthors(addedAuthors.filter((auth) => auth.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* Authors List */}
      {authors?.map((auth) => (
        <AuthorSection
          key={auth.id}
          author={auth}
          onUpdate={updateAuthor}
          onDelete={deleteAuthor}
          onOpenModal={() => setIsModalOpen(true)}
          addedAuthors={addedAuthors}
        />
      ))}

      {/* Add Author Modal */}
      <AddAuthorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addNewAuthor}
      />
    </div>
  );
}
