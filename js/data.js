// Typing animation words
const typingWords = ['Consultant', 'Strategist', 'Advisor', 'Innovator'];

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
            'Implementation roadmaps'
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
            'Interoperability solutions'
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
            'Go-to-market strategies'
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
            'Continuous improvement frameworks'
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
            'Growth strategy development'
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
            'Predictive modeling'
        ],
        color: 'linear-gradient(135deg, #6366f1 0%, #f59e0b 100%)'
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
        title: 'E-commerce Platform Optimization',
        client: 'Retail Technology Company',
        industry: 'E-commerce',
        challenge: 'Declining conversion rates and poor user experience on mobile platforms',
        solution: 'Conducted comprehensive UX audit and implemented data-driven optimization strategies across the entire customer journey.',
        results: [
            '35% increase in mobile conversion rates',
            '50% reduction in cart abandonment',
            '20% improvement in page load speeds',
            'Enhanced customer lifetime value'
        ],
        technologies: ['React', 'Node.js', 'Analytics', 'A/B Testing'],
        duration: '8 months',
        image: 'ecommerce-optimization.jpg'
    },
    {
        id: 3,
        title: 'Enterprise Process Automation',
        client: 'Financial Services Firm',
        industry: 'Financial Services',
        challenge: 'Manual processes causing delays and errors in client onboarding',
        solution: 'Designed and implemented automated workflow systems with intelligent document processing and compliance checks.',
        results: [
            '70% reduction in onboarding time',
            '90% decrease in processing errors',
            'Improved regulatory compliance',
            'Enhanced client satisfaction'
        ],
        technologies: ['RPA', 'Machine Learning', 'API Integration', 'Cloud Services'],
        duration: '10 months',
        image: 'process-automation.jpg'
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