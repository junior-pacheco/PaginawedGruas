import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';

const FloatingButton = () => {
  const [showChat, setShowChat] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);

  useEffect(() => {
    const handleClickOutsideChat = (e) => {
      if (showChat && !document.querySelector('.floating-chat').contains(e.target)) {
        handleCloseChat();
      }
    };

    document.addEventListener('click', handleClickOutsideChat);

    return () => {
      document.removeEventListener('click', handleClickOutsideChat);
    };
  }, [showChat]);

  const handleChatOpen = () => {
    setShowChat(true);
  };

  const handleOpenWhatsAppChat = () => {
    setIconClicked(true);
    setTimeout(() => {
      handleChatOpen();
      setIconClicked(false);
    }, 100);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <div>
      {showChat ? (
        <div className="fixed bottom-4 right-4 sm:right-10 w-72 floating-chat">
          <div className="bg-green-100 p-4 rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SG
                </div>
                <p className="font-semibold ml-3">Servi Grua</p>
              </div>
              <button onClick={handleCloseChat} className="text-gray-400 hover:text-gray-600">
                <RiCloseLine className="lg:hidden" size={24} />
                <RiCloseLine className="hidden lg:block" size={26} />
              </button>
            </div>
            <div className="bg-white p-2 rounded-lg mb-3">
              <p className="text-sm text-gray-600">Hola, entusiasta de las gruas!😎</p>
              <p className="text-sm text-gray-600">¿En qué puedo ayudarte?</p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=573206499311"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 flex items-center justify-center"
            >
              Iniciar chat <FaWhatsapp className="ml-2" />
            </a>
          </div>
        </div>

      ) : (
        <div className="fixed right-4 bottom-4">
          <div
            className={`${
              iconClicked ? 'transform scale-110' : ''
            } bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform cursor-pointer`}
            onMouseEnter={() => setIconClicked(true)}
            onMouseLeave={() => setIconClicked(false)}
            onClick={handleOpenWhatsAppChat}
          >
            <FaWhatsapp size={24} />
          </div>
        </div>
      )}
    </div>
  );
}
  

export default FloatingButton;
