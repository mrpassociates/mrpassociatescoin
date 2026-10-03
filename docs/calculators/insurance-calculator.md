---
title: Insurance Coverage Calculator (HLV) - MRP Associates
description: Free Human Life Value calculator to compute the exact life insurance sum assured needed to protect your dependents and clear debts.
---

<script setup>
import { ref, computed } from 'vue'

const annualIncome = ref(1200000)
const currentAge = ref(32)
const retirementAge = ref(60)
const outstandingLoans = ref(2500000)
const dependents = ref(2)

const yearsToRetirement = computed(() => {
  return Math.max(1, Number(retirementAge.value) - Number(currentAge.value))
})

const incomeMultiplier = computed(() => {
  return Math.min(yearsToRetirement.value, 15)
})

const incomeReplacement = computed(() => {
  return Number(annualIncome.value) * incomeMultiplier.value
})

const educationFund = computed(() => {
  return Number(dependents.value) * 2000000
})

const emergencyFund = computed(() => {
  return Number(annualIncome.value) * 0.5
})

const recommendedCoverage = computed(() => {
  const total = incomeReplacement.value + Number(outstandingLoans.value) + educationFund.value + emergencyFund.value
  return Math.round(total / 100000) * 100000
})

const formatNumber = (num) => {
  return Number(num).toLocaleString('en-IN')
}

const formatCurrencyCompact = (val) => {
  if (val >= 10000000) {
    return '₹' + (val / 10000000).toFixed(2) + ' Crores'
  } else if (val >= 100000) {
    return '₹' + (val / 100000).toFixed(2) + ' Lakhs'
  }
  return '₹' + Number(val).toLocaleString('en-IN')
}
</script>

<div class="page-header">
<div class="page-header-badge">
<i class="fas fa-shield-heart"></i> Human Life Value (HLV) Tool
</div>
<h1>Insurance Need Calculator</h1>
<p>Scientifically compute the exact life insurance sum assured required to protect your dependents and clear liabilities.</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">
<!-- Input 1: Gross Annual Income -->
<div class="calc-input-group">
<label>
<span>Your Annual Gross Income (₹)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(annualIncome) }}</span>
</label>
<input type="range" v-model="annualIncome" min="300000" max="10000000" step="50000">
<input type="number" v-model="annualIncome" min="100000" max="100000000" step="50000" style="margin-top: 10px;">
<p class="input-hint">Your current yearly earnings before taxes</p>
</div>

<!-- Input 2: Current Age & Retirement -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
<div class="calc-input-group">
<label>
<span>Current Age</span>
<span style="color: #2563eb; font-weight: 800;">{{ currentAge }} Yrs</span>
</label>
<input type="range" v-model="currentAge" min="18" max="60" step="1">
</div>
<div class="calc-input-group">
<label>
<span>Target Retirement</span>
<span style="color: #2563eb; font-weight: 800;">{{ retirementAge }} Yrs</span>
</label>
<input type="range" v-model="retirementAge" min="50" max="75" step="1">
</div>
</div>

<!-- Input 3: Outstanding Debts -->
<div class="calc-input-group">
<label>
<span>Outstanding Debts &amp; Home Loans (₹)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(outstandingLoans) }}</span>
</label>
<input type="range" v-model="outstandingLoans" min="0" max="20000000" step="100000">
<input type="number" v-model="outstandingLoans" min="0" max="100000000" step="100000" style="margin-top: 10px;">
<p class="input-hint">Combined balance of home, vehicle, and personal loans</p>
</div>

<!-- Input 4: Number of Dependents -->
<div class="calc-input-group">
<label>
<span>Number of Financially Dependent Family Members</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">{{ dependents }} Dependents</span>
</label>
<input type="range" v-model="dependents" min="0" max="8" step="1">
<p class="input-hint">Children, non-working spouse, and dependent elderly parents</p>
</div>
</div>

<!-- Output Result Box -->
<div class="calc-result">
<h3>Recommended Term Life Cover</h3>
<div class="result-value">₹{{ formatNumber(recommendedCoverage) }}</div>
<p class="result-label" style="font-size: 1.1rem; color: #2563eb; font-weight: 700;">
Recommended Sum Assured: {{ formatCurrencyCompact(recommendedCoverage) }}
</p>

<div class="calc-breakdown">
<h4>Need Assessment Breakdown</h4>
<div class="breakdown-item">
<span class="label">Family Income Replacement ({{ incomeMultiplier }}x annual income)</span>
<span class="value">₹{{ formatNumber(incomeReplacement) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Immediate Debt &amp; Liability Payoff</span>
<span class="value">₹{{ formatNumber(outstandingLoans) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Children's Education &amp; Milestone Fund</span>
<span class="value">₹{{ formatNumber(educationFund) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Family Emergency Liquid Reserve</span>
<span class="value">₹{{ formatNumber(emergencyFund) }}</span>
</div>
</div>
</div>
</div>

<div class="content-section" style="padding: 0;">
<h2>Why Calculate Human Life Value?</h2>
<p>
Most Indian families are severely underinsured, holding traditional endowment plans with sum assured of only ₹2 to ₹5 Lakhs. In the unfortunate event of the breadwinner's demise, this amount is exhausted within a single year.
</p>
<p>
A scientifically calculated term policy guarantees that your dependents receive a substantial corpus that can be placed in secure instruments to generate perpetual monthly income replacing your salary.
</p>

<div class="cta-box" style="margin-top: 40px;">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Get Term Plan Quotes for {{ formatCurrencyCompact(recommendedCoverage) }}</h3>
<p>Compare premium rates across LIC, HDFC Life, ICICI Prudential, and Max Life with zero agent bias.</p>
<div style="margin-top: 20px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
<a href="/contact" class="btn-primary" style="background: #ffffff; color: #1d4ed8 !important;">
<i class="fas fa-file-invoice"></i> Get Free Term Quotes
</a>
<a href="tel:+919443339889" class="btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff !important; border-color: rgba(255,255,255,0.3);">
<i class="fas fa-phone-alt"></i> Speak to Life Advisor
</a>
</div>
</div>
</div>
</div>
