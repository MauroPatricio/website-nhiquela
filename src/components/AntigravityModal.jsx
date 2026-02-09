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

const AntigravityModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
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

    if (!isOpen) return null;

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
                    <FeatureSection delay={0}>
                        <div className="text-center space-y-6 py-12">
                            <div className="inline-block px-6 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold uppercase tracking-wider mb-4">
                                Antigravity Platform
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                                Plataforma Inteligente de<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                                    Gestão de Restaurantes
                                </span>
                            </h1>
                            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Tudo o que o seu restaurante precisa. Num único sistema.
                            </p>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Mais do que um QR Menu. Uma central completa de controlo, crescimento e lucro para restaurantes modernos.
                            </p>
                        </div>
                    </FeatureSection>

                    {/* Dashboard Premium - Owner View */}
                    <FeatureSection delay={100}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                                    <BarChart3 size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Dashboard Premium</h2>
                                    <p className="text-orange-400 text-lg">Visão do Dono (Owner)</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-4">🎯 O Cérebro do Negócio</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Acompanhe todos os seus restaurantes em tempo real, com dados claros, gráficos intuitivos e decisões baseadas em números — não em achismos.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-orange-400 flex items-center gap-2">
                                            <TrendingUp size={24} />
                                            Performance em Tempo Real
                                        </h4>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Receita diária, semanal e mensal</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Comparação de faturação entre restaurantes</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Total de pedidos realizados</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Crescimento percentual por unidade</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Ticket médio por restaurante</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-orange-400">📊 Visual Moderno e Intuitivo</h4>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Gráficos de linhas (tendências)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Gráficos de barras (comparações)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                                <span>Gráficos circulares (distribuição)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={screenshot3} alt="Dashboard Executivo" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Dashboard Individual */}
                    <FeatureSection delay={200}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                                    <TrendingUp size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Dashboard Individual</h2>
                                    <p className="text-blue-400 text-lg">Por Restaurante</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <p className="text-gray-300 text-lg mb-8">
                                    Cada restaurante tem a sua visão própria, totalmente personalizada.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-green-400 mb-4">💰 Financeiro</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Receita diária e mensal</li>
                                            <li>• Total faturado</li>
                                            <li>• Pagamentos confirmados e pendentes</li>
                                            <li>• Métodos de pagamento mais utilizados</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-purple-400 mb-4">🍽️ Operacional</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Pedidos realizados e concluídos</li>
                                            <li>• Tempo médio de atendimento</li>
                                            <li>• Pedidos cancelados</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-orange-400 mb-4">👥 Clientes</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Número de clientes atendidos</li>
                                            <li>• Clientes recorrentes</li>
                                            <li>• Avaliação média do restaurante</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Gestão de Pedidos */}
                    <FeatureSection delay={300}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                                    <Bell size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Gestão de Pedidos</h2>
                                    <p className="text-red-400 text-lg">Em Tempo Real</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-4">🔔 O Coração do Sistema</h3>
                                <p className="text-xl text-orange-400 font-semibold mb-6">Nunca mais perca um pedido.</p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-red-400 mt-1 flex-shrink-0" />
                                                <span>Lista de pedidos ativos em tempo real</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-red-400 mt-1 flex-shrink-0" />
                                                <span>Notificação sonora contínua para novos pedidos</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-red-400 mt-1 flex-shrink-0" />
                                                <span>Destaque visual da mesa que solicitou</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-lg font-semibold text-white mb-4">Estados do Pedido:</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                                <span className="text-gray-300">⏳ Pendente</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                                                <span className="text-gray-300">✅ Aceite</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                                                <span className="text-gray-300">👨‍🍳 Em preparação</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                                                <span className="text-gray-300">🍽️ Pronto</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                                                <span className="text-gray-300">💳 Pago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={screenshot5} alt="Área do Garçom com Pedidos" className="w-full h-auto" />
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
                                    <h4 className="text-lg font-semibold text-white mb-3">🔄 Fluxo Automático</h4>
                                    <div className="flex flex-wrap gap-3 items-center text-sm text-gray-300">
                                        <span className="bg-white/10 px-4 py-2 rounded-lg">Pedido confirmado</span>
                                        <span className="text-orange-400">→</span>
                                        <span className="bg-white/10 px-4 py-2 rounded-lg">Envio direto para a cozinha</span>
                                        <span className="text-orange-400">→</span>
                                        <span className="bg-white/10 px-4 py-2 rounded-lg">Atualização instantânea para o cliente</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Performance da Equipa */}
                    <FeatureSection delay={400}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                    <Users size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Performance da Equipa</h2>
                                    <p className="text-emerald-400 text-lg">Métricas Individuais</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-blue-400 mb-4">🧑‍💼 Atendentes</h4>
                                        <ul className="space-y-3 text-gray-300">
                                            <li>• Pedidos atendidos por colaborador</li>
                                            <li>• Tempo médio de resposta</li>
                                            <li>• Avaliação dos clientes</li>
                                            <li>• Ranking de performance</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-orange-400 mb-4">👨‍🍳 Cozinha</h4>
                                        <ul className="space-y-3 text-gray-300">
                                            <li>• Tempo médio de preparação</li>
                                            <li>• Pedidos preparados por período</li>
                                            <li>• Eficiência individual</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                        👉 Mais produtividade, menos erros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Gestão de Clientes */}
                    <FeatureSection delay={500}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                    <Star size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Gestão Inteligente de Clientes</h2>
                                    <p className="text-purple-400 text-lg">Conheça Melhor Quem Consome</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                                                <span>Total de clientes</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                                                <span>Clientes ativos vs inativos</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                                                <span>Frequência de visitas</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                                                <span>Preferências de consumo</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-lg font-semibold text-purple-400 mb-4">💬 Feedback em Tempo Real</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Reações animadas por mesa</li>
                                            <li>• Histórico de avaliações</li>
                                            <li>• Alertas automáticos de insatisfação</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Gestão de Menus */}
                    <FeatureSection delay={600}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                                    <UtensilsCrossed size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Gestão de Menus Profissional</h2>
                                    <p className="text-amber-400 text-lg">Controlo Total do Cardápio</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-amber-400 mb-4">🍔 Criação e Gestão</h4>
                                        <ul className="space-y-3 text-gray-300">
                                            <li>• Criar, editar e remover menus</li>
                                            <li>• Categorias personalizadas</li>
                                            <li>• Fotos e descrições atrativas</li>
                                            <li>• Preços dinâmicos</li>
                                            <li>• Disponibilidade por horário ou dia</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-orange-400 mb-4">📊 Inteligência de Menu</h4>
                                        <ul className="space-y-3 text-gray-300">
                                            <li>• Pratos mais vendidos</li>
                                            <li>• Pratos com baixa saída</li>
                                            <li>• Sugestões automáticas de promoções</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Gestão de Mesas */}
                    <FeatureSection delay={700}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                    <QrCode size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Gestão de Mesas</h2>
                                    <p className="text-green-400 text-lg">Com QR Code</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <ul className="space-y-3 text-gray-300 mb-8">
                                    <li className="flex items-start gap-3">
                                        <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                                        <span>Criação de mesas com nome, número e capacidade</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                                        <span>Geração automática de QR Code</span>
                                    </li>
                                </ul>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                                    <h4 className="text-lg font-semibold text-green-400 mb-4">📡 Estado da Mesa em Tempo Real</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-green-400"></span>
                                            <span className="text-gray-300">Livre</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                            <span className="text-gray-300">Ocupada</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                            <span className="text-gray-300">A solicitar</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                                            <span className="text-gray-300">Em pagamento</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={screenshot2} alt="Área do Garçom" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Relatórios */}
                    <FeatureSection delay={800}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <FileText size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Relatórios Avançados</h2>
                                    <p className="text-cyan-400 text-lg">Dados Claros para Decisões Inteligentes</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-cyan-400 mb-4">📊 Financeiros</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Receita por restaurante</li>
                                            <li>• Receita por período</li>
                                            <li>• Impostos (se aplicável)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-blue-400 mb-4">⚙️ Operacionais</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>• Tempo médio de atendimento</li>
                                            <li>• Desempenho da equipa</li>
                                            <li>• Pedidos por horário</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl border border-cyan-500/30">
                                    <h4 className="text-lg font-semibold text-white mb-3">📤 Exportação Fácil</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">PDF</span>
                                        <span className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">Excel</span>
                                        <span className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">CSV</span>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={screenshot1} alt="Analytics & Performance" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Gestão de Subscrições */}
                    <FeatureSection delay={900}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <CreditCard size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Gestão de Subscrições</h2>
                                    <p className="text-indigo-400 text-lg">Controlo de Pagamentos</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <Check size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
                                        <span>Estado da subscrição por restaurante</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
                                        <span>Histórico de pagamentos</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
                                        <span>Alertas automáticos de expiração</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
                                        <span>Pagamento individual por unidade</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Funcionalidades Premium */}
                    <FeatureSection delay={1000}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                                    <Sparkles size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Funcionalidades Premium</h2>
                                    <p className="text-pink-400 text-lg">Que Fazem a Diferença</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
                                        <h4 className="text-xl font-semibold text-purple-400 mb-4">🤖 Inteligência Artificial</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Previsão de vendas</li>
                                            <li>• Identificação de horários de pico</li>
                                            <li>• Recomendações de staff</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
                                        <h4 className="text-xl font-semibold text-orange-400 mb-4">🔔 Notificações Inteligentes</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Pedidos atrasados</li>
                                            <li>• Baixa performance</li>
                                            <li>• Clientes insatisfeitos</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
                                        <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                                            <Shield size={20} />
                                            Segurança e Auditoria
                                        </h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Permissões por função</li>
                                            <li>• Histórico de ações</li>
                                            <li>• Logs de login e rastreabilidade</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Final Results */}
                    <FeatureSection delay={1100}>
                        <div className="space-y-8 pb-16">
                            <div className="text-center space-y-6">
                                <h2 className="text-5xl font-bold text-white">🏁 Resultado Final</h2>
                                <p className="text-2xl text-gray-300">
                                    Uma plataforma completa, moderna e escalável que oferece:
                                </p>
                            </div>

                            <div className="glass-card p-12 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-2 gap-6 text-lg">
                                    <div className="flex items-center gap-4 text-gray-200">
                                        <span className="text-3xl">✅</span>
                                        <span>Controlo total do negócio</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-200">
                                        <span className="text-3xl">✅</span>
                                        <span>Decisões baseadas em dados</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-200">
                                        <span className="text-3xl">✅</span>
                                        <span>Mais eficiência operacional</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-200">
                                        <span className="text-3xl">✅</span>
                                        <span>Maior faturação</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-200">
                                        <span className="text-3xl">✅</span>
                                        <span>Experiência premium para clientes</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-200">
                                        <span className="text-3xl">✅</span>
                                        <span>Alto valor comercial para o restaurante</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-8">
                                <a
                                    href="https://gestaomodernaonline.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-12 py-5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl text-white text-xl font-bold shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                                >
                                    Acessar Plataforma →
                                </a>
                            </div>
                        </div>
                    </FeatureSection>
                </div>
            </div>
        </div>
    );
};

export default AntigravityModal;
