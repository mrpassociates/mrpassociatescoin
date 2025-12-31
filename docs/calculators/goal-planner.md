---
title: Goal Planner
---

<script setup>
import { ref, computed } from 'vue'

const goalName = ref('Dream Home Down Payment')
const targetAmount = ref(2500000)
const currentSavings = ref(200000)
const timeframe = ref(5)
const returnRate = ref(12)
const inflationRate = ref(6)
const showResult = ref(true)

const inflationAdjustedTarget = computed(() => {
  const adjustedAmount = targetAmount.value * Math.pow(1 + inflationRate.value / 100, timeframe.value)
  return Math.round(adjustedAmount)
})

const currentSavingsFV = computed(() => {
  const fv = currentSavings.value * Math.pow(1 + returnRate.value / 100, timeframe.value)
  return Math.round(fv)
})

const gapAmount = computed(() => {
  const gap = inflationAdjustedTarget.value - currentSavingsFV.value
  return Math.max(0, gap)
})

const monthlySIP = computed(() => {
  if (gapAmount.value <= 0) return 0
  
  const r = returnRate.value / 100 / 12
  const n = timeframe.value * 12
  const FV = gapAmount.value
  const monthlyAmount = (FV * r) / ((Math.pow(1 + r, n) - 1) * (1 + r))
  return Math.round(monthlyAmount)
})

const totalInvestment = computed(() => {
  return monthlySIP.value * timeframe.value * 12
})

const expectedReturns = computed(() => {
  return gapAmount.value - totalInvestment.value
})

const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}

const calculate = () => {
  showResult.value = true
}
</script>

<div class="page-header">
<h1>🎯 Financial Goal Planner</h1>
<p>Plan and track your financial goals</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">

<div class="calc-input-group">
<label>Goal Name</label>
<input type="text" v-model="goalName" placeholder="e.g., Child Education, Dream Home, Vacation">
<p class="input-hint">Name your financial goal</p>
</div>

<div class="calc-input-group">
<label>Target Amount (₹)</label>
<input type="number" v-model="targetAmount" min="10000" max="100000000" step="10000">
<p class="input-hint">The amount you want to accumulate</p>
</div>

<div class="calc-input-group">
<label>Current Savings for This Goal (₹)</label>
<input type="number" v-model="currentSavings" min="0" max="100000000" step="10000">
<p class="input-hint">Amount already saved towards this goal</p>
</div>

<div class="calc-input-group">
<label>Time to Achieve Goal: {{ timeframe }} years</label>
<input type="range" v-model="timeframe" min="1" max="30" step="1">
</div>

<div class="calc-input-group">
<label>Expected Return Rate: {{ returnRate }}% per annum</label>
<input type="range" v-model="returnRate" min="4" max="18" step="0.5">
</div>

<div class="calc-input-group">
<label>Expected Inflation Rate: {{ inflationRate }}% per annum</label>
<input type="range" v-model="inflationRate" min="3" max="10" step="0.5">
</div>

<button class="calc-btn" @click="calculate">Plan My Goal</button>
</div>

<div class="calc-result" v-if="showResult">
<h3>{{ goalName }} Plan</h3>
<div class="result-value">₹{{ formatNumber(monthlySIP) }}</div>
<p class="result-label">Monthly Investment Required</p>

<div class="calc-breakdown">
<h4>Goal Planning Details</h4>
<div class="breakdown-item">
<span class="label">Target Amount (Today Value)</span>
<span class="value">₹{{ formatNumber(targetAmount) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Inflation-Adjusted Target</span>
<span class="value">₹{{ formatNumber(inflationAdjustedTarget) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Current Savings Future Value</span>
<span class="value">₹{{ formatNumber(currentSavingsFV) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Gap to Fill</span>
<span class="value">₹{{ formatNumber(gapAmount) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Total Investment Needed</span>
<span class="value">₹{{ formatNumber(totalInvestment) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Expected Returns</span>
<span class="value success-text">₹{{ formatNumber(expectedReturns) }}</span>
</div>
</div>
</div>
</div>
</div>

## Popular Financial Goals

- **Child Education** - Plan for school, college, and higher education abroad. Start early for maximum benefit
- **Wedding Planning** - Save for your own or your children wedding expenses systematically
- **Dream Home** - Accumulate down payment for your dream home. Real estate requires significant capital
- **Car Purchase** - Save for a new car instead of taking high-interest car loans
- **Dream Vacation** - Plan that international trip or family vacation without straining your finances
- **Medical Emergency Fund** - Build a corpus for unexpected medical expenses beyond insurance coverage

## Goal-Based Investment Strategies

- **Short-Term Goals (1-3 years)** - Use liquid funds, short-term debt funds, or FDs. Focus on capital preservation
- **Medium-Term Goals (3-7 years)** - Balanced funds, hybrid funds, or a mix of equity and debt. Moderate risk approach
- **Long-Term Goals (7+ years)** - Equity mutual funds, index funds, or direct stocks. Time allows for volatility recovery

## Tips for Achieving Financial Goals

- Write down your goals with specific amounts and deadlines
- Prioritize goals - differentiate between needs and wants
- Account for inflation - money loses purchasing power over time
- Set up automatic SIPs - pay yourself first
- Review and rebalance annually
- Do not withdraw prematurely - stay disciplined
- Have separate investments for each goal - avoid mixing

## Frequently Asked Questions

**How many financial goals should I have?**
Focus on 3-5 primary goals at a time. Having too many goals can dilute your focus and make it harder to achieve any of them.

**Should I invest in one fund for all goals?**
No, it is better to have separate investments for each goal. This makes tracking easier and allows for goal-specific asset allocation.

**What if I cannot afford the required SIP amount?**
You can either extend the timeframe, reduce the target amount, or look for ways to increase income. Start with what you can and increase gradually.
