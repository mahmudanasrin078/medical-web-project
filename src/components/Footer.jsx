import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
           <img src="/iso-certification-1 1.png" alt="" />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/AllProducts" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Medical Devices</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Pharmaceuticals</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Personal Care</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Hospital Equipment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@medicalcare.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Health St, Med City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedicalCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}