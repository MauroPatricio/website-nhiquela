import React, { useEffect } from 'react';
import { X, BarChart3, TrendingUp, Bell, Users, Clock, Star, UtensilsCrossed, QrCode, FileText, CreditCard, Sparkles, Shield, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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

const NeonButton = ({ data, sectionGradient }) => {
    const { t } = useTranslation();
    if (!data) return null;

    // Extract color from gradient for the pulse effect
    const getPulseColor = (gradient) => {
        if (gradient?.includes('orange')) return '249, 115, 22';
        if (gradient?.includes('blue')) return '59, 130, 246';
        if (gradient?.includes('red')) return '239, 68, 68';
        if (gradient?.includes('emerald') || gradient?.includes('green')) return '16, 185, 129';
        if (gradient?.includes('rose')) return '244, 63, 94';
        if (gradient?.includes('purple')) return '168, 85, 247';
        return '255, 255, 255';
    };

    const pulseColor = getPulseColor(sectionGradient);

    return (
        <div className="flex flex-col items-center gap-4 mt-16 pt-8 border-t border-white/5 group">
            <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    relative px-12 py-6 rounded-2xl font-black text-white text-2xl
                    transition-all duration-300 transform group-hover:scale-105 active:scale-95
                    animate-neon-pulse shadow-2xl
                    bg-gradient-to-r ${sectionGradient || 'from-nhiquela-cyan to-nhiquela-purple'}
                `}
                style={{ '--neon-color': pulseColor }}
            >
                <div className="flex items-center gap-3">
                    <span className="relative z-10">{data.text}</span>
                </div>
                
                {/* Visual Glow Layers */}
                <div className="absolute inset-0 rounded-2xl bg-inherit blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute -inset-1 rounded-[1.3rem] bg-inherit blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Shine Animation */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
            </a>
            
            <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-white/90 font-bold text-lg">
                    {data.description.split('.')[0]}.
                </p>
                <p className="text-nhiquela-cyan font-medium">
                    {data.description.split('.')[1]}
                </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 uppercase tracking-widest">
                <Shield size={12} />
                <span>{t('common.safe_environment')}</span>
            </div>
        </div>
    );
};

const AntigravityModal = ({ isOpen, onClose, content }) => {
    const { t } = useTranslation();
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
                    className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    <X size={24} />
                </button>

                {/* Pricing Fixed Header */}
                <div className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl animate-fadeIn">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-white font-bold tracking-tight">
                        {t('pricing.monthly')}: <span className="text-emerald-400">4.200 MT</span> / <span className="text-blue-400">65 USD</span>
                    </span>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 space-y-48">
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
                            <div className="space-y-12">
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

                                <div className="relative group">
                                    {/* Section Background Image (Luxury Scenario) */}
                                    {section.backgroundImage && (
                                        <div className="absolute -inset-4 z-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                                            <img 
                                                src={section.backgroundImage} 
                                                className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                                                alt=""
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-nhiquela-dark/40 via-transparent to-nhiquela-dark/40"></div>
                                        </div>
                                    )}

                                    <div className="glass-card p-10 rounded-[2rem] border border-white/10 relative z-10 backdrop-blur-sm shadow-2xl">
                                        <div className="absolute top-0 right-0 p-8">
                                            <div className={`px-4 py-1.5 rounded-full border border-white/10 bg-black/40 text-${section.gradient?.split('-')[1] || 'orange'}-400 text-xs font-bold uppercase tracking-widest`}>
                                                {t('common.premium_experience')}
                                            </div>
                                        </div>

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

                                        {/* Handle Cards Layout */}
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
                                            <div className={`mt-8 bg-gradient-to-r ${section.gradient?.replace('from-', 'from-').replace('to-', 'to-').replace('500', '500/20').replace('600', '600/20')} p-6 rounded-2xl border border-white/10`}>
                                                <h4 className="text-lg font-semibold text-white mb-3">🔄 {t('common.flow')}</h4>
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

                                        {/* Neon Demo CTA */}
                                        {section.content?.demoCTA && (
                                            <NeonButton 
                                                data={section.content.demoCTA} 
                                                sectionGradient={section.gradient} 
                                            />
                                        )}

                                        {/* Handle CTA (Final Section) */}
                                        {section.cta && (
                                            <div className="text-center pt-8 space-y-6">
                                                {section.demoCTA && (
                                                    <NeonButton 
                                                        data={section.demoCTA} 
                                                        sectionGradient={section.gradient} 
                                                    />
                                                )}
                                                
                                                <div className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                    <Star size={14} className="text-amber-500" />
                                                    {t('pricing.promotional')}: 4.200 MT / 65 USD {t('pricing.monthly_label')}
                                                </div>
                                            </div>
                                        )}
                                    </div>
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
