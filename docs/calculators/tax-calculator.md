---
title: Income Tax Savings Calculator - MRP Associates
description: Free Indian Income Tax Calculator to evaluate tax liability under Old vs New Tax Regimes and calculate tax savings through 80C, 80D, and NPS.
---

<script setup>
import { ref, computed } from 'vue'

const grossIncome = ref(1500000)
const standardDeduction = ref(75000)
const section80c = ref(150000)
const section80d = ref(25000)
const section80ccd = ref(50000)
const homeLoanInterest = ref(150000)

const totalDeductions = computed(() => {
  return Number(standardDeduction.value) + Number(section80c.value) + Number(section80d.value) + Number(section80ccd.value) + Number(homeLoanInterest.value)
})

const taxableIncome = computed(() => {
  const taxable = Number(grossIncome.value) - totalDeductions.value
  return Math.max(0, taxable)
})

const taxBeforeCess = computed(() => {
  let tax = 0
  const income = taxableIncome.value
  
  if (income <= 250000) {
    tax = 0
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05
  } else if (income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.20
  } else {
    tax = 12500 + 100000 + (income - 1000000) * 0.30
  }
  
  if (taxableIncome.value <= 500000) {
    tax = Math.max(0, tax - 12500)
  }
  
  return Math.round(tax)
})

const cess = computed(() => {
  return Math.round(taxBeforeCess.value * 0.04)
})

const totalTax = computed(() => {
  return taxBeforeCess.value + cess.value
})

const taxWithoutDeductions = computed(() => {
  let tax = 0
  const income = Math.max(0, Number(grossIncome.value) - Number(standardDeduction.value))
  
  if (income <= 250000) {
    tax = 0
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05
  } else if (income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.20
  } else {
    tax = 12500 + 100000 + (income - 1000000) * 0.30
  }
  
  return Math.round(tax * 1.04)
})

const taxSavings = computed(() => {
  return Math.max(0, taxWithoutDeductions.value - totalTax.value)
})

const formatNumber = (num) => {
  return Number(num).toLocaleString('en-IN')
}

const formatCurrencyCompact = (val) => {
  if (val >= 10000000) {
    return '₹' + (val / 10000000).toFixed(2) + ' Cr'
  } else if (val >= 100000) {
    return '₹' + (val / 100000).toFixed(2) + ' Lakhs'
  }
  return '₹' + Number(val).toLocaleString('en-IN')
}
</script>

<div class="page-header">
<div class="page-header-badge">
<i class="fas fa-receipt"></i> Tax Optimization Tool
</div>
<h1>Tax Savings Calculator</h1>
<p>Evaluate your tax liability and discover how much you can save under Section 80C, 80D, and NPS investments.</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">
<!-- Gross Income -->
<div class="calc-input-group">
<label>
<span>Gross Annual Income (CTC) (₹)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(grossIncome) }} ({{ formatCurrencyCompact(grossIncome) }})</span>
</label>
<input type="range" v-model="grossIncome" min="500000" max="5000000" step="50000">
<input type="number" v-model="grossIncome" min="100000" max="100000000" step="50000" style="margin-top: 10px;">
<p class="input-hint">Total annual gross income from salary, business, and interest</p>
</div>

<!-- Section 80C -->
<div class="calc-input-group">
<label>
<span>Section 80C Investments (₹)</span>
<span style="color: #2563eb; font-weight: 800;">₹{{ formatNumber(section80c) }}</span>
</label>
<input type="range" v-model="section80c" min="0" max="150000" step="5000">
<p class="input-hint">ELSS Tax Saving Mutual Funds, Term Life Premiums, PPF, EPF (Capped at ₹1.5 Lakhs)</p>
</div>

<!-- Section 80D -->
<div class="calc-input-group">
<label>
<span>Section 80D Health Insurance (₹)</span>
<span style="color: #2563eb; font-weight: 800;">₹{{ formatNumber(section80d) }}</span>
</label>
<input type="range" v-model="section80d" min="0" max="100000" step="5000">
<p class="input-hint">Health insurance premiums for self &amp; family (up to ₹25k) + senior parents (up to ₹50k)</p>
</div>

<!-- Section 80CCD(1B) NPS -->
<div class="calc-input-group">
<label>
<span>Section 80CCD(1B) National Pension System (NPS)</span>
<span style="color: #2563eb; font-weight: 800;">₹{{ formatNumber(section80ccd) }}</span>
</label>
<input type="range" v-model="section80ccd" min="0" max="50000" step="5000">
<p class="input-hint">Additional ₹50,000 deduction exclusively for NPS Tier-1 accounts</p>
</div>

<!-- Home Loan Interest Section 24b -->
<div class="calc-input-group">
<label>
<span>Section 24(b) Home Loan Interest (₹)</span>
<span style="color: #2563eb; font-weight: 800;">₹{{ formatNumber(homeLoanInterest) }}</span>
</label>
<input type="range" v-model="homeLoanInterest" min="0" max="200000" step="10000">
<p class="input-hint">Interest paid on home loan for self-occupied residential property (up to ₹2 Lakhs)</p>
</div>
</div>

<!-- Output Box -->
<div class="calc-result">
<h3>Estimated Tax Payable</h3>
<div class="result-value">₹{{ formatNumber(totalTax) }}</div>
<p class="result-label" style="font-weight: 700; color: #64748b;">Includes 4% Health &amp; Education Cess</p>

<div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 14px; margin: 20px 0;">
<span style="display: block; font-size: 13px; color: #065f46; font-weight: 600;">Direct Tax Saved via Deductions:</span>
<span style="font-family: var(--vp-font-family-base); font-size: 1.6rem; font-weight: 800; color: #059669;">₹{{ formatNumber(taxSavings) }}</span>
</div>

<div class="calc-breakdown">
<h4>Computation Summary</h4>
<div class="breakdown-item">
<span class="label">Gross Total Income</span>
<span class="value">₹{{ formatNumber(grossIncome) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Total Tax Exemptions Claimed</span>
<span class="value" style="color: #059669;">-₹{{ formatNumber(totalDeductions) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Net Taxable Income</span>
<span class="value">₹{{ formatNumber(taxableIncome) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Tax Payable Before Deductions</span>
<span class="value">₹{{ formatNumber(taxWithoutDeductions) }}</span>
</div>
</div>
</div>
</div>

<div class="content-section" style="padding: 0;">
<h2>Top Tax-Saving Financial Instruments</h2>
<div class="features-list">
<div class="feature-item">
<div class="feature-icon" style="color: #2563eb;"><i class="fas fa-chart-pie"></i></div>
<div>
<h4>ELSS Mutual Funds (80C)</h4>
<p>Shortest lock-in among all tax savers (3 years) with high wealth growth potential through equities.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #10b981;"><i class="fas fa-hospital-user"></i></div>
<div>
<h4>Health Insurance Premium (80D)</h4>
<p>Safeguards family healthcare while slashing up to ₹75,000 from your taxable salary.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #f59e0b;"><i class="fas fa-shield-heart"></i></div>
<div>
<h4>Term Life Insurance (80C &amp; 10(10D))</h4>
<p>Annual premiums are 100% tax deductible and death benefits are completely tax-exempt.</p>
</div>
</div>
</div>

<div class="cta-box" style="margin-top: 40px;">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Optimize Your Tax Savings for This Financial Year</h3>
<p>Consult MRP Associates to structure your ELSS, health insurance, and life coverage for maximum legal tax reduction.</p>
<div style="margin-top: 20px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
<a href="/contact" class="btn-primary" style="background: #ffffff; color: #1d4ed8 !important;">
<i class="fas fa-receipt"></i> Get Free Tax-Saving Plan
</a>
<a href="tel:+919443339889" class="btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff !important; border-color: rgba(255,255,255,0.3);">
<i class="fas fa-phone-alt"></i> Speak to Advisor
</a>
</div>
</div>
</div>
</div>
