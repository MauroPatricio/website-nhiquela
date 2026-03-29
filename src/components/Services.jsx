import React from 'react';
import { Smartphone, Code, Palette, Zap, Shield, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Smartphone,
            color: 'bg-nhiquela-cyan',
            title: t('services.mobile.title'),
            description: t('services.mobile.description')
        },
        {
            icon: Code,
            color: 'bg-nhiquela-purple',
            title: t('services.web.title'),
            description: t('services.web.description')
        },
        {
            icon: Palette,
            color: 'bg-nhiquela-cyan',
            title: t('services.design.title'),
            description: t('services.design.description')
        },
        {
            icon: Zap,
            color: 'bg-nhiquela-purple',
            title: t('services.integrations.title'),
            description: t('services.integrations.description')
        },
        {
            icon: Shield,
            color: 'bg-nhiquela-cyan',
            title: t('services.security.title'),
            description: t('services.security.description')
        },
        {
            icon: Rocket,
            color: 'bg-nhiquela-purple',
            title: t('services.support.title'),
            description: t('services.support.description')
        }
    ];

    return (
        <section id="servicos" className="py-20 bg-nhiquela-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-nhiquela-card p-8 rounded-2xl border border-white/5 hover:border-nhiquela-purple/30 transition-all duration-300 group hover:shadow-lg hover:shadow-nhiquela-purple/10"
                        >
                            <div className={`w-12 h-12 rounded-xl ${service.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all`}>
                                <service.icon className={`w-6 h-6 text-white`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
