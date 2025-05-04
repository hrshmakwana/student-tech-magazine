import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or want to contribute to Student Tech Magazine? 
            We'd love to hear from you! Fill out the form below or reach out to us directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <MapPin className="text-orange-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-600">
              123 Tech Campus Drive<br />
              Innovation District<br />
              San Francisco, CA 94105
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Phone className="text-orange-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">
              Main Office: (555) 123-4567<br />
              Editorial Team: (555) 789-0123<br />
              Hours: 9:00 AM - 5:00 PM PST
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Mail className="text-orange-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">
              General Inquiries:<br />
              info@studenttechmagazine.com<br />
              <br />
              Article Submissions:<br />
              submit@studenttechmagazine.com
            </p>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;