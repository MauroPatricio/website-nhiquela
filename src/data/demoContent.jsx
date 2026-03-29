import {
    BarChart3, TrendingUp, Bell, Users, Star, UtensilsCrossed, QrCode, FileText, CreditCard, Sparkles, Shield, Check,
    Wallet, FileSignature, Receipt, Database, LayoutDashboard, Calendar, History, Activity, Microscope
} from 'lucide-react';

import luxury1 from '../assets/antigravity/luxury/luxury_restaurant_1.png';
import luxury2 from '../assets/antigravity/luxury/luxury_restaurant_2.png';
import luxury3 from '../assets/antigravity/luxury/luxury_restaurant_3.png';
import luxury4 from '../assets/antigravity/luxury/luxury_restaurant_4.png';
import luxury5 from '../assets/antigravity/luxury/luxury_restaurant_5.png';

export const getRestaurantContent = (t) => ({
    title: {
        main: t('demos.restaurant.title.main'),
        highlight: t('demos.restaurant.title.highlight'),
        description: t('demos.restaurant.title.description'),
        subDescription: t('demos.restaurant.title.subDescription'),
        tag: t('demos.restaurant.title.tag')
    },
    sections: [
        {
            type: "dashboard_premium",
            title: t('demos.restaurant.sections.dashboard_premium.title'),
            subtitle: t('demos.restaurant.sections.dashboard_premium.subtitle'),
            icon: BarChart3,
            backgroundImage: luxury1,
            gradient: "from-orange-500 to-amber-600",
            textColor: "text-orange-400",
            content: {
                title: t('demos.restaurant.sections.dashboard_premium.content_title'),
                description: t('demos.restaurant.sections.dashboard_premium.content_description'),
                columns: [
                    {
                        title: t('demos.restaurant.sections.dashboard_premium.col1_title'),
                        icon: TrendingUp,
                        items: t('demos.restaurant.sections.dashboard_premium.col1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.restaurant.sections.dashboard_premium.col2_title'),
                        items: t('demos.restaurant.sections.dashboard_premium.col2_items', { returnObjects: true })
                    }
                ],
                demoCTA: {
                    text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                    description: t('common.safe_environment'),
                    link: "https://gestaomodernaonline.com/",
                    style: "neon"
                }
            }
        },
        {
            type: "dashboard_individual",
            title: t('demos.restaurant.sections.dashboard_individual.title'),
            subtitle: t('demos.restaurant.sections.dashboard_individual.subtitle'),
            icon: TrendingUp,
            backgroundImage: luxury2,
            gradient: "from-blue-500 to-cyan-600",
            textColor: "text-blue-400",
            content: {
                description: t('demos.restaurant.sections.dashboard_individual.content_description'),
                cards: [
                    {
                        title: t('demos.restaurant.sections.dashboard_individual.card1_title'),
                        color: "text-green-400",
                        items: t('demos.restaurant.sections.dashboard_individual.card1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.restaurant.sections.dashboard_individual.card2_title'),
                        color: "text-purple-400",
                        items: t('demos.restaurant.sections.dashboard_individual.card2_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.restaurant.sections.dashboard_individual.card3_title'),
                        color: "text-orange-400",
                        items: t('demos.restaurant.sections.dashboard_individual.card3_items', { returnObjects: true })
                    }
                ],
                demoCTA: {
                    text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                    description: t('common.safe_environment'),
                    link: "https://gestaomodernaonline.com/",
                    style: "neon"
                }
            }
        },
        {
            type: "order_management",
            title: t('demos.restaurant.sections.order_management.title'),
            subtitle: t('demos.restaurant.sections.order_management.subtitle'),
            icon: Bell,
            backgroundImage: luxury3,
            gradient: "from-red-500 to-pink-600",
            textColor: "text-red-400",
            content: {
                title: t('demos.restaurant.sections.order_management.content_title'),
                highlight: t('demos.restaurant.sections.order_management.content_highlight'),
                columns: [
                    {
                        items: t('demos.restaurant.sections.order_management.col1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.restaurant.sections.order_management.col2_title'),
                        statusItems: [
                            { color: "bg-yellow-400", text: t('demos.restaurant.sections.order_management.status_items.0') },
                            { color: "bg-green-400", text: t('demos.restaurant.sections.order_management.status_items.1') },
                            { color: "bg-blue-400", text: t('demos.restaurant.sections.order_management.status_items.2') },
                            { color: "bg-purple-400", text: t('demos.restaurant.sections.order_management.status_items.3') },
                            { color: "bg-emerald-400", text: t('demos.restaurant.sections.order_management.status_items.4') }
                        ]
                    }
                ],
                flow: t('demos.restaurant.sections.order_management.flow', { returnObjects: true }),
                demoCTA: {
                    text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                    description: t('common.safe_environment'),
                    link: "https://gestaomodernaonline.com/",
                    style: "neon"
                }
            }
        },
        {
            type: "client_engagement",
            title: t('demos.restaurant.sections.client_engagement.title'),
            subtitle: t('demos.restaurant.sections.client_engagement.subtitle'),
            icon: Users,
            backgroundImage: luxury4,
            gradient: "from-emerald-500 to-green-600",
            textColor: "text-emerald-400",
            content: {
                description: t('demos.restaurant.sections.client_engagement.content_description'),
                items: t('demos.restaurant.sections.client_engagement.items', { returnObjects: true }),
                demoCTA: {
                    text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                    description: t('common.safe_environment'),
                    link: "https://gestaomodernaonline.com/",
                    style: "neon"
                }
            }
        },
        {
            type: "final_results",
            title: t('demos.restaurant.sections.final_results.title'),
            subtitle: t('demos.restaurant.sections.final_results.subtitle'),
            icon: Check,
            backgroundImage: luxury5,
            gradient: "from-orange-500 to-amber-600",
            textColor: "text-orange-400",
            description: t('demos.restaurant.sections.final_results.description'),
            results: t('demos.restaurant.sections.final_results.results', { returnObjects: true }),
            cta: {
                text: t('demos.restaurant.sections.final_results.cta_text'),
                link: "https://gestaomodernaonline.com/",
                gradient: "from-orange-500 to-amber-600"
            },
            demoCTA: {
                text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                description: t('common.safe_environment'),
                link: "https://gestaomodernaonline.com/",
                style: "neon"
            }
        }
    ]
});

export const getMicrocreditContent = (t) => ({
    title: {
        main: t('demos.microcredit.title.main'),
        highlight: t('demos.microcredit.title.highlight'),
        description: t('demos.microcredit.title.description'),
        subDescription: t('demos.microcredit.title.subDescription'),
        tag: t('demos.microcredit.title.tag')
    },
    sections: [
        {
            type: "dashboard_pro",
            title: t('demos.microcredit.sections.dashboard_pro.title'),
            subtitle: t('demos.microcredit.sections.dashboard_pro.subtitle'),
            icon: BarChart3,
            gradient: "from-emerald-500 to-teal-600",
            textColor: "text-emerald-400",
            content: {
                title: t('demos.microcredit.sections.dashboard_pro.content_title'),
                description: t('demos.microcredit.sections.dashboard_pro.content_description'),
                columns: [
                    {
                        title: t('demos.microcredit.sections.dashboard_pro.col1_title'),
                        icon: TrendingUp,
                        items: t('demos.microcredit.sections.dashboard_pro.col1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.microcredit.sections.dashboard_pro.col2_title'),
                        items: t('demos.microcredit.sections.dashboard_pro.col2_items', { returnObjects: true })
                    }
                ]
            }
        },
        {
            type: "client_management",
            title: t('demos.microcredit.sections.client_management.title'),
            subtitle: t('demos.microcredit.sections.client_management.subtitle'),
            icon: Users,
            gradient: "from-blue-500 to-indigo-600",
            textColor: "text-blue-400",
            content: {
                description: t('demos.microcredit.sections.client_management.content_description'),
                cards: [
                    {
                        title: t('demos.microcredit.sections.client_management.card1_title'),
                        color: "text-blue-400",
                        items: t('demos.microcredit.sections.client_management.card1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.microcredit.sections.client_management.card2_title'),
                        color: "text-indigo-400",
                        items: t('demos.microcredit.sections.client_management.card2_items', { returnObjects: true })
                    }
                ]
            }
        },
        {
            type: "loan_lifecycle",
            title: t('demos.microcredit.sections.loan_lifecycle.title'),
            subtitle: t('demos.microcredit.sections.loan_lifecycle.subtitle'),
            icon: Wallet,
            gradient: "from-purple-500 to-violet-600",
            textColor: "text-purple-400",
            content: {
                title: t('demos.microcredit.sections.loan_lifecycle.content_title'),
                highlight: t('demos.microcredit.sections.loan_lifecycle.content_highlight'),
                flow: t('demos.microcredit.sections.loan_lifecycle.flow', { returnObjects: true }),
                demoCTA: {
                    text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                    description: t('common.safe_environment'),
                    link: "https://gestaomodernaonline.com/",
                    style: "neon"
                }
            }
        },
        {
            type: "final_results",
            title: t('demos.microcredit.sections.final_results.title'),
            subtitle: t('demos.microcredit.sections.final_results.subtitle'),
            icon: Check,
            gradient: "from-emerald-500 to-teal-600",
            textColor: "text-emerald-400",
            description: t('demos.microcredit.sections.final_results.description'),
            results: t('demos.microcredit.sections.final_results.results', { returnObjects: true }),
            demoCTA: {
                text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                description: t('common.safe_environment'),
                link: "https://gestaomodernaonline.com/",
                style: "neon"
            },
            cta: {
                text: t('demos.microcredit.sections.final_results.cta_text'),
                link: "https://gestaomodernaonline.com/",
                gradient: "from-emerald-500 to-teal-600"
            }
        }
    ]
});

export const getClinicContent = (t) => ({
    title: {
        main: t('demos.clinic.title.main'),
        highlight: t('demos.clinic.title.highlight'),
        description: t('demos.clinic.title.description'),
        subDescription: t('demos.clinic.title.subDescription'),
        tag: t('demos.clinic.title.tag')
    },
    sections: [
        {
            type: "medical_dashboard",
            title: t('demos.clinic.sections.medical_dashboard.title'),
            subtitle: t('demos.clinic.sections.medical_dashboard.subtitle'),
            icon: LayoutDashboard,
            gradient: "from-rose-500 to-red-600",
            textColor: "text-rose-400",
            content: {
                title: t('demos.clinic.sections.medical_dashboard.content_title'),
                description: t('demos.clinic.sections.medical_dashboard.content_description'),
                columns: [
                    {
                        title: t('demos.clinic.sections.medical_dashboard.col1_title'),
                        icon: Activity,
                        items: t('demos.clinic.sections.medical_dashboard.col1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.clinic.sections.medical_dashboard.col2_title'),
                        items: t('demos.clinic.sections.medical_dashboard.col2_items', { returnObjects: true })
                    }
                ]
            }
        },
        {
            type: "scheduling",
            title: t('demos.clinic.sections.scheduling.title'),
            subtitle: t('demos.clinic.sections.scheduling.subtitle'),
            icon: Calendar,
            gradient: "from-blue-500 to-sky-600",
            textColor: "text-blue-400",
            content: {
                description: t('demos.clinic.sections.scheduling.content_description'),
                items: t('demos.clinic.sections.scheduling.items', { returnObjects: true }),
                demoCTA: {
                    text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                    description: t('common.safe_environment'),
                    link: "https://gestaomodernaonline.com/",
                    style: "neon"
                }
            }
        },
        {
            type: "patient_records",
            title: t('demos.clinic.sections.patient_records.title'),
            subtitle: t('demos.clinic.sections.patient_records.subtitle'),
            icon: FileText,
            gradient: "from-indigo-500 to-blue-600",
            textColor: "text-indigo-400",
            content: {
                title: t('demos.clinic.sections.patient_records.content_title'),
                highlight: t('demos.clinic.sections.patient_records.content_highlight'),
                cards: [
                    {
                        title: t('demos.clinic.sections.patient_records.card1_title'),
                        color: "text-indigo-400",
                        items: t('demos.clinic.sections.patient_records.card1_items', { returnObjects: true })
                    },
                    {
                        title: t('demos.clinic.sections.patient_records.card2_title'),
                        color: "text-blue-400",
                        items: t('demos.clinic.sections.patient_records.card2_items', { returnObjects: true })
                    }
                ]
            }
        },
        {
            type: "final_results",
            title: t('demos.clinic.sections.final_results.title'),
            subtitle: t('demos.clinic.sections.final_results.subtitle'),
            icon: Check,
            gradient: "from-rose-500 to-red-600",
            textColor: "text-rose-400",
            description: t('demos.clinic.sections.final_results.description'),
            results: t('demos.clinic.sections.final_results.results', { returnObjects: true }),
            demoCTA: {
                text: `${t('common.premium_experience')} • ${t('common.free_trial')}`,
                description: t('common.safe_environment'),
                link: "https://gestaomodernaonline.com/",
                style: "neon"
            },
            cta: {
                text: t('demos.clinic.sections.final_results.cta_text'),
                link: "https://gestaomodernaonline.com/",
                gradient: "from-rose-500 to-red-600"
            }
        }
    ]
});

