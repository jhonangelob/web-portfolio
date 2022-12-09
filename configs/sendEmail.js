import emailjs from '@emailjs/browser';

export const sendEmail = async (form) => {
  try {
    const data = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return data;
  } catch (error) {
    return error;
  }
};
