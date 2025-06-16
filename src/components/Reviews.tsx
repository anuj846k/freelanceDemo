
import { motion } from 'framer-motion';
import CircularTestimonials from './ui/circular-testimonials';
import { 
  WrenchScrewdriverIcon,
  BoltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Reviews = () => {
  const testimonials = [
    {
      quote: 'Excellent! My phone was repaired in no time. The technician was professional and the service was incredibly fast.',
      name: 'Julia S.',
      designation: 'Satisfied Customer',
      src: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
    },
    {
      quote: 'Very professional and affordable. My go-to place for phone repairs. They always deliver excellent results.',
      name: 'Mark T.',
      designation: 'Regular Customer',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote: 'Competitive rates for all repair services. The quality of work is outstanding and the warranty gives me peace of mind.',
      name: 'Sarah K.',
      designation: 'Happy Client',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const features = [
    {
      icon: WrenchScrewdriverIcon,
      title: 'Experienced Technicians',
      description: 'Our skilled team ensures quality repairs every time.',
    },
    {
      icon: BoltIcon,
      title: 'Quick Turnaround',
      description: 'We offer fast and efficient repair services.',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable Pricing',
      description: 'Competitive rates for all repair services.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - here's what our customers say about our services
          </p>
        </motion.div>

        {/* Circular Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white p-16 rounded-2xl shadow-lg min-h-[400px] flex items-center justify-center">
            <div className="max-w-6xl mx-auto">
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={true}
                colors={{
                  name: "#1f2937",
                  designation: "#6b7280",
                  testimony: "#374151",
                  arrowBackground: "#3b82f6",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#2563eb",
                }}
                fontSizes={{
                  name: "24px",
                  designation: "16px",
                  quote: "18px",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Features Section with Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Us
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-8"
          >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
          </motion.div>

          {/* Why Choose Us Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-first"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="/illus3.png"
                alt="Customer satisfaction and quality service"
                className="w-full h-auto max-w-md mx-auto drop-shadow-xl"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center"
            >
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Your Device Fixed?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their mobile device repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book Repair Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 