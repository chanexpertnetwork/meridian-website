// Meridian Expert Network - Main JavaScript with i18n Support

// Translations
const translations = {
    en: {
        pageTitle: "Meridian Expert Network | Access Industry Experts On Demand",
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navClients: "For Clients",
        navExperts: "Join as Expert",
        navContact: "Contact",
        navCta: "Request an Expert",
        heroTitle: "Access Industry Experts<br>On Demand",
        heroSubtitle: "Connect with verified industry professionals for critical insights that drive investment decisions, strategic planning, and competitive advantage. Trusted by leading investment firms and corporations worldwide.",
        heroCtaPrimary: "Request an Expert",
        heroCtaSecondary: "Become an Expert",
        statExperts: "Expert Network",
        statConsultations: "Industries Covered",
        statSatisfaction: "Response Time",
        sectionIndustries: "Industries",
        industriesTitle: "Expertise Across Key Sectors",
        industryAI: "Artificial Intelligence",
        industryAIDesc: "Machine learning engineers, AI researchers, and tech executives",
        industrySemiconductors: "Semiconductors",
        industrySemiconductorsDesc: "Chip designers, fab operators, and supply chain specialists",
        industryEV: "Electric Vehicles",
        industryEVDesc: "Battery technologists, OEM executives, and charging infrastructure experts",
        industryConsumer: "Consumer & Retail",
        industryConsumerDesc: "Brand managers, retail operators, and consumer behavior analysts",
        industryHealthcare: "Healthcare",
        industryHealthcareDesc: "Physicians, pharma executives, and regulatory specialists",
        industryFinancial: "Financial Services",
        industryFinancialDesc: "Investment bankers, asset managers, and fintech leaders",
        industryEnergy: "Energy & Infrastructure",
        industryEnergyDesc: "Energy executives, utility operators, and ESG specialists",
        industryMore: "More Industries",
        industryMoreDesc: "Access experts across 150+ sectors and geographies",
        sectionProcess: "Process",
        howItWorksTitle: "How Meridian Works",
        step1Title: "Submit Request",
        step1Desc: "Share your research objectives and ideal expert profile with our team",
        step2Title: "Expert Matching",
        step2Desc: "We identify and vet qualified experts from our global network within 24 hours",
        step3Title: "Connect & Learn",
        step3Desc: "Schedule consultations at your convenience and gain actionable insights",
        sectionAbout: "About Us",
        aboutTitle: "Connecting Global Decision-Makers with Wisdom",
        aboutDesc1: "Meridian — just as lines of longitude connect the Earth's poles, we connect experts with decision-makers worldwide. Each meridian is unique, just as every expert brings distinctive industry insights.",
        aboutDesc2: "We believe the most valuable insights come from firsthand experience. Here, knowledge is more than information—it's a valuable asset that can be monetized. We build not just a consulting platform, but a global network of wisdom.",
        valueIntegrity: "Integrity",
        valuePrecision: "Precision",
        valuePartnership: "Partnership",
        aboutImageText: "Strategic Advisory",
        sectionServices: "Services",
        servicesTitle: "Tailored Solutions",
        badgePopular: "Most Popular",
        serviceCallsTitle: "Expert Calls",
        serviceCallsDesc: "One-on-one consultations with industry experts for deep-dive insights on market trends, competitive dynamics, and strategic opportunities.",
        serviceCallsFeature1: "60-90 minute consultations",
        serviceCallsFeature2: "Custom expert recruitment",
        serviceCallsFeature3: "Compliance-checked engagements",
        serviceCallsFeature4: "Call recording & transcripts",
        serviceSurveysTitle: "Expert Surveys",
        serviceSurveysDesc: "Quantitative research with targeted professional panels for market sizing, sentiment analysis, and trend validation.",
        serviceSurveysFeature1: "Custom survey design",
        serviceSurveysFeature2: "Targeted respondent panels",
        serviceSurveysFeature3: "Statistical analysis",
        serviceSurveysFeature4: "Visual reporting",
        serviceAdvisoryTitle: "Long-term Advisory",
        serviceAdvisoryDesc: "Ongoing advisory relationships with senior executives for sustained strategic guidance and board-level consulting.",
        serviceAdvisoryFeature1: "Multi-month engagements",
        serviceAdvisoryFeature2: "Dedicated advisor relationships",
        serviceAdvisoryFeature3: "Regular check-ins",
        serviceAdvisoryFeature4: "Strategic planning support",
        sectionClients: "For Clients",
        clientsTitle: "Accelerate Your Research with Expert Insights",
        clientsDesc: "Whether you're evaluating an investment opportunity, entering a new market, or validating a strategic hypothesis, our expert network provides the firsthand intelligence you need to make confident decisions.",
        clientStep1Title: "Submit Request",
        clientStep1Desc: "Tell us about your research objectives, target profile, and timeline",
        clientStep2Title: "Expert Matching",
        clientStep2Desc: "Our team identifies and vets qualified experts within 24 hours",
        clientStep3Title: "Consultation Call",
        clientStep3Desc: "Connect with experts and gain actionable insights for your decision",
        clientsCta: "Request an Expert",
        trustedBy: "Trusted By",
        clientInvestment: "Investment Firms",
        clientInvestmentDesc: "Private equity, hedge funds, and venture capital",
        clientConsulting: "Consulting Firms",
        clientConsultingDesc: "Strategy consultants and market researchers",
        clientCorporations: "Corporations",
        clientCorporationsDesc: "Fortune 500 companies and growth enterprises",
        sectionExperts: "For Experts",
        expertsTitle: "Share Your Expertise, Shape Decisions",
        expertsDesc: "Join Meridian and turn your knowledge into value. Just as the meridian connects all lines of longitude across the globe, we connect experts with decision-makers worldwide. Wherever you are, your professional expertise can find clients who need it—transforming insights into income.",
        benefitCompensationTitle: "Competitive Compensation",
        benefitCompensationDesc: "Earn $200-$1,000+ per hour of consultation",
        benefitScheduleTitle: "Flexible Schedule",
        benefitScheduleDesc: "Accept only the opportunities that fit your calendar",
        benefitComplianceTitle: "Full Compliance",
        benefitComplianceDesc: "We handle all compliance checks and confidentiality agreements",
        benefitGlobalTitle: "Global Reach",
        benefitGlobalDesc: "Connect with clients worldwide from anywhere",
        expertsCta: "Apply as Expert",
        expertStatRate: "Hourly Rate Range",
        expertStatExperts: "Expert Network",
        expertStatPayment: "Fast Payment",
        sectionContact: "Contact",
        contactTitle: "Get In Touch",
        contactDesc: "Ready to accelerate your research or join our expert network? Fill out the form and our team will respond within 24 hours.",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactWeChat: "WeChat",
        contactWeChatQR: "WeChat QR Code",
        qrComingSoon: "QR code coming soon",
        contactHQ: "Headquarters",
        contactLocations: "New York, NY | London | Singapore",
        formName: "Full Name *",
        formCompany: "Company *",
        formEmail: "Email Address *",
        formInterest: "I am interested in *",
        formSelectOption: "Select an option",
        formOptionRequest: "Requesting an Expert",
        formOptionJoin: "Joining as an Expert",
        formOptionPartnership: "Partnership Opportunity",
        formOptionOther: "Other",
        formTopic: "Research Topic / Area of Expertise",
        formIndustry: "Industry",
        formSelectIndustry: "Select industry",
        formIndustryAI: "Artificial Intelligence",
        formIndustrySemiconductors: "Semiconductors",
        formIndustryEV: "Electric Vehicles",
        formIndustryConsumer: "Consumer & Retail",
        formIndustryHealthcare: "Healthcare",
        formIndustryFinancial: "Financial Services",
        formIndustryEnergy: "Energy & Infrastructure",
        formIndustryOther: "Other",
        formTimeline: "Timeline",
        formSelectTimeline: "Select timeline",
        formTimelineUrgent: "Urgent (24-48 hours)",
        formTimeline1Week: "Within 1 week",
        formTimeline2Weeks: "1-2 weeks",
        formTimelineFlexible: "Flexible",
        formMessage: "Additional Details",
        formSubmit: "Submit Request",
        footerTagline: "Precision Insights. Decisive Advantage.",
        footerCompany: "Company",
        footerAbout: "About Us",
        footerCareers: "Careers",
        footerPress: "Press",
        footerContact: "Contact",
        footerServices: "Services",
        footerExpertCalls: "Expert Calls",
        footerExpertSurveys: "Expert Surveys",
        footerAdvisory: "Advisory",
        footerEnterprise: "Enterprise",
        footerResources: "Resources",
        footerCompliance: "Compliance",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerFAQs: "FAQs",
        footerCookies: "Cookie Policy"
    },
    zh: {
        pageTitle: "Meridian 专家网络 | 按需获取行业专家",
        navHome: "首页",
        navAbout: "关于我们",
        navServices: "服务",
        navClients: "客户",
        navExperts: "成为专家",
        navContact: "联系我们",
        navCta: "预约专家",
        heroTitle: "按需连接<br>行业专家",
        heroSubtitle: "与经过验证的行业专业人士建立联系，获取推动投资决策、战略规划和竞争优势的关键洞察。深受全球领先投资机构和企业的信赖。",
        heroCtaPrimary: "预约专家",
        heroCtaSecondary: "成为专家",
        statExperts: "专家网络持续拓展",
        statConsultations: "覆盖行业领域",
        statSatisfaction: "小时内响应",
        sectionIndustries: "行业领域",
        industriesTitle: "覆盖核心行业领域",
        industryAI: "人工智能",
        industryAIDesc: "机器学习工程师、AI研究员和技术高管",
        industrySemiconductors: "半导体",
        industrySemiconductorsDesc: "芯片设计师、晶圆厂运营专家和供应链专家",
        industryEV: "电动汽车",
        industryEVDesc: "电池技术专家、整车厂高管和充电基础设施专家",
        industryConsumer: "消费与零售",
        industryConsumerDesc: "品牌经理、零售运营商和消费者行为分析师",
        industryHealthcare: "医疗健康",
        industryHealthcareDesc: "医生、制药企业高管和监管专家",
        industryFinancial: "金融服务",
        industryFinancialDesc: "投资银行家、资产管理者和金融科技领袖",
        industryEnergy: "能源与基础设施",
        industryEnergyDesc: "能源高管、公用事业运营商和ESG专家",
        industryMore: "更多行业",
        industryMoreDesc: "覆盖150+行业和地区的专家资源",
        sectionProcess: "服务流程",
        howItWorksTitle: "Meridian 如何运作",
        step1Title: "提交需求",
        step1Desc: "与我们的团队分享您的研究目标和理想专家画像",
        step2Title: "专家匹配",
        step2Desc: "我们在24小时内从全球网络中识别并审核合格专家",
        step3Title: "深度对话",
        step3Desc: "在AI和数据泛滥的时代，千篇一律的生成式报告已无法支撑关键决策。与真正的一线专家对话，获取无法被算法复制的实战洞察——这些来自亲身经历的经验，才是您在竞争中脱颖而出的核心优势。",
        sectionAbout: "关于我们",
        aboutTitle: "连接全球决策者与智慧",
        aboutDesc1: "Meridian（子午线）—— 正如地球上的经线连接南北两极，我们致力于连接全球的专家与决策者。每一条子午线都是独特的，就像每一位专家都有其独特的行业洞察。",
        aboutDesc2: "我们相信最有价值的洞察来自第一手经验。在这里，知识不只是信息，更是可以变现的宝贵资产。我们搭建的不仅是咨询平台，更是连接全球智慧的网络。",
        valueIntegrity: "诚信",
        valuePrecision: "精准",
        valuePartnership: "合作",
        aboutImageText: "战略咨询",
        sectionServices: "服务",
        servicesTitle: "量身定制解决方案",
        badgePopular: "最受欢迎",
        serviceCallsTitle: "专家电话",
        serviceCallsDesc: "与行业专家进行一对一咨询，深入洞察市场趋势、竞争动态和战略机会。",
        serviceCallsFeature1: "60-90分钟咨询",
        serviceCallsFeature2: "定制专家招募",
        serviceCallsFeature3: "合规审查",
        serviceCallsFeature4: "通话录音和转录",
        serviceSurveysTitle: "专家调研",
        serviceSurveysDesc: "通过目标专业小组进行定量研究，用于市场规模、情绪分析和趋势验证。",
        serviceSurveysFeature1: "定制问卷设计",
        serviceSurveysFeature2: "目标受访者小组",
        serviceSurveysFeature3: "统计分析",
        serviceSurveysFeature4: "可视化报告",
        serviceAdvisoryTitle: "长期顾问",
        serviceAdvisoryDesc: "与高管建立持续的顾问关系，提供持续的战略指导和董事会级咨询。",
        serviceAdvisoryFeature1: "多月期合作",
        serviceAdvisoryFeature2: "专属顾问关系",
        serviceAdvisoryFeature3: "定期沟通",
        serviceAdvisoryFeature4: "战略规划支持",
        sectionClients: "客户",
        clientsTitle: "通过专家洞察加速您的研究",
        clientsDesc: "无论您是在评估投资机会、进入新市场，还是验证战略假设，我们的专家网络都能提供您做出自信决策所需的第一手情报。",
        clientStep1Title: "提交需求",
        clientStep1Desc: "告诉我们您的研究目标、目标画像和时间表",
        clientStep2Title: "专家匹配",
        clientStep2Desc: "我们的团队在24小时内识别并审核合格专家",
        clientStep3Title: "咨询电话",
        clientStep3Desc: "与专家连接，获取决策的可执行洞察",
        clientsCta: "预约专家",
        trustedBy: "信赖我们的客户",
        clientInvestment: "投资机构",
        clientInvestmentDesc: "私募股权、对冲基金和风险投资",
        clientConsulting: "咨询公司",
        clientConsultingDesc: "战略咨询和市场研究",
        clientCorporations: "企业",
        clientCorporationsDesc: "财富500强公司和成长型企业",
        sectionExperts: "成为专家",
        expertsTitle: "分享您的专业知识，影响决策",
        expertsDesc: "加入Meridian，让知识创造价值。子午线连接地球上所有的经线，正如我们连接全球的专家与决策者。无论您身处何地，您的专业经验都能在这里找到需要它的客户，实现知识变现。"
,        benefitCompensationTitle: "有竞争力的报酬",
        benefitCompensationDesc: "每小时咨询可获得200-1000美元以上",
        benefitScheduleTitle: "灵活的时间安排",
        benefitScheduleDesc: "只接受符合您日程的机会",
        benefitComplianceTitle: "完整合规支持",
        benefitComplianceDesc: "我们处理所有合规审查和保密协议",
        benefitGlobalTitle: "全球覆盖",
        benefitGlobalDesc: "从任何地方与全球客户连接",
        expertsCta: "申请成为专家",
        expertStatRate: "时薪范围",
        expertStatExperts: "全球专家网络",
        expertStatPayment: "快速结算",
        sectionContact: "联系我们",
        contactTitle: "与我们联系",
        contactDesc: "准备好加速您的研究或加入我们的专家网络？填写表单，我们的团队将在24小时内回复。",
        contactEmail: "邮箱",
        contactPhone: "电话",
        contactWeChat: "微信",
        contactWeChatQR: "微信二维码",
        qrComingSoon: "二维码即将添加",
        contactHQ: "总部",
        contactLocations: "中国深圳",
        formName: "姓名 *",
        formCompany: "公司 *",
        formEmail: "邮箱地址 *",
        formInterest: "我感兴趣的是 *",
        formSelectOption: "选择选项",
        formOptionRequest: "预约专家",
        formOptionJoin: "成为专家",
        formOptionPartnership: "合作机会",
        formOptionOther: "其他",
        formTopic: "研究主题 / 专业领域",
        formIndustry: "行业",
        formSelectIndustry: "选择行业",
        formIndustryAI: "人工智能",
        formIndustrySemiconductors: "半导体",
        formIndustryEV: "电动汽车",
        formIndustryConsumer: "消费与零售",
        formIndustryHealthcare: "医疗健康",
        formIndustryFinancial: "金融服务",
        formIndustryEnergy: "能源与基础设施",
        formIndustryOther: "其他",
        formTimeline: "时间要求",
        formSelectTimeline: "选择时间",
        formTimelineUrgent: "紧急 (24-48小时)",
        formTimeline1Week: "一周内",
        formTimeline2Weeks: "1-2周",
        formTimelineFlexible: "灵活",
        formMessage: "补充说明",
        formSubmit: "提交请求",
        footerTagline: "精准洞察。决胜优势。",
        footerCompany: "公司",
        footerAbout: "关于我们",
        footerCareers: "加入我们",
        footerPress: "新闻",
        footerContact: "联系我们",
        footerServices: "服务",
        footerExpertCalls: "专家电话",
        footerExpertSurveys: "专家调研",
        footerAdvisory: "顾问服务",
        footerEnterprise: "企业服务",
        footerResources: "资源",
        footerCompliance: "合规",
        footerPrivacy: "隐私政策",
        footerTerms: "服务条款",
        footerFAQs: "常见问题",
        footerCookies: "Cookie政策"
    }
};

// Current language
let currentLang = 'en';

// Language Switcher Functionality
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update select options
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            navCta.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            navCta.classList.remove('active');
        });
    });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Form Handling
function initFormHandling() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            const successMessage = currentLang === 'zh' 
                ? '感谢您的提交！我们的团队将在24小时内与您联系。'
                : 'Thank you for your submission! Our team will contact you within 24 hours.';
            
            alert(successMessage);
            
            // Reset form
            form.reset();
        });
    }
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.industry-card, .process-step, .service-card, .client-step, .benefit, .expert-stat-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Add WeChat QR Code
function addWeChatQRCode(imageData) {
    const qrContainer = document.getElementById('wechat-qr-code');
    if (qrContainer && imageData) {
        qrContainer.innerHTML = `<img src="${imageData}" alt="WeChat QR Code" class="qr-image">`;
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initFormHandling();
    initScrollAnimations();
});

// Export functions for external use
window.Meridian = {
    addWeChatQRCode,
    switchLanguage
};
