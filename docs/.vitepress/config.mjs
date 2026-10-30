import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: false,
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
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    outline: false,
    aside: false,
    logo: '/logo.png',
    siteTitle: 'MRP Associates',
    nav: [
      { text: 'About Us', link: '/about' },
      { text: 'Events & Achievements', link: '/events/' },
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
