'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../navbar/page";

// import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

interface Category {
  idcategory: number;
  name: string;
  productCount: number;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

//   const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:8000/admin/getAllCategory`)
      .then((res) => {
        const categoriesWithProductCounts = res.data.map(async (category: Category) => {
          const productResponse = await axios.get(`http://localhost:8000/admin/ProductInThatCategory/${category.idcategory}`);
          const productCount = productResponse.data.length;
          return { ...category, productCount };
        });
        Promise.all(categoriesWithProductCounts)
          .then((categoriesWithCounts) => {
            setCategories(categoriesWithCounts);
          });
      })
      .catch((err) => {
        console.log('Error fetching category data:', err);
      });
  }, []);

  const handleDeleteCategory = (id: number): void => {
    axios.delete(`http://localhost:8000/admin/deleteCategory/${id}`).then((res) => {
      console.log("deleted category");
    })
      .catch((err) => { console.log(err); });
  };

  const handleAddCategory = (): void => {
    axios.post(`http://localhost:8000/admin/createCategory`, {
      name: newCategoryName
    }).then((res) => {
      console.log('category created');
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Category List</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add Category
        </button>
        {showAddForm && (
          <div className="mb-4">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="border p-2 mr-2"
              placeholder="Enter category name"
            />
            <button
              onClick={() => { handleAddCategory(); window.location.reload(); }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Category Name</th>
                <th className="px-4 py-2">Number of Products</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.idcategory}>
                  <td className="border px-4 py-2">{category.name}</td>
                  <td className="border px-4 py-2">{category.productCount}</td>
                  <td className="border px-4 py-2">
                    <button
                    //   onClick={() => navigate(`/Admin/categories/products?categoryId=${category.idcategory}`)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      View Products
                    </button>
                    <Link
                      to={`/categories/${category.idcategory}/edit`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => { handleDeleteCategory(category.idcategory); window.location.reload(); }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
