import React, { useState } from 'react';
import { mockMarketplace } from '../mockData';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const navigator = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories from mock data
  const categories = ['All', ...new Set(mockMarketplace.map(product => product.category))];
  
  // Filter products based on search and category
  const filteredProducts = mockMarketplace.filter(product => {
    const matchesSearch = product.product.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">
            Recycled Products Marketplace
          </h2>
          <p className="text-center mt-2 text-green-100">
            Sustainable solutions from agricultural waste
          </p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products or sellers..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-medium">{filteredProducts.length}</span> products
          </p>
          <p className="text-sm text-gray-500">
            Sort by: <span className="text-green-600 font-medium cursor-pointer">Newest</span>
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.product}
                  className="w-full h-full object-contain border-rounded" 
                />
                {product.eco && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Eco-certified
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{product.product}</h3>
                  <span className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-gray-700 flex items-center">
                    <span className="font-medium mr-2">Price:</span> 
                    <span className="text-green-600 font-bold">{product.price}</span>
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="font-medium mr-2">Seller:</span> 
                    <span>{product.seller}</span>
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="font-medium mr-2">Available:</span> 
                    <span>{product.quantity} units</span>
                  </p>
                  {product.description && (
                    <p className="text-gray-600 text-sm mt-2">
                      {product.description.substring(0, 80)}
                      {product.description.length > 80 ? '...' : ''}
                    </p>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  onClick={()=> navigator('/signin')}>
                    Contact Seller
                  </button>
                  <button className="bg-gray-100 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for</p>
          </div>
        )}
      </div>
</div>
  );
}
export default Marketplace;