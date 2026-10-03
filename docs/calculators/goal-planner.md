---
title: Milestone Financial Goal Planner - MRP Associates
description: Free Goal Planner to calculate the monthly SIP needed to reach milestones like child higher education, dream home down payment, and weddings.
---

<script setup>
import { ref, computed } from 'vue'

const goalName = ref('Dream Home Down Payment')
const targetAmount = ref(3000000)
const currentSavings = ref(300000)
const timeframe = ref(6)
const returnRate = ref(12)
const inflationRate = ref(6)

const inflationAdjustedTarget = computed(() => {
  const adjustedAmount = Number(targetAmount.value) * Math.pow(1 + Number(inflationRate.value) / 100, Number(timeframe.value))
  return Math.round(adjustedAmount)
})

const currentSavingsFV = computed(() => {
  const fv = Number(currentSavings.value) * Math.pow(1 + Number(returnRate.value) / 100, Number(timeframe.value))
  return Math.round(fv)
})

const gapAmount = computed(() => {
  const gap = inflationAdjustedTarget.value - currentSavingsFV.value
  return Math.max(0, gap)
})

const monthlySIP = computed(() => {
  if (gapAmount.value <= 0) return 0
  
  const r = Number(returnRate.value) / 100 / 12
  const n = Number(timeframe.value) * 12
  const FV = gapAmount.value
  const monthlyAmount = (FV * r) / ((Math.pow(1 + r, n) - 1) * (1 + r))
  return Math.round(monthlyAmount)
})

const totalInvestment = computed(() => {
  return monthlySIP.value * Number(timeframe.value) * 12
})

const expectedReturns = computed(() => {
  return Math.max(0, gapAmount.value - totalInvestment.value)
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
<i class="fas fa-bullseye"></i> Milestone Planning Tool
</div>
<h1>Milestone Goal Planner</h1>
<p>Map your life dreams into precise monthly SIP savings, adjusted for realistic future inflation.</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">
<!-- Goal Name -->
<div class="calc-input-group">
<label>
<span>Goal Milestone</span>
<span style="color: #2563eb; font-weight: 800;">{{ goalName }}</span>
</label>
<input type="text" v-model="goalName" placeholder="e.g. Child Medical Degree, Dream Home, Wedding">
</div>

<!-- Target Amount in Today's Terms -->
<div class="calc-input-group">
<label>
<span>Target Amount in Today's Value (₹)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(targetAmount) }} ({{ formatCurrencyCompact(targetAmount) }})</span>
</label>
<input type="range" v-model="targetAmount" min="100000" max="20000000" step="50000">
<input type="number" v-model="targetAmount" min="50000" max="100000000" step="50000" style="margin-top: 10px;">
<p class="input-hint">How much this goal costs if you had to pay for it today</p>
</div>

<!-- Existing Savings -->
<div class="calc-input-group">
<label>
<span>Current Savings Already Allocated (₹)</span>
<span style="color: #2563eb; font-weight: 800;">₹{{ formatNumber(currentSavings) }}</span>
</label>
<input type="range" v-model="currentSavings" min="0" max="10000000" step="25000">
<input type="number" v-model="currentSavings" min="0" max="100000000" step="25000" style="margin-top: 10px;">
<p class="input-hint">Funds, deposits, or gold already earmarked toward this goal</p>
</div>

<!-- Time to Goal & Rates -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
<div class="calc-input-group">
<label>
<span>Time Horizon</span>
<span style="color: #2563eb; font-weight: 800;">{{ timeframe }} Years</span>
</label>
<input type="range" v-model="timeframe" min="1" max="25" step="1">
</div>
<div class="calc-input-group">
<label>
<span>Expected Return</span>
<span style="color: #2563eb; font-weight: 800;">{{ returnRate }}% p.a.</span>
</label>
<input type="range" v-model="returnRate" min="6" max="16" step="0.5">
</div>
</div>

<!-- Inflation Rate -->
<div class="calc-input-group">
<label>
<span>Expected Education/Goal Inflation</span>
<span style="color: #2563eb; font-weight: 800;">{{ inflationRate }}% p.a.</span>
</label>
<input type="range" v-model="inflationRate" min="4" max="12" step="0.5">
<p class="input-hint">College education typically inflates at 8–10%; lifestyle goals at 6%</p>
</div>
</div>

<!-- Output Box -->
<div class="calc-result">
<h3>Monthly SIP Required for {{ goalName }}</h3>
<div class="result-value">₹{{ formatNumber(monthlySIP) }}</div>
<p class="result-label" style="font-weight: 700; color: #059669;">Per Month for {{ timeframe }} Years</p>

<div class="calc-breakdown">
<h4>Target &amp; Gap Breakdown</h4>
<div class="breakdown-item">
<span class="label">Today's Estimated Cost</span>
<span class="value">₹{{ formatNumber(targetAmount) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Future Cost with {{ inflationRate }}% Inflation</span>
<span class="value" style="color: #d97706;">₹{{ formatNumber(inflationAdjustedTarget) }} ({{ formatCurrencyCompact(inflationAdjustedTarget) }})</span>
</div>
<div class="breakdown-item">
<span class="label">Growth of Existing Savings</span>
<span class="value">₹{{ formatNumber(currentSavingsFV) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Remaining Goal Gap to Fund</span>
<span class="value" style="color: #2563eb; font-weight: 800;">₹{{ formatNumber(gapAmount) }} ({{ formatCurrencyCompact(gapAmount) }})</span>
</div>
<div class="breakdown-item">
<span class="label">Total SIP Outgo vs Capital Gains</span>
<span class="value">SIP: ₹{{ formatNumber(totalInvestment) }} | Gains: ₹{{ formatNumber(expectedReturns) }}</span>
</div>
</div>
</div>
</div>

<div class="content-section" style="padding: 0;">
<h2>Popular Life Milestones We Help Fund</h2>
<div class="features-list">
<div class="feature-item">
<div class="feature-icon" style="color: #2563eb;"><i class="fas fa-graduation-cap"></i></div>
<div>
<h4>Higher Education</h4>
<p>Undergraduate or foreign master's programs funded without burdening your children with massive student debt.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #10b981;"><i class="fas fa-house-chimney"></i></div>
<div>
<h4>Property Down Payment</h4>
<p>Accumulate 20–30% cash margin to buy land or an apartment while avoiding expensive personal loans.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #f59e0b;"><i class="fas fa-rings-wedding"></i></div>
<div>
<h4>Children's Wedding</h4>
<p>Plan celebratory milestones with structured long-term equity and gold ETF asset allocation.</p>
</div>
</div>
</div>

<div class="cta-box" style="margin-top: 40px;">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Start Planning for {{ goalName }}</h3>
<p>Let MRP Associates map out your exact mutual fund basket to achieve this target on schedule.</p>
<div style="margin-top: 20px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
<a href="/contact" class="btn-primary" style="background: #ffffff; color: #1d4ed8 !important;">
<i class="fas fa-bullseye"></i> Create Goal Portfolio
</a>
<a href="tel:+919443339889" class="btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff !important; border-color: rgba(255,255,255,0.3);">
<i class="fas fa-phone-alt"></i> Speak to Goal Advisor
</a>
</div>
</div>
</div>
</div>
