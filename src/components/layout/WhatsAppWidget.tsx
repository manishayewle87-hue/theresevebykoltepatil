"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=I%20am%20interested%20in%20The%20Reserve%20by%20Kolte%20Patil"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[90] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.125-.345-.156-.816-.328-1.554-.689-1.571-.767-2.582-2.383-2.661-2.489-.08-.107-.638-.847-.638-1.616 0-.77.399-1.147.538-1.303.14-.156.305-.195.408-.195.103 0 .205.004.296.008.094.004.22-.037.344.262.128.312.44 1.077.48 1.162.039.085.066.185.015.286-.049.102-.075.163-.153.254-.076.091-.161.202-.225.282-.073.091-.151.192-.064.343.086.151.385.637.828 1.034.57.512 1.042.671 1.194.755.152.083.242.069.333-.035.09-.102.391-.454.496-.609.104-.155.207-.128.347-.076.14.053.882.417 1.034.493.151.076.252.115.288.178.037.064.037.37-.107.775z"/>
      </svg>
    </motion.a>
  );
}
