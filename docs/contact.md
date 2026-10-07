---
title: Contact Us - MRP Associates
description: Get in touch with our certified financial planners and insurance advisors in Karur, Tamil Nadu.
---

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const phoneNumber = ref('')
const selectedService = ref('Life Insurance')
const userMessage = ref('')
const formSubmitted = ref(false)

const sendToWhatsApp = () => {
  if (!fullName.value || !phoneNumber.value) {
    alert('Please enter your name and phone number.')
    return
  }
  
  const text = `Hello MRP Associates,%0A%0AMy Name: ${encodeURIComponent(fullName.value)}%0APhone: ${encodeURIComponent(phoneNumber.value)}%0AService Interested In: ${encodeURIComponent(selectedService.value)}%0AMessage: ${encodeURIComponent(userMessage.value || 'I would like to schedule a consultation.')}`
  
  const url = `https://wa.me/919443339889?text=${text}`
  window.open(url, '_blank')
  formSubmitted.value = true
}
</script>

<div class="page-header">
<div class="page-header-badge">
<i class="fas fa-headset"></i> Quick Support &amp; Consultation
</div>
<h1>Get In Touch With Us</h1>
<p>Have questions about insurance coverage, mutual fund SIPs, or loan eligibility? Our expert advisors are here to help.</p>
</div>

<div class="contact-page">
<!-- 4 Action Cards -->
<div class="contact-cards">
<div class="contact-card">
<div class="card-icon" style="color: #2563eb;">
<i class="fas fa-phone-volume"></i>
</div>
<h3>Call Directly</h3>
<p>Speak to our senior advisors</p>
<p style="margin-top: 8px;">
  <a href="tel:+919443339889" style="font-weight: 700; color: #2563eb; text-decoration: none;">+91 94433 39889</a><br>
  <a href="tel:+918072074278" style="font-size: 13.5px; font-weight: 600; color: #475569; text-decoration: none;">+91 80720 74278</a>
</p>
<p style="margin-top: 4px; font-size: 11.5px; color: #64748b;">Office: 94875 57689 • 98433 89889</p>
</div>

<div class="contact-card">
<div class="card-icon" style="color: #25d366;">
<i class="fab fa-whatsapp"></i>
</div>
<h3>Instant WhatsApp</h3>
<p>Quick chat &amp; quote queries</p>
<p style="margin-top: 8px;"><a href="https://wa.me/919443339889?text=Hello%20MRP%20Associates,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener" style="font-weight: 700; color: #059669; text-decoration: none;">Chat on WhatsApp →</a></p>
<p style="margin-top: 4px; font-size: 11.5px; color: #64748b;">Direct response from founder &amp; team</p>
</div>

<div class="contact-card">
<div class="card-icon" style="color: #0284c7;">
<i class="far fa-envelope"></i>
</div>
<h3>Email Inquiries</h3>
<p>Send documentation &amp; questions</p>
<p style="margin-top: 8px;"><a href="mailto:mrpassociateskarur@gmail.com" style="font-weight: 700; color: #0284c7; text-decoration: none; word-break: break-all;">mrpassociateskarur@gmail.com</a></p>
<p style="margin-top: 4px; font-size: 11.5px; color: #64748b;">Alt: contact@mrpassociates.co.in</p>
</div>

<div class="contact-card">
<div class="card-icon" style="color: #f59e0b;">
<i class="fas fa-location-dot"></i>
</div>
<h3>Office Location</h3>
<p>No. 4, SR Complex (Near Uzhavar Sandhai / Police Station), Karur - 639 001</p>
<p style="margin-top: 8px; font-size: 12px; color: #64748b;">Mon - Sat: 9:30 AM - 7:00 PM</p>
</div>
</div>

<!-- Interactive Consultation Form & Office Info Split Grid -->
<div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 36px; margin: 40px 0;" class="contact-split-grid">
<!-- Form Card -->
<div style="background: #ffffff; padding: 36px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.08);" class="inquiry-form-card">
<h3 style="font-size: 1.4rem; font-weight: 800; margin-top: 0; margin-bottom: 8px;">Request a Free Consultation</h3>
<p style="font-size: 14px; color: #64748b; margin-bottom: 24px;">Fill in your details below and our financial advisor will reach out to you within 2 business hours.</p>

<div style="display: flex; flex-direction: column; gap: 18px;">
<div>
<label style="display: block; font-size: 13.5px; font-weight: 700; color: #334155; margin-bottom: 6px;">Your Full Name *</label>
<input 
type="text" 
v-model="fullName" 
placeholder="e.g. Ramesh Kumar"
style="width: 100%; padding: 12px 16px; border: 1.5px solid #cbd5e1; border-radius: 10px; font-size: 14.5px; outline: none;"
>
</div>

<div>
<label style="display: block; font-size: 13.5px; font-weight: 700; color: #334155; margin-bottom: 6px;">Mobile Number *</label>
<input 
type="tel" 
v-model="phoneNumber" 
placeholder="+91 98765 43210"
style="width: 100%; padding: 12px 16px; border: 1.5px solid #cbd5e1; border-radius: 10px; font-size: 14.5px; outline: none;"
>
</div>

<div>
<label style="display: block; font-size: 13.5px; font-weight: 700; color: #334155; margin-bottom: 6px;">Service Needed</label>
<select 
v-model="selectedService"
style="width: 100%; padding: 12px 16px; border: 1.5px solid #cbd5e1; border-radius: 10px; font-size: 14.5px; outline: none; background: white;"
>
<option value="Life Insurance">Life Insurance / Term Cover</option>
<option value="Health Insurance">Health &amp; Family Medical Cover</option>
<option value="Mutual Funds">Mutual Funds &amp; Monthly SIP</option>
<option value="Home Loan">Home Loan / Mortgage</option>
<option value="Business Loan">Business / MSME Loan</option>
<option value="Portfolio Review">Full Portfolio Review &amp; Tax Planning</option>
</select>
</div>

<div>
<label style="display: block; font-size: 13.5px; font-weight: 700; color: #334155; margin-bottom: 6px;">Any specific requirements? (Optional)</label>
<textarea 
v-model="userMessage" 
placeholder="Tell us about your coverage requirements or financial goals..."
rows="3"
style="width: 100%; padding: 12px 16px; border: 1.5px solid #cbd5e1; border-radius: 10px; font-size: 14.5px; outline: none; resize: vertical;"
></textarea>
</div>

<div>
<button 
@click="sendToWhatsApp" 
class="btn-primary" 
style="width: 100%; justify-content: center; cursor: pointer; border: none; padding: 15px;"
>
<i class="fab fa-whatsapp" style="font-size: 18px;"></i>
<span>Submit via WhatsApp Instant Connect</span>
</button>
<p v-if="formSubmitted" style="font-size: 13px; color: #059669; font-weight: 700; text-align: center; margin: 8px 0 0;">
✓ Thank you! WhatsApp chat initiated with our advisory team.
</p>
</div>
</div>
</div>

<!-- Office Hours & Social Card -->
<div style="display: flex; flex-direction: column; gap: 24px;">
<div style="background: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);" class="office-info-card">
<h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 0; margin-bottom: 16px;">Working Hours</h3>
<div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px;">
<div style="display: flex; justify-content: space-between; padding-bottom: 8px; border-bottom: 1px solid #f1f5f9;">
<span style="color: #64748b;">Monday – Friday:</span>
<span style="font-weight: 700; color: #1e293b;">9:30 AM – 7:00 PM</span>
</div>
<div style="display: flex; justify-content: space-between; padding-bottom: 8px; border-bottom: 1px solid #f1f5f9;">
<span style="color: #64748b;">Saturday:</span>
<span style="font-weight: 700; color: #1e293b;">9:30 AM – 6:00 PM</span>
</div>
<div style="display: flex; justify-content: space-between;">
<span style="color: #64748b;">Sunday:</span>
<span style="font-weight: 700; color: #2563eb;">By Prior Appointment</span>
</div>
</div>
</div>

<div style="background: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);" class="office-info-card">
<h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 0; margin-bottom: 12px;">Social Channels</h3>
<p style="font-size: 14px; color: #64748b; margin-bottom: 18px;">Follow MRP Associates for market insights, mutual fund updates, and tax tips:</p>
<div class="social-links">
<a href="https://facebook.com" target="_blank" rel="noopener" class="social-link fb"><i class="fab fa-facebook-f"></i> Facebook</a>
<a href="https://twitter.com" target="_blank" rel="noopener" class="social-link tw"><i class="fab fa-x-twitter"></i> Twitter</a>
<a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link li"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
<a href="https://instagram.com" target="_blank" rel="noopener" class="social-link ig"><i class="fab fa-instagram"></i> Instagram</a>
<a href="https://wa.me/919443339889" target="_blank" rel="noopener" class="social-link wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
</div>
</div>
</div>
</div>

<!-- Office & Advisory Headquarters Card -->
<div class="photo-showcase-card" style="margin: 40px 0 30px;">
  <div class="showcase-media">
    <img src="/images/office/office-team-workstations.jpg" alt="MRP Associates Head Office in Karur - Workstations & Team" />
    <span class="media-badge"><i class="fas fa-building"></i> Karur Headquarters</span>
  </div>
  <div class="showcase-body">
    <h4>Welcome to MRP Associates — 22+ Years in Service of the People</h4>
    <p>
      Visit our advisory office located at <strong>No. 4, SR Complex (Near Uzhavar Sandhai / Police Station), Karur - 639 001</strong>. Meet Chief Advisor Mr. P.R. Prabhakaran and our dedicated advisory team for comprehensive financial planning, policy servicing, portfolio checkups, loan processing, or emergency claim filing assistance.
    </p>
    <div class="showcase-meta">
      <span><i class="fas fa-trophy text-gold"></i> 100+ Honors &amp; Awards Wall</span>
      <span><i class="fas fa-clock text-blue"></i> Mon - Sat: 9:30 AM – 7:00 PM</span>
      <span><i class="fas fa-phone-alt text-emerald"></i> +91 94433 39889 / 80720 74278</span>
    </div>
  </div>
</div>

<!-- Authentic Office Facilities & Consultation Gallery -->
<h2 style="font-size: 1.5rem; font-weight: 800; margin: 35px 0 16px;">Our Karur Advisory Premises</h2>
<p style="color: #64748b; margin-bottom: 24px;">Equipped with dedicated consultation cabins, modern document processing workstations, and welcoming client facilities.</p>

<div class="photo-gallery-grid cols-3" style="margin-bottom: 40px;">
  <div class="gallery-item-card">
    <div class="gallery-thumb-wrap">
      <img src="/images/office/client-consultation-desk.jpg" alt="Client Advisory Desk with Founder" />
      <span class="gallery-thumb-tag">Advisory Desk</span>
    </div>
    <div class="gallery-caption">
      <h5>One-on-One Client Consultation</h5>
      <p>Personalized portfolio review and retirement planning directly with Chief Advisor Mr. P.R. Prabhakaran.</p>
    </div>
  </div>

  <div class="gallery-item-card">
    <div class="gallery-thumb-wrap">
      <img src="/images/office/executive-cabin.jpg" alt="Executive Advisory Cabin" />
      <span class="gallery-thumb-tag">Executive Cabin</span>
    </div>
    <div class="gallery-caption">
      <h5>Executive Consultation Cabin</h5>
      <p>Quiet, private advisory chambers featuring our comprehensive wall of trophies and credentials.</p>
    </div>
  </div>

  <div class="gallery-item-card">
    <div class="gallery-thumb-wrap">
      <img src="/images/office/office-client-meeting.jpg" alt="Client Family Advisory Meeting" />
      <span class="gallery-thumb-tag">Family Advisory</span>
    </div>
    <div class="gallery-caption">
      <h5>Whole-Family Milestone Planning</h5>
      <p>Consultations for multi-generational wealth preservation, children's marriage, and sovereign guaranteed savings.</p>
    </div>
  </div>
</div>

<!-- Google Maps Interactive Location -->
<h2 style="font-size: 1.6rem; font-weight: 800; margin-top: 40px; margin-bottom: 16px;">Visit Our Karur Office</h2>
<div class="map-container">
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0430204208255!2d78.07259212605636!3d10.960122989200066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2faff522d9dd%3A0x10d3ec47d41f39b1!2sBus%20Stand%2C%20Madavilagam%2C%20Karur%2C%20Tamil%20Nadu%20639001!5e0!3m2!1sen!2sin!4v1767182137677!5m2!1sen!2sin" 
width="100%" 
height="400" 
style="border:0;" 
allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>

<div class="cta-box">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Emergency Claim Assistance?</h3>
<p>Existing client facing an urgent medical hospitalization or claim settlement query? Call our priority line: <strong>+91 94433 39889</strong> directly.</p>
</div>
</div>

<style>
@media (max-width: 860px) {
  .contact-split-grid {
    grid-template-columns: 1fr !important;
  }
}
.dark .inquiry-form-card,
.dark .office-info-card {
  background: #111827 !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}
.dark .inquiry-form-card input,
.dark .inquiry-form-card select,
.dark .inquiry-form-card textarea {
  background: #1f2937 !important;
  border-color: #374151 !important;
  color: #f1f5f9 !important;
}
.dark .inquiry-form-card label {
  color: #cbd5e1 !important;
}
</style>
