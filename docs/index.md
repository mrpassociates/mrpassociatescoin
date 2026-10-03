---
layout: home
title: Home - Trusted Financial Planning & Insurance Advisory
markdownStyles: false
---

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Events & Achievements Full-Width Slider
const currentSlide = ref(0)
const isSliderPaused = ref(false)

const eventSlides = [
  {
    title: 'Awarded Best Financial Advisory Firm 2025',
    desc: 'Honored at the South India Wealth Leadership Conclave in Chennai for exemplary fiduciary integrity, 98.2% claim assistance, and milestone portfolio growth.',
    tag: 'Industry Recognition',
    tagIcon: 'fa-trophy',
    dateLoc: 'Dec 2025 • Chennai',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=85',
    link: '/events/best-financial-advisory-award',
    btnText: 'Read Full Award Story'
  },
  {
    title: 'Karur Mega Investor Awareness Summit 2025',
    desc: 'Over 500 participants and senior fund managers from SBI, HDFC, and ICICI Mutual Funds gathered in Karur to demystify equity compounding and retirement planning.',
    tag: 'Community Summit',
    tagIcon: 'fa-users',
    dateLoc: 'Nov 2025 • Karur',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=85',
    link: '/events/investor-awareness-summit',
    btnText: 'View Summit Highlights'
  },
  {
    title: 'Crossing ₹500 Crore in Assets Guided',
    desc: 'A historic celebration commemorating 15 years of investor trust and surpassing ₹500 Crores in active retail mutual fund and wealth advisory portfolios.',
    tag: 'Milestone Celebration',
    tagIcon: 'fa-chart-line',
    dateLoc: 'Aug 2025 • Karur Headquarters',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&q=85',
    link: '/events/500cr-aum-milestone',
    btnText: 'Explore Milestone Journey'
  },
  {
    title: 'Annual Free Health & Insurance Awareness Camp',
    desc: 'Partnered with leading hospitals to deliver free medical screenings and policy audits for over 1,200 local citizens across Karur district.',
    tag: 'Community CSR',
    tagIcon: 'fa-hand-holding-medical',
    dateLoc: 'May 2025 • Karur District',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=85',
    link: '/events/health-insurance-awareness-camp',
    btnText: 'See Camp Impact & Report'
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
<span>IRDA &amp; AMFI Certified Wealth &amp; Insurance Advisory</span>
</div>

<h1>
Empowering Your Goals with <span class="gradient-text">Trusted Financial</span> Solutions
</h1>

<p class="hero-subtitle">
Over 15 years of dedicated partnership in Life Insurance, Health Coverage, High-Growth Mutual Funds, and Low-Interest Loans for families and businesses.
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
<span class="metric-val">15+</span>
<span class="metric-lbl">Years Experience</span>
</div>
<div class="trust-metric-item">
<span class="metric-val">10,000+</span>
<span class="metric-lbl">Families Protected</span>
</div>
<div class="trust-metric-item">
<span class="metric-val">₹500Cr+</span>
<span class="metric-lbl">Assets Guided</span>
</div>
<div class="trust-metric-item">
<span class="metric-val">98.2%</span>
<span class="metric-lbl">Claim Settlement</span>
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

<!-- Partner Financial Institutions Trust Bar -->
<section class="partners-trust-section">
<div class="partners-title-label">Associated with India's Premier Financial Institutions</div>
<div class="partners-grid-row">
<div class="partner-badge-pill"><span class="partner-dot"></span> LIC of India</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> HDFC Life &amp; Ergo</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> ICICI Prudential</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> SBI Life &amp; Mutual Fund</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> Star Health Insurance</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> Care Health</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> Nippon India MF</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> Axis Bank &amp; MF</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> Kotak Mahindra</div>
<div class="partner-badge-pill"><span class="partner-dot"></span> Tata AIA</div>
</div>
</section>

<!-- Comprehensive Financial Services Grid -->
<section class="section">
<div class="section-title">
<span class="pill-badge">Our Core Expertise</span>
<h2>Tailored Financial Protection &amp; Growth</h2>
<p>Whether safeguarding your family against uncertainties or multiplying your wealth, we curate unbiased solutions from top-tier providers.</p>
</div>

<div class="services-grid">
<!-- Service 1: Life Insurance -->
<div class="service-card life">
<div class="service-icon-box life">
<i class="fas fa-shield-heart"></i>
</div>
<span class="service-tag">Family Protection</span>
<h3>Life Insurance</h3>
<p>Ensure financial independence for your dependents with term life, whole life, endowment, and child milestone plans.</p>
<ul class="service-perks">
<li><i class="fas fa-check"></i> High cover at affordable premiums</li>
<li><i class="fas fa-check"></i> Tax savings up to ₹1.5L under 80C</li>
<li><i class="fas fa-check"></i> Dedicated claim assistance guarantee</li>
</ul>
<a href="/life-insurance" class="service-card-btn">
Explore Life Plans <i class="fas fa-arrow-right"></i>
</a>
</div>

<!-- Service 2: Health Insurance -->
<div class="service-card health">
<div class="service-icon-box health">
<i class="fas fa-hospital-user"></i>
</div>
<span class="service-tag">Medical Security</span>
<h3>Health Insurance</h3>
<p>Comprehensive medical covers shielding you from escalating hospital costs with instant cashless settlement.</p>
<ul class="service-perks">
<li><i class="fas fa-check"></i> 10,000+ Cashless network hospitals</li>
<li><i class="fas fa-check"></i> Pre &amp; post hospitalization expenses</li>
<li><i class="fas fa-check"></i> Tax deduction up to ₹75,000 (80D)</li>
</ul>
<a href="/health-insurance" class="service-card-btn">
Explore Health Plans <i class="fas fa-arrow-right"></i>
</a>
</div>

<!-- Service 3: Mutual Funds -->
<div class="service-card mutual">
<div class="service-icon-box mutual">
<i class="fas fa-chart-pie"></i>
</div>
<span class="service-tag">Wealth Creation</span>
<h3>Mutual Funds &amp; SIP</h3>
<p>Harness the power of compounding with expert-selected equity, hybrid, and debt portfolios suited to your risk appetite.</p>
<ul class="service-perks">
<li><i class="fas fa-check"></i> Start automated SIP from ₹500/month</li>
<li><i class="fas fa-check"></i> ELSS tax saver with 3-year lock-in</li>
<li><i class="fas fa-check"></i> Continuous portfolio review &amp; rebalancing</li>
</ul>
<a href="/mutual-funds" class="service-card-btn">
Explore Mutual Funds <i class="fas fa-arrow-right"></i>
</a>
</div>

<!-- Service 4: Loans -->
<div class="service-card loans">
<div class="service-icon-box loans">
<i class="fas fa-landmark"></i>
</div>
<span class="service-tag">Financing Solutions</span>
<h3>Loans &amp; Mortgage</h3>
<p>Competitive interest rates and hassle-free paperless approvals for home purchases, business expansion, and personal needs.</p>
<ul class="service-perks">
<li><i class="fas fa-check"></i> Home loans starting from 8.35% p.a.</li>
<li><i class="fas fa-check"></i> Loan against property (LAP) &amp; MSME</li>
<li><i class="fas fa-check"></i> Zero advisory fee &amp; quick disbursal</li>
</ul>
<a href="/loans" class="service-card-btn">
Explore Loan Offers <i class="fas fa-arrow-right"></i>
</a>
</div>
</div>
</section>

<!-- Why Choose Us / Value Proposition -->
<section class="section" style="padding-top: 0;">
<div class="section-title">
<span class="pill-badge">Why Partner With Us</span>
<h2>The MRP Associates Advantage</h2>
<p>We work for you, not the insurance companies. Our advice is strictly fiduciary and client-centric.</p>
</div>

<div class="why-us-grid">
<div class="why-card">
<div class="why-icon">
<i class="fas fa-scale-balanced"></i>
</div>
<h4>100% Unbiased Advice</h4>
<p>We evaluate schemes across 30+ leading AMCs and insurers to find the product that truly fits your goals, not commissions.</p>
</div>

<div class="why-card">
<div class="why-icon">
<i class="fas fa-hands-holding-circle"></i>
</div>
<h4>End-to-End Claim Support</h4>
<p>During medical emergencies or insurance claims, our team personally assists with hospital paperwork and claim settlements.</p>
</div>

<div class="why-card">
<div class="why-icon">
<i class="fas fa-user-tie"></i>
</div>
<h4>Certified Professionals</h4>
<p>Our advisors hold accredited AMFI and IRDA credentials with regular training on regulatory updates and market shifts.</p>
</div>

<div class="why-card">
<div class="why-icon">
<i class="fas fa-clock-rotate-left"></i>
</div>
<h4>Zero Advisory Charges</h4>
<p>Our initial advisory, portfolio diagnosis, and loan assistance are completely free of cost for our clients.</p>
</div>
</div>
</section>

<!-- 3-Step Process -->
<section class="section" style="padding-top: 0;">
<div class="section-title">
<span class="pill-badge">Simple 3-Step Process</span>
<h2>How We Secure Your Financial Journey</h2>
<p>Getting your family protected or investing for retirement is simpler than you think.</p>
</div>

<div class="process-grid">
<div class="process-step-card">
<div class="step-num-bubble">01</div>
<h4>Discovery &amp; Goal Mapping</h4>
<p>We listen to your life goals, existing policies, debts, and cash flows to assess your exact risk profile and coverage gap.</p>
</div>

<div class="process-step-card">
<div class="step-num-bubble">02</div>
<h4>Comparative Blueprint</h4>
<p>We present a clear side-by-side comparison of top-rated plans, transparent costs, historical returns, and payout ratios.</p>
</div>

<div class="process-step-card">
<div class="step-num-bubble">03</div>
<h4>Execution &amp; Lifetime Care</h4>
<p>We handle seamless digital paperwork, policy issuance, annual rebalancing, and stand beside your family during claim events.</p>
</div>
</div>
</section>

<!-- Financial Calculators Suite -->
<section class="section" style="padding-top: 0;">
<div class="section-title">
<span class="pill-badge">Interactive Planning Suite</span>
<h2>Smart Financial Calculators</h2>
<p>Run simulations for your investments, monthly loan EMIs, retirement readiness, and income tax savings.</p>
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
<p>Calculate your exact monthly payments and total interest breakdown for home, car, or personal loans.</p>
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
<h2>Trusted by Over 10,000 Families</h2>
<p>Read what our clients across Tamil Nadu and beyond have to say about their experience with MRP Associates.</p>
</div>

<div class="testimonials-grid">
<div class="testimonial-card">
<div class="stars-row">
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
</div>
<p class="testimonial-quote">
"MRP Associates helped me choose the perfect term life and health insurance combination for my family. When my father was hospitalized last year, their claim support was instant and completely cashless. Truly dependable partners."
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
"I have been investing in mutual funds through MRP Associates for over 6 years now. Their disciplined SIP strategy and regular portfolio rebalancing have delivered incredible results toward my children's college fund."
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
"When securing a commercial property loan, MRP Associates compared 5 different banks and negotiated an interest rate that saved our firm lakhs over the tenure. Extremely professional and transparent documentation."
</p>
<div class="client-info-row">
<div class="client-avatar-monogram">RS</div>
<div class="client-details">
<h4>Dr. Ram Sundar</h4>
<span>Clinic Director, Salem</span>
</div>
</div>
</div>
</div>
</section>

</div>
