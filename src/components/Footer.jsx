import React from 'react';
import { ArrowRight, MessageCircle, Instagram, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
    const { t } = useTranslation();

    return (
        <section id="contato" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="relative rounded-[2.5rem] bg-nhiquela-card border border-white/10 p-12 md:p-20 text-center overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nhiquela-cyan/5 blur-3xl rounded-full pointer-events-none"></div>

                    <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('cta.title_main')} <br />
                        <span className="text-gradient-purple">{t('cta.title_highlight')}</span>
                    </h2>

                    <p className="relative z-10 text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        {t('cta.description')}
                    </p>

                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* Botão Orçamento */}
                        <button className="flex items-center gap-2 bg-gradient-to-r from-nhiquela-cyan to-nhiquela-purple text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-nhiquela-purple/25 transition-all transform hover:-translate-y-1">
                            {t('cta.button_quote')} <ArrowRight size={20} />
                        </button>

                        {/* Botão WhatsApp */}
                        <a
                            href="https://wa.me/258853600036?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20de%20gest%C3%A3o%20para%20restaurantes."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-green-400/40 transition-all"
                        >
                            <MessageCircle size={20} className="text-green-400" /> {t('cta.button_whatsapp')}
                        </a>
                    </div>

                    <div className="relative z-10 mt-16 pt-8 border-t border-white/5">
                        <p className="text-gray-500 text-sm mb-4">{t('cta.social_proof')}</p>
                        <div className="flex flex-wrap justify-center gap-8 text-gray-600 font-bold text-xl opacity-50">
                            <span>Restaurante A</span>
                            <span>Café B</span>
                            <span>Pizzaria C</span>
                            <span>Bar D</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-nhiquela-dark pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-nhiquela-cyan to-nhiquela-purple rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">N</div>
                            <span className="text-white font-bold text-2xl tracking-tight">Nhiquela Serviços e Consultoria</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">{t('footer.services_title')}</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Apps Mobile que encantam clientes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Desenvolvimento Web moderno e rápido</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">UI/UX Design intuitivo e atraente</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Consultoria estratégica para crescer</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">{t('footer.company_title')}</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Sobre Nós — conheça nossa história</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Portfólio de projetos incríveis</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Blog com dicas de tecnologia</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Carreiras — junte-se ao time</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">{t('footer.contact_title')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:nhiquelaservicos@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                    <Mail size={18} className="text-nhiquela-purple" />
                                    nhiquelaservicos@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+258853600036" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                    <Phone size={18} className="text-nhiquela-purple" />
                                    +258 85 360 0036
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-nhiquela-purple mt-0.5 flex-shrink-0" />
                                <span>{t('footer.location')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        {t('footer.copyright')}
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { CTA, Footer };