---
layout: home
title: Home - MRP Associates | Trusted Financial Advisory, Insurance & Wealth Planning
markdownStyles: false
---

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Events & Achievements Full-Width Slider (Authentic Accolades)
const currentSlide = ref(0)
const isSliderPaused = ref(false)

const eventSlides = [
  {
    title: 'LIC Corporate Club Member & Court of the Table (COT)',
    desc: 'Conferred with LIC of India\'s pinnacle Corporate Club Membership and MDRT (USA) Court of the Table (COT) for achieving 3x international financial advisory standards.',
    tag: 'Pinnacle Achievement',
    tagIcon: 'fa-crown',
    dateLoc: 'Corporate Club • 3-Yr MDRT COT (USA)',
    image: '/images/awards/presidents-club-stage-award.jpg',
    link: '/events/corporate-club-mdrt',
    btnText: 'Read Corporate Club Story'
  },
  {
    title: '17 Consecutive Years as MDRT (USA) Global Qualifier',
    desc: 'Honored continuously from 2007 to present by the Premier Association of Financial Professionals, USA for world-class client advisory excellence.',
    tag: 'Global Standard',
    tagIcon: 'fa-globe',
    dateLoc: '2007 – Present • MDRT USA',
    image: '/images/events/mdrt-karur-unit2-felicitation.jpg',
    link: '/events/17-years-mdrt-qualifier',
    btnText: 'View 17-Year Journey'
  },
  {
    title: 'Thanjavur Division & Karur II Branch Leading Advisor',
    desc: 'Consecutively awarded Leading Advisor at Karur II Branch since 2010 and Thanjavur Division Leading Advisor from 2020 to present, alongside Crorepati Agent honors.',
    tag: 'Division Leader',
    tagIcon: 'fa-trophy',
    dateLoc: 'Thanjavur Division & Karur II Branch',
    image: '/images/awards/lic-toppers-meet-zonal-manager-2025.jpg',
    link: '/events/thanjavur-division-karur-leading-advisor',
    btnText: 'Explore Division Accolades'
  },
  {
    title: 'Star Health Executive Director (ED) Club Qualifier',
    desc: 'Felicitated at Star Health Insurance Club Convention for exceptional client healthcare protection, achieving ED Club distinction with over ₹53 Lakhs premium.',
    tag: 'Health Specialist',
    tagIcon: 'fa-heart-pulse',
    dateLoc: 'Star Health Club Convention • Karur Branch',
    image: '/images/awards/star-health-ed-club-award-2020.jpg',
    link: '/health-insurance',
    btnText: 'Explore Health Insurance'
  },
  {
    title: 'Historic Bima Gramam 2003: Elavanur Drinking Water Initiative',
    desc: 'Secured 100 life policies in Elavanur village to obtain special LIC village development funds, establishing drinking water infrastructure to save the community during severe drought.',
    tag: 'Social Impact Landmark',
    tagIcon: 'fa-hand-holding-droplet',
    dateLoc: 'Elavanur Village • Karur District',
    image: '/images/events/milestone-terrace-celebration.jpg',
    link: '/events/bima-gramam-elavanur',
    btnText: 'Read Historic Village Story'
  }
]

let sliderInterval = null

const nextEventSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % eventSlides.length
}

const prevEventSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + eventSlides.length) % eventSlides.length
}

const setSlide = (index) => {
  currentSlide.value = index
}

const pauseSlider = () => {
  isSliderPaused.value = true
}

const resumeSlider = () => {
  isSliderPaused.value = false
}

onMounted(() => {
  sliderInterval = setInterval(() => {
    if (!isSliderPaused.value) {
      nextEventSlide()
    }
  }, 5000)
})

onUnmounted(() => {
  if (sliderInterval) clearInterval(sliderInterval)
})

// Quick SIP Interactive Simulator on Hero
const quickSipAmount = ref(10000)
const quickSipYears = ref(15)
const quickSipRate = ref(12)

const quickInvested = computed(() => {
  return Number(quickSipAmount.value) * Number(quickSipYears.value) * 12
})

const quickMaturity = computed(() => {
  const P = Number(quickSipAmount.value)
  const r = Number(quickSipRate.value) / 100 / 12
  const n = Number(quickSipYears.value) * 12
  const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  return Math.round(FV)
})

const quickGain = computed(() => {
  return quickMaturity.value - quickInvested.value
})

const formatCurrency = (val) => {
  if (val >= 10000000) {
    return '₹' + (val / 10000000).toFixed(2) + ' Cr'
  } else if (val >= 100000) {
    return '₹' + (val / 100000).toFixed(2) + ' Lakhs'
  }
  return '₹' + Number(val).toLocaleString('en-IN')
}
</script>

<div class="home-page-container">

<!-- Main Full-Width Events & Achievements Slider -->
<div 
class="events-hero-slider"
@mouseenter="pauseSlider"
@mouseleave="resumeSlider"
>
<div 
class="events-slides-track" 
:style="{ transform: `translateX(-${currentSlide * 100}%)` }"
>
<a 
v-for="(slide, index) in eventSlides" 
:key="index"
:href="slide.link"
class="event-slide-item"
>
<div 
class="event-slide-bg" 
:style="{ backgroundImage: `url(${slide.image})` }"
></div>
<div class="event-slide-overlay"></div>
<div class="event-slide-inner">
<div class="event-slide-content">
<div class="event-slide-badge-row">
<span class="event-badge-tag">
<i :class="['fas', slide.tagIcon]"></i> {{ slide.tag }}
</span>
<span class="event-date-location">
<i class="far fa-calendar-alt"></i> {{ slide.dateLoc }}
</span>
</div>
<h2 class="event-slide-title">{{ slide.title }}</h2>
<p class="event-slide-desc">{{ slide.desc }}</p>
<span class="event-slide-btn">
{{ slide.btnText }} <i class="fas fa-arrow-right"></i>
</span>
</div>
</div>
</a>
</div>

<!-- Prev / Next Slider Controls -->
<div 
class="slider-arrow-btn prev-btn" 
@click.stop="prevEventSlide"
role="button"
tabindex="0"
aria-label="Previous Slide"
>
<i class="fas fa-chevron-left"></i>
</div>
<div 
class="slider-arrow-btn next-btn" 
@click.stop="nextEventSlide"
role="button"
tabindex="0"
aria-label="Next Slide"
>
<i class="fas fa-chevron-right"></i>
</div>

<!-- Slide Indicator Dots -->
<div class="slider-dot-indicators">
<span 
v-for="(slide, idx) in eventSlides"
:key="idx"
class="slider-dot-item"
:class="{ active: currentSlide === idx }"
@click.stop="setSlide(idx)"
role="button"
tabindex="0"
:aria-label="`Go to slide ${idx + 1}`"
></span>
</div>
</div>

<!-- Hero Section with Value Prop & SIP Simulator -->
<section class="hero-container">
<div class="hero-wrapper">
<!-- Left Column: Value Proposition -->
<div class="hero-content">
<div class="hero-pill">
<i class="fas fa-certificate star-icon"></i>
<span>IRDA Certified &amp; AMFI Registered Advisory</span>
</div>

<h1>
Empowering Your Financial Future with <span class="gradient-text">22+ Years of Trusted</span> Service
</h1>

<p class="hero-subtitle">
Proudly serving over 2,500 valued families and business owners across Tamil Nadu with LIC Corporate Club distinction, MDRT (USA) Court of the Table recognition, top-tier health coverage, and lowest-cost loans.
</p>

<div class="hero-actions">
<a href="/contact" class="btn-primary">
<i class="fas fa-handshake"></i>
<span>Get Free Consultation</span>
</a>
<a href="/calculators/sip-calculator" class="btn-secondary">
<i class="fas fa-calculator"></i>
<span>Try Calculators</span>
</a>
<a href="tel:+919443339889" class="btn-secondary" title="Call directly">
<i class="fas fa-phone-alt"></i>
<span>+91 94433 39889</span>
</a>
</div>

<!-- Trust Indicators Bar -->
<div class="hero-trust-row">
<div class="trust-metric-item">
<span class="metric-val">22+</span>
<span class="metric-lbl">Years in People's Service</span>
</div>
<div class="trust-metric-item">
<span class="metric-val">2,500+</span>
<span class="metric-lbl">Active Clients Served</span>
</div>
<div class="trust-metric-item">
<span class="metric-val">17 Yrs</span>
<span class="metric-lbl">MDRT (USA) Qualifier</span>
</div>
<div class="trust-metric-item">
<span class="metric-val">Apex</span>
<span class="metric-lbl">LIC Corporate Club</span>
</div>
</div>
</div>

<!-- Right Column: Live Interactive SIP Simulator Card -->
<div class="hero-interactive-card">
<div class="hero-calc-header">
<h3><i class="fas fa-chart-line text-blue"></i> SIP Wealth Simulator</h3>
<span class="calc-badge">Live Calculator</span>
</div>

<div class="quick-calc-group">
<div class="calc-label-row">
<span>Monthly SIP Amount</span>
<span class="calc-value-highlight">₹{{ Number(quickSipAmount).toLocaleString('en-IN') }}</span>
</div>
<input type="range" v-model="quickSipAmount" min="1000" max="100000" step="1000">
</div>

<div class="quick-calc-group">
<div class="calc-label-row">
<span>Investment Horizon</span>
<span class="calc-value-highlight">{{ quickSipYears }} Years</span>
</div>
<input type="range" v-model="quickSipYears" min="3" max="30" step="1">
</div>

<div class="quick-calc-group">
<div class="calc-label-row">
<span>Expected Annual Return</span>
<span class="calc-value-highlight">{{ quickSipRate }}% p.a.</span>
</div>
<input type="range" v-model="quickSipRate" min="8" max="18" step="0.5">
</div>

<!-- Live Computed Output -->
<div class="quick-calc-result-box">
<div>
<div class="calc-res-lbl">Total Estimated Wealth</div>
<div class="calc-res-num">{{ formatCurrency(quickMaturity) }}</div>
</div>
<div style="text-align: right;">
<div class="calc-res-lbl">Invested: {{ formatCurrency(quickInvested) }}</div>
<div class="calc-res-lbl" style="color: #10b981; font-weight: 700;">Gain: +{{ formatCurrency(quickGain) }}</div>
</div>
</div>

<a href="/calculators/sip-calculator" class="quick-calc-cta">
Full Detailed Calculator &amp; Planning →
</a>
</div>
</div>
</section>

<!-- Official Vision & Mission Banner -->
<section class="vision-mission-section">
<div class="vm-grid">
<div class="vm-card vision">
<div class="vm-badge"><i class="fas fa-eye"></i> VISION - எங்கள் நோக்கம்</div>
<h3>To ENRICH All People to be Financially Wealthy and Secured in Financial Aspects on Coming Days</h3>
<p class="vm-tamil">"வரவிருக்கும் ஆண்டுகளில், அனைத்து மக்களையும் நிதி சார்ந்து செல்வந்தர்களாகவும், நிதி அம்சங்களில் பாதுகாப்பாகவும் வளப்படுத்துதல்"</p>
</div>

<div class="vm-card mission">
<div class="vm-badge"><i class="fas fa-bullseye"></i> MISSION - எங்கள் பணி</div>
<h3>To Provide Friendly Financial Solutions and Financial Services to All</h3>
<p class="vm-tamil">"அனைவருக்கும் நட்புடன் கூடிய நிதி தீர்வுகள் மற்றும் நிதி சேவைகளை வழங்குதல்"</p>
</div>
</div>
</section>

<!-- Founder & Advisory Leadership Spotlight -->
<section class="section" style="padding-top: 20px; padding-bottom: 20px;">
  <div class="founder-spotlight-card">
    <div class="founder-photo-col">
      <img src="/images/office/mr-pr-prabhakaran-portrait.jpg" alt="Mr. PR. Prabhakaran - Founder & Chief Financial Advisor" />
      <span class="founder-badge-overlay"><i class="fas fa-crown"></i> 22+ Yrs Service</span>
    </div>
    <div class="founder-info-col">
      <span class="founder-role">Founder &amp; Chief Financial Advisor</span>
      <h3>Mr. PR. Prabhakaran, <span style="font-size: 1.2rem; color: #2563eb; font-weight: 700;">FChFP</span></h3>
      <div class="founder-designations">
        <span class="desig-pill"><i class="fas fa-graduation-cap"></i> FChFP Chartered Practitioner</span>
        <span class="desig-pill"><i class="fas fa-globe"></i> 17-Yr MDRT (USA) Qualifier</span>
        <span class="desig-pill"><i class="fas fa-crown"></i> LIC Corporate Club</span>
        <span class="desig-pill"><i class="fas fa-heart-pulse"></i> Star Health ED Club</span>
      </div>
      <p>
        "For over two decades in Karur and across Tamil Nadu, our sacred mission has been simple: to guide families toward genuine financial security, protect their health against unexpected burdens, and compound wealth across generations with unshakeable fiduciary ethics."
      </p>
      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="/about" class="btn-primary" style="padding: 10px 22px; font-size: 13.5px;">
          <span>Founder Bio &amp; Credentials</span> <i class="fas fa-arrow-right"></i>
        </a>
        <a href="/events" class="btn-secondary" style="padding: 10px 22px; font-size: 13.5px;">
          <i class="fas fa-trophy"></i> <span>View Milestones &amp; Gallery</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Authorised Agent Partner Institutions Board -->
<section class="section">
<div class="section-title">
<span class="pill-badge">Official Authorised Agent</span>
<h2>Authorised by India's Leading Financial Institutions</h2>
<p>Direct institutional agency representing top life, health, banking, and asset management corporations.</p>
</div>

<div class="authorised-board-grid">
<!-- Category 1: Life Insurance -->
<div class="auth-category-card">
<div class="auth-cat-header" style="color: #2563eb;">
<i class="fas fa-shield-heart"></i>
<h4>Life Insurance</h4>
</div>
<div class="auth-brands-list">
<span class="auth-brand-pill" style="border-color: #2563eb; color: #1d4ed8; background: rgba(37,99,235,0.06);">
<i class="fas fa-certificate"></i> LIC of India
</span>
</div>
<p style="font-size: 12.5px; color: #64748b; margin-top: 14px; line-height: 1.5;">
Corporate Club Member &amp; Galaxy Club Agency. Over 22 years of continuous policy servicing.
</p>
</div>

<!-- Category 2: Health Insurance -->
<div class="auth-category-card">
<div class="auth-cat-header" style="color: #10b981;">
<i class="fas fa-hospital-user"></i>
<h4>Health Insurance</h4>
</div>
<div class="auth-brands-list">
<span class="auth-brand-pill"><i class="fas fa-star text-gold"></i> Star Health (Specialist)</span>
<span class="auth-brand-pill">The New India Assurance</span>
<span class="auth-brand-pill">Aditya Birla Capital</span>
<span class="auth-brand-pill">Galaxy Health Insurance</span>
<span class="auth-brand-pill">Bajaj Allianz</span>
</div>
</div>

<!-- Category 3: Home Loans & Mortgage -->
<div class="auth-category-card">
<div class="auth-cat-header" style="color: #f59e0b;">
<i class="fas fa-house-chimney"></i>
<h4>Home Loans</h4>
</div>
<div class="auth-brands-list">
<span class="auth-brand-pill">LIC HFL</span>
<span class="auth-brand-pill">SBI Home Loans</span>
<span class="auth-brand-pill">Indian Bank</span>
<span class="auth-brand-pill">Canara Bank</span>
<span class="auth-brand-pill">Federal Bank</span>
<span class="auth-brand-pill">Can Fin Homes</span>
<span class="auth-brand-pill">Repco Home Finance</span>
<span class="auth-brand-pill">Equitas Bank</span>
<span class="auth-brand-pill">Tata Capital</span>
<span class="auth-brand-pill">HDB Financial</span>
</div>
</div>

<!-- Category 4: Mutual Funds -->
<div class="auth-category-card">
<div class="auth-cat-header" style="color: #8b5cf6;">
<i class="fas fa-chart-line"></i>
<h4>Mutual Funds</h4>
</div>
<div class="auth-brands-list">
<span class="auth-brand-pill">LIC Mutual Fund</span>
<span class="auth-brand-pill">HDFC Mutual Fund</span>
<span class="auth-brand-pill">SBI Mutual Fund</span>
<span class="auth-brand-pill">ICICI Prudential</span>
<span class="auth-brand-pill">Nippon India MF</span>
<span class="auth-brand-pill">UTI Mutual Fund</span>
<span class="auth-brand-pill">Axis Mutual Fund</span>
<span class="auth-brand-pill">Bandhan Mutual Fund</span>
<span class="auth-brand-pill">Canara Robeco</span>
<span class="auth-brand-pill">Aditya Birla MF</span>
<span class="auth-brand-pill">Mahindra Manulife</span>
<span class="auth-brand-pill">SAMCO MF</span>
</div>
</div>
</div>
</section>

<!-- Specialist In Section (10 Domains from Signboard) -->
<section class="section" style="padding-top: 0;">
<div class="section-title">
<span class="pill-badge">Specialist In • எங்கள் சிறப்பு சேவைகள்</span>
<h2>Tailored Solutions for Every Life Milestone</h2>
<p>Specialized advisory designed to safeguard families, fund children's futures, and multiply wealth.</p>
</div>

<div class="specialists-grid">
<!-- 1. Children Education & Marriage -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(37,99,235,0.1); color: #2563eb;">
<i class="fas fa-graduation-cap"></i>
</div>
<h4>Children's Education &amp; Marriage</h4>
<span class="spec-tamil">குழந்தைகளின் மேற்படிப்பு &amp; திருமண திட்டங்கள்</span>
</div>

<!-- 2. Old Age Pension -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(245,158,11,0.1); color: #d97706;">
<i class="fas fa-umbrella-beach"></i>
</div>
<h4>Old Age Pension Schemes</h4>
<span class="spec-tamil">நிம்மதியான ஓய்வூதிய திட்டங்கள்</span>
</div>

<!-- 3. Wealth Creations -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(16,185,129,0.1); color: #10b981;">
<i class="fas fa-seedling"></i>
</div>
<h4>Wealth Creations</h4>
<span class="spec-tamil">சொத்து சேர்க்கைக்கான வழிகள்</span>
</div>

<!-- 4. Star Health Insurance Policy -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(239,68,68,0.1); color: #ef4444;">
<i class="fas fa-hospital-user"></i>
</div>
<h4>Star Health Insurance Policy</h4>
<span class="spec-tamil">மருத்துவ இன்சூரன்ஸ் பாலிசிகள்</span>
</div>

<!-- 5. Home & Mortgage Loans -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(139,92,246,0.1); color: #8b5cf6;">
<i class="fas fa-house-circle-check"></i>
</div>
<h4>Home &amp; Mortgage Loans</h4>
<span class="spec-tamil">புதிய வீட்டுக்கடன் &amp; அடமானக்கடன்</span>
</div>

<!-- 6. Agricultural Loans -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(5,150,105,0.1); color: #059669;">
<i class="fas fa-tractor"></i>
</div>
<h4>Agricultural Loans</h4>
<span class="spec-tamil">விவசாயம் &amp; சார்ந்த கடன் சேவைகள்</span>
</div>

<!-- 7. Business Loans -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(99,102,241,0.1); color: #4f46e5;">
<i class="fas fa-briefcase"></i>
</div>
<h4>Business Loans</h4>
<span class="spec-tamil">தொழில் கடன் சேவைகள்</span>
</div>

<!-- 8. Income Tax Solutions -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(2,132,199,0.1); color: #0284c7;">
<i class="fas fa-receipt"></i>
</div>
<h4>Income Tax Solutions</h4>
<span class="spec-tamil">வருமானவரி தாக்கல் செய்தல்</span>
</div>

<!-- 9. Individual Financial Assessment -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(217,70,239,0.1); color: #c026d3;">
<i class="fas fa-chart-pie"></i>
</div>
<h4>Individual Financial Assessment</h4>
<span class="spec-tamil">தனிநபர் நிதி மதிப்பீடு</span>
</div>

<!-- 10. Mutual Fund Savings -->
<div class="specialist-card-item">
<div class="spec-icon-box" style="background: rgba(16,185,129,0.1); color: #059669;">
<i class="fas fa-chart-line"></i>
</div>
<h4>Mutual Fund Savings &amp; Schemes</h4>
<span class="spec-tamil">மியூச்சல் பண்ட் சேமிப்பு &amp; முதலீடு</span>
</div>
</div>
</section>

<!-- Financial Calculators Suite -->
<section class="section" style="padding-top: 0;">
<div class="section-title">
<span class="pill-badge">Interactive Planning Suite</span>
<h2>Smart Financial Calculators</h2>
<p>Run instant simulations for your mutual fund investments, monthly home loan EMIs, retirement readiness, and income tax savings.</p>
</div>

<div class="calculators-hub-grid">
<a href="/calculators/sip-calculator" class="hub-calc-card">
<div class="calc-card-icon-wrap">
<i class="fas fa-chart-line"></i>
</div>
<h3>SIP Calculator</h3>
<p>Estimate the future maturity value of your systematic mutual fund investments with compounding.</p>
<span class="calc-link-text">Calculate Returns <i class="fas fa-arrow-right"></i></span>
</a>

<a href="/calculators/emi-calculator" class="hub-calc-card">
<div class="calc-card-icon-wrap">
<i class="fas fa-calculator"></i>
</div>
<h3>Loan EMI Calculator</h3>
<p>Calculate your exact monthly payments and total interest breakdown for home, mortgage, or business loans.</p>
<span class="calc-link-text">Calculate EMI <i class="fas fa-arrow-right"></i></span>
</a>

<a href="/calculators/insurance-calculator" class="hub-calc-card">
<div class="calc-card-icon-wrap">
<i class="fas fa-shield-heart"></i>
</div>
<h3>Insurance Need Calculator</h3>
<p>Determine your Human Life Value (HLV) to know the exact term cover needed to protect your loved ones.</p>
<span class="calc-link-text">Check Coverage <i class="fas fa-arrow-right"></i></span>
</a>

<a href="/calculators/retirement-calculator" class="hub-calc-card">
<div class="calc-card-icon-wrap">
<i class="fas fa-umbrella-beach"></i>
</div>
<h3>Retirement Planner</h3>
<p>Calculate how much corpus you require to maintain your current lifestyle post-retirement with inflation.</p>
<span class="calc-link-text">Plan Retirement <i class="fas fa-arrow-right"></i></span>
</a>

<a href="/calculators/tax-calculator" class="hub-calc-card">
<div class="calc-card-icon-wrap">
<i class="fas fa-receipt"></i>
</div>
<h3>Tax Savings Calculator</h3>
<p>Maximize deductions under Section 80C, 80D, and NPS to legally minimize your income tax burden.</p>
<span class="calc-link-text">Save Taxes <i class="fas fa-arrow-right"></i></span>
</a>

<a href="/calculators/goal-planner" class="hub-calc-card">
<div class="calc-card-icon-wrap">
<i class="fas fa-bullseye"></i>
</div>
<h3>Milestone Goal Planner</h3>
<p>Determine monthly savings required for buying your dream home, car, or child's higher education.</p>
<span class="calc-link-text">Plan Goal <i class="fas fa-arrow-right"></i></span>
</a>
</div>
</section>

<!-- Client Testimonials -->
<section class="testimonials-section">
<div class="section-title">
<span class="pill-badge">Client Stories</span>
<h2>Trusted by Over 2,500 Families</h2>
<p>Read what our clients across Tamil Nadu have to say about their 22-year journey with MRP Associates.</p>
</div>

<div class="testimonials-grid">
<div class="testimonial-card">
<div class="stars-row">
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
</div>
<p class="testimonial-quote">
"MRP Associates helped me choose the perfect combination of LIC life cover and Star Health insurance for my family. When my father was hospitalized in Karur, their cashless claim support was immediate and stress-free. Truly dependable partners."
</p>
<div class="client-info-row">
<div class="client-avatar-monogram">RG</div>
<div class="client-details">
<h4>Rajesh Ganapathi</h4>
<span>Textile Business Owner, Karur</span>
</div>
</div>
</div>

<div class="testimonial-card">
<div class="stars-row">
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
</div>
<p class="testimonial-quote">
"I have been investing in mutual funds through MRP Associates for over 10 years now. Their disciplined SIP guidance, annual rebalancing, and MDRT USA quality advice have built an exceptional education corpus for my children."
</p>
<div class="client-info-row">
<div class="client-avatar-monogram">PR</div>
<div class="client-details">
<h4>Priya Ramachandran</h4>
<span>Senior Software Engineer, Bengaluru</span>
</div>
</div>
</div>

<div class="testimonial-card">
<div class="stars-row">
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
</div>
<p class="testimonial-quote">
"When securing our commercial property and agricultural machinery loans, MRP Associates negotiated with leading banks and obtained sanctions that saved our firm lakhs in interest. Extremely transparent and professional documentation."
</p>
<div class="client-info-row">
<div class="client-avatar-monogram">RS</div>
<div class="client-details">
<h4>Dr. Ram Sundar</h4>
<span>Clinic Director &amp; Landowner, Salem</span>
</div>
</div>
</div>
</div>
</section>

</div>
