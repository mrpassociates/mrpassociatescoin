---
title: EMI Calculator
---

<script setup>
import { ref, computed } from 'vue'

const loanAmount = ref(2000000)
const interestRate = ref(8.5)
const tenure = ref(20)
const showResult = ref(true)

const emi = computed(() => {
  const P = loanAmount.value
  const R = interestRate.value / 12 / 100
  const N = tenure.value * 12
  const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
  return Math.round(EMI)
})

const totalPayable = computed(() => {
  return emi.value * tenure.value * 12
})

const totalInterest = computed(() => {
  return totalPayable.value - loanAmount.value
})

const interestRatio = computed(() => {
  return ((totalInterest.value / loanAmount.value) * 100).toFixed(1)
})

const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}

const calculate = () => {
  showResult.value = true
}
</script>

<div class="page-header">
<h1>🏦 EMI Calculator</h1>
<p>Calculate your Equated Monthly Installment for loans</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">

<div class="calc-input-group">
<label>Loan Amount (₹)</label>
<input type="number" v-model="loanAmount" min="10000" max="100000000" step="10000">
<p class="input-hint">Enter the principal loan amount</p>
</div>

<div class="calc-input-group">
<label>Interest Rate: {{ interestRate }}% per annum</label>
<input type="range" v-model="interestRate" min="1" max="25" step="0.1">
</div>

<div class="calc-input-group">
<label>Loan Tenure: {{ tenure }} years ({{ tenure * 12 }} months)</label>
<input type="range" v-model="tenure" min="1" max="30" step="1">
</div>

<button class="calc-btn" @click="calculate">Calculate EMI</button>
</div>

<div class="calc-result" v-if="showResult">
<h3>Your Monthly EMI</h3>
<div class="result-value">₹{{ formatNumber(emi) }}</div>
<p class="result-label">Per Month</p>

<div class="calc-breakdown">
<h4>Loan Breakdown</h4>
<div class="breakdown-item">
<span class="label">Principal Amount</span>
<span class="value">₹{{ formatNumber(loanAmount) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Total Interest</span>
<span class="value">₹{{ formatNumber(totalInterest) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Total Amount Payable</span>
<span class="value">₹{{ formatNumber(totalPayable) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Interest to Principal Ratio</span>
<span class="value">{{ interestRatio }}%</span>
</div>
</div>
</div>
</div>
</div>

## What is EMI?

EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.

## Types of Loans

- **Home Loan** - Finance your dream home with competitive interest rates starting from 8.5%
- **Car Loan** - Drive your dream car with flexible loan options and quick approval
- **Personal Loan** - Meet your personal needs with unsecured loans up to ₹40 lakhs
- **Education Loan** - Fund higher education in India or abroad with special rates

## EMI Formula

EMI is calculated using the following formula:

**EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]**

Where:
- P = Principal loan amount
- R = Monthly interest rate (Annual rate / 12 / 100)
- N = Loan tenure in months

## Tips to Reduce EMI

- **Higher Down Payment** - A larger down payment reduces your loan amount and EMI
- **Compare Interest Rates** - Shop around for the best interest rates before finalizing
- **Longer Tenure** - Extending loan tenure reduces EMI but increases total interest
- **Good Credit Score** - Maintain a good CIBIL score to get lower interest rates
