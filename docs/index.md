---
layout: home
title: Home
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    title: 'Secure Your Family\'s Future',
    caption: 'Comprehensive life insurance plans tailored to protect what matters most to you.',
    link: '/life-insurance'
  },
  {
    bg: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80',
    title: 'Your Health is Your Wealth',
    caption: 'Quality health insurance coverage ensuring you and your loved ones are always protected.',
    link: '/health-insurance'
  },
  {
    bg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80',
    title: 'Grow Your Wealth Smartly',
    caption: 'Expert mutual fund guidance to help you achieve your financial goals faster.',
    link: '/mutual-funds'
  },
  {
    bg: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80',
    title: 'Loans Made Simple',
    caption: 'Quick and hassle-free loan solutions for all your financial needs.',
    link: '/loans'
  }
]

let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<div class="home-page">
  <div class="hero-slider">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <div class="slide-bg" :style="{ backgroundImage: `url(${slide.bg})` }"></div>
        <div class="slide-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.caption }}</p>
          <a :href="slide.link" class="btn">Learn More</a>
        </div>
      </div>
    </div>
    <button class="arrow prev" @click="prevSlide">‹</button>
    <button class="arrow next" @click="nextSlide">›</button>
    <div class="slider-nav">
      <span 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="dot" 
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>

  <section class="section services-section">
    <div class="section-title">
      <h2>Our Services</h2>
      <p>We offer comprehensive financial solutions to help you achieve your goals and secure your future.</p>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <div class="icon life">❤️</div>
        <h3>Life Insurance</h3>
        <p>Protect your loved ones with our comprehensive life insurance plans. We offer term plans, whole life, and ULIPs tailored to your needs.</p>
        <a href="/life-insurance" class="read-more">Read More →</a>
      </div>
      <div class="service-card">
        <div class="icon health">🏥</div>
        <h3>Health Insurance</h3>
        <p>Stay protected against medical emergencies with our health insurance plans covering hospitalization, critical illness, and more.</p>
        <a href="/health-insurance" class="read-more">Read More →</a>
      </div>
      <div class="service-card">
        <div class="icon mutual">📈</div>
        <h3>Mutual Funds</h3>
        <p>Grow your wealth with smart investment options. Our expert advisors help you choose the right funds for your financial goals.</p>
        <a href="/mutual-funds" class="read-more">Read More →</a>
      </div>
      <div class="service-card">
        <div class="icon loans">💰</div>
        <h3>Loans</h3>
        <p>Quick and easy loan solutions for personal, home, business, or vehicle needs. Competitive rates with minimal documentation.</p>
        <a href="/loans" class="read-more">Read More →</a>
      </div>
    </div>
  </section>

  <div class="stats-section">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="number">15+</div>
        <div class="label">Years Experience</div>
      </div>
      <div class="stat-item">
        <div class="number">10,000+</div>
        <div class="label">Happy Clients</div>
      </div>
      <div class="stat-item">
        <div class="number">₹500Cr+</div>
        <div class="label">Assets Managed</div>
      </div>
      <div class="stat-item">
        <div class="number">98%</div>
        <div class="label">Claim Settlement</div>
      </div>
    </div>
  </div>

  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="section-title">
        <h2>What Our Clients Say</h2>
        <p>Trusted by thousands of families across India for their financial needs.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="content">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="text">MRP Associates helped me choose the perfect life insurance plan for my family. Their expertise and personalized approach made all the difference. Highly recommended!</p>
            <div class="author">
              <div class="avatar">RS</div>
              <div class="author-info">
                <h4>Rajesh Ganapathi</h4>
                <span>Business Owner, Karur</span>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="content">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="text">I've been investing in mutual funds through MRP Associates for 5 years now. My portfolio has grown significantly and the team keeps me updated on all market trends.</p>
            <div class="author">
              <div class="avatar">PK</div>
              <div class="author-info">
                <h4>Priya Ram</h4>
                <span>IT Professional, Bangalore</span>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="content">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="text">When I needed a home loan, MRP Associates made the entire process smooth and hassle-free. Got excellent rates and the documentation support was outstanding.</p>
            <div class="author">
              <div class="avatar">AM</div>
              <div class="author-info">
                <h4>Ram Sundar</h4>
                <span>Doctor, Selam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="calculators-section">
    <div class="section-title">
      <h2>Financial Calculators</h2>
      <p>Plan your finances better with our easy-to-use calculators.</p>
    </div>
    <div class="calculators-grid">
      <a href="/calculators/sip-calculator" class="calculator-card">
        <div class="calc-icon">📊</div>
        <h3>SIP Calculator</h3>
        <p>Calculate your SIP returns</p>
      </a>
      <a href="/calculators/emi-calculator" class="calculator-card">
        <div class="calc-icon">🏦</div>
        <h3>EMI Calculator</h3>
        <p>Calculate your loan EMI</p>
      </a>
      <a href="/calculators/insurance-calculator" class="calculator-card">
        <div class="calc-icon">🛡️</div>
        <h3>Insurance Calculator</h3>
        <p>Find the right coverage</p>
      </a>
      <a href="/calculators/retirement-calculator" class="calculator-card">
        <div class="calc-icon">🏖️</div>
        <h3>Retirement Calculator</h3>
        <p>Plan your retirement</p>
      </a>
      <a href="/calculators/tax-calculator" class="calculator-card">
        <div class="calc-icon">📋</div>
        <h3>Tax Savings Calculator</h3>
        <p>Maximize tax benefits</p>
      </a>
      <a href="/calculators/goal-planner" class="calculator-card">
        <div class="calc-icon">🎯</div>
        <h3>Goal Planner</h3>
        <p>Achieve your financial goals</p>
      </a>
    </div>
  </section>

  <section class="cta-section">
    <h2>Ready to Secure Your Future?</h2>
    <p>Get in touch with our expert advisors today for a free consultation and personalized financial planning.</p>
    <a href="/contact" class="cta-btn">Get Free Consultation</a>
  </section>
</div>
