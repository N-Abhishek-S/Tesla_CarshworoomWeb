
const Contact = () => {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
    
      <section className="pt-32 pb-16 px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-medium mb-12 text-gray-900 tracking-tight">
          Get in Touch
        </h2>
        
  
        <form className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <label htmlFor="name" className="block font-medium mb-3 text-gray-900 text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Elon Musk"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="email" className="block font-medium mb-3 text-gray-900 text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="elon@tesla.com"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
            />
          </div>
          
          <div className="mb-8">
       <select
  id="subject"
  defaultValue=""
  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all appearance-none"
>
  <option value="" disabled>Select a topic</option>
  <option value="test-drive">Schedule Test Drive</option>
  <option value="order">Order Inquiry</option>
  <option value="support">Customer Support</option>
  <option value="other">Other</option>
</select>

          </div>
          
          <div className="mb-8">
            <label htmlFor="message" className="block font-medium mb-3 text-gray-900 text-sm">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message here..."
              required
              rows={6}
              className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
    
        <div className="mt-16 text-center bg-gray-50 p-8 md:p-10 rounded-xl">
          <h3 className="text-2xl font-medium mb-6 text-gray-900">
            Customer Support
          </h3>
          <p className="text-gray-600 text-lg mb-2">1-888-518-3752</p>
          <p className="text-gray-600 text-lg mb-2">support@tesla.com</p>
          <p className="text-gray-600 text-lg">Monday - Friday, 8AM - 5PM PST</p>
        </div>
      </section>

   
    </div>
  );
};

export default Contact;