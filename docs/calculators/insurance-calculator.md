---
title: Insurance Calculator
---

<script setup>
import { ref, computed } from 'vue'

const annualIncome = ref(1000000)
const currentAge = ref(30)
const yearsToRetirement = ref(30)
const outstandingLoans = ref(2000000)
const dependents = ref(2)
const showResult = ref(true)

const incomeMultiplier = computed(() => {
  return Math.min(yearsToRetirement.value, 15)
})

const incomeReplacement = computed(() => {
  return annualIncome.value * incomeMultiplier.value
})

const educationFund = computed(() => {
  return dependents.value * 2500000
})

const emergencyFund = computed(() => {
  return annualIncome.value * 0.5
})

const recommendedCoverage = computed(() => {
  const total = incomeReplacement.value + outstandingLoans.value + educationFund.value + emergencyFund.value
  return Math.round(total / 100000) * 100000
})

const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}

const calculate = () => {
  showResult.value = true
}
</script>

<div class="page-header">
<h1>🛡️ Insurance Coverage Calculator</h1>
<p>Calculate how much life insurance coverage you need</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">

<div class="calc-input-group">
<label>Your Annual Income (₹)</label>
<input type="number" v-model="annualIncome" min="100000" max="100000000" step="50000">
<p class="input-hint">Enter your gross annual income</p>
</div>

<div class="calc-input-group">
<label>Your Current Age: {{ currentAge }} years</label>
<input type="range" v-model="currentAge" min="18" max="60" step="1">
</div>

<div class="calc-input-group">
<label>Years Until Retirement: {{ yearsToRetirement }} years</label>
<input type="range" v-model="yearsToRetirement" min="1" max="45" step="1">
</div>

<div class="calc-input-group">
<label>Outstanding Loans (₹)</label>
<input type="number" v-model="outstandingLoans" min="0" max="100000000" step="100000">
<p class="input-hint">Home loan, car loan, personal loans, etc.</p>
</div>

<div class="calc-input-group">
<label>Number of Dependents: {{ dependents }}</label>
<input type="range" v-model="dependents" min="0" max="10" step="1">
</div>

<button class="calc-btn" @click="calculate">Calculate Coverage</button>
</div>

<div class="calc-result" v-if="showResult">
<h3>Recommended Coverage</h3>
<div class="result-value">₹{{ formatNumber(recommendedCoverage) }}</div>
<p class="result-label">Sum Assured Needed</p>

<div class="calc-breakdown">
<h4>Coverage Breakdown</h4>
<div class="breakdown-item">
<span class="label">Income Replacement ({{ incomeMultiplier }}x)</span>
<span class="value">₹{{ formatNumber(incomeReplacement) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Outstanding Loans</span>
<span class="value">₹{{ formatNumber(outstandingLoans) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Children Education Fund</span>
<span class="value">₹{{ formatNumber(educationFund) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Emergency Fund (6 months)</span>
<span class="value">₹{{ formatNumber(emergencyFund) }}</span>
</div>
</div>
</div>
</div>
</div>

## Why Calculate Insurance Coverage?

Having the right amount of life insurance ensures your family maintains their lifestyle and achieves their financial goals even in your absence. Under-insurance leaves your family vulnerable, while over-insurance means unnecessary premium payments.

## Coverage Methods

- **Income Replacement Method** - Multiply annual income by years to retirement
- **Human Life Value (HLV)** - Present value of future earnings, considering inflation and returns
- **Needs Analysis** - Calculate specific needs: loans, education, retirement, living expenses

## Factors Affecting Coverage

- **Number of Dependents** - More dependents require higher coverage
- **Existing Liabilities** - Cover all loans and debts to avoid burden on family
- **Children Education** - Plan for future education expenses of children
- **Lifestyle Maintenance** - Ensure family can maintain current standard of living

## Insurance Tips

- Buy term insurance early for lower premiums
- Review coverage after major life events (marriage, child birth)
- Consider inflation when calculating future needs
- Do not mix insurance with investment - buy term, invest the rest
- Ensure coverage is at least 10-15 times your annual income
