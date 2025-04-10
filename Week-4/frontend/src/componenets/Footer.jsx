const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
          <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;