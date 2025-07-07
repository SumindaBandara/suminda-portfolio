import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-xl">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">Contact Me</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Message" className="w-full border p-2 rounded h-32"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
