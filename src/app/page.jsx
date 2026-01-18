import Link from "next/link";

import { initialProducts } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-[#00B2EC] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-3 md:mb-4">
            Welcome to MedicalCare
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
            Your trusted partner for quality healthcare products and services
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/AllProducts"
              className="bg-white text-[#00B2EC] px-5 py-3 rounded-full font-semibold 
                   hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
            >
              Browse Products
            </Link>

            <Link
              href="/login"
              className="border-2 border-white px-5 py-3 rounded-full font-semibold 
                   hover:bg-white hover:text-[#00B2EC] transition duration-300 text-sm sm:text-base"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initialProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="h-48 sm:h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-[#00B2EC] font-bold text-base sm:text-lg">
                      ${product.price}
                    </span>

                    <Link
                      href={`/AllProducts/${product.id}`}
                      className="text-sm sm:text-base text-[#00B2EC] font-medium hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Quality Products",
                desc: "Top-grade medical supplies sourced from trusted manufacturers",
                image: "/Rectangle 40.png",
              },
              {
                title: "Fast Delivery",
                desc: "Quick and reliable shipping to get products to you promptly",
                image: "/Rectangle 38.png",
              },
              {
                title: "Expert Support",
                desc: "Professional guidance and support for all your needs",
                image: "/Rectangle 42.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="h-44 sm:h-48 md:h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                About MedicalCare
              </h2>
              <p className="text-gray-600 mb-4">
                We are committed to providing high-quality medical products and
                exceptional service to healthcare professionals and patients
                alike.
              </p>
              <p className="text-gray-600">
                Our mission is to improve health outcomes by making quality
                medical supplies accessible and affordable.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="h-64 w-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src="/Person Vector.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Customer {testimonial}</h4>
                    <div className="text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Excellent products and service. Highly recommend MedicalCare
                  for all your medical supply needs."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Alice Johnson",
                comment:
                  "Excellent products and service. Highly recommend MedicalCare for all your medical supply needs.",
                image: "/pic1.jpg",
              },

              {
                name: "Sara Williams",
                comment:
                  "High-quality medical products with professional guidance. Very satisfied with MedicalCare!",
                image: "/pic2.jpg",
              },

              {
                name: "Michael Smith",
                comment:
                  "Fast delivery and amazing support. I always rely on MedicalCare for my clinic supplies.",
                image: "/pic3.jpg",
              },
            ].map((customer, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Profile Image */}
                <div className="flex items-center mb-4">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {customer.name}
                    </h4>
                    <div className="text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-600 italic text-sm sm:text-base">
                  "{customer.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}

      <section className="py-16 bg-gradient-to-r from-blue-500 to-[#00B2EC] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their medical
            supply needs.
          </p>
          <Link
            href="/AllProducts"
            className="bg-white text-[#00B2EC] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Stats */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "500+", label: "Products" },
              { number: "24/7", label: "Support" },
              { number: "99%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-[#00B2EC] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
