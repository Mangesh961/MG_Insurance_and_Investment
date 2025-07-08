import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

// Debug: Log environment variables (remove this after testing)
console.log('🔍 EmailJS Environment Variables:')
console.log('VITE_EMAILJS_PUBLIC_KEY:', EMAILJS_PUBLIC_KEY ? '✅ Set' : '❌ Missing')
console.log('VITE_EMAILJS_SERVICE_ID:', EMAILJS_SERVICE_ID ? '✅ Set' : '❌ Missing')
console.log('VITE_EMAILJS_TEMPLATE_ID:', EMAILJS_TEMPLATE_ID ? '✅ Set' : '❌ Missing')
console.log('🔍 Public Key Value:', EMAILJS_PUBLIC_KEY)
console.log('🔍 Service ID Value:', EMAILJS_SERVICE_ID)
console.log('🔍 Template ID Value:', EMAILJS_TEMPLATE_ID)

// Validate EmailJS configuration
const validateEmailJSConfig = () => {
  const missingVars = []
  
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'your-emailjs-public-key') {
    missingVars.push('VITE_EMAILJS_PUBLIC_KEY')
  }
  
  if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your-service-id') {
    missingVars.push('VITE_EMAILJS_SERVICE_ID')
  }
  
  if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'your-template-id') {
    missingVars.push('VITE_EMAILJS_TEMPLATE_ID')
  }
  
  if (missingVars.length > 0) {
    console.error('❌ EmailJS configuration missing:', missingVars.join(', '))
    console.error('📝 Please add these variables to your .env file:')
    missingVars.forEach(varName => {
      console.error(`   ${varName}=your_actual_value`)
    })
    return false
  }
  

  
  console.log('✅ EmailJS configuration validated successfully')
  return true
}

// Initialize EmailJS only if configuration is valid
let isEmailJSInitialized = false
if (validateEmailJSConfig()) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
  isEmailJSInitialized = true
} else {
  console.warn('⚠️ EmailJS not initialized due to missing configuration')
}

export const sendContactEmail = async (formData) => {
  // Check if EmailJS is properly configured
  if (!isEmailJSInitialized) {
    console.error('❌ EmailJS not initialized. Please check your configuration.')
    return { 
      success: false, 
      error: 'EmailJS not configured. Please add EmailJS credentials to your .env file.' 
    }
  }

  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service || 'Not specified',
      message: formData.message,
      to_name: 'MG Insurance Team'
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
} 