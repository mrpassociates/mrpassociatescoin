---
title: Retirement Calculator
---

<script setup>
import { ref, computed } from 'vue'

const currentAge = ref(30)
const retirementAge = ref(60)
const monthlyExpenses = ref(50000)
const inflationRate = ref(6)
const returnRate = ref(12)
const lifeExpectancy = ref(85)
const showResult = ref(true)

const yearsToRetirement = computed(() => {
  return retirementAge.value - currentAge.value
})

const retirementPeriod = computed(() => {
  return lifeExpectancy.value - retirementAge.value
})

const expensesAtRetirement = computed(() => {
  const inflationFactor = Math.pow(1 + inflationRate.value / 100, yearsToRetirement.value)
  return Math.round(monthlyExpenses.value * inflationFactor)
})

const requiredCorpus = computed(() => {
  const annualExpenses = expensesAtRetirement.value * 12
  const realReturn = 0.04
  const years = retirementPeriod.value
  const corpus = annualExpenses * ((1 - Math.pow(1 + realReturn, -years)) / realReturn)
  return Math.round(corpus / 100000) * 100000
})

const monthlySIP = computed(() => {
  const r = returnRate.value / 100 / 12
  const n = yearsToRetirement.value * 12
  const FV = requiredCorpus.value
  const monthlyAmount = (FV * r) / ((Math.pow(1 + r, n) - 1) * (1 + r))
  return Math.round(monthlyAmount)
})

const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}

const calculate = () => {
  showResult.value = true
}
</script>

<div class="page-header">
<h1>🏖️ Retirement Calculator</h1>
<p>Plan your retirement corpus and monthly savings</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">

<div class="calc-input-group">
<label>Current Age: {{ currentAge }} years</label>
<input type="range" v-model="currentAge" min="20" max="55" step="1">
</div>

<div class="calc-input-group">
<label>Retirement Age: {{ retirementAge }} years</label>
<input type="range" v-model="retirementAge" min="45" max="70" step="1">
</div>

<div class="calc-input-group">
<label>Current Monthly Expenses (₹)</label>
<input type="number" v-model="monthlyExpenses" min="10000" max="1000000" step="5000">
<p class="input-hint">Your current monthly household expenses</p>
</div>

<div class="calc-input-group">
<label>Expected Inflation Rate: {{ inflationRate }}% per annum</label>
<input type="range" v-model="inflationRate" min="3" max="10" step="0.5">
</div>

<div class="calc-input-group">
<label>Expected Return on Investment: {{ returnRate }}% per annum</label>
<input type="range" v-model="returnRate" min="6" max="15" step="0.5">
</div>

<div class="calc-input-group">
<label>Life Expectancy: {{ lifeExpectancy }} years</label>
<input type="range" v-model="lifeExpectancy" min="70" max="100" step="1">
</div>

<button class="calc-btn" @click="calculate">Calculate Retirement Plan</button>
</div>

<div class="calc-result" v-if="showResult">
<h3>Retirement Corpus Required</h3>
<div class="result-value">₹{{ formatNumber(requiredCorpus) }}</div>
<p class="result-label">At Retirement</p>

<div class="calc-breakdown">
<h4>Retirement Planning Details</h4>
<div class="breakdown-item">
<span class="label">Years to Retirement</span>
<span class="value">{{ yearsToRetirement }} years</span>
</div>
<div class="breakdown-item">
<span class="label">Monthly Expenses at Retirement</span>
<span class="value">₹{{ formatNumber(expensesAtRetirement) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Retirement Period</span>
<span class="value">{{ retirementPeriod }} years</span>
</div>
<div class="breakdown-item">
<span class="label">Monthly SIP Required</span>
<span class="value">₹{{ formatNumber(monthlySIP) }}</span>
</div>
</div>
</div>
</div>
</div>

## Why Plan for Retirement?

With increasing life expectancy and rising healthcare costs, retirement planning is more crucial than ever. Starting early gives you the advantage of compounding and requires smaller monthly investments to build the same corpus.

## Retirement Planning Stages

- **Accumulation Phase (20s-50s)** - Focus on growing your retirement corpus through regular investments
- **Transition Phase (50s-60s)** - Gradually shift to lower-risk investments for capital preservation
- **Distribution Phase (60s+)** - Systematically withdraw from corpus while managing longevity risk

## Investment Options for Retirement

- **EPF and PPF** - Tax-free returns with government backing - safe and reliable
- **NPS (National Pension System)** - Additional tax benefits under 80CCD(1B) up to ₹50,000
- **Equity Mutual Funds** - Higher returns potential for long-term wealth creation
- **Real Estate** - Rental income and capital appreciation for diversification

## Retirement Planning Tips

- Start investing early - time is your biggest asset
- Increase SIP amount by 10% every year with salary hikes
- Build an emergency fund before retirement to avoid corpus depletion
- Plan for healthcare costs separately - get adequate health insurance
- Consider inflation - expenses double every 10-12 years at 6-7% inflation
- Do not withdraw from retirement corpus for other goals
