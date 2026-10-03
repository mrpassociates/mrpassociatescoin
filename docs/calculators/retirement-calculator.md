---
title: Retirement Corpus Calculator - MRP Associates
description: Free online retirement planner to estimate your required retirement corpus, future monthly living expenses with inflation, and necessary monthly SIP.
---

<script setup>
import { ref, computed } from 'vue'

const currentAge = ref(32)
const retirementAge = ref(60)
const monthlyExpenses = ref(50000)
const inflationRate = ref(6)
const returnRate = ref(12)
const lifeExpectancy = ref(85)

const yearsToRetirement = computed(() => {
  return Math.max(1, Number(retirementAge.value) - Number(currentAge.value))
})

const retirementPeriod = computed(() => {
  return Math.max(1, Number(lifeExpectancy.value) - Number(retirementAge.value))
})

const expensesAtRetirement = computed(() => {
  const inflationFactor = Math.pow(1 + Number(inflationRate.value) / 100, yearsToRetirement.value)
  return Math.round(Number(monthlyExpenses.value) * inflationFactor)
})

const requiredCorpus = computed(() => {
  const annualExpenses = expensesAtRetirement.value * 12
  const realReturn = 0.04
  const years = retirementPeriod.value
  const corpus = annualExpenses * ((1 - Math.pow(1 + realReturn, -years)) / realReturn)
  return Math.round(corpus / 100000) * 100000
})

const monthlySIP = computed(() => {
  const r = Number(returnRate.value) / 100 / 12
  const n = yearsToRetirement.value * 12
  const FV = requiredCorpus.value
  const monthlyAmount = (FV * r) / ((Math.pow(1 + r, n) - 1) * (1 + r))
  return Math.round(monthlyAmount)
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
<i class="fas fa-umbrella-beach"></i> Pension &amp; Golden Years Tool
</div>
<h1>Retirement Corpus Calculator</h1>
<p>Determine the nest egg required to maintain your living standards post-retirement, factoring in realistic inflation.</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">
<!-- Age Inputs -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
<div class="calc-input-group">
<label>
<span>Current Age</span>
<span style="color: #2563eb; font-weight: 800;">{{ currentAge }} Yrs</span>
</label>
<input type="range" v-model="currentAge" min="20" max="55" step="1">
</div>
<div class="calc-input-group">
<label>
<span>Planned Retirement</span>
<span style="color: #2563eb; font-weight: 800;">{{ retirementAge }} Yrs</span>
</label>
<input type="range" v-model="retirementAge" min="45" max="75" step="1">
</div>
</div>

<!-- Current Household Expenses -->
<div class="calc-input-group">
<label>
<span>Current Monthly Household Expenses (₹)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(monthlyExpenses) }}</span>
</label>
<input type="range" v-model="monthlyExpenses" min="15000" max="300000" step="5000">
<input type="number" v-model="monthlyExpenses" min="10000" max="1000000" step="5000" style="margin-top: 10px;">
<p class="input-hint">Your current monthly lifestyle outgo (excluding EMIs that will end before retirement)</p>
</div>

<!-- Economic Assumptions -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
<div class="calc-input-group">
<label>
<span>Expected Inflation</span>
<span style="color: #2563eb; font-weight: 800;">{{ inflationRate }}% p.a.</span>
</label>
<input type="range" v-model="inflationRate" min="4" max="10" step="0.5">
</div>
<div class="calc-input-group">
<label>
<span>Pre-Retirement SIP Return</span>
<span style="color: #2563eb; font-weight: 800;">{{ returnRate }}% p.a.</span>
</label>
<input type="range" v-model="returnRate" min="8" max="16" step="0.5">
</div>
</div>

<!-- Life Expectancy -->
<div class="calc-input-group">
<label>
<span>Life Expectancy Estimate</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">{{ lifeExpectancy }} Years</span>
</label>
<input type="range" v-model="lifeExpectancy" min="70" max="100" step="1">
<p class="input-hint">Average urban Indian life expectancy is currently 80–85 years</p>
</div>
</div>

<!-- Output Box -->
<div class="calc-result">
<h3>Required Retirement Corpus</h3>
<div class="result-value">₹{{ formatNumber(requiredCorpus) }}</div>
<p class="result-label" style="font-size: 1.1rem; color: #2563eb; font-weight: 700;">
Estimated Corpus: {{ formatCurrencyCompact(requiredCorpus) }}
</p>

<div class="calc-breakdown">
<h4>Retirement Blueprint</h4>
<div class="breakdown-item">
<span class="label">Years Remaining to Accumulate</span>
<span class="value">{{ yearsToRetirement }} Years</span>
</div>
<div class="breakdown-item">
<span class="label">Inflated Monthly Cost of Living at Age {{ retirementAge }}</span>
<span class="value" style="color: #d97706;">₹{{ formatNumber(expensesAtRetirement) }} / mo</span>
</div>
<div class="breakdown-item">
<span class="label">Retirement Annuity Span</span>
<span class="value">{{ retirementPeriod }} Years (Age {{ retirementAge }} to {{ lifeExpectancy }})</span>
</div>
<div class="breakdown-item">
<span class="label">Monthly SIP Needed from Today</span>
<span class="value" style="color: #059669; font-size: 1.15rem;">₹{{ formatNumber(monthlySIP) }} / mo</span>
</div>
</div>
</div>
</div>

<div class="content-section" style="padding: 0;">
<h2>Understanding Inflation in Retirement Planning</h2>
<p>
The single biggest threat to retirement is the compounding effect of inflation. At a modest 6% inflation rate, a household budget of ₹50,000 per month today will escalate to over <strong>₹2,87,000 per month</strong> in 30 years just to buy the exact same goods and healthcare!
</p>

<h2>The 3 Pillars of Retirement Security</h2>
<div class="features-list">
<div class="feature-item">
<div class="feature-icon" style="color: #2563eb;"><i class="fas fa-seedling"></i></div>
<div>
<h4>Equity SIP Accumulation</h4>
<p>Maximizes growth during earning years to build the necessary multi-crore corpus.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #10b981;"><i class="fas fa-hand-holding-dollar"></i></div>
<div>
<h4>Systematic Withdrawal Plan (SWP)</h4>
<p>Generates tax-efficient monthly income from mutual funds post-retirement.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #f59e0b;"><i class="fas fa-shield-virus"></i></div>
<div>
<h4>Independent Senior Health Cover</h4>
<p>Protects your retirement savings from being wiped out by sudden medical emergencies.</p>
</div>
</div>
</div>

<div class="cta-box" style="margin-top: 40px;">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Start Your Personal Retirement Plan</h3>
<p>MRP Associates builds tailored pension and SWP portfolios to ensure you never outlive your money.</p>
<div style="margin-top: 20px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
<a href="/contact" class="btn-primary" style="background: #ffffff; color: #1d4ed8 !important;">
<i class="fas fa-calendar-check"></i> Book Retirement Consultation
</a>
<a href="tel:+919443339889" class="btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff !important; border-color: rgba(255,255,255,0.3);">
<i class="fas fa-phone-alt"></i> Speak to Pension Planner
</a>
</div>
</div>
</div>
</div>
