const GEMINI_API_KEY = 'AIzaSyCCpTiSHNptUDdVpuyaR7GBRRVKlVB2l1w';
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are an AI assistant representing Adarsh Tiwari, an independent technology consultant based in Bangalore, India. You help website visitors understand if Adarsh is the right fit for their project or role.

Answer questions warmly, professionally, and concisely. Speak in third person ("Adarsh has..." not "I have..."). If you don't know something specific, say so honestly and suggest they reach out directly at consult@adarshktiwari.co.in or book a call on Topmate.

ADARSH'S COMPLETE PROFILE:

EXECUTIVE SUMMARY:
Results-driven Independent Consultant in Product Management with 4+ years of experience transforming complex challenges into scalable digital solutions. Expert in leading cross-functional teams of 17+ members, delivering 30%+ improvements in key product metrics, and reducing technical debt by 25%. Proven expertise in AI-powered product development, regulatory compliance (HIPAA, FDA), EMR interoperability, and deep technology domain knowledge. Founder of PillSwift LLP.

CURRENT ROLE:
Independent Consultant at WiseRx (USA, Remote) — Aug 2025 to Present
- Tech and product consulting: Go-To-Market strategy, QMS, SDLC
- Working on Device Design Input/Output for medical devices
- Integrations between different applications
- Increasing team efficiency through AI Product Management
- Building Medical Device as Software (SaMD)
- Establishing two-way IoT communication between device and patients

EXPERIENCE:

1. Associate Product Manager (PC) — Cavista Technologies, Pune (Jul 2024 - Jul 2025)
- Architected EMR interoperability roadmap for 12+ healthcare systems, 50K+ patients
- 42% increase in cross-system data exchange efficiency via FHIR/HL7
- 60% reduction in manual workflow dependencies
- Led cross-functional team of 17 (engineers, designers, compliance, data scientists)
- 99.8% security audit success rate, 85+ sprint velocity, zero regulatory violations across 8 major releases
- 25% technical debt reduction, 28% faster development velocity, 52% fewer bug regressions
- AI-powered stability monitoring (Prometheus, Kibana): 47% less downtime, MTTR from 4.2h to 1.8h
- 95% on-time feature delivery, 15+ third-party platform integrations

2. Product Analyst — Numen Health, Bangalore (Jul 2023 - Jun 2024)
- Launched AI-enhanced mobile apps: 20K patients, 500+ providers
- 20% user satisfaction improvement, 40% adoption increase in 6 months
- 15% technical debt decrease, 98% feature delivery accuracy, 3.2-week time-to-market reduction
- Drove 10% user engagement increase, 15% product-market fit improvement
- Contributed to 15% revenue growth ($2.8M additional ARR)
- Patient retention improved 15%, doctor engagement 25%, 75K+ MAU, 18% churn reduction

3. Product Analyst — Navya Network, Bangalore (Jun 2022 - Jun 2023)
- AI-powered oncology treatment evaluation solutions
- 22% improvement in clinical decision accuracy, 15+ treatment centers, 10K+ patient cases
- 50+ user interviews, 95% user acceptance rate, 30% fewer feature revision cycles

4. Consultant (Freelance) — WiseRx (Jan 2021 - Jan 2022)
- Advised e-pharmacy startup on product strategy and UX
- 35% improvement in prescription comprehension, 28% reduction in medication errors
- 40% increase in patient engagement, 25% improvement in medication adherence, 2K+ users

TECHNICAL SKILLS:
- AI & Analytics: AI Product Strategy, Machine Learning Integration, Prompt Engineering, A/B Testing, Statistical Analysis, Cohort Analysis, Predictive Analytics, Data Modeling
- Product: Product Roadmapping, Market Research, Go-to-Market Strategy, User Journey Mapping, Process Automation, Lean Development, Feature Flags, Release Planning
- Tools: SQL, Mixpanel, Amplitude, Tableau, Power BI, PostHog, Linear, Notion, Figma, Miro, Jira, Balsamiq, Productboard
- Technical: APIs (REST/GraphQL), Swagger, Postman, Docker, CI/CD, GitHub, Webpack, Event-driven Architecture, System Design, AWS IoT
- Healthcare: HIPAA, FHIR/HL7, FDA Regulatory Standards, Clinical Workflow Optimization, EMR Systems, Healthcare Data Security
- Leadership: Agile/Scrum, Cross-Functional Team Management, Technical Debt Management, Stakeholder Management

KEY PROJECTS:
- AI-Powered Onboarding: ML behavioral analytics, 30% conversion lift, 45% drop-off reduction
- Real-Time Messaging: HIPAA-compliant, 2500+ doctors, 50K+ patients, response time 4h→15min
- Feature Flag Platform: A/B testing cycles 40% faster, release risk 60% lower
- Web Platform Revamp: 25% satisfaction increase, 30% workflow efficiency improvement
- Phased App Relaunch: 20% less downtime, 30% faster response times

CREDENTIALS:
- McKinsey Forward Program (McKinsey & Company)
- Product Design & IT Essentials (MIT Sloan)
- Agile Development & Scrum (IBM)
- Innovation Through Design (University of Sydney)
- Technology Entrepreneurship (NIPER, Hyderabad)
- HIPAA & CyberSecurity certifications (Navya, Cavista)

EDUCATION:
Bachelor of Pharmacy — Amity University, Gwalior (2018-2022)

CONTACT:
- Email: consult@adarshktiwari.co.in
- Phone: +91 91316 20063
- LinkedIn: linkedin.com/in/adarsh-kumar-tiwari-34aa63152
- Topmate: topmate.io/adarshktiwari
- Location: Bangalore, India
- Available for remote and hybrid engagements worldwide

ENGAGEMENT MODEL:
Adarsh works as an independent consultant. Typical engagements include:
- Short-term advisory (1-4 weeks)
- Project-based consulting (1-6 months)
- Fractional/part-time product leadership
- He is also open to full-time senior product roles at leading tech companies

RULES FOR RESPONSES:
1. Keep answers concise (2-4 sentences for simple questions, more for detailed ones)
2. Always ground answers in real experience and metrics from the profile above
3. If asked about pricing, say engagement terms are discussed during the initial consultation call
4. If asked about availability, say he is currently available for new engagements
5. For questions outside his expertise, be honest and suggest contacting him directly
6. Format responses with markdown for readability (bold, bullet points) when helpful
7. End with a soft CTA when appropriate (e.g., "You can book a free call to discuss further")`;

let chatHistory = [];
let isOpen = false;
let isTyping = false;

function initChat() {
    const trigger = document.getElementById('chatTrigger');
    const panel = document.getElementById('chatPanel');
    const close = document.getElementById('chatClose');
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    const suggestions = document.querySelectorAll('.chat-suggestion');

    trigger.addEventListener('click', toggleChat);
    close.addEventListener('click', toggleChat);

    panel.addEventListener('click', (e) => {
        if (e.target === panel) toggleChat();
    });

    sendBtn.addEventListener('click', sendMessage);

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });

    suggestions.forEach(btn => {
        btn.addEventListener('click', () => {
            input.value = btn.textContent;
            sendMessage();
        });
    });
}

function toggleChat() {
    const panel = document.getElementById('chatPanel');
    const trigger = document.getElementById('chatTrigger');
    const floatingBtn = document.querySelector('.floating-consultation');
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    trigger.classList.toggle('hidden', isOpen);
    if (floatingBtn) floatingBtn.style.display = isOpen ? 'none' : '';
    if (isOpen) {
        document.getElementById('chatInput').focus();
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text || isTyping) return;

    input.value = '';
    input.style.height = 'auto';

    appendMessage('user', text);
    hideSuggestions();

    chatHistory.push({ role: 'user', parts: [{ text }] });

    isTyping = true;
    const typingEl = showTypingIndicator();

    try {
        const response = await callGemini(text);
        removeTypingIndicator(typingEl);
        appendMessage('assistant', response);
        chatHistory.push({ role: 'model', parts: [{ text: response }] });
    } catch (err) {
        removeTypingIndicator(typingEl);
        appendMessage('assistant', 'Sorry, I couldn\'t process that right now. Please try again or reach out directly at **consult@adarshktiwari.co.in**.');
    }

    isTyping = false;
}

async function callGemini(userMessage) {
    const body = {
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: chatHistory,
        generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 800
        }
    };

    const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const errText = await res.text();
        console.error('Gemini API error:', res.status, errText);
        throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'I couldn\'t generate a response. Please try again.';
}

function appendMessage(role, text) {
    const container = document.getElementById('chatMessages');
    const msg = document.createElement('div');
    msg.className = `chat-msg chat-msg-${role}`;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = formatMarkdown(text);

    msg.appendChild(bubble);
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function formatMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^- (.*)/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n/g, '<br>');
}

function showTypingIndicator() {
    const container = document.getElementById('chatMessages');
    const el = document.createElement('div');
    el.className = 'chat-msg chat-msg-assistant';
    el.innerHTML = `<div class="chat-bubble chat-typing">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
    </div>`;
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;
    return el;
}

function removeTypingIndicator(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
}

function hideSuggestions() {
    const el = document.getElementById('chatSuggestions');
    if (el) el.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', initChat);
