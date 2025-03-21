
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigator = useNavigate();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15
      } 
    }
  };

  const cardHover = {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.squarespace-cdn.com/content/v1/5995f19ca803bb6608dcb3d6/1128172e-19ec-4675-96a5-5ff0959bf1e2/picking+lettuce.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-30" />
        <motion.div
          className="container mx-auto text-center relative px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif drop-shadow-md"
            variants={itemVariants}
          >
            Smart Farm Waste Management
          </motion.h1>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transforming agricultural waste into sustainable resources through innovative technology
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200"
              onClick={() => navigator("signIn")}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200"
              onClick={()=> navigator("marketplace")}
            >
              Explore Marketplace
            </motion.button>
          </motion.div>
        </motion.div>
        </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "85%", text: "Waste Reduction" },
              { number: "2,500+", text: "Farmers Onboarded" },
              { number: "32K", text: "Tons Recycled" },
              { number: "12+", text: "Partner Countries" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold text-green-600 mb-2">{stat.number}</span>
                <span className="text-gray-600">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Abstract */}
      <section className="container mx-auto my-24 px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-green-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <img 
                  src="https://www.santacruzsentinel.com/wp-content/uploads/2020/05/STC-L-COVIDFARMS-0511-01.jpg?w=595" 
                  alt="Sustainable farming" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
                Revolutionizing Farm Waste
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Agricultural waste poses significant environmental challenges, contributing to 
                  pollution and resource inefficiency. Our system provides an intelligent 
                  solution that transforms waste into valuable resources.
                </p>
                <p>
                  Through advanced categorization and processing technologies, we enable farmers
                  to convert organic waste into compost, biogas, and sustainable materials.
                </p>
                <p>
                  The integrated platform offers real-time monitoring and smart analytics,
                  helping farmers make data-driven decisions for waste management.
                </p>
                <p>
                  By promoting circular economy principles, we're creating sustainable
                  agricultural practices that benefit both farmers and the environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto my-24 px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Key Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Advanced technology for every stage of agricultural waste management
          </motion.p>
        </div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { 
              title: "Smart Categorization", 
              content: "AI-driven waste classification using computer vision technology to sort and identify different types of agricultural waste with 98% accuracy.",
              icon: "🌱",
              image: "https://www.lingayasvidyapeeth.edu.in/sanmax/wp-content/uploads/2024/02/Solid-Waste-Management-in-Smart-Cities.webp"
            },
            { 
              title: "Waste Tracking", 
              content: "Real-time monitoring from collection to processing with IoT sensors and blockchain verification for complete transparency.",
              icon: "📈",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68S4v32Exmmvhf0505QkvzG9IXFf3D6wFGQ&s"
            },
            { 
              title: "Eco Solutions", 
              content: "Conversion to compost, biogas, and recyclables through our patented processing techniques that maximize resource recovery.",
              icon: "♻️",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdQB0gOJOdKo_8VWHndY4MkFqtEbHdG0zXA&s"
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-green-50 hover:border-green-100 transition-all flex flex-col h-full"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <div className="rounded-lg overflow-hidden mb-6">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              </div>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.content}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from farmers who have transformed their waste management practices
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Ram Lal",
                role: "Wheat Farmer, Idaho",
                quote: "SmartFarm has reduced our waste disposal costs by 65% and created a new revenue stream through compost sales.",
                image: "data:image/jpeg;base64,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"
              },
              {
                name: "Jabar Singh",
                role: "Vineyard Owner, California",
                quote: "The analytics dashboard helps me track our environmental impact. We've become a zero-waste operation in just 8 months.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW36sHiuya7Td2YrzoyVGnEOxXPtlTVOc_5A&s"
              },
              {
                name: "Aaryan Tau",
                role: "Organic Farm Cooperative",
                quote: "Implementing the SmartFarm system has been transformative. Our members have collectively diverted over 10,000 tons from landfills.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ACu80g4-ttKejKrn9EpQm43MP2xa3yVAMQ&s"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                variants={itemVariants}
                whileHover={cardHover}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto my-24 px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes sustainable waste management simple
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 relative">
            {[
              {
                title: "Collection & Sorting",
                description: "Waste is collected and automatically sorted using our AI-powered system",
                image: "https://vegetablegrowersnews.com/wp-content/uploads/2020/05/USDA-farm-waste.jpg",
                reverse: false
              },
              {
                title: "Processing & Transformation",
                description: "Materials are processed based on type, converting waste into valuable resources",
                image: "https://www.heraldtribune.com/gcdn/authoring/2018/04/25/NSHT/ghows-LK-6ab23c4f-442b-7294-e053-0100007fe743-064791b3.jpeg?width=660&height=347&fit=crop&format=pjpg&auto=webp",
                reverse: true
              },
              {
                title: "Dashboard & Analytics",
                description: "Monitor your environmental impact and resource recovery in real-time",
                image: "https://www.researchgate.net/publication/356699956/figure/fig1/AS:1098272315846656@1638859933165/Precision-farming-using-IoT-1.png",
                reverse: false
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${step.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${step.reverse ? 'md:pr-16' : 'md:pl-16'} relative`}>
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl">🌱</span>
                <span className="font-bold text-xl">Agriclean</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming agricultural waste into sustainable resources through innovative technology.
              </p>
              <div className="flex space-x-4">
          {/* Social media links with proper icons */}
          <a 
            href="https://www.facebook.com/share/1NiTwN8xQL/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition duration-200"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="https://twitter.com/agriclean" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition duration-200"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/aryan__patel_28?igsh=MWdwaXRrNDJwdWY5bA" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition duration-200"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/aryan-patel-91622a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition duration-200"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
            </div>
            
            {[
              {
                title: "Solutions",
                links: ["Waste Categorization", "Processing Technology", "Analytics Dashboard", "Marketplace"]
              },
              {
                title: "Company",
                links: ["About Us", "Our Team", "Careers", "Contact Us"]
              },
              {
                title: "Resources",
                links: ["Blog", "Case Studies", "Sustainability Report", "FAQ"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 SmartFarm. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;