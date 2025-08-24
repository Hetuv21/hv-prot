import emailjs from '@emailjs/browser';

// EmailJS configuration - using actual values
const EMAILJS_SERVICE_ID = 'service_sriqfff';
const EMAILJS_TEMPLATE_ID = 'template_o9xyy7a';
const EMAILJS_PUBLIC_KEY = 'LuWpbw2Hm0NuaU4wg';

console.log('Using EmailJS Configuration:', {
  SERVICE_ID: EMAILJS_SERVICE_ID,
  TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: EMAILJS_PUBLIC_KEY
});

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Validate email address
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sendEmail = async (formData) => {
  // Validation
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  if (!isValidEmail(formData.email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  // Check if EmailJS is properly configured
  if (EMAILJS_SERVICE_ID === 'service_sriqfff' && EMAILJS_TEMPLATE_ID === 'template_2l5izi6' && EMAILJS_PUBLIC_KEY === 'LuWpbw2Hm0NuaU4wg') {
    console.warn('EmailJS service not properly configured. Please check EMAILJS_SETUP.md.');
    return { success: false, message: 'Email service is not configured. Please contact the administrator.' };
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      title: formData.subject, // Changed from subject to title
      message: formData.message,
      name: formData.name, // Added name variable
      email: formData.email, // Added email variable
      to_email: 'hetvyas148@gmail.com', // Your email address
    };

    console.log('Sending email with params:', templateParams);
    console.log('Using service:', EMAILJS_SERVICE_ID, 'template:', EMAILJS_TEMPLATE_ID);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Handle specific EmailJS errors
    if (error.status === 400) {
      return { success: false, message: 'Invalid email configuration. Please try again later.' };
    } else if (error.status === 402) {
      return { success: false, message: 'Email service quota exceeded. Please try again later.' };
    } else if (error.status === 403) {
      return { success: false, message: 'Email service access denied. Please contact support.' };
    } else {
      return { success: false, message: 'Failed to send email. Please try again or contact me directly at hetvyas148@gmail.com.' };
    }
  }
};

