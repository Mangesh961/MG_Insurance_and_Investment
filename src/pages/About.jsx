import { Star, Award, Users, Shield, TrendingUp, Heart } from 'lucide-react'
import mangeshPhoto from '../assets/mangesh_photo.jpg'

const About = () => {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MG Insurance and Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Professional insurance agent and investment advisor providing comprehensive solutions 
              to secure your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Agent Profile */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <img
              src={mangeshPhoto}
              alt="Mangesh Gund - Insurance Agent"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mangesh Gund
            </h2>
            <p className="text-xl text-primary-600 font-medium">
              Professional Insurance Agent & Investment Advisor
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in the insurance and investment industry, I provide 
                comprehensive insurance solutions and expert investment guidance to individuals and families across India.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I partner with India's leading insurance providers including Star Health, United India, 
                and LIC to offer the best coverage options. My expertise in mutual funds and SIPs 
                helps clients build wealth systematically for long-term financial security.
              </p>
              <p className="text-lg text-gray-600">
                My mission is to make insurance and investment simple, transparent, and beneficial 
                for every Indian family, ensuring their financial well-being and peace of mind.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" 
                alt="MG Insurance Office" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything I do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Transparency</h3>
              <p className="text-gray-600">
                I believe in complete transparency in all dealings, ensuring you always know 
                what you're getting and why.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client First</h3>
              <p className="text-gray-600">
                Your financial security is my priority. I put your needs first and work tirelessly 
                to find the best solutions for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                I strive for excellence in everything I do, from customer service to product 
                recommendations and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 