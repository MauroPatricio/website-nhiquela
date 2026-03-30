import React, { useRef, useState } from 'react';
import { Utensils, Wallet, Heart, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import AntigravityModal from './AntigravityModal';
import { getRestaurantContent, getMicrocreditContent, getClinicContent } from '../data/demoContent';
import { useTranslation } from 'react-i18next';
import TiltCard from './TiltCard';

const colorStyles = {
  emerald: {
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    button: 'bg-emerald-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] ring-emerald-400 ring-2'
  },
  rose: {
    bg: 'bg-rose-500/15',
    border: 'border-rose-500/30',
    text: 'text-rose-400',
    dot: 'bg-rose-400',
    button: 'bg-rose-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] ring-rose-400 ring-2'
  },
  purple: {
    bg: 'bg-purple-500/15',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    dot: 'bg-purple-400',
    button: 'bg-purple-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] ring-purple-400 ring-2'
  },
  orange: {
    bg: 'bg-orange-500/15',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    dot: 'bg-orange-400',
    button: 'bg-orange-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] ring-orange-400 ring-2'
  }
};


const PhoneMockup = ({ color, link, isDetailedView, onVerMaisClick, t }) => {
  const styles = colorStyles[color];

  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-950 border-[8px] rounded-[2.5rem] h-[320px] w-[185px] shadow-2xl ring-1 ring-white/10 transition-shadow duration-500 ${styles.glow}`}>
      <div className="h-[20px] bg-gray-800 rounded-b-[1rem] w-[80px] absolute top-0 left-1/2 -translate-x-1/2 z-10" />
      <div className="flex-1 pt-8 px-3 pb-4 flex flex-col gap-3 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-xl h-full rounded-[2rem] overflow-hidden">
        <div className={`h-16 rounded-xl ${styles.bg} border ${styles.border} w-full transition-shadow duration-500 ${styles.glow}`} />
        <div className="flex gap-2 w-full">
          <div className="h-20 w-1/2 rounded-xl bg-white/5 border border-white/10" />
          <div className="h-20 w-1/2 rounded-xl bg-white/5 border border-white/10" />
        </div>
        <div className="h-24 w-full rounded-xl bg-white/5 border border-white/10" />
        {isDetailedView ? (
          <button
            onClick={onVerMaisClick}
            className={`mt-auto h-10 w-full rounded-lg ${styles.button} flex items-center justify-center text-xs font-semibold text-white shadow-lg hover:brightness-110 transition-all`}
          >
            {t('demos.common.how_it_works')}
          </button>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-auto h-10 w-full rounded-lg ${styles.button} flex items-center justify-center text-xs font-semibold text-white shadow-lg hover:brightness-110 transition-all`}
          >
            {t('demos.common.test_now')}
          </a>
        )}
      </div>
    </div>
  );
};

const Demos = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [isAntigravityModalOpen, setIsAntigravityModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const restaurantContent = getRestaurantContent(t);
  const microcreditContent = getMicrocreditContent(t);
  const clinicContent = getClinicContent(t);

  const demos = [
    {
      title: t('demos.restaurant.main_title'),
      subtitle: t('demos.restaurant.subtitle'),
      highlight: t('demos.restaurant.highlight'),
      icon: Utensils,
      color: 'orange',
      content: restaurantContent,
      link: 'https://gestaomodernaonline.com/',
      features: [
        t('demos.restaurant.features.0'),
        t('demos.restaurant.features.1'),
        t('demos.restaurant.features.2'),
        t('demos.restaurant.features.3'),
        t('demos.restaurant.features.4')
      ]
    },
    {
      title: t('demos.microcredit.main_title'),
      subtitle: t('demos.microcredit.subtitle'),
      highlight: t('demos.microcredit.highlight'),
      icon: Wallet,
      color: 'emerald',
      content: microcreditContent,
      link: '#',
      features: [
        t('demos.microcredit.features.0'),
        t('demos.microcredit.features.1'),
        t('demos.microcredit.features.2'),
        t('demos.microcredit.features.3'),
        t('demos.microcredit.features.4')
      ]
    },
    {
      title: t('demos.clinic.main_title'),
      subtitle: t('demos.clinic.subtitle'),
      highlight: t('demos.clinic.highlight'),
      icon: Heart,
      color: 'rose',
      content: clinicContent,
      link: '#',
      features: [
        t('demos.clinic.features.0'),
        t('demos.clinic.features.1'),
        t('demos.clinic.features.2'),
        t('demos.clinic.features.3'),
        t('demos.clinic.features.4')
      ]
    },
    {
      title: t('demos.scheduling.main_title'),
      subtitle: t('demos.scheduling.subtitle'),
      highlight: t('demos.scheduling.highlight'),
      icon: Calendar,
      color: 'purple',
      link: '#',
      features: [
        t('demos.scheduling.features.0'),
        t('demos.scheduling.features.1'),
        t('demos.scheduling.features.2'),
        t('demos.scheduling.features.3'),
        t('demos.scheduling.features.4')
      ]
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  const handleVerMais = (content) => {
    setSelectedContent(content);
    setIsAntigravityModalOpen(true);
  };

  return (
    <section id="demos" className="py-24 bg-nhiquela-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('demos.section_title')}
          </h2>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            {t('demos.section_subtitle')}
            <span className="block mt-2 text-white font-semibold">
              {t('demos.section_description')}
            </span>
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scroll('left')}
            className="relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-white/20 hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="text-white text-xl transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white/30 via-white/10 to-white/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
          </button>

          <button
            onClick={() => scroll('right')}
            className="relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-white/20 hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white/30 via-white/10 to-white/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
          </button>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex gap-8 overflow-x-auto px-4 pb-10 no-scrollbar">
        {demos.map((demo, index) => {
          const styles = colorStyles[demo.color];
          const isDetailedView = !!demo.content;

          return (
            <div key={index} className="min-w-[400px] max-w-[400px] h-full">
              <TiltCard className="group">
                <div
                  className={`h-full px-16 py-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500
                  group-hover:shadow-[0_0_40px_${styles.text.replace('text-', '')}]
                  group-hover:ring-2 group-hover:ring-${demo.color}-400`}
                >
                  <div className="flex justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${styles.bg} flex items-center justify-center ${styles.text} transition-shadow duration-500 group-hover:shadow-[0_0_20px_currentColor]`}>
                      <demo.icon size={28} />
                    </div>
                    <span className={`text-xs font-bold ${styles.text}`}>{t('demos.common.popular')}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{demo.title}</h3>
                  <p className="text-gray-400 text-sm mb-2 leading-relaxed">{demo.subtitle}</p>
                  <p className={`text-sm font-semibold mb-6 ${styles.text}`}>{demo.highlight}</p>

                  <PhoneMockup
                    color={demo.color}
                    link={demo.link}
                    isDetailedView={isDetailedView}
                    onVerMaisClick={() => handleVerMais(demo.content)}
                    t={t}
                  />

                  <div className="mt-6 space-y-3">
                    {demo.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className={`w-2.5 h-2.5 rounded-full ${styles.dot} shadow-[0_0_8px_currentColor]`}></span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>

      <AntigravityModal
        isOpen={isAntigravityModalOpen}
        onClose={() => setIsAntigravityModalOpen(false)}
        content={selectedContent}
      />
    </section>
  );
};

export default Demos;