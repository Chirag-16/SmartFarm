import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-6 text-lg leading-8 max-w-3xl">
            Comprehensive farm waste management solutions tailored to your agricultural operations.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">How We Help Farms Thrive</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We offer end-to-end waste management services designed specifically for agricultural operations.
            Our solutions help you comply with regulations, reduce environmental impact, and even create
            new revenue streams from what was once considered waste.
          </p>
        </div>
      
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-200">
              <img 
                src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/44118547_922412787947934_5975501085966598144_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Qk3nMULfHNgQ7kNvgEyYIDU&_nc_oc=AdiT1_W34AsnuyuvR-yi76ekUj20mbndL7G-U8Hzpe0qTF5pAFvh7INndtsjnJ4sA37ET4lCP-EC97zNq6nvErjv&_nc_zt=23&_nc_ht=scontent.famd1-3.fna&_nc_gid=Arrlfb3LpQgqx728p3XRvia&oh=00_AYHiPIXOrRU5un3mPZ3vqAUzCZJpjceZieuJO7fUEdKw3A&oe=67F4CE38" 
                alt="Waste assessment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Assessment & Planning</h3>
              <p className="text-gray-700 mb-4">
                We begin with a comprehensive assessment of your farm's waste streams, volumes, and current management practices.
                Our team then develops a customized plan tailored to your specific needs.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  On-site waste stream analysis
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regulatory compliance review
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom management plan development
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-200">
              <img 
                src="https://cdn10.bigcommerce.com/s-qq5l39dqy4/product_images/uploaded_images/digging-compost.jpg" 
                alt="Composting facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Composting Solutions</h3>
              <p className="text-gray-700 mb-4">
                Convert organic waste into valuable compost that can be used on your farm or sold
                as an additional revenue stream. We design, implement, and manage composting systems of all scales.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  System design and setup
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Process management and monitoring
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality testing and certification
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-200">
              <img 
                src="https://live-production.wcms.abc-cdn.net.au/96350d205e65986fbc0917c542a49243?impolicy=wcms_crop_resize&cropH=1223&cropW=2175&xPos=0&yPos=77&width=862&height=485" 
                alt="Biogas facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Biogas Production</h3>
              <p className="text-gray-700 mb-4">
                Transform animal waste and other organic materials into biogas for heating, electricity
                generation, or vehicle fuel. Our anaerobic digestion systems are scalable to farms of all sizes.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Digester design and installation
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Energy capture and utilization systems
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Digestate management and application
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-200">
              <img 
                src="https://shapiroe.com/wp-content/uploads/2023/07/crop-residue-uses.jpg" 
                alt="Crop residue collection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Crop Residue Management</h3>
              <p className="text-gray-700 mb-4">
                Efficiently handle crop residues through collection, processing, and repurposing
                for soil amendment, animal bedding, or biomass energy production.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Collection and transportation services
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Shredding and processing
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Repurposing solutions
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-200">
              <img 
                src="https://www.sewagetreatmentplants.in/wp-content/uploads/2021/04/What-is-the-purpose-of-a-wastewater-treatment-plant-used-in-agriculture-1.jpg" 
                alt="Wastewater treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Wastewater Treatment</h3>
              <p className="text-gray-700 mb-4">
                Manage agricultural wastewater through advanced treatment systems that protect
                local water sources and allow for water reuse in farm operations.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Treatment system design
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Water quality monitoring
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reuse implementation
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-200">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7pB97QDGV_TRAep6DvRspTa6FsMSyTMi7w&s" 
                alt="Compliance consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700 mb-4">
                Stay compliant with local, state, and federal regulations regarding agricultural
                waste management through our expert guidance and documentation services.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regulatory assessment and gap analysis
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Permit application assistance
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Documentation and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-green-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Initial Consultation</h3>
              <p className="text-gray-700">
                We meet with you to understand your farm's specific needs and challenges.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Assessment</h3>
              <p className="text-gray-700">
                Our team conducts a thorough analysis of your current waste management practices.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Solution Design</h3>
              <p className="text-gray-700">
                We develop a customized plan tailored to your specific agricultural operations.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Implementation</h3>
              <p className="text-gray-700">
                We implement the solution and provide ongoing support and management as needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Teaser */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Case Study 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-green-200">
              <img 
                src="https://static.farmtario.com/wp-content/uploads/2024/05/27030002/compost-bedded-pack-dairy-cows_CCSAW.jpeg" 
                alt="Dairy farm with composting facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Valley Dairy Farm</h3>
              <p className="text-gray-700 mb-4">
                Implemented a comprehensive manure management system that reduced odor complaints by 90% and
                generated $50,000 in annual revenue through compost sales.
              </p>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-green-200">
              <img 
                src="https://www.agro-chemistry.com/wp-content/uploads/2022/04/ReFerm-1639x1200.jpg" 
                alt="Crop farm with biogas facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Heartland Crops</h3>
              <p className="text-gray-700 mb-4">
                Converted crop residues into biogas, supplying 75% of the farm's energy needs and
                significantly reducing disposal costs and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your farm's waste management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement sustainable waste management solutions that benefit your farm and the environment.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">How quickly can you implement a waste management system?</h3>
            <p className="text-gray-700">
              Implementation timelines vary based on the complexity of your operation and the solutions needed. Simple systems can be implemented in 4-6 weeks, while more complex solutions may take 3-6 months. We'll provide a detailed timeline during your consultation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">What size farms do you work with?</h3>
            <p className="text-gray-700">
              We work with farms of all sizes, from small family operations to large industrial farms. Our solutions are scalable and can be tailored to match your specific needs and budget.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">How much does a waste management system cost?</h3>
            <p className="text-gray-700">
              Costs vary widely depending on your specific needs, farm size, and chosen solutions. We offer options for different budgets and can help you identify potential grants and incentives to offset costs. Many of our solutions also create new revenue streams that provide return on investment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">Do you handle all types of agricultural waste?</h3>
            <p className="text-gray-700">
              Yes, we have experience with all major types of agricultural waste, including animal manure, crop residues, agricultural plastics, chemicals, and wastewater. Our team will develop a comprehensive plan to address all waste streams on your farm.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-green-700 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Sustainable Waste Management Journey Today</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us for a free initial consultation and discover how our farm waste management solutions can benefit your operation.
          </p>
          <button className="bg-white text-green-800 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition-colors" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;