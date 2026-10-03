---
title: SIP Calculator - Systematic Investment Plan - MRP Associates
description: Free online SIP calculator to compute the maturity value and wealth gains of your monthly mutual fund investments.
---

<script setup>
import { ref, computed } from 'vue'

const monthlyInvestment = ref(10000)
const expectedReturn = ref(12)
const duration = ref(15)

const totalInvestment = computed(() => {
  return Number(monthlyInvestment.value) * Number(duration.value) * 12
})

const futureValue = computed(() => {
  const P = Number(monthlyInvestment.value)
  const r = Number(expectedReturn.value) / 100 / 12
  const n = Number(duration.value) * 12
  const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  return Math.round(FV)
})

const totalReturns = computed(() => {
  return futureValue.value - totalInvestment.value
})

const returnMultiple = computed(() => {
  if (!totalInvestment.value) return 1
  return (futureValue.value / totalInvestment.value).toFixed(2)
})

const investedPercent = computed(() => {
  if (!futureValue.value) return 50
  return Math.round((totalInvestment.value / futureValue.value) * 100)
})

const gainPercent = computed(() => {
  return 100 - investedPercent.value
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
<i class="fas fa-chart-line"></i> Wealth Compounding Tool
</div>
<h1>SIP Calculator</h1>
<p>Forecast the maturity value and wealth accumulation of your monthly mutual fund investments.</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">
<!-- Input 1: Monthly Investment -->
<div class="calc-input-group">
<label>
<span>Monthly Investment Amount</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">₹{{ formatNumber(monthlyInvestment) }}</span>
</label>
<input type="range" v-model="monthlyInvestment" min="500" max="200000" step="500">
<input type="number" v-model="monthlyInvestment" min="500" max="1000000" step="500" style="margin-top: 10px;">
<p class="input-hint">Min: ₹500 | Max: ₹10,00,000</p>
</div>

<!-- Input 2: Expected Rate of Return -->
<div class="calc-input-group">
<label>
<span>Expected Annual Return (% p.a.)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">{{ expectedReturn }}%</span>
</label>
<input type="range" v-model="expectedReturn" min="1" max="30" step="0.5">
<p class="input-hint">Historical broad-market equity funds have yielded 12%–15% over 10+ years</p>
</div>

<!-- Input 3: Investment Duration -->
<div class="calc-input-group">
<label>
<span>Investment Duration (Years)</span>
<span style="color: #2563eb; font-size: 1.15rem; font-weight: 800;">{{ duration }} Years</span>
</label>
<input type="range" v-model="duration" min="1" max="35" step="1">
<p class="input-hint">Longer horizons multiply returns exponentially via compounding</p>
</div>
</div>

<!-- Output Result Box -->
<div class="calc-result">
<h3>Estimated Maturity Value</h3>
<div class="result-value">₹{{ formatNumber(futureValue) }}</div>
<p class="result-label" style="font-size: 1.1rem; color: #059669; font-weight: 700;">
Approx. {{ formatCurrencyCompact(futureValue) }}
</p>

<!-- Visual Breakdown Progress Bar -->
<div class="ratio-progress-bar">
<div class="ratio-bar-invested" :style="{ width: investedPercent + '%' }" title="Invested Amount"></div>
<div class="ratio-bar-gain" :style="{ width: gainPercent + '%' }" title="Estimated Gain"></div>
</div>
<div class="ratio-legend">
<span><span class="legend-dot" style="background: #2563eb;"></span> Invested: {{ investedPercent }}%</span>
<span><span class="legend-dot" style="background: #10b981;"></span> Returns: {{ gainPercent }}%</span>
</div>

<div class="calc-breakdown">
<h4>Investment Summary</h4>
<div class="breakdown-item">
<span class="label">Total Amount Invested</span>
<span class="value">₹{{ formatNumber(totalInvestment) }} ({{ formatCurrencyCompact(totalInvestment) }})</span>
</div>
<div class="breakdown-item">
<span class="label">Total Estimated Gain</span>
<span class="value" style="color: #059669;">+₹{{ formatNumber(totalReturns) }} ({{ formatCurrencyCompact(totalReturns) }})</span>
</div>
<div class="breakdown-item">
<span class="label">Wealth Growth Multiple</span>
<span class="value" style="color: #2563eb; font-size: 1.1rem;">{{ returnMultiple }}x your money</span>
</div>
</div>
</div>
</div>

<div class="content-section" style="padding: 0;">
<h2>What is a Systematic Investment Plan (SIP)?</h2>
<p>
A Systematic Investment Plan (SIP) enables an investor to invest a predetermined sum at regular monthly intervals into selected mutual fund schemes. Instead of attempting to time volatile market peaks and troughs, SIP leverages <strong>Rupee Cost Averaging</strong>: purchasing more fund units when prices are lower and fewer when higher.
</p>

<h2>Why SIP Beats Traditional Savings</h2>
<div class="features-list">
<div class="feature-item">
<div class="feature-icon" style="color: #2563eb;"><i class="fas fa-layer-group"></i></div>
<div>
<h4>Disciplined Automated Habit</h4>
<p>Deducted via automated bank mandate on your chosen date right after payday.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #10b981;"><i class="fas fa-arrow-trend-up"></i></div>
<div>
<h4>Beats Inflation Handsomely</h4>
<p>While savings bank accounts earn 3–4%, quality equity funds historically beat inflation.</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon" style="color: #f59e0b;"><i class="fas fa-sliders"></i></div>
<div>
<h4>Complete Liquidity &amp; Flexibility</h4>
<p>Increase, pause, or withdraw anytime without heavy lock-in penalties.</p>
</div>
</div>
</div>

<div class="cta-box" style="margin-top: 40px;">
<h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">Start Your Monthly SIP Today</h3>
<p>Consult our AMFI-certified advisors to pick top quartile funds aligned with your financial goals.</p>
<div style="margin-top: 20px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
<a href="/contact" class="btn-primary" style="background: #ffffff; color: #1d4ed8 !important;">
<i class="fas fa-handshake"></i> Get Fund Recommendations
</a>
<a href="tel:+919443339889" class="btn-secondary" style="background: rgba(255,255,255,0.15); color: #ffffff !important; border-color: rgba(255,255,255,0.3);">
<i class="fas fa-phone-alt"></i> Call Advisor
</a>
</div>
</div>
</div>
</div>
