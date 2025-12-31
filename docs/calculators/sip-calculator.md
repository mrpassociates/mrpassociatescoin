---
title: SIP Calculator
---

<script setup>
import { ref, computed } from 'vue'

const monthlyInvestment = ref(5000)
const expectedReturn = ref(12)
const duration = ref(10)
const showResult = ref(true)

const totalInvestment = computed(() => {
  return monthlyInvestment.value * duration.value * 12
})

const futureValue = computed(() => {
  const P = monthlyInvestment.value
  const r = expectedReturn.value / 100 / 12
  const n = duration.value * 12
  const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  return Math.round(FV)
})

const totalReturns = computed(() => {
  return futureValue.value - totalInvestment.value
})

const returnMultiple = computed(() => {
  return (futureValue.value / totalInvestment.value).toFixed(2)
})

const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}

const calculate = () => {
  showResult.value = true
}
</script>

<div class="page-header">
<h1>📊 SIP Calculator</h1>
<p>Calculate your Systematic Investment Plan returns</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">

<div class="calc-input-group">
<label>Monthly Investment Amount (₹)</label>
<input type="number" v-model="monthlyInvestment" min="500" max="1000000" step="500">
<p class="input-hint">Minimum ₹500 | Maximum ₹10,00,000</p>
</div>

<div class="calc-input-group">
<label>Expected Annual Return (%): {{ expectedReturn }}%</label>
<input type="range" v-model="expectedReturn" min="1" max="30" step="0.5">
</div>

<div class="calc-input-group">
<label>Investment Duration: {{ duration }} years</label>
<input type="range" v-model="duration" min="1" max="40" step="1">
</div>

<button class="calc-btn" @click="calculate">Calculate Returns</button>
</div>

<div class="calc-result" v-if="showResult">
<h3>Expected Returns</h3>
<div class="result-value">₹{{ formatNumber(futureValue) }}</div>
<p class="result-label">Total Value at Maturity</p>

<div class="calc-breakdown">
<h4>Investment Breakdown</h4>
<div class="breakdown-item">
<span class="label">Total Investment</span>
<span class="value">₹{{ formatNumber(totalInvestment) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Estimated Returns</span>
<span class="value">₹{{ formatNumber(totalReturns) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Return Multiple</span>
<span class="value">{{ returnMultiple }}x</span>
</div>
</div>
</div>
</div>
</div>

## What is SIP?

A Systematic Investment Plan (SIP) is an investment strategy where you invest a fixed amount regularly in mutual funds. It helps you build wealth over time through the power of compounding and rupee cost averaging.

## Benefits of SIP

- **Disciplined Investing** - Regular investments help build a savings habit
- **Rupee Cost Averaging** - Buy more units when prices are low, fewer when high  
- **Power of Compounding** - Your returns generate additional returns over time
- **Flexible Investment** - Start with as low as ₹500 per month

## How is SIP Calculated?

The SIP calculator uses the future value formula for regular investments:

**FV = P × [(1 + r)^n - 1] / r × (1 + r)**

Where:
- FV = Future Value of the investment
- P = Monthly investment amount
- r = Monthly rate of return (annual rate / 12)
- n = Total number of payments (years × 12)
