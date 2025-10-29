export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const API_URL = 'https://itstime-be.onrender.com/send-email';

export const emailService = {
  sendEmail: async (form: ContactForm) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to send email');
      }

      return await response.json();
    } catch (err) {
      console.error('Email send error:', err);
      throw err;
    }
  },
};
