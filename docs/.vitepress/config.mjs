import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MRP Associates',
  description: 'Your Trusted Partner for Life Insurance, Health Insurance, Mutual Funds & Loans',
  markdown: {
    html: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'MRP Associates',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/about' },
      { text: 'Life Insurance', link: '/life-insurance' },
      { text: 'Health Insurance', link: '/health-insurance' },
      { text: 'Mutual Funds', link: '/mutual-funds' },
      { text: 'Loans', link: '/loans' },
      { text: 'Contact Us', link: '/contact' }
    ],
    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com' },
      { icon: 'twitter', link: 'https://twitter.com' },
      { icon: 'linkedin', link: 'https://linkedin.com' },
      { icon: 'instagram', link: 'https://instagram.com' }
    ],
    footer: {
      message: 'Your trusted partner for all financial services',
      copyright: `© ${new Date().getFullYear()} MRP Associates. All rights reserved.`
    }
  }
})
