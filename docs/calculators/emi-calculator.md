---
title: Loan EMI Calculator - MRP Associates
description: Calculate your monthly EMI, total interest outgo, and amortization breakdown for Home Loans, Car Loans, and Personal Loans.
---

<script setup>
import { ref, computed } from 'vue'

const loanAmount = ref(3000000)
const interestRate = ref(8.5)
const tenure = ref(20)

const emi = computed(() => {
  const P = Number(loanAmount.value)
  const R = Number(interestRate.value) / 12 / 100
  const N = Number(tenure.value) * 12
  if (R === 0) return Math.round(P / N)
  const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
  return Math.round(EMI)
})

const totalPayable = computed(() => {
  return emi.value * Number(tenure.value) * 12
})

const totalInterest = computed(() => {
  return Math.max(0, totalPayable.value - Number(loanAmount.value))
})

const principalPercent = computed(() => {
  if (!totalPayable.value) return 50
  return Math.round((Number(loanAmount.value) / totalPayable.value) * 100)
})

const interestPercent = computed(() => {
  return 100 - principalPercent.value
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
<i class="fas fa-calculator"></i> Loan Planning Tool
</div>
<h1>Loan EMI Calculator</h1>
<p>Determine your exact monthly outgo, total interest, and repayment schedule across various tenures.</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">
<!-- Input 1: Loan Amount -->
<div class="calc-input-group">
<label>
<span>Loan Amount (₹)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(loanAmount) }} ({{ formatCurrencyCompact(loanAmount) }})</span>
</label>
<input type="range" v-model="loanAmount" min="50000" max="20000000" step="50000">
<input type="number" v-model="loanAmount" min="50000" max="100000000" step="50000" style="margin-top: 10px;">
<p class="input-hint">Min: ₹50,000 | Max: ₹10,00,00,000</p>
</div>

<!-- Input 2: Interest Rate -->
<div class="calc-input-group">
<label>
<span>Interest Rate (% per annum)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">{{ interestRate }}% p.a.</span>
</label>
<input type="range" v-model="interestRate" min="5" max="22" step="0.05">
<p class="input-hint">Home Loans typically 8.35%–9.5% | Personal Loans 10.5%–16%</p>
</div>

<!-- Input 3: Tenure -->
<div class="calc-input-group">
<label>
<span>Loan Tenure (Years)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">{{ tenure }} Years ({{ tenure * 12 }} Months)</span>
</label>
<input type="range" v-model="tenure" min="1" max="30" step="1">
<p class="input-hint">Maximum 30 years for Home Loans, 5 years for Personal Loans</p>
</div>
</div>

<!-- Output Box -->
<div class="calc-result">
<h3>Monthly Equated Installment</h3>
<div class="result-value">₹{{ formatNumber(emi) }}</div>
<p class="result-label" style="font-weight: 700;">Monthly EMI for {{ tenure * 12 }} installments</p>

<!-- Ratio Bar -->
<div class="ratio-progress-bar">
<div class="ratio-bar-invested" :style="{ width: principalPercent + '%' }" title="Principal Loan"></div>
<div class="ratio-bar-interest" :style="{ width: interestPercent + '%' }" title="Total Interest"></div>
</div>
<div class="ratio-legend">
<span><span class="legend-dot" style="background: #2563eb;"></span> Principal: {{ principalPercent }}%</span>
<span><span class="legend-dot" style="background: #f59e0b;"></span> Interest: {{ interestPercent }}%</span>
</div>

<div class="calc-breakdown">
<h4>Loan Repayment Summary</h4>
<div class="breakdown-item">
<span class="label">Principal Borrowed</span>
<span class="value">₹{{ formatNumber(loanAmount) }} ({{ formatCurrencyCompact(loanAmount) }})</span>
</div>
<div class="breakdown-item">
<span class="label">Total Interest Payable</span>
<span class="value" style="color: #d97706;">₹{{ formatNumber(totalInterest) }} ({{ formatCurrencyCompact(totalInterest) }})</span>
</div>
<div class="breakdown-item">
<span class="label">Total Amount Payable (Principal + Interest)</span>
<span class="value" style="color: #2563eb; font-size: 1.1rem;">₹{{ formatNumber(totalPayable) }} ({{ formatCurrencyCompact(totalPayable) }})</span>
</div>
</div>
</div>
</div>

<div class="content-section" style="padding: 0;">
<h2>How EMI is Calculated</h2>
<p>
Equated Monthly Installment (EMI) is computed using the standard reducing-balance mathematical formula:
</p>
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 24px; font-family: monospace; font-size: 15px; margin: 16px 0;" class="formula-box">
EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
</div>
<p style="font-size: 13.5px; color: #64748b;">
Where <strong>P</strong> = Principal amount, <strong>R</strong> = Monthly interest rate (Annual rate / 12 / 100), and <strong>N</strong> = Number of monthly installments.
</p>

<h2>Smart Tips to Lower Your Overall Interest Outgo</h2>
<div class="features-list">
<div class="feature-item">
<div class="feature-icon" style="color: #2563eb;"><i class="fas fa-hand-holding-dollar"></i></div>
<div>
<h4>Make Prepayments Regularly</h4>
<p>Even paying 1 extra EMI each year directly reduces your principal and slashes tenure by years.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #10b981;"><i class="fas fa-percent"></i></div>
<div>
<h4>Maintain CIBIL Score Above 750</h4>
<p>Banks offer special concession rates (up to 0.50% lower) for individuals with healthy credit histories.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #f59e0b;"><i class="fas fa-rotate"></i></div>
<div>
<h4>Opt for Home Loan Balance Transfer</h4>
<p>If your current bank charges &gt;9.5%, our team can transfer your balance to a lower rate lender.</p>
</div>
</div>
</div>

<div class="cta-box" style="margin-top: 40px;">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Looking for the Best Loan Rates?</h3>
<p>MRP Associates compares 20+ banks and NBFCs to get you the lowest processing fees and interest rates.</p>
<div style="margin-top: 20px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
<a href="/contact" class="btn-primary" style="background: #ffffff; color: #1d4ed8 !important;">
<i class="fas fa-check-circle"></i> Check Loan Eligibility
</a>
<a href="tel:+919443339889" class="btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff !important; border-color: rgba(255,255,255,0.3);">
<i class="fas fa-phone-alt"></i> Speak to Loan Advisor
</a>
</div>
</div>
</div>
</div>

<style>
.dark .formula-box {
  background: #111827 !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
  color: #60a5fa !important;
}
</style>
