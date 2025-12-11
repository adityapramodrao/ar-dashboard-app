import { useState } from "react";
import { Edit, Trash } from "lucide-react";

const dummyProducts = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=1",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+91 1234567890",
    gender: "Male",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    phone: "+91 9876543210",
    gender: "Female",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/40?img=3",
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex@example.com",
    phone: "+91 1122334455",
    gender: "Male",
  },
  // add more dummy data if needed
];

const PAGE_SIZE = 5;

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(dummyProducts);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert("Edit product with id: " + id);
  };

  const handleAdd = () => {
    alert("Add new product clicked");
  };

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const currentProducts = products.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">User List</h2>
          <button
            onClick={handleAdd}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
          >
            Add User
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Avatar
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Mobile
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Gender
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <img
                      src={product.avatar}
                      alt={product.firstName}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    {product.firstName} {product.lastName}
                  </td>
                  <td className="px-4 py-2">{product.email}</td>
                  <td className="px-4 py-2">{product.phone}</td>
                  <td className="px-4 py-2">{product.gender}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
