import { Link } from 'react-router-dom'

import { Shield, Heart, Car, Building, Calculator, ArrowRight, Star, CheckCircle } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: ' Health Insurance',
      description: 'Comprehensive health coverage from Star Health and other leading providers',
      partner: 'Star Health',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Car,
      title: 'Vehicle Insurance',
      description: 'Complete motor insurance solutions from United India and trusted partners',
      partner: 'United India',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with LIC policies and comprehensive coverage',
      partner: 'LIC',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Calculator,
      title: 'Investments',
      description: 'Mutual Fund Plans: SIP, SWP, Fixed Deposits, Company Deposits, and more',
      partner: 'All Major AMCs & Banks',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ]

  const features = [
    'Trusted partnerships with Star Health, LIC, and United India',
    'Comprehensive insurance coverage for all needs',
    '24/7 customer support and claim assistance',
    'Competitive premiums and flexible payment options',
    'Digital-first approach for easy policy management',
    'Expert guidance for all insurance requirements'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Future with MG Insurance and Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Get tailored insurance policies from trusted providers like Star Health, United India, and LIC 
              to ensure your financial security and protect what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/insurance-services" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Get Insurance Quote</span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with India's leading insurance providers to help you build a secure financial future 
              with comprehensive coverage for all your insurance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">{service.partner}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MG Insurance and Investment?
            </h2>
            <p className="text-xl text-gray-600">
              We make insurance and investment simple, transparent, and beneficial for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get started with a free consultation and discover the best insurance options for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Get Free Consultation
            </Link>
            <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 