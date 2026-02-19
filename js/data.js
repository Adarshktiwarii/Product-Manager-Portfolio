const typingWords = ['Product Strategy', 'AI Adoption', 'Data & Analytics', 'Digital Transformation', 'Team Leadership', 'Growth Engineering'];

const services = [
    {
        id: 1,
        title: 'Product Strategy & Management',
        description: 'From zero-to-one to scaling. Define strategy, build roadmaps, and ship features that drive adoption and retention.',
        icon: 'fas fa-cube',
        features: [
            'Product roadmap & prioritization',
            'User research & validation',
            'Go-to-market planning',
            'Feature spec & delivery',
            'Competitive positioning'
        ]
    },
    {
        id: 2,
        title: 'AI Adoption & Integration',
        description: 'Cut through the hype. Identify high-impact AI use cases and implement with proper guardrails and governance.',
        icon: 'fas fa-robot',
        features: [
            'AI opportunity assessment',
            'Implementation roadmap',
            'Team enablement & training',
            'Vendor evaluation',
            'ROI measurement'
        ]
    },
    {
        id: 3,
        title: 'Data-Driven Growth',
        description: 'Set up metrics, build dashboards, and run experiments that improve acquisition, activation, and retention.',
        icon: 'fas fa-chart-bar',
        features: [
            'Analytics architecture',
            'Growth experimentation',
            'KPI frameworks',
            'A/B testing strategy',
            'Funnel optimization'
        ]
    },
    {
        id: 4,
        title: 'Digital Transformation',
        description: 'Modernize legacy systems, adopt cloud-first architectures, and build scalable foundations.',
        icon: 'fas fa-layer-group',
        features: [
            'Technology assessment',
            'Architecture planning',
            'Migration strategy',
            'Change management',
            'Process automation'
        ]
    },
    {
        id: 5,
        title: 'Team Building & Process',
        description: 'Build high-performing teams. Implement agile processes that work for your organization\'s size and stage.',
        icon: 'fas fa-users-cog',
        features: [
            'Agile transformation',
            'Hiring & team structure',
            'Process optimization',
            'Leadership coaching',
            'Culture development'
        ]
    },
    {
        id: 6,
        title: 'Startup Advisory',
        description: 'For early-stage founders: validate ideas, find product-market fit, and build before scaling.',
        icon: 'fas fa-rocket',
        features: [
            'Idea validation',
            'MVP definition & scoping',
            'Fundraising support',
            'Pitch deck review',
            'Business model design'
        ]
    }
];

const caseStudies = [
    {
        id: 1,
        title: 'Healthcare Platform Transformation',
        client: 'Leading Healthcare Provider',
        industry: 'Healthcare',
        challenge: 'Legacy system modernization and patient experience improvement',
        solution: 'End-to-end digital transformation including EHR optimization, patient portal development, and workflow redesign.',
        results: [
            '40% improvement in patient satisfaction',
            '60% reduction in scheduling time',
            '25% increase in staff productivity'
        ],
        technologies: ['EHR Systems', 'Patient Portals', 'Cloud Migration'],
        duration: '12 months'
    },
    {
        id: 2,
        title: 'Telemedicine Throughput Optimization',
        client: 'Virtual Care Platform',
        industry: 'Healthcare Technology',
        challenge: 'High wait times and low session completion rates',
        solution: 'AI triage and smart routing, streamlined provider workflows, improved session resilience.',
        results: [
            '28% reduction in wait time',
            '22% increase in completion rate',
            'Improved clinician satisfaction'
        ],
        technologies: ['AI Triage', 'RTC Optimization', 'Analytics'],
        duration: '6 months'
    },
    {
        id: 3,
        title: 'RPM Workflow Automation',
        client: 'Chronic Care Program',
        industry: 'Healthcare',
        challenge: 'Manual alert review overwhelming clinical teams',
        solution: 'Automated alert prioritization with risk scoring and EHR-integrated escalation playbooks.',
        results: [
            '35% reduction in manual review time',
            '30% increase in patient adherence',
            'Lower false-positive escalations'
        ],
        technologies: ['Risk Scoring', 'EHR Integration', 'Automation'],
        duration: '5 months'
    },
    {
        id: 4,
        title: 'HealthTech Startup — Zero to Series A',
        client: 'HealthTech Startup',
        industry: 'Healthcare Technology',
        challenge: 'Product-market fit validation and growth strategy',
        solution: 'Comprehensive product strategy, user validation, and scalable architecture planning.',
        results: [
            '200% user growth in 6 months',
            'Series A funding secured',
            'Scalable product architecture established'
        ],
        technologies: ['Product Strategy', 'Market Research', 'Growth'],
        duration: '6 months'
    }
];

const experience = [
    {
        id: 1,
        title: 'Independent Consultant',
        company: 'Self',
        period: '2024 - Present',
        location: 'Bangalore, India',
        description: 'Product strategy, AI adoption, and growth consulting for technology companies.',
        achievements: [
            'Multiple product launches',
            'AI implementation for enterprise clients',
            'Growth strategy for early-stage startups'
        ]
    },
    {
        id: 2,
        title: 'Consultant',
        company: 'WiseRx',
        period: '2024',
        location: 'Bangalore, India',
        description: 'Strategic consulting for healthcare technology transformation.',
        achievements: [
            'Led 5+ major transformation projects',
            '25% average cost reduction',
            'Strategic roadmaps for 3 enterprise clients'
        ]
    },
    {
        id: 3,
        title: 'Senior Product Manager',
        company: 'Cavista',
        period: '2022 - 2024',
        location: 'Bangalore, India',
        description: 'Product strategy and team leadership for healthcare technology.',
        achievements: [
            'Led 17-person engineering team',
            '25% technical debt reduction',
            '30% user engagement increase'
        ]
    }
];

window.websiteData = {
    typingWords,
    services,
    caseStudies,
    experience
};
