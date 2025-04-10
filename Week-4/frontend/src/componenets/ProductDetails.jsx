import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: '/product1.jpg', description: 'Full description for Product 1' },
    { id: 2, name: 'Product 2', price: 29.99, image: '/product2.jpg', description: 'Full description for Product 2' },
    { id: 3, name: 'Product 3', price: 39.99, image: '/product3.jpg', description: 'Full description for Product 3' },
  ];
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-blue-600 mb-4">${product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;