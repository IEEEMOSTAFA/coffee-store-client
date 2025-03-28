import { useState } from "react";

const AddCoffee1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    availableQuantity: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData({ ...formData, photo: file });
      setErrors({ ...errors, photo: "" });
    } else {
      setErrors({ ...errors, photo: "Please upload a valid image file." });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.availableQuantity.trim()) newErrors.availableQuantity = "Available quantity is required.";
    if (!formData.supplier.trim()) newErrors.supplier = "Supplier is required.";
    if (!formData.taste.trim()) newErrors.taste = "Taste is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.details.trim()) newErrors.details = "Details are required.";
    if (!formData.photo) newErrors.photo = "Photo is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setIsSubmitting(true);

    // Simulate an API call or form submission
    try {
      console.log("Form Data Submitted:", formData);
      // Reset form after successful submission
      setFormData({
        name: "",
        availableQuantity: "",
        supplier: "",
        taste: "",
        category: "",
        details: "",
        photo: null,
      });
      setErrors({});
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-6xl text-purple-600 font-bold mb-4">Add Coffee</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Available Quantity Field */}
        <div>
          <input
            type="text"
            name="availableQuantity"
            placeholder="Available Quantity"
            value={formData.availableQuantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.availableQuantity && <p className="text-red-500 text-sm mt-1">{errors.availableQuantity}</p>}
        </div>

        {/* Supplier Field */}
        <div>
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            value={formData.supplier}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.supplier && <p className="text-red-500 text-sm mt-1">{errors.supplier}</p>}
        </div>

        {/* Taste Field */}
        <div>
          <input
            type="text"
            name="taste"
            placeholder="Taste"
            value={formData.taste}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.taste && <p className="text-red-500 text-sm mt-1">{errors.taste}</p>}
        </div>

        {/* Category Field */}
        <div>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        {/* Details Field */}
        <div>
          <textarea
            name="details"
            placeholder="Details"
            value={formData.details}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
        </div>

        {/* Photo Field */}
        <div>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
          {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
          {formData.photo && (
            <div className="mt-4">
              <p className="text-gray-700">Selected Image:</p>
              <img
                src={URL.createObjectURL(formData.photo)}
                alt="Selected"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSubmitting ? "Adding Coffee..." : "Add Coffee"}
        </button>
      </form>
    </div>
  );
};

export default AddCoffee1;