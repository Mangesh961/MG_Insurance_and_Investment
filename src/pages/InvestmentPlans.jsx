import { Calculator, TrendingUp, DollarSign, Banknote, Briefcase } from 'lucide-react'

const investmentOptions = [
  {
    icon: TrendingUp,
    title: 'SIP (Systematic Investment Plan)',
    description: 'Invest a fixed amount regularly in mutual funds to build wealth over time with the benefit of rupee cost averaging.'
  },
  {
    icon: Briefcase,
    title: 'SWP (Systematic Withdrawal Plan)',
    description: 'Withdraw a fixed amount from your mutual fund investments at regular intervals for steady cash flow.'
  },
  {
    icon: DollarSign,
    title: 'Fixed Deposits',
    description: 'Deposit a lump sum for a fixed tenure at a guaranteed interest rate. Safe and stable returns from banks and NBFCs.'
  },
  {
    icon: Banknote,
    title: 'Company Deposits',
    description: 'Earn higher interest by investing in deposits offered by reputed companies. Slightly higher risk than bank FDs.'
  },
  {
    icon: Calculator,
    title: 'Other Mutual Fund Plans',
    description: 'Choose from a variety of mutual fund schemes: equity, debt, hybrid, ELSS, and more, tailored to your goals.'
  }
]

const InvestmentPlans = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investment Plans & Mutual Fund Options
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              Explore a range of investment solutions to grow and manage your wealth securely and efficiently.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentOptions.map((option, idx) => {
              const Icon = option.icon
              return (
                <div key={idx} className="card flex items-start space-x-4 p-6">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-yellow-100 text-yellow-600">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{option.title}</h2>
                    <p className="text-gray-700 text-lg">{option.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestmentPlans 