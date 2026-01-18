import React from 'react';

const About
 = () => {
    return (
        <div>
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
        </div>
    );
};

export default About
;