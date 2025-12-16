import React from 'react';
import { ArrowRight, MessageCircle, Instagram, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const CTA = () => {
    return (
        <section id="contato" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="relative rounded-[2.5rem] bg-nhiquela-card border border-white/10 p-12 md:p-20 text-center overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nhiquela-cyan/5 blur-3xl rounded-full pointer-events-none"></div>

                    <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6">
                        Pronto para transformar sua <br />
                        <span className="text-gradient-purple">ideia em realidade?</span>
                    </h2>

                    <p className="relative z-10 text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Entre em contato conosco e descubra como podemos criar a solução digital perfeita para o seu negócio.
                    </p>

                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-nhiquela-cyan to-nhiquela-purple text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-nhiquela-purple/25 transition-all transform hover:-translate-y-1">
                            Solicitar Orçamento <ArrowRight size={20} />
                        </button>
                        <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                            <MessageCircle size={20} /> WhatsApp
                        </button>
                    </div>

                    <div className="relative z-10 mt-16 pt-8 border-t border-white/5">
                        <p className="text-gray-500 text-sm mb-4">Nossos clientes confiam em nós</p>
                        <div className="flex justify-center gap-8 text-gray-600 font-bold text-xl opacity-50">
                            <span>Empresa A</span>
                            <span>Empresa B</span>
                            <span>Empresa C</span>
                            <span>Empresa D</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-nhiquela-dark pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-nhiquela-cyan to-nhiquela-purple rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">N</div>
                            <span className="text-white font-bold text-2xl tracking-tight">Nhiquela Serviços e Consultoria.LDA</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transformando ideias em soluções digitais inovadoras.
                            Seu parceiro de confiança para desenvolvimento de aplicativos.
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

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Apps Mobile</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Desenvolvimento Web</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">UI/UX Design</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Consultoria</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Sobre Nós</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Portfólio</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-nhiquela-cyan transition-colors text-sm">Carreiras</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:contato@nhiquela.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                    <Mail size={18} className="text-nhiquela-purple" />
                                    nhiquelaservicosconsultoria@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+258840000000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                    <Phone size={18} className="text-nhiquela-purple" />
                                    +258 85 360 0036
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-nhiquela-purple mt-0.5 flex-shrink-0" />
                                <span>Maputo, Moçambique</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2025 Nhiquela Serviços e Consultoria.LDA. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { CTA, Footer };
