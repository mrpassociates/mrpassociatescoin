<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData } from 'vitepress'
import { ref, onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()
const { isDark } = useData()
const mobileMenuOpen = ref(false)
const calcDropdownOpen = ref(false)
const showBackToTop = ref(false)

const isActiveLink = (linkPath) => {
  const currentPath = route.path
  const normalizedCurrent = currentPath.replace(/\.html$/, '').replace(/\/$/, '') || '/'
  const normalizedLink = linkPath.replace(/\/$/, '') || '/'
  return normalizedCurrent === normalizedLink
}

const isCalcActive = () => {
  return route.path.includes('/calculators/')
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    showBackToTop.value = window.scrollY > 400
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { text: 'About Us', link: '/about' },
  { text: 'Events & Achievements', link: '/events/' },
  { text: 'Life Insurance', link: '/life-insurance', badge: 'Popular' },
  { text: 'Health Insurance', link: '/health-insurance' },
  { text: 'Mutual Funds', link: '/mutual-funds', badge: 'High Growth' },
  { text: 'Loans', link: '/loans' },
  { text: 'Contact Us', link: '/contact' }
]

const calculatorLinks = [
  { text: 'SIP Calculator', link: '/calculators/sip-calculator', icon: 'fa-chart-line', desc: 'Forecast mutual fund wealth' },
  { text: 'EMI Calculator', link: '/calculators/emi-calculator', icon: 'fa-landmark', desc: 'Compute monthly loan EMIs' },
  { text: 'Insurance Calculator', link: '/calculators/insurance-calculator', icon: 'fa-shield-heart', desc: 'Determine Human Life Value' },
  { text: 'Retirement Planner', link: '/calculators/retirement-calculator', icon: 'fa-umbrella-beach', desc: 'Build your pension corpus' },
  { text: 'Tax Savings 80C/80D', link: '/calculators/tax-calculator', icon: 'fa-receipt', desc: 'Optimize exemptions' },
  { text: 'Goal Planner', link: '/calculators/goal-planner', icon: 'fa-bullseye', desc: 'Save for milestones' }
]

const socialLinks = [
  { icon: 'fb', faIcon: 'fab fa-facebook-f', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'tw', faIcon: 'fab fa-x-twitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'li', faIcon: 'fab fa-linkedin-in', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'ig', faIcon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' },
  { icon: 'wa', faIcon: 'fab fa-whatsapp', url: 'https://wa.me/919443339889', label: 'WhatsApp' }
]
</script>

<template>
  <div class="custom-layout" :class="{ dark: isDark }">
    <!-- Site Header -->
    <header class="site-header">
      <!-- Top Announcement & Quick Contact Microbar -->
      <div class="header-topbar">
        <div class="header-container topbar-content">
          <div class="topbar-left">
            <span class="topbar-badge">
              <span class="pulse-dot"></span> AMFI &amp; IRDA Certified Advisory
            </span>
            <span class="topbar-divider topbar-loc-divider">|</span>
            <span class="topbar-info topbar-loc-info">
              <i class="fas fa-location-dot"></i> Karur, Tamil Nadu
            </span>
            <span class="topbar-divider topbar-hours-divider">|</span>
            <span class="topbar-info topbar-hours-info">
              <i class="far fa-clock"></i> Mon - Sat: 9:30 AM - 7:00 PM
            </span>
          </div>

          <div class="topbar-right">
            <a href="tel:+919443339889" class="topbar-link topbar-phone">
              <i class="fas fa-phone-volume"></i> +91 94433 39889
            </a>
            <span class="topbar-divider topbar-email-divider">|</span>
            <a href="mailto:contact@mrpassociates.co.in" class="topbar-link topbar-email">
              <i class="far fa-envelope"></i> contact@mrpassociates.co.in
            </a>
            <div class="topbar-social">
              <a 
                v-for="social in socialLinks" 
                :key="social.icon" 
                :href="social.url" 
                :title="social.label"
                class="mini-social-link"
                target="_blank" 
                rel="noopener"
              >
                <i :class="social.faIcon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <div class="header-main">
        <div class="header-container main-nav-content">
          <!-- Logo -->
          <a href="/" class="site-brand">
            <div class="brand-crest">
              <svg viewBox="0 0 36 36" fill="none" class="crest-svg">
                <path d="M18 2 L31 7 C31 20 25 30 18 34 C11 30 5 20 5 7 Z" fill="url(#crestGrad)" />
                <path d="M13 22 L13 17 L16 17 L16 22 Z" fill="#ffffff" fill-opacity="0.9" rx="1"/>
                <path d="M17 22 L17 13 L20 13 L20 22 Z" fill="#ffffff" rx="1"/>
                <path d="M21 22 L21 9 L24 9 L24 22 Z" fill="#fbbf24" rx="1"/>
                <path d="M11 15 L17 9 L21 12 L26 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3b82f6"/>
                    <stop offset="100%" stop-color="#1d4ed8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-title">MRP <span class="brand-accent">Associates</span></span>
              <span class="brand-tagline">Wealth &amp; Insurance Solutions</span>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="desktop-nav">
            <a 
              v-for="link in navLinks.filter(l => l.link !== '/contact')" 
              :key="link.link" 
              :href="link.link" 
              class="nav-item"
              :class="{ active: isActiveLink(link.link) }"
            >
              {{ link.text }}
            </a>

            <!-- Calculators Dropdown -->
            <div 
              class="nav-dropdown"
              @mouseenter="calcDropdownOpen = true"
              @mouseleave="calcDropdownOpen = false"
            >
              <button 
                class="dropdown-trigger" 
                :class="{ active: isCalcActive() }"
                aria-haspopup="true"
                :aria-expanded="calcDropdownOpen"
              >
                <span>Calculators</span>
                <i class="fas fa-chevron-down dropdown-arrow" :class="{ rotate: calcDropdownOpen }"></i>
              </button>

              <div class="dropdown-menu" :class="{ show: calcDropdownOpen }">
                <div class="dropdown-header">
                  <span class="dropdown-header-title">Financial Planning Tools</span>
                  <span class="dropdown-header-sub">Free instant estimations</span>
                </div>
                <div class="dropdown-grid">
                  <a 
                    v-for="calc in calculatorLinks" 
                    :key="calc.link" 
                    :href="calc.link" 
                    class="dropdown-item"
                    :class="{ active: isActiveLink(calc.link) }"
                    @click="calcDropdownOpen = false"
                  >
                    <div class="calc-menu-icon">
                      <i :class="['fas', calc.icon]"></i>
                    </div>
                    <div class="calc-menu-info">
                      <span class="calc-menu-title">{{ calc.text }}</span>
                      <span class="calc-menu-desc">{{ calc.desc }}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Link -->
            <a 
              href="/contact" 
              class="nav-item"
              :class="{ active: isActiveLink('/contact') }"
            >
              Contact Us
            </a>
          </nav>

          <!-- Header Right CTA & Dark Toggle -->
          <div class="header-right-actions">
            <!-- Dark Mode Toggle Button -->
            <button 
              class="theme-toggle-btn" 
              @click="toggleDarkMode" 
              :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
              aria-label="Toggle Dark Mode"
            >
              <i v-if="isDark" class="fas fa-sun toggle-sun"></i>
              <i v-else class="fas fa-moon toggle-moon"></i>
            </button>

            <!-- Call/Consultation CTA Button -->
            <a href="/contact" class="nav-cta-btn">
              <i class="fas fa-calendar-check"></i>
              <span>Free Consultation</span>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button 
              class="mobile-toggle-btn" 
              @click="toggleMobileMenu" 
              :class="{ active: mobileMenuOpen }"
              aria-label="Toggle Mobile Menu"
            >
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" :class="{ open: mobileMenuOpen }">
        <div class="mobile-drawer-content">
          <div class="mobile-links-list">
            <a 
              v-for="link in navLinks" 
              :key="link.link" 
              :href="link.link" 
              class="mobile-nav-link"
              :class="{ active: isActiveLink(link.link) }"
              @click="mobileMenuOpen = false"
            >
              <span>{{ link.text }}</span>
              <span v-if="link.badge" class="mini-pill">{{ link.badge }}</span>
              <i class="fas fa-chevron-right mobile-arrow"></i>
            </a>

            <!-- Mobile Calculators Accordion -->
            <div class="mobile-calc-section">
              <div class="mobile-calc-header">
                <i class="fas fa-calculator"></i>
                <span>Financial Calculators</span>
              </div>
              <div class="mobile-calc-grid">
                <a 
                  v-for="calc in calculatorLinks" 
                  :key="calc.link" 
                  :href="calc.link" 
                  class="mobile-calc-link"
                  @click="mobileMenuOpen = false"
                >
                  <i :class="['fas', calc.icon]"></i>
                  <span>{{ calc.text }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile Drawer Footer CTA -->
          <div class="mobile-drawer-footer">
            <a href="tel:+919443339889" class="mobile-btn call-action">
              <i class="fas fa-phone-alt"></i> Call +91 94433 39889
            </a>
            <a href="https://wa.me/919443339889?text=Hello%20MRP%20Associates" class="mobile-btn wa-action" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Page Content injected by VitePress -->
    <main class="site-content">
      <Layout>
        <template #layout-bottom>
          <!-- Modern Mega Footer -->
          <footer class="site-footer">
            <!-- Top Footer Wave / Banner -->
            <div class="footer-cta-banner">
              <div class="footer-cta-container">
                <div class="cta-banner-text">
                  <h3>Start Your Journey to Financial Freedom</h3>
                  <p>Speak to our certified advisors for tailored insurance and wealth solutions.</p>
                </div>
                <div class="cta-banner-actions">
                  <a href="/contact" class="footer-btn primary-btn">
                    <i class="fas fa-handshake"></i> Book Free Consultation
                  </a>
                  <a href="tel:+919443339889" class="footer-btn secondary-btn">
                    <i class="fas fa-phone"></i> +91 94433 39889
                  </a>
                </div>
              </div>
            </div>

            <!-- Main Footer Columns -->
            <div class="footer-main">
              <div class="footer-container">
                <!-- Col 1: Brand & Credibility -->
                <div class="footer-col col-brand">
                  <div class="footer-brand">
                    <div class="brand-crest mini">
                      <svg viewBox="0 0 36 36" fill="none" class="crest-svg">
                        <path d="M18 2 L31 7 C31 20 25 30 18 34 C11 30 5 20 5 7 Z" fill="url(#footerCrestGrad)" />
                        <path d="M13 22 L13 17 L16 17 L16 22 Z" fill="#ffffff" fill-opacity="0.9" rx="1"/>
                        <path d="M17 22 L17 13 L20 13 L20 22 Z" fill="#ffffff" rx="1"/>
                        <path d="M21 22 L21 9 L24 9 L24 22 Z" fill="#fbbf24" rx="1"/>
                        <defs>
                          <linearGradient id="footerCrestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#3b82f6"/>
                            <stop offset="100%" stop-color="#1d4ed8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <span class="footer-brand-title">MRP Associates</span>
                      <span class="footer-brand-sub">Wealth &amp; Insurance Solutions</span>
                    </div>
                  </div>

                  <p class="footer-bio">
                    Dedicated to people's service for over 22 years. Trusted by 2,500+ individuals, families, and businesses across Tamil Nadu with LIC Corporate Club distinction, Court of the Table (COT), and 17 consecutive years as MDRT (USA) Qualifier.
                  </p>

                  <div class="footer-cert-tags">
                    <span class="cert-tag"><i class="fas fa-crown"></i> LIC Corporate Club</span>
                    <span class="cert-tag"><i class="fas fa-globe"></i> MDRT (USA) 17 Yrs</span>
                    <span class="cert-tag"><i class="fas fa-medal"></i> MDRT COT (3 Yrs)</span>
                    <span class="cert-tag"><i class="fas fa-check-circle"></i> IRDA &amp; AMFI Certified</span>
                  </div>

                  <div class="footer-social-row">
                    <a v-for="social in socialLinks" :key="social.icon" :href="social.url" :title="social.label" target="_blank" rel="noopener" class="footer-social-icon">
                      <i :class="social.faIcon"></i>
                    </a>
                  </div>
                </div>

                <!-- Col 2: Services -->
                <div class="footer-col">
                  <h4 class="footer-col-title">Specialist Solutions</h4>
                  <ul class="footer-links">
                    <li><a href="/life-insurance"><i class="fas fa-angle-right"></i> LIC Life &amp; Pension Plans</a></li>
                    <li><a href="/health-insurance"><i class="fas fa-angle-right"></i> Star Health Insurance</a></li>
                    <li><a href="/mutual-funds"><i class="fas fa-angle-right"></i> Mutual Funds &amp; SIPs</a></li>
                    <li><a href="/loans"><i class="fas fa-angle-right"></i> Home &amp; Mortgage Loans</a></li>
                    <li><a href="/loans"><i class="fas fa-angle-right"></i> Agricultural &amp; Business Loans</a></li>
                    <li><a href="/about"><i class="fas fa-angle-right"></i> Children Education &amp; Marriage</a></li>
                    <li><a href="/events/"><i class="fas fa-angle-right"></i> Historic Bima Gramam 2003</a></li>
                    <li><a href="/contact"><i class="fas fa-angle-right"></i> Income Tax Solutions</a></li>
                  </ul>
                </div>

                <!-- Col 3: Calculators -->
                <div class="footer-col">
                  <h4 class="footer-col-title">Financial Calculators</h4>
                  <ul class="footer-links">
                    <li><a href="/calculators/sip-calculator"><i class="fas fa-angle-right"></i> SIP Growth Calculator</a></li>
                    <li><a href="/calculators/emi-calculator"><i class="fas fa-angle-right"></i> Loan EMI Calculator</a></li>
                    <li><a href="/calculators/insurance-calculator"><i class="fas fa-angle-right"></i> Insurance Coverage Need</a></li>
                    <li><a href="/calculators/retirement-calculator"><i class="fas fa-angle-right"></i> Retirement Corpus Planner</a></li>
                    <li><a href="/calculators/tax-calculator"><i class="fas fa-angle-right"></i> Tax Savings Calculator</a></li>
                    <li><a href="/calculators/goal-planner"><i class="fas fa-angle-right"></i> Milestone Goal Planner</a></li>
                  </ul>
                </div>

                <!-- Col 4: Contact & Office -->
                <div class="footer-col col-contact">
                  <h4 class="footer-col-title">Karur Office</h4>
                  <div class="footer-contact-item">
                    <i class="fas fa-location-dot contact-ic"></i>
                    <div>
                      <strong>MRP Associates</strong>
                      <p>123 Near Bus Stand, Karur,<br>Tamil Nadu 639001, India</p>
                    </div>
                  </div>
                  <div class="footer-contact-item">
                    <i class="fas fa-phone-volume contact-ic"></i>
                    <div>
                      <strong>Call Directly</strong>
                      <p><a href="tel:+919443339889">+91 94433 39889</a></p>
                    </div>
                  </div>
                  <div class="footer-contact-item">
                    <i class="far fa-envelope contact-ic"></i>
                    <div>
                      <strong>Email Support</strong>
                      <p><a href="mailto:contact@mrpassociates.co.in">contact@mrpassociates.co.in</a></p>
                    </div>
                  </div>
                  <div class="footer-contact-item">
                    <i class="far fa-clock contact-ic"></i>
                    <div>
                      <strong>Office Hours</strong>
                      <p>Mon - Sat: 9:30 AM - 7:00 PM<br><span class="sunday-note">Sunday: By Appointment</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Legal / Regulatory Disclaimer -->
            <div class="footer-disclaimer">
              <div class="footer-container">
                <p>
                  <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation. MRP Associates acts as an authorized corporate distributor/advisor with licensed AMCs and IRDA-registered insurance partners.
                </p>
              </div>
            </div>

            <!-- Bottom Copyright Bar -->
            <div class="footer-bottom">
              <div class="footer-container footer-bottom-content">
                <p>&copy; {{ new Date().getFullYear() }} MRP Associates. All rights reserved.</p>
                <div class="bottom-links">
                  <a href="/about">About</a>
                  <span>•</span>
                  <a href="/contact">Contact</a>
                  <span>•</span>
                  <a href="/calculators/sip-calculator">Calculators</a>
                </div>
              </div>
            </div>
          </footer>

          <!-- Floating WhatsApp & Instant Contact Widget -->
          <div class="floating-contact-widget">
            <a 
              href="https://wa.me/919443339889?text=Hello%20MRP%20Associates,%20I%20am%20interested%20in%20your%20financial%20services." 
              class="floating-whatsapp-btn" 
              target="_blank" 
              rel="noopener"
              title="Chat with an Advisor on WhatsApp"
              aria-label="WhatsApp Chat"
            >
              <i class="fab fa-whatsapp"></i>
              <span class="fab-pulse-ring"></span>
              <span class="fab-tooltip">Chat with Advisor</span>
            </a>

            <!-- Back to top button -->
            <button 
              v-show="showBackToTop" 
              @click="scrollToTop" 
              class="back-to-top-btn" 
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <i class="fas fa-arrow-up"></i>
            </button>
          </div>
        </template>
      </Layout>
    </main>
  </div>
</template>

<style scoped>
.custom-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ===== Site Header ===== */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
  transition: all 0.3s ease;
}

.dark .site-header {
  background: rgba(15, 23, 42, 0.92);
  border-bottom-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.4);
}

.header-container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Micro Topbar */
.header-topbar {
  background: #0b1329;
  color: #94a3b8;
  font-size: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 24px;
}

.topbar-left, .topbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #60a5fa;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.02em;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.topbar-divider {
  color: rgba(255, 255, 255, 0.15);
}

.topbar-info {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #cbd5e1;
}

.topbar-info i {
  color: #38bdf8;
  font-size: 11px;
}

.topbar-link {
  color: #e2e8f0 !important;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s ease;
}

.topbar-link:hover {
  color: #60a5fa !important;
}

.topbar-social {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 6px;
}

.mini-social-link {
  color: #94a3b8 !important;
  font-size: 11px;
  transition: all 0.2s;
  padding: 2px 4px;
}

.mini-social-link:hover {
  color: #ffffff !important;
  transform: translateY(-1px);
}

/* Main Navigation Row */
.header-main {
  padding: 10px 0;
}

.main-nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* Brand */
.site-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-crest {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  filter: drop-shadow(0 4px 8px rgba(37, 99, 235, 0.25));
  transition: transform 0.3s ease;
}

.site-brand:hover .brand-crest {
  transform: scale(1.05);
}

.crest-svg {
  width: 100%;
  height: 100%;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: 'Plus Jakarta Sans', 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.dark .brand-title {
  color: #f8fafc;
}

.brand-accent {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-size: 9.5px;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 1px;
}

.dark .brand-tagline {
  color: #94a3b8;
}

/* Desktop Nav Items */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item {
  padding: 8px 14px;
  font-size: 14.5px;
  font-weight: 600;
  color: #334155 !important;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.dark .nav-item {
  color: #cbd5e1 !important;
}

.nav-item:hover {
  color: #2563eb !important;
  background: rgba(37, 99, 235, 0.06);
}

.dark .nav-item:hover {
  color: #60a5fa !important;
  background: rgba(96, 165, 250, 0.1);
}

.nav-item.active {
  color: #2563eb !important;
  background: rgba(37, 99, 235, 0.08);
}

.dark .nav-item.active {
  color: #60a5fa !important;
  background: rgba(96, 165, 250, 0.14);
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 14.5px;
  font-weight: 600;
  color: #334155;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.dark .dropdown-trigger {
  color: #cbd5e1;
}

.dropdown-trigger:hover,
.dropdown-trigger.active {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.06);
}

.dark .dropdown-trigger:hover,
.dark .dropdown-trigger.active {
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}

.dropdown-arrow {
  font-size: 11px;
  transition: transform 0.2s ease;
}

.dropdown-arrow.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  width: 380px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 16px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;
}

.dark .dropdown-menu {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
}

.dropdown-menu.show {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transform: translateX(-50%) translateY(12px);
}

.dropdown-header {
  padding: 4px 8px 10px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 8px;
}

.dark .dropdown-header {
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.dropdown-header-title {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2563eb;
}

.dark .dropdown-header-title {
  color: #60a5fa;
}

.dropdown-header-sub {
  font-size: 11px;
  color: #64748b;
}

.dropdown-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: #f8fafc;
  transform: translateX(3px);
}

.dark .dropdown-item:hover {
  background: #1f2937;
}

.calc-menu-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.dark .calc-menu-icon {
  background: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
}

.dropdown-item:hover .calc-menu-icon {
  background: #2563eb;
  color: #ffffff;
}

.calc-menu-info {
  display: flex;
  flex-direction: column;
}

.calc-menu-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #1e293b;
}

.dark .calc-menu-title {
  color: #f1f5f9;
}

.calc-menu-desc {
  font-size: 11px;
  color: #64748b;
}

.dark .calc-menu-desc {
  color: #94a3b8;
}

/* Header Right Actions */
.header-right-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-toggle-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(226, 232, 240, 0.8);
  background: #f8fafc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.2s ease;
}

.dark .theme-toggle-btn {
  border-color: rgba(255, 255, 255, 0.1);
  background: #1e293b;
  color: #f59e0b;
}

.theme-toggle-btn:hover {
  background: #f1f5f9;
  color: #2563eb;
  transform: rotate(15deg);
}

.dark .theme-toggle-btn:hover {
  background: #334155;
  color: #fbbf24;
}

.nav-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #ffffff !important;
  font-size: 13.5px;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none !important;
  box-shadow: 0 4px 14px -2px rgba(37, 99, 235, 0.4);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.nav-cta-btn:hover {
  background: linear-gradient(135deg, #1d4ed8, #1e40af);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -2px rgba(37, 99, 235, 0.5);
}

/* Mobile Toggle Hamburger */
.mobile-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 10px;
  cursor: pointer;
  gap: 5px;
  padding: 8px;
}

.dark .mobile-toggle-btn {
  border-color: rgba(255, 255, 255, 0.1);
}

.mobile-toggle-btn .bar {
  width: 20px;
  height: 2px;
  background: #1e293b;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.dark .mobile-toggle-btn .bar {
  background: #f1f5f9;
}

.mobile-toggle-btn.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle-btn.active .bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle-btn.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  display: none;
  max-height: 0;
  overflow: hidden;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
}

.dark .mobile-drawer {
  background: #0f172a;
  border-top-color: rgba(255, 255, 255, 0.08);
}

.mobile-drawer.open {
  max-height: 90vh;
  overflow-y: auto;
}

.mobile-drawer-content {
  padding: 16px 20px 30px;
}

.mobile-links-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 600;
  color: #1e293b !important;
  text-decoration: none !important;
  border-radius: 10px;
  transition: all 0.2s;
}

.dark .mobile-nav-link {
  color: #f1f5f9 !important;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb !important;
}

.mobile-arrow {
  font-size: 12px;
  color: #94a3b8;
}

.mini-pill {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(37, 99, 235, 0.12);
  color: #2563eb;
  border-radius: 20px;
  margin-left: auto;
  margin-right: 12px;
}

.mobile-calc-section {
  margin: 14px 0 10px;
  padding: 14px;
  background: #f8fafc;
  border-radius: 12px;
}

.dark .mobile-calc-section {
  background: #1e293b;
}

.mobile-calc-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}

.mobile-calc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.mobile-calc-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  font-size: 12.5px;
  font-weight: 600;
  color: #475569 !important;
  text-decoration: none !important;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.dark .mobile-calc-link {
  background: #0f172a;
  border-color: rgba(255, 255, 255, 0.08);
  color: #cbd5e1 !important;
}

.mobile-calc-link i {
  color: #2563eb;
}

.mobile-drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.dark .mobile-drawer-footer {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.mobile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none !important;
}

.call-action {
  background: #2563eb;
  color: #ffffff !important;
}

.wa-action {
  background: #25d366;
  color: #ffffff !important;
}

/* Site Content offset for sticky header */
.site-content {
  padding-top: 102px;
  flex: 1;
}

.site-content :deep(.VPNav) {
  display: none !important;
}

/* ===== Modern Mega Footer ===== */
.site-footer {
  background: #070d1e;
  color: #94a3b8;
  position: relative;
  overflow: hidden;
  margin-top: auto;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20%;
  width: 500px;
  height: 300px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 70%);
  pointer-events: none;
}

/* Footer CTA Banner */
.footer-cta-banner {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 40px 0;
}

.footer-cta-container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.cta-banner-text h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 6px;
  letter-spacing: -0.02em;
}

.cta-banner-text p {
  color: #94a3b8;
  font-size: 15px;
  margin: 0;
}

.cta-banner-actions {
  display: flex;
  gap: 14px;
  flex-shrink: 0;
}

.footer-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14.5px;
  text-decoration: none !important;
  transition: all 0.25s ease;
}

.footer-btn.primary-btn {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

.footer-btn.primary-btn:hover {
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  transform: translateY(-2px);
}

.footer-btn.secondary-btn {
  background: rgba(255, 255, 255, 0.08);
  color: #f1f5f9 !important;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-btn.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff !important;
  transform: translateY(-2px);
}

/* Footer Main Grid */
.footer-main {
  padding: 70px 0 50px;
}

.footer-container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 40px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.brand-crest.mini {
  width: 36px;
  height: 36px;
}

.footer-brand-title {
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.footer-brand-sub {
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: #38bdf8;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer-bio {
  font-size: 14px;
  line-height: 1.7;
  color: #94a3b8;
  margin-bottom: 20px;
}

.footer-cert-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.cert-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11.5px;
  font-weight: 600;
}

.footer-social-row {
  display: flex;
  gap: 10px;
}

.footer-social-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1 !important;
  font-size: 14px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.footer-social-icon:hover {
  background: #2563eb;
  color: #ffffff !important;
  transform: translateY(-2px);
  border-color: #2563eb;
}

/* Footer Link Columns */
.footer-col-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #2563eb;
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8 !important;
  font-size: 13.5px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.footer-links a i {
  font-size: 11px;
  color: #3b82f6;
  transition: transform 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff !important;
  transform: translateX(4px);
}

.footer-links a:hover i {
  transform: translateX(2px);
}

/* Contact Col */
.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.contact-ic {
  font-size: 16px;
  color: #38bdf8;
  margin-top: 3px;
  flex-shrink: 0;
}

.footer-contact-item strong {
  display: block;
  font-size: 13px;
  color: #e2e8f0;
  margin-bottom: 2px;
}

.footer-contact-item p {
  font-size: 13px;
  color: #94a3b8;
  margin: 0;
  line-height: 1.5;
}

.footer-contact-item a {
  color: #60a5fa !important;
  text-decoration: none;
}

.footer-contact-item a:hover {
  text-decoration: underline;
}

.sunday-note {
  font-size: 11.5px;
  color: #cbd5e1;
}

/* Disclaimer */
.footer-disclaimer {
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 11.5px;
  line-height: 1.6;
  color: #64748b;
}

.footer-disclaimer strong {
  color: #94a3b8;
}

/* Bottom Bar */
.footer-bottom {
  padding: 20px 0;
  font-size: 13px;
  color: #64748b;
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-bottom-content p {
  margin: 0;
}

.bottom-links {
  display: flex;
  gap: 10px;
}

.bottom-links a {
  color: #94a3b8 !important;
  text-decoration: none;
  transition: color 0.2s;
}

.bottom-links a:hover {
  color: #ffffff !important;
}

/* ===== Floating WhatsApp / Contact Widget ===== */
.floating-contact-widget {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.floating-whatsapp-btn {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 10px 25px -4px rgba(37, 211, 102, 0.5);
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.floating-whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 14px 30px -4px rgba(37, 211, 102, 0.6);
}

.fab-pulse-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: fab-pulse 2s infinite;
  pointer-events: none;
}

@keyframes fab-pulse {
  0% { transform: scale(0.95); opacity: 1; }
  100% { transform: scale(1.4); opacity: 0; }
}

.fab-tooltip {
  position: absolute;
  right: calc(100% + 14px);
  background: #0f172a;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(10px);
  pointer-events: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.floating-whatsapp-btn:hover .fab-tooltip {
  opacity: 1;
  transform: translateX(0);
}

.back-to-top-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffffff;
  color: #1e293b;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.dark .back-to-top-btn {
  background: #1e293b;
  color: #f1f5f9;
  border-color: rgba(255, 255, 255, 0.1);
}

.back-to-top-btn:hover {
  background: #2563eb;
  color: #ffffff;
  transform: translateY(-3px);
}

/* ===== Responsive Breakpoints ===== */
@media (max-width: 1100px) {
  .topbar-hours-info,
  .topbar-hours-divider {
    display: none;
  }

  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 960px) {
  .header-topbar {
    display: block; /* Show top ribbon on mobile/tablets */
    font-size: 11.5px;
  }

  .topbar-content {
    padding: 5px 16px;
  }

  .topbar-social {
    display: none;
  }

  .site-content {
    padding-top: 96px; /* Offset for topbar + main navbar */
  }

  .desktop-nav {
    display: none;
  }

  .nav-cta-btn {
    display: none;
  }

  .mobile-toggle-btn {
    display: flex;
  }

  .mobile-drawer {
    display: block;
  }

  .footer-cta-container {
    flex-direction: column;
    text-align: center;
  }

  .cta-banner-actions {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .header-topbar {
    font-size: 11px;
  }

  .topbar-content {
    padding: 5px 14px;
    gap: 8px;
  }

  .topbar-left, .topbar-right {
    gap: 8px;
  }

  .topbar-email,
  .topbar-email-divider,
  .topbar-loc-info,
  .topbar-loc-divider,
  .topbar-hours-info,
  .topbar-hours-divider,
  .topbar-divider {
    display: none;
  }

  .topbar-badge {
    font-size: 10.5px;
    white-space: nowrap;
  }

  .topbar-phone {
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
  }

  .site-content {
    padding-top: 94px;
  }
}

@media (max-width: 640px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .floating-contact-widget {
    bottom: 20px;
    right: 20px;
  }

  .floating-whatsapp-btn {
    width: 52px;
    height: 52px;
    font-size: 26px;
  }

  .brand-title {
    font-size: 1.1rem;
  }

  .brand-tagline {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-topbar {
    font-size: 10px;
  }

  .topbar-content {
    padding: 4px 10px;
  }

  .topbar-badge {
    font-size: 10px;
    gap: 4px;
  }

  .topbar-phone {
    font-size: 10.5px;
    gap: 4px;
  }

  .site-content {
    padding-top: 90px;
  }
}
</style>
