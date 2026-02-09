import React, { useRef, useState } from 'react';
import { Calendar, Car, Heart, ShoppingBag, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import AntigravityModal from './AntigravityModal';

const colorStyles = {
    emerald: {
        bg: 'bg-emerald-500/15',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        dot: 'bg-emerald-400',
        button: 'bg-emerald-600',
        glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]'
    },
    amber: {
        bg: 'bg-amber-500/15',
        border: 'border-amber-500/30',
        text: 'text-amber-400',
        dot: 'bg-amber-400',
        button: 'bg-amber-600',
        glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]'
    },
    rose: {
        bg: 'bg-rose-500/15',
        border: 'border-rose-500/30',
        text: 'text-rose-400',
        dot: 'bg-rose-400',
        button: 'bg-rose-600',
        glow: 'group-hover:shadow-[0_0_40px_rgba(244,63,94,0.35)]'
    },
    purple: {
        bg: 'bg-purple-500/15',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        dot: 'bg-purple-400',
        button: 'bg-purple-600',
        glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]'
    },
    orange: {
        bg: 'bg-orange-500/15',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        dot: 'bg-orange-400',
        button: 'bg-orange-600',
        glow: 'group-hover:shadow-[0_0_40px_rgba(234,88,12,0.35)]'
    }
};

const demos = [
    {
        title: 'Gestão Digital Inteligente',
        subtitle: 'Pedidos, mesas e gestão moderna integrados',
        icon: Utensils,
        color: 'orange',
        link: 'https://gestaomodernaonline.com/',
        features: [
            'Menu digital com QR Code Premium',
            'Gestão de pedidos em tempo real (salão, balcão e cozinha)',
            'Gestão de mesas em tempo real',
            'Relatórios de vendas e desempenho',
            'Controlo de acesso por perfil (owner, manager, waiter, kitchen)'
        ]
    },
    {
        title: 'Marketplace Avançado-Material de Construção',
        subtitle: 'E-commerce escalável e elegante',
        icon: ShoppingBag,
        color: 'purple',
        link: 'https://visacasa.gestaomodernaonline.com',
        features: [
            'Compra rápida e centralizada de insumos e materiais',
            'Comparação de preços entre fornecedores',
            'Histórico de compras e faturação organizada',
            'Pagamentos flexíveis e seguros (M-Pesa, cartão, transferência)'
        ]
    },

    {
        title: 'Saúde Digital',
        subtitle: 'Experiência premium em telemedicina',
        icon: Heart,
        color: 'rose',
        link: '#',
        features: [
            'Consultas online seguras',
            'Videochamadas em alta qualidade'
        ]
    },
    {
        title: 'Mobilidade Urbana',
        subtitle: 'Plataforma moderna de transporte',
        icon: Car,
        color: 'amber',
        link: '#',
        features: [
            'Solicitação instantânea de corridas',
            'Rastreamento em tempo real'
        ]
    },
    {
        title: 'Agendamento Inteligente',
        subtitle: 'Automação para profissionais exigentes',
        icon: Calendar,
        color: 'emerald',
        link: '#',
        features: [
            'Agenda dinâmica com IA',
            'Confirmações automáticas por SMS e WhatsApp'
        ]
    }
];

const PhoneMockup = ({ color, link, isAntigravity, onVerMaisClick }) => {
    const styles = colorStyles[color];

    return (
        <div className={`relative mx-auto border-gray-800 bg-gray-950 border-[8px] rounded-[2.5rem] h-[320px] w-[185px] shadow-2xl ring-1 ring-white/10 transition-shadow duration-500 ${styles.glow}`}>
            <div className="h-[20px] bg-gray-800 rounded-b-[1rem] w-[80px] absolute top-0 left-1/2 -translate-x-1/2 z-10" />

            <div className="flex-1 pt-8 px-3 pb-4 flex flex-col gap-3 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-xl h-full rounded-[2rem] overflow-hidden">
                <div className={`h-16 rounded-xl ${styles.bg} border ${styles.border} w-full`} />

                <div className="flex gap-2 w-full">
                    <div className="h-20 w-1/2 rounded-xl bg-white/5 border border-white/10" />
                    <div className="h-20 w-1/2 rounded-xl bg-white/5 border border-white/10" />
                </div>

                <div className="h-24 w-full rounded-xl bg-white/5 border border-white/10" />

                {isAntigravity ? (
                    <button
                        onClick={onVerMaisClick}
                        className={`mt-auto h-10 w-full rounded-lg ${styles.button} flex items-center justify-center text-xs font-semibold text-white shadow-lg cursor-pointer hover:brightness-110 transition-all`}
                    >
                        Ver mais
                    </button>
                ) : (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-auto h-10 w-full rounded-lg ${styles.button} flex items-center justify-center text-xs font-semibold text-white shadow-lg cursor-pointer hover:brightness-110 transition-all`}
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

const Demos = () => {
    const scrollContainerRef = useRef(null);
    const [isAntigravityModalOpen, setIsAntigravityModalOpen] = useState(false);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 350; // Width of card + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="demos" className="py-24 bg-nhiquela-dark overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-end justify-between">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Soluções Digitais de Alto Padrão
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
                        Plataformas modernas, escaláveis e desenhadas para negócios que querem liderar o mercado.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
                    >
                        <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
                    >
                        <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-12 gap-8 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory"
            >
                {demos.map((demo, index) => {
                    const styles = colorStyles[demo.color];
                    const isAntigravity = demo.title === 'Gestão Digital Inteligente';

                    return (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-[320px] md:w-[360px] snap-center rounded-[2rem] p-8 glass-card border border-white/5 relative group hover:-translate-y-2 transition-transform duration-500`}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-14 h-14 rounded-2xl ${styles.bg} border ${styles.border} flex items-center justify-center ${styles.text} shadow-inner`}>
                                        <demo.icon size={28} />
                                    </div>
                                    <div className={`px-3 py-1 rounded-full border ${styles.border} ${styles.bg} ${styles.text} text-xs font-bold uppercase tracking-wider`}>
                                        Premium
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white leading-tight mb-2">{demo.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{demo.subtitle}</p>
                                </div>

                                <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500 perspective-1000">
                                    <PhoneMockup
                                        color={demo.color}
                                        link={demo.link}
                                        isAntigravity={isAntigravity}
                                        onVerMaisClick={() => setIsAntigravityModalOpen(true)}
                                    />
                                </div>

                                <div className="space-y-4 mt-auto">
                                    {demo.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className={`w-2 h-2 rounded-full ${styles.dot} shadow-[0_0_8px_currentColor]`}></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <AntigravityModal
                isOpen={isAntigravityModalOpen}
                onClose={() => setIsAntigravityModalOpen(false)}
            />
        </section>
    );
};

export default Demos;
