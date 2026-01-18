import React from 'react';

async function fetchProduct(id) {
  try {
    // For server-side fetching, we need to use the full URL
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: 'no-store', // Disable caching for fresh data
    });
    
    if (res.ok) {
      return await res.json();
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  
  // Fetch product data from API
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Extended product data for demonstration purposes
  const extendedData = {
    features: [
      "High quality materials",
      "Easy to use",
      "Reliable performance",
      "Warranty included",
      "Free shipping"
    ],
    specifications: {
      "Weight" : " 1.5 kg",
      "Dimensions":" 10 x 5 x 3 inches",
      "Warranty": "2 years",
      "Manufacturer": "MedTech Inc."
    },
    reviews: [
      { rating: 5, comment: "Excellent product, highly recommend!" },
      { rating: 4, comment: "Good quality, works as expected." }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-[#00B2EC]  text-sm font-medium rounded-full mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                </div>
                <span className="text-3xl font-bold text-[#00B2EC] ">${product.price.toFixed(2)}</span>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {extendedData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications:</h3>
                <dl className="grid grid-cols-2">
                  {Object.entries(extendedData.specifications).map(([key, value]) => (
                    <div key={key} className="flex gap-6">
                      <dt className="font-medium text-gray-700 w-1/2">{key}:</dt>
                      <dd className="text-gray-900 w-1/2">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-[#00B2EC]  hover:bg-blue-400 text-white py-3 px-6 rounded-full font-medium transition duration-300">
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-full font-medium transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {extendedData.reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







