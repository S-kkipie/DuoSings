import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-transparent opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/2 xl:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-[#00FF00]">Cauc Community</h3>
            <p className="mb-4 text-[#32CD32] pr-6">
              In a world where information is power, we are committed to protecting your data and ensuring your security, providing tools and knowledge that prepare you to face any threat and ensure a safer digital future for all.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-[#00FF00]">Cybersecurity Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#32CD32]">Nmap</a></li>
              <li><a href="#" className="hover:text-[#32CD32]">Metasploit</a></li>
              <li><a href="#" className="hover:text-[#32CD32]">Wireshark</a></li>
              <li><a href="#" className="hover:text-[#32CD32]">Burp Suite</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-[#00FF00]">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#32CD32]">Home</a></li>
              <li><a href="#" className="hover:text-[#32CD32]">Categories</a></li>
              <li><a href="#" className="hover:text-[#32CD32]">Help</a></li>
              <li><a href="#" className="hover:text-[#32CD32]">About us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4">
            <h3 className="font-bold mb-4 text-[#00FF00]">Contact</h3>
            <p className="mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M3 6l3 15m0 0l3-15H3m12 3v3m-9-8h10a4 4 0 018-4zm-4 3.93l.73.92 11.28-.46L17.74 7.88a1 1 0 011.42-1.41l3-3m2 6J0 17a2 2 0 112 2v4a2 2 0 01-2 4h-1.06a2 2 0 110-4H14l5-9V9m3 3c0-5.118 4.43-9.08 9.58-9.58zM9 21v-2.22c-3.35 1.04-4 3.39-4 6.22 0 2.82 1.18 5.23 3.35 5.92l.73.92c.20.14-.02.62-.42.92L5.09 19.09l-.78-.92a7.73 7.73 0 0111.28-4z" />
              </svg>
              GitHub Repository
            </p>
            <p className="mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M19 9l-7 7-7-7zM15 19l-1.412-1.412-1.41-1.41L11 3l-2 2zm0 7l3-3 3 3zM8 11l4-4-1.414-1.414z" />
              </svg>
              Contact Us
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M19 9l-7 7-7-7zM15 19l-1.412-1.412-1.41-1.41L11 3l-2 2zm0 7l3-3 3 3zM8 11l4-4-1.414-1.414z" />
              </svg>
              Follow Us
            </p>
          </div>
          </div>
        <div className="bg-black opacity-90 py-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Cauc Community. All rights reserved.</p>
            <div className="flex items-center">
              <a href="#" className="mr-4 text-[#32CD32] hover:text-white">Terms of Service</a>
              <a href="#" className="text-[#32CD32] hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;