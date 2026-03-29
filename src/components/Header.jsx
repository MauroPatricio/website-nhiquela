import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const navLinks = [
        { name: t('nav.services'), href: '#servicos' },
        { name: t('nav.demos'), href: '#demos' },
        { name: t('nav.about'), href: '#sobre' },
        { name: t('nav.contact'), href: '#contato' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-nhiquela-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-nhiquela-cyan to-nhiquela-purple rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-nhiquela-purple/20">
                            N
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">Nhiquela Serviços e Consultoria</span>
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
                        {/* Language Switcher */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                                <Globe size={16} className="text-nhiquela-cyan" />
                                <span>{currentLanguage.code.toUpperCase()}</span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-40 bg-nhiquela-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    i18n.changeLanguage(lang.code);
                                                    setIsLangOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${i18n.language === lang.code ? 'text-nhiquela-cyan bg-white/5' : 'text-gray-400'}`}
                                            >
                                                <span>{lang.name}</span>
                                                <span>{lang.flag}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="#login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {t('nav.login')}
                        </a>
                        <button className="bg-gradient-to-r from-nhiquela-cyan to-nhiquela-purple text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-nhiquela-cyan/25 transition-all duration-300 transform hover:-translate-y-0.5">
                            {t('nav.cta')}
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
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <Globe size={16} /> Language
                                    </span>
                                    <div className="flex gap-2">
                                        {languages.map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => i18n.changeLanguage(lang.code)}
                                                className={`p-1.5 rounded-lg border ${i18n.language === lang.code ? 'border-nhiquela-cyan bg-nhiquela-cyan/10' : 'border-white/10'}`}
                                            >
                                                {lang.flag}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <a href="#login" className="text-gray-300 hover:text-white font-medium">
                                    {t('nav.login')}
                                </a>
                                <button className="w-full bg-gradient-to-r from-nhiquela-cyan to-nhiquela-purple text-white px-6 py-3 rounded-full font-medium">
                                    {t('nav.cta')}
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
