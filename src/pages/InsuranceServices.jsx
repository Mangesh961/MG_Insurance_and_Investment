import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Car, Shield, Building, CheckCircle, Star, Calculator, ArrowRight } from 'lucide-react'

const InsuranceServices = () => {
  const [activeTab, setActiveTab] = useState('medical')

  const insuranceTypes = [
    {
      id: 'medical',
      title: 'Medical Insurance',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      description: 'Comprehensive health coverage for you and your family',
      partner: 'Star Health',
      features: [
        'Cashless hospitalization',
        'Pre and post hospitalization coverage',
        'Day care procedures',
        'Ambulance charges',
        'Health check-up benefits'
      ]
    },
    {
      id: 'vehicle',
      title: 'Vehicle Insurance',
      icon: Car,
      color: 'bg-blue-100 text-blue-600',
      description: 'Complete motor insurance solutions for all vehicle types',
      partner: 'United India',
      features: [
        'Comprehensive coverage',
        'Third party liability',
        'Personal accident cover',
        'Engine protect',
        'Roadside assistance'
      ]
    },
    {
      id: 'life',
      title: 'Life Insurance',
      icon: Shield,
      color: 'bg-green-100 text-green-600',
      description: 'Secure your family\'s future with comprehensive life coverage',
      partner: 'LIC',
      features: [
        'Death benefit',
        'Maturity benefit',
        'Tax benefits',
        'Riders available',
        'Flexible premium options'
      ]
    }
  ]

  const activeInsurance = insuranceTypes.find(type => type.id === activeTab)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insurance Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Comprehensive insurance solutions from trusted providers like Star Health, United India, and LIC 
              to protect what matters most to you.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types Tabs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {insuranceTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === type.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{type.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Insurance Details */}
          {activeInsurance && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${activeInsurance.color}`}>
                  <activeInsurance.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {activeInsurance.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {activeInsurance.description}
                </p>
                <div className="mb-6">
                  <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    Partner: {activeInsurance.partner}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {activeInsurance.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <Calculator className="w-5 h-5" />
                  <span>Request a Quote</span>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/photo-${activeTab === 'medical' ? '1559757148-5c350d0d3c56' : activeTab === 'vehicle' ? '1549924231-f129b911e442' : activeTab === 'life' ? '1554224155-6726b3ff858f' : '1554224154-260208cd66b9'}?w=600&h=400&fit=crop`}
                  alt={activeInsurance.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Premium Calculator */}
      <PremiumCalculator />

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Insured?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our experts will help you find the perfect insurance plan from trusted providers 
            like Star Health, United India, and LIC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Premium Calculator Component
function PremiumCalculator() {
  const [insuranceType, setInsuranceType] = useState('medical');
  const [age, setAge] = useState('');
  const [coverage, setCoverage] = useState(500000);
  const [premium, setPremium] = useState(null);
  const [formula, setFormula] = useState('');

  function calculatePremium(e) {
    e.preventDefault();
    let baseRate = 0;
    let ageFactor = 1;
    let formulaText = '';
    let estPremium = 0;

    if (insuranceType === 'medical') {
      // Health Insurance (per lakh)
      if (age < 31) { baseRate = 250; ageFactor = 1; }
      else if (age < 46) { baseRate = 350; ageFactor = 1.4; }
      else { baseRate = 500; ageFactor = 2; }
      estPremium = Math.round((coverage / 100000) * baseRate * ageFactor);
      formulaText = `Premium = (Base Rate ₹${baseRate}/L) × (Coverage in L) × (Age Factor ${ageFactor})`;
    } else if (insuranceType === 'vehicle') {
      // Vehicle Insurance (3% of IDV)
      baseRate = 0.03;
      estPremium = Math.round(coverage * baseRate);
      formulaText = `Premium = 3% × Insured Declared Value (Coverage)`;
    } else if (insuranceType === 'life') {
      // Life Insurance (per lakh)
      if (age < 31) { baseRate = 150; ageFactor = 1; }
      else if (age < 46) { baseRate = 250; ageFactor = 1.5; }
      else { baseRate = 400; ageFactor = 2.5; }
      estPremium = Math.round((coverage / 100000) * baseRate * ageFactor);
      formulaText = `Premium = (Base Rate ₹${baseRate}/L) × (Coverage in L) × (Age Factor ${ageFactor})`;
    }
    setPremium(estPremium);
    setFormula(formulaText);
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Calculator</h2>
          <p className="text-xl text-gray-600">Estimate your annual insurance premium instantly. (For demo/lead purposes)</p>
        </div>
        <form className="card grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={calculatePremium}>
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
                <select value={insuranceType} onChange={e => setInsuranceType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="medical">Health Insurance</option>
                  <option value="vehicle">Vehicle Insurance</option>
                  <option value="life">Life Insurance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input type="number" min="18" max="80" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter your age" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Amount</label>
                <select value={coverage} onChange={e => setCoverage(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value={500000}>₹5 Lakhs</option>
                  <option value={1000000}>₹10 Lakhs</option>
                  <option value={2500000}>₹25 Lakhs</option>
                  <option value={5000000}>₹50 Lakhs</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">Calculate Premium</button>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Estimated Premium</h3>
            {premium !== null ? (
              <>
                <div className="text-3xl font-bold text-primary-600 mb-2">₹{premium.toLocaleString()}</div>
                <div className="text-gray-500 text-sm mb-2">{formula}</div>
              </>
            ) : (
              <div className="text-gray-400 text-lg">Enter details and calculate</div>
            )}
            <p className="text-gray-600 mt-4 text-center">* This is an estimate. Actual premium may vary based on insurer, health, and other factors.</p>
            <div className="mt-6 w-full">
              <Link to="/contact" className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Get Detailed Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default InsuranceServices 