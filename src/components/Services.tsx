import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  BoltIcon, 
  BeakerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Screen Repair',
      description: 'Professional screen replacement with high-quality parts and lifetime warranty.',
      features: ['High-quality parts', 'Same-day service', '30-day warranty'],
      price: 'Starting at $79',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Popular',
    },
    {
      icon: BoltIcon,
      title: 'Battery Replacement',
      description: 'Restore your device\'s battery life with genuine replacement batteries.',
      features: ['Genuine batteries', 'Fast charging', 'Performance boost'],
      price: 'Starting at $59',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      badge: 'Fast',
    },
    {
      icon: BeakerIcon,
      title: 'Water Damage Repair',
      description: 'Advanced diagnostic and repair techniques for water-damaged devices.',
      features: ['Advanced diagnostics', 'Component repair', '90% success rate'],
      price: 'Starting at $89',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      badge: 'Expert',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6 font-medium"
          >
            <StarIcon className="h-4 w-4" />
            <span className="text-sm uppercase tracking-wide">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mobile Repair
            </span>{' '}
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your device fixed by certified technicians using genuine parts with industry-leading warranty coverage
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Badge */}
              <div className="absolute -top-3 left-6 z-10">
                <span className={`bg-gradient-to-r ${service.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {service.badge}
                </span>
              </div>

              <div className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                  <service.icon className="w-full h-full" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className={`${service.iconColor} font-bold text-lg bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm`}>
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${service.iconColor} bg-white/80 hover:bg-white font-semibold py-3 px-6 rounded-xl border-2 border-transparent hover:border-current transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm`}
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Services Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our Services?
                </h3>
                <div className="space-y-4">
                  {[
                    { title: '30-Day Warranty', desc: 'All repairs come with comprehensive warranty coverage' },
                    { title: 'Certified Technicians', desc: 'Expert professionals with years of experience' },
                    { title: 'Genuine Parts', desc: 'Only original manufacturer parts used' },
                    { title: 'Fast Turnaround', desc: 'Most repairs completed within 24 hours' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Illustration */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img
                    src="/illus2.png"
                    alt="Mobile repair services"
                    className="w-full h-auto max-w-md mx-auto drop-shadow-xl"
                  />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 -left-6 w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded shadow-lg"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 