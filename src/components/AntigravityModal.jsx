import React, { useEffect } from 'react';
import { X, BarChart3, TrendingUp, Bell, Users, Clock, Star, UtensilsCrossed, QrCode, FileText, CreditCard, Sparkles, Shield, Check } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import screenshot1 from '../assets/antigravity/screenshot-1.jpg';
import screenshot2 from '../assets/antigravity/screenshot-2.jpg';
import screenshot3 from '../assets/antigravity/screenshot-3.jpg';
import screenshot4 from '../assets/antigravity/screenshot-4.jpg';
import screenshot5 from '../assets/antigravity/screenshot-5.jpg';

const FeatureSection = ({ children, delay = 0 }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1, delay });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
        >
            {children}
        </div>
    );
};

const AntigravityModal = ({ isOpen, onClose, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            console.log("Modal closed, content cleared");
        }

        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !content) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="relative w-full h-full overflow-y-auto bg-gradient-to-b from-nhiquela-dark via-black to-nhiquela-dark"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-xl"
                >
                    <X size={24} />
                </button>

                <div className="max-w-7xl mx-auto px-6 py-16 space-y-32">
                    {/* Hero Section */}
                    {content.title && (
                        <FeatureSection delay={0}>
                            <div className="text-center space-y-6 py-12">
                                <div className="inline-block px-6 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold uppercase tracking-wider mb-4">
                                    {content.title.tag}
                                </div>
                                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                                    {content.title.main}<br />
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${content.sections[0]?.gradient || "from-orange-400 to-amber-400"}`}>
                                        {content.title.highlight}
                                    </span>
                                </h1>
                                <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    {content.title.description}
                                </p>
                                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                    {content.title.subDescription}
                                </p>
                            </div>
                        </FeatureSection>
                    )}

                    {/* Dynamic Sections */}
                    {content.sections.map((section, index) => (
                        <FeatureSection key={index} delay={(index + 1) * 100}>
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-6">
                                    {section.icon && (
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient || 'from-gray-700 to-gray-800'} flex items-center justify-center`}>
                                            <section.icon size={32} className="text-white" />
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-4xl font-bold text-white">{section.title}</h2>
                                        {section.subtitle && (
                                            <p className={`${section.textColor || 'text-gray-400'} text-lg`}>{section.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="glass-card p-8 rounded-3xl border border-white/10">
                                    {section.content && section.content.title && (
                                        <h3 className="text-2xl font-bold text-white mb-4">{section.content.title}</h3>
                                    )}
                                    {section.content && section.content.description && (
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            {section.content.description}
                                        </p>
                                    )}

                                    {/* Handle Columns Layout */}
                                    {section.content && section.content.columns && (
                                        <div className={`grid md:grid-cols-${section.content.columns.length} gap-8 mb-8`}>
                                            {section.content.columns.map((col, colIndex) => (
                                                <div key={colIndex} className="space-y-4">
                                                    {col.title && col.icon && (
                                                        <h4 className={`text-xl font-semibold ${section.textColor} flex items-center gap-2`}>
                                                            <col.icon size={24} />
                                                            {col.title}
                                                        </h4>
                                                    )}
                                                    {col.title && !col.icon && (
                                                        <h4 className={`text-xl font-semibold ${section.textColor}`}>{col.title}</h4>
                                                    )}

                                                    {col.items && (
                                                        <ul className="space-y-3 text-gray-300">
                                                            {col.items.map((item, itemIndex) => (
                                                                <li key={itemIndex} className="flex items-start gap-3">
                                                                    <Check size={20} className={`${section.textColor} mt-1 flex-shrink-0`} />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {col.statusItems && (
                                                        <div className="space-y-2 text-sm">
                                                            {col.statusItems.map((status, statusIndex) => (
                                                                <div key={statusIndex} className="flex items-center gap-2">
                                                                    <span className={`w-3 h-3 rounded-full ${status.color}`}></span>
                                                                    <span className="text-gray-300">{status.text}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Handle Cards Layout (Individual Dashboard / Unit Management) */}
                                    {section.content && section.content.cards && (
                                        <div className={`grid md:grid-cols-${section.content.cards.length > 2 ? 3 : 2} gap-6`}>
                                            {section.content.cards.map((card, cardIndex) => (
                                                <div key={cardIndex} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                                    <h4 className={`text-xl font-semibold ${card.color || section.textColor} mb-4`}>{card.title}</h4>
                                                    {card.items && (
                                                        <ul className="space-y-2 text-gray-300 text-sm">
                                                            {card.items.map((item, itemIndex) => (
                                                                <li key={itemIndex}>• {item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Handle Simple Items List */}
                                    {section.content && section.content.items && !section.content.columns && !section.content.cards && (
                                        <ul className="space-y-3 text-gray-300 mb-8">
                                            {section.content.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start gap-3">
                                                    <Check size={20} className={`${section.textColor} mt-1 flex-shrink-0`} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Handle Flow Section */}
                                    {section.content && section.content.flow && (
                                        <div className={`mt-8 bg-gradient-to-r ${section.gradient.replace('from-', 'from-').replace('to-', 'to-').replace('500', '500/20').replace('600', '600/20')} p-6 rounded-2xl border border-white/10`}>
                                            <h4 className="text-lg font-semibold text-white mb-3">🔄 Fluxo Automático</h4>
                                            <div className="flex flex-wrap gap-3 items-center text-sm text-gray-300">
                                                {section.content.flow.map((step, stepIndex) => (
                                                    <React.Fragment key={stepIndex}>
                                                        <span className="bg-white/10 px-4 py-2 rounded-lg">{step}</span>
                                                        {stepIndex < section.content.flow.length - 1 && (
                                                            <span className={section.textColor}>→</span>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Handle Image */}
                                    {section.content && section.content.image && (
                                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-8">
                                            <img src={section.content.image} alt={section.title} className="w-full h-auto" />
                                        </div>
                                    )}

                                    {/* Handle Results List (Final Section) */}
                                    {section.results && (
                                        <div className="grid md:grid-cols-2 gap-6 text-lg">
                                            {section.results.map((result, resIndex) => (
                                                <div key={resIndex} className="flex items-center gap-4 text-gray-200">
                                                    <span className="text-3xl">✅</span>
                                                    <span>{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Handle CTA (Final Section) */}
                                    {section.cta && (
                                        <div className="text-center pt-16">
                                            <a
                                                href={section.cta.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-block px-12 py-5 bg-gradient-to-r ${section.cta.gradient} rounded-2xl text-white text-xl font-bold shadow-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 max-w-full break-words`}
                                            >
                                                {section.cta.text}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </FeatureSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AntigravityModal;
