import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode is set in localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode and save the state to localStorage
  const toggleDarkMode = () => {
    const newDarkModeState = !darkMode;
    setDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState.toString());
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>
      <header className="flex justify-between items-center p-6 shadow-md bg-gray-100 dark:bg-gray-800 transition-all duration-300">
        <h1 className="text-3xl font-extrabold tracking-wide">Orid OS</h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold">
            <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Home</a></li>
            <li><a href="#about-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">About Us</a></li>
            <li><a href="#versions" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Versions</a></li>
            <li><a href="#download" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Download</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4 items-center">
          <Button className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg shadow-md transition-all">Register</Button>
          <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all">Login</Button>
          <Button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all">
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
          </Button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center p-10 text-center">
        <motion.h2 
          className="text-5xl font-extrabold text-blue-600 dark:text-blue-400" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Welcome to Orid OS
        </motion.h2>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          <span className="font-bold">A modern, efficient, and open-source operating system designed for performance and reliability.</span>
        </p>
      </main>
      <footer className="p-6 text-center text-sm bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 transition-all">
        &copy; {new Date().getFullYear()} Orid OS. All rights reserved.
      </footer>
    </div>
  );
}
