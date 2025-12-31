<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData } from 'vitepress'
import { ref, computed } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()
const { isDark } = useData()
const mobileMenuOpen = ref(false)

// Helper to check if a nav link is active
const isActiveLink = (linkPath) => {
  const currentPath = route.path
  // Normalize paths by removing .html extension and trailing slashes
  const normalizedCurrent = currentPath.replace(/\.html$/, '').replace(/\/$/, '') || '/'
  const normalizedLink = linkPath.replace(/\/$/, '') || '/'
  return normalizedCurrent === normalizedLink
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

const navLinks = [
  { text: 'Home', link: '/' },
  { text: 'About Us', link: '/about' },
  { text: 'Life Insurance', link: '/life-insurance' },
  { text: 'Health Insurance', link: '/health-insurance' },
  { text: 'Mutual Funds', link: '/mutual-funds' },
  { text: 'Loans', link: '/loans' },
  { text: 'Contact Us', link: '/contact' }
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
    <header class="site-header">
      <div class="header-top">
        <div class="header-container">
          <a href="/" class="site-logo">
            <span class="logo-text">MRP Associates</span>
          </a>
          
          <div class="header-actions">
            <div class="header-contact">
              <a href="tel:+919443339889" class="contact-btn phone-btn">
                <span class="contact-icon">📞</span>
                <span class="contact-text">+91 94433 39889</span>
              </a>
              <a href="mailto:contact@mrpassociates.co.in" class="contact-btn email-btn">
                <span class="contact-icon">✉️</span>
                <span class="contact-text">contact@mrpassociates.co.in</span>
              </a>
            </div>
            
            <div class="header-social">
              <a 
                v-for="social in socialLinks" 
                :key="social.icon" 
                :href="social.url" 
                :title="social.label"
                class="social-icon"
                :class="social.icon"
                target="_blank"
                rel="noopener"
              >
                <i :class="social.faIcon"></i>
              </a>
            </div>
            
            <button class="dark-mode-btn" @click="toggleDarkMode" :title="isDark ? 'Light Mode' : 'Dark Mode'">
              <span v-if="isDark" class="mode-icon">☀️</span>
              <span v-else class="mode-icon">🌙</span>
            </button>
          </div>
          
          <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <nav class="header-nav" :class="{ open: mobileMenuOpen }">
        <div class="nav-container">
          <a 
            v-for="link in navLinks" 
            :key="link.link" 
            :href="link.link" 
            class="nav-link"
            :class="{ active: isActiveLink(link.link) }"
            @click="mobileMenuOpen = false"
          >
            {{ link.text }}
          </a>
        </div>
      </nav>
    </header>
    <main class="site-content">
      <Layout>
        <template #nav-bar-content-after>
          <span></span>
        </template>
      </Layout>
    </main>
  </div>
</template>

<style scoped>
.custom-layout {
  min-height: 100vh;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.dark .site-header {
  background: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.header-top {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.dark .header-top {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.site-logo {
  text-decoration: none;
  flex-shrink: 0;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  justify-content: flex-end;
}

.header-contact {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white !important;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.email-btn {
  background: linear-gradient(135deg, #10b981, #059669);
}

.email-btn:hover {
  background: linear-gradient(135deg, #059669, #047857);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.contact-icon {
  font-size: 1rem;
}

/* Social Icons */
.header-social {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 11px;
  font-weight: 700;
  color: white !important;
}

.social-icon:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-icon.fb { background: #1877f2; }
.social-icon.tw { background: #1da1f2; }
.social-icon.li { background: #0a66c2; }
.social-icon.ig { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.social-icon.wa { background: #25d366; }

.social-icon i {
  font-size: 14px;
  line-height: 1;
}

/* Dark Mode Button */
.dark-mode-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.dark .dark-mode-btn {
  border-color: #374151;
  background: #1f2937;
}

.dark-mode-btn:hover {
  border-color: #3b82f6;
  background: #eff6ff;
}

.dark .dark-mode-btn:hover {
  border-color: #60a5fa;
  background: #1e3a5f;
}

.mode-icon {
  font-size: 1.2rem;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 5px;
  flex-shrink: 0;
}

.mobile-menu-btn span {
  display: block;
  width: 24px;
  height: 2px;
  background: #1e293b;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.dark .mobile-menu-btn span {
  background: #f1f5f9;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.header-nav {
  background: linear-gradient(135deg, #1e293b, #0f172a);
}

.dark .header-nav {
  background: linear-gradient(135deg, #0f172a, #020617);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nav-link {
  padding: 14px 18px;
  color: rgba(255, 255, 255, 0.85) !important;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background: #3b82f6;
  border-radius: 3px 3px 0 0;
}

.site-content {
  padding-top: 110px;
}

/* Hide default VitePress nav */
.site-content :deep(.VPNav) {
  display: none !important;
}

@media (max-width: 1100px) {
  .header-social {
    display: none;
  }
}

@media (max-width: 968px) {
  .header-container {
    padding: 10px 16px;
  }
  
  .contact-text {
    display: none;
  }
  
  .contact-btn {
    padding: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
  }
  
  .contact-icon {
    margin: 0;
  }
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .header-actions {
    gap: 10px;
  }
  
  .header-contact {
    gap: 8px;
  }
  
  .phone-btn {
    display: flex !important;
  }
  
  .header-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .header-nav.open {
    max-height: 500px;
  }
  
  .nav-container {
    flex-direction: column;
    padding: 8px 16px;
    gap: 0;
  }
  
  .nav-link {
    width: 100%;
    text-align: center;
    padding: 14px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-link:last-child {
    border-bottom: none;
  }
  
  .nav-link.active::after {
    display: none;
  }
  
  .site-content {
    padding-top: 65px;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.1rem;
  }
  
  .dark-mode-btn {
    width: 36px;
    height: 36px;
  }
  
  .contact-btn {
    width: 36px;
    height: 36px;
    padding: 8px;
  }
  
  .mode-icon {
    font-size: 1rem;
  }
}
</style>
