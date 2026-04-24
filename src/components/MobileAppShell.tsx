import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileAppShellProps {
  children: React.ReactNode;
}

const MobileAppShell: React.FC<MobileAppShellProps> = ({ children }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 },
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'easeInOut' as const,
    duration: 0.3,
  };

  // Check if current page is login or signup (hide sidebar on these pages)
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className={`h-screen w-screen flex overflow-hidden ${isMobile ? 'bg-white justify-start items-start' : 'bg-gray-200 justify-center items-center'}`}>
      {/* Desktop App Container */}
      {!isMobile && (
        <div className="w-full h-screen bg-white overflow-hidden flex">
          {/* Sidebar Navigation - Desktop (hidden on auth pages) */}
          {!isAuthPage && (
            <div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col p-8 h-screen">
              {/* Logo */}
              <div className="flex items-center gap-3.5 mb-12 px-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                  <span className="text-white font-extrabold text-2xl">A</span>
                </div>
                <span className="text-2xl font-extrabold text-gray-900">
                  Afri<span className="text-green-600">Trust</span>
                </span>
              </div>

              {/* Nav Items */}
              {[
                { icon: '🏠', label: 'Home', path: '/' },
                { icon: '�', label: 'Wallet', path: '/dashboard' },
                { icon: '�🛒', label: 'Market', path: '/market' },
                { icon: '👤', label: 'Profile', path: '/profile' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => window.location.href = item.path}
                  className={`flex items-center gap-3.5 py-4 px-5 mb-2.5 rounded-xl border-none cursor-pointer text-left transition-all duration-200 ${
                    location.pathname === item.path ? 'bg-green-100' : 'bg-transparent hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-base font-semibold ${location.pathname === item.path ? 'text-green-600' : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                </button>
              ))}

              <div className="flex-1" />

              {/* Logout */}
              <button
                onClick={() => window.location.href = '/login'}
                className="flex items-center gap-3.5 py-4 px-5 rounded-xl bg-transparent border-none cursor-pointer text-red-500 transition-all duration-200 hover:bg-red-50"
              >
                <span className="text-2xl">🚪</span>
                <span className="text-base font-semibold">Logout</span>
              </button>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 h-screen overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full h-full overflow-auto"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Mobile Full Screen View */}
      {isMobile && (
        <div className="w-full h-screen overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-full overflow-auto"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default MobileAppShell;
