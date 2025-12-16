import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Serviços', href: '#servicos' },
        { name: 'Demos', href: '#demos' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-nhiquela-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-nhiquela-cyan to-nhiquela-purple rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-nhiquela-purple/20">
                            N
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">Nhiquela Serviços e Consultoria.LDA</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-nhiquela-cyan hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <a href="#login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Login
                        </a>
                        <button className="bg-gradient-to-r from-nhiquela-cyan to-nhiquela-purple text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-nhiquela-cyan/25 transition-all duration-300 transform hover:-translate-y-0.5">
                            Começar Agora
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-nhiquela-dark border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-4 px-3">
                                <a href="#login" className="text-gray-300 hover:text-white font-medium">
                                    Login
                                </a>
                                <button className="w-full bg-gradient-to-r from-nhiquela-cyan to-nhiquela-purple text-white px-6 py-3 rounded-full font-medium">
                                    Começar Agora
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
