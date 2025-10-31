import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
  withCredentials: false // Changed to false for development
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      throw { detail: 'Request timed out. Please try again.' };
    }
    if (!error.response) {
      throw { detail: 'Network error. Please check your connection.' };
    }
    throw error;
  }
);

export const auth = {
  signup: async (userData) => {
    try {
      const response = await api.post('/signup', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: error.message };
    }
  },

  login: async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      const { access_token, user } = response.data;
      localStorage.setItem('token', access_token);
      return user;
    } catch (error) {
      throw error.response?.data || { detail: error.message };
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  sendForgotPasswordOTP: async (email) => {
    try {
      console.log('Sending OTP request for email:', email); // Debug log
      const response = await api.post('/forgot-password/send-otp', { email });
      console.log('OTP response:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('OTP error:', error); // Debug log
      if (error.response?.status === 404) {
        throw { detail: 'No account found with this email address.' };
      } else if (error.response?.status === 500) {
        throw { detail: 'Failed to send OTP. Please try again later.' };
      }
      throw error.response?.data || { detail: error.message };
    }
  },

  verifyOTP: async (email, otp) => {
    try {
      const response = await api.post('/forgot-password/verify-otp', { 
        email, 
        otp: otp.join('') // Join OTP array into string
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        throw { detail: 'Invalid or expired OTP. Please try again.' };
      }
      throw error.response?.data || { detail: error.message };
    }
  },

  resetPassword: async (email, newPassword) => {
    try {
      const response = await api.post('/forgot-password/reset', { 
        email, 
        new_password: newPassword 
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw { detail: 'User not found. Please try again.' };
      }
      throw error.response?.data || { detail: error.message };
    }
  }
};

export const contact = {
  submit: async (formData) => {
    try {
      const response = await api.post('/contact-us', formData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: error.message };
    }
  }
};

export default api; 