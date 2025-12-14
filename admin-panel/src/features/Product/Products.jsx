// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProducts } from "../Product/Auth/ProductThunk";
import Pagination from "../../pages/Pagination";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState("");

  const { productD } = useSelector(
    (state) => state.productAuth
  );

  const [page, setPage] = useState(1);
  const totalPages = 20;

  useEffect(() => {
    dispatch(AllProducts({ page }));
  }, [dispatch, page]);

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

  return (
   <div className="flex justify-center ">
      <div className="w-full max-w bg-white rounded-lg shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Products</h2>
          <button
            onClick={handleAdd}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
          >
            Add Product
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full pb-5 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Avatar
                </th>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Product Title
                </th>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Brand
                </th>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Category
                </th>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Stock
                </th>
                <th className="px-4 py-2 text-left text-md font-bold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productD.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      loading="lazy"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    {product.title}
                  </td>
                  <td className="px-4 py-2">{product.brand}</td>
                   <td className="px-4 py-2">{product.category}</td>
                  <td className="px-4 py-2">${product.price}</td>
                  <td className="px-4 py-2">{product.stock}</td>
                  <td className="px-4 py-2 flex gap-2">
                    {/* <button
                      onClick={() => handleEdit(product.id)}
                      className="text-blue-500 hover:text-blue-700"
                    > */}
                    <Link
                      to={`/dashboard/products/details/${product.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View
                    </Link>
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
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
      </div>
    </div>
  );
};

export default Products;
