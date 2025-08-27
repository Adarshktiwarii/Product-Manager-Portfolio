// Typing animation words
const typingWords = ['Consultant', 'Innovator', 'Advisor'];

// Services data
const services = [
    {
        id: 1,
        title: 'Digital Transformation Strategy',
        description: 'Comprehensive digital transformation roadmaps tailored to your organization\'s unique challenges and goals.',
        icon: 'fas fa-rocket',
        features: [
            'Technology assessment & gap analysis',
            'Change management strategies',
            'ROI optimization frameworks',
            'Implementation roadmaps',
            'AI-assisted efficiency improvements'
        ],
        color: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
        id: 2,
        title: 'Healthcare Technology Consulting',
        description: 'Specialized expertise in healthcare technology solutions, compliance, and patient experience optimization.',
        icon: 'fas fa-heartbeat',
        features: [
            'EHR/EMR system optimization',
            'Healthcare compliance frameworks',
            'Patient experience enhancement',
            'Interoperability solutions',
            'AI for triage, routing, and documentation'
        ],
        color: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
    },
    {
        id: 3,
        title: 'Product Strategy & Development',
        description: 'End-to-end product strategy from ideation to launch, with focus on user-centric design and market fit.',
        icon: 'fas fa-lightbulb',
        features: [
            'Market research & validation',
            'User experience design',
            'Product roadmap development',
            'Go-to-market strategies',
            'AI-powered research synthesis and insights'
        ],
        color: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)'
    },
    {
        id: 4,
        title: 'Business Process Optimization',
        description: 'Streamline operations and improve efficiency through data-driven process analysis and optimization.',
        icon: 'fas fa-cogs',
        features: [
            'Process mapping & analysis',
            'Automation opportunities',
            'Performance metrics & KPIs',
            'Continuous improvement frameworks',
            'AI copilots to reduce manual work'
        ],
        color: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)'
    },
    {
        id: 5,
        title: 'Strategic Planning & Advisory',
        description: 'Strategic planning and advisory services to help organizations navigate complex business challenges.',
        icon: 'fas fa-chess',
        features: [
            'Strategic planning workshops',
            'Competitive analysis',
            'Risk assessment & mitigation',
            'Growth strategy development',
            'AI leverage for scale with guardrails'
        ],
        color: 'linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)'
    },
    {
        id: 6,
        title: 'Data Analytics & Insights',
        description: 'Transform raw data into actionable insights to drive informed decision-making and business growth.',
        icon: 'fas fa-chart-line',
        features: [
            'Data strategy development',
            'Analytics implementation',
            'Performance dashboards',
            'Predictive modeling',
            'AI/ML models for forecasting'
        ],
        color: 'linear-gradient(135deg, #6366f1 0%, #f59e0b 100%)'
    },
    {
        id: 7,
        title: 'AI Adoption',
        description: 'Integrate AI to make work faster, cheaper, and more consistent—safely.',
        icon: 'fas fa-brain',
        features: [
            'Workflow automation and copilots',
            'Data readiness, privacy, and guardrails',
            'Change management and team enablement'
        ],
        color: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)'
    }
];

// Case studies data
const caseStudies = [
    {
        id: 1,
        title: 'Healthcare Platform Transformation',
        client: 'Leading Healthcare Provider',
        industry: 'Healthcare',
        challenge: 'Legacy system modernization and patient experience enhancement',
        solution: 'Led comprehensive digital transformation initiative including EHR optimization, patient portal development, and staff training programs.',
        results: [
            '40% improvement in patient satisfaction scores',
            '60% reduction in appointment scheduling time',
            '25% increase in staff productivity',
            'Compliance with latest healthcare regulations'
        ],
        technologies: ['EHR Systems', 'Patient Portals', 'API Integration', 'Cloud Migration'],
        duration: '12 months',
        image: 'healthcare-transformation.jpg'
    },
    {
        id: 2,
        title: 'Telemedicine Throughput Uplift',
        client: 'Virtual Care Platform',
        industry: 'Healthcare',
        challenge: 'High wait times and session reliability issues across clinics',
        solution: 'Introduced AI triage and routing, streamlined provider workflows, and improved session resilience.',
        results: [
            '28% reduction in average wait time',
            '22% increase in visit completion rate',
            'Improved clinician satisfaction and throughput'
        ],
        technologies: ['AI Triage', 'RTC Optimization', 'Analytics', 'Queueing'],
        duration: '6 months',
        image: 'telemedicine-throughput.jpg'
    },
    {
        id: 3,
        title: 'RPM Workflow Automation',
        client: 'Chronic Care Program',
        industry: 'Healthcare',
        challenge: 'Manual alert review overwhelming clinical teams',
        solution: 'Automated alert prioritization with risk scoring and created escalation playbooks integrated with EHR.',
        results: [
            '35% reduction in manual review time',
            '30% increase in patient adherence',
            'Lower false-positive escalations'
        ],
        technologies: ['Risk Scoring', 'EHR Integration', 'Automation', 'Dashboards'],
        duration: '5 months',
        image: 'rpm-automation.jpg'
    },
    {
        id: 4,
        title: 'Startup Product Strategy',
        client: 'HealthTech Startup',
        industry: 'Healthcare Technology',
        challenge: 'Product-market fit validation and scalable growth strategy',
        solution: 'Developed comprehensive product strategy including market research, user validation, and scalable architecture planning.',
        results: [
            'Successful product-market fit validation',
            '200% user growth in 6 months',
            'Secured Series A funding',
            'Established scalable product architecture'
        ],
        technologies: ['Product Strategy', 'Market Research', 'User Research', 'Growth Hacking'],
        duration: '6 months',
        image: 'startup-strategy.jpg'
    }
];

// Experience timeline data
const experience = [
    {
        id: 1,
        title: 'Consultant',
        company: 'WiseRx',
        period: '2024 - Present',
        location: 'Bangalore, India',
        description: 'Leading strategic consulting engagements for healthcare technology companies, focusing on digital transformation, product strategy, and business process optimization.',
        achievements: [
            'Led 5+ major healthcare technology transformation projects',
            'Developed strategic roadmaps for 3 enterprise clients',
            'Achieved 25% average cost reduction for clients',
            'Mentored 10+ junior consultants'
        ],
        technologies: ['Healthcare Technology', 'Digital Transformation', 'Strategic Planning', 'Process Optimization'],
        type: 'current'
    },
    {
        id: 2,
        title: 'Senior Product Manager',
        company: 'Cavista',
        period: '2022 - 2024',
        location: 'Bangalore, India',
        description: 'Led product strategy and development for healthcare technology solutions, managing cross-functional teams and driving product success.',
        achievements: [
            'Reduced technical debt by 25% through strategic refactoring',
            'Led team of 17 developers and designers',
            'Increased user engagement by 30%',
            'Improved interaction rates by 35%'
        ],
        technologies: ['Product Management', 'Healthcare Technology', 'Team Leadership', 'Data Analytics'],
        type: 'previous'
    },
    {
        id: 3,
        title: 'Product Manager',
        company: 'Healthcare Startup',
        period: '2021 - 2022',
        location: 'Bangalore, India',
        description: 'Managed product development lifecycle for healthcare applications, focusing on user experience and regulatory compliance.',
        achievements: [
            'Launched 3 major product features',
            'Improved user satisfaction scores by 40%',
            'Ensured HIPAA compliance for all products',
            'Reduced customer support tickets by 50%'
        ],
        technologies: ['Product Development', 'Healthcare Compliance', 'User Experience', 'Agile Methodologies'],
        type: 'previous'
    },
    {
        id: 4,
        title: 'Pharmacy Graduate',
        company: 'Amity University',
        period: '2017 - 2021',
        location: 'Gwalior, India',
        description: 'Bachelor of Pharmacy degree with focus on pharmaceutical sciences and healthcare systems.',
        achievements: [
            'Graduated with distinction',
            'Completed research project on healthcare technology adoption',
            'Developed understanding of healthcare systems and regulations',
            'Gained analytical and scientific methodology skills'
        ],
        technologies: ['Pharmaceutical Sciences', 'Healthcare Systems', 'Research Methods', 'Analytical Thinking'],
        type: 'education'
    }
];

// Export data for use in main.js
window.websiteData = {
    typingWords,
    services,
    caseStudies,
    experience
};