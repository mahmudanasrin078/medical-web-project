// Product database simulation for demo purposes
// In a real app, you would use a proper database

// Initial products data
const initialProducts = [
  {
    id: 1,
    name: "Blood Pressure Monitor",
    description: "Digital blood pressure monitor with Bluetooth connectivity",
    price: 49.99,
    image: "/Rectangle 7.png",
    category: "Medical Devices"
  },
  {
    id: 2,
    name: "Digital Thermometer",
    description: "Accurate digital thermometer for home use",
    price: 12.99,
    image: "/Rectangle 12.png",
    category: "Medical Devices"
  },
  {
    id: 3,
    name: "First Aid Kit",
    description: "Complete first aid kit with essential supplies",
    price: 24.99,
    image: "/Rectangle 13.png",
    category: "Emergency Care"
  },
  {
    id: 4,
    name: "Stethoscope",
    description: "Professional grade stethoscope for medical practitioners",
    price: 79.99,
    image: "/Rectangle 14.png",
    category: "Medical Instruments"
  },
  // {
  //   id: 5,
  //   name: "Glucometer",
  //   description: "Digital glucose meter with test strips",
  //   price: 29.99,
  //   image: "/api/placeholder/300/200",
  //   category: "Diagnostic Equipment"
  // },
  // {
  //   id: 6,
  //   name: "Pulse Oximeter",
  //   description: "Finger pulse oximeter to measure oxygen saturation",
  //   price: 19.99,
  //   image: "/api/placeholder/300/200",
  //   category: "Monitoring Devices"
  // }
];

// Initialize products array and nextId
let products = [...initialProducts];
let nextId = 7;

// Product database functions
export const getAllProducts = () => products;

export const getProductById = (id) => {
  const productId = typeof id === 'string' ? parseInt(id) : id;
  return products.find(p => p.id === productId);
};

export const addProduct = (productData) => {
  const newProduct = {
    id: nextId++,
    ...productData,
    price: parseFloat(productData.price),
    image: productData.image || "/api/placeholder/300/200",
    category: productData.category || "General"
  };
  
  products.push(newProduct);
  return newProduct;
};

// Reset to initial state (useful for testing)
export const resetDatabase = () => {
  products = [...initialProducts];
  nextId = 7;
};