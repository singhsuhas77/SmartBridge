import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/product1.jpg', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/product2.jpg', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/product3.jpg', description: 'Description for Product 3' },
];

const ProductList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <Link 
                to={`/product/${product.id}`} 
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;