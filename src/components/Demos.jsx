import React, { useRef } from 'react';
import { Calendar, Car, Heart, ShoppingBag, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';

const demos = [
    {
        title: 'Agendamento Pro',
        subtitle: 'Para profissionais',
        icon: Calendar,
        color: 'emerald',
        features: ['Agenda inteligente', 'Confirmações automáticas'],
        gradient: 'from-emerald-500/20 to-teal-500/5',
        neonColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
    },
    {
        title: 'App de Mobilidade',
        subtitle: 'Transporte e corridas',
        icon: Car,
        color: 'amber',
        features: ['Solicitação de corridas', 'Rastreamento em tempo real'],
        gradient: 'from-amber-500/20 to-orange-500/5',
        neonColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
    },
    {
        title: 'App de Saúde',
        subtitle: 'Consultas e telemedicina',
        icon: Heart,
        color: 'rose',
        features: ['Agendamento de consultas', 'Videochamadas'],
        gradient: 'from-rose-500/20 to-red-500/5',
        neonColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]'
    },
    {
        title: 'Marketplace',
        subtitle: 'E-commerce completo',
        icon: ShoppingBag,
        color: 'purple',
        features: ['Catálogo de produtos', 'Carrinho de compras'],
        gradient: 'from-purple-500/20 to-pink-500/5',
        neonColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
    },
    {
        title: 'App de Restaurante',
        subtitle: 'Pedidos e delivery',
        icon: Utensils,
        color: 'orange',
        features: ['Menu digital interativo', 'Pedidos online'],
        gradient: 'from-orange-600/20 to-red-600/5',
        neonColor: 'group-hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]'
    }
];

const PhoneMockup = ({ color }) => (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[300px] w-[180px] shadow-xl flex flex-col overflow-hidden">
        <div className="h-[20px] bg-gray-800 rounded-b-[1rem] w-[80px] self-center absolute top-0 z-10"></div>
        <div className="flex-1 bg-gray-900 pt-8 px-3 pb-4 flex flex-col gap-3">
            {/* Mock UI Elements */}
            <div className={`h-16 w-full rounded-xl bg-${color}-500/20 animate-pulse`}></div>
            <div className="flex gap-2">
                <div className="h-20 w-1/2 rounded-xl bg-gray-800/50"></div>
                <div className="h-20 w-1/2 rounded-xl bg-gray-800/50"></div>
            </div>
            <div className="h-24 w-full rounded-xl bg-gray-800/50"></div>
            <div className={`mt-auto h-10 w-full rounded-lg bg-${color}-500 text-xs flex items-center justify-center text-white font-bold opacity-80`}>
                Demo App
            </div>
        </div>
    </div>
);

const Demos = () => {
    const scrollContainerRef = useRef(null);

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
        <section id="demos" className="py-20 bg-nhiquela-dark overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Demos em Realidade</h2>
                    <p className="text-gray-400">Explore nossos modelos de aplicativos prontos para personalizar.</p>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-nhiquela-cyan/50 hover:text-nhiquela-cyan transition-all duration-300 group"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-nhiquela-cyan/50 hover:text-nhiquela-cyan transition-all duration-300 group"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-12 gap-6 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory"
            >
                {demos.map((demo, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-[300px] md:w-[350px] snap-center rounded-3xl p-6 bg-gradient-to-br ${demo.gradient} border border-white/5 relative group hover:border-white/20 transition-all duration-500 ${demo.neonColor}`}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-12 h-12 rounded-xl bg-${demo.color}-500/20 flex items-center justify-center text-${demo.color}-500 group-hover:bg-${demo.color}-500/30 transition-colors`}>
                                <demo.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white leading-tight">{demo.title}</h3>
                                <p className="text-gray-400 text-sm">{demo.subtitle}</p>
                            </div>
                        </div>

                        <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500">
                            <PhoneMockup color={demo.color} />
                        </div>

                        <div className="space-y-2">
                            {demo.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-${demo.color}-500`}></div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Demos;
