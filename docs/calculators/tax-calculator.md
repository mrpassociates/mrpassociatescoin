---
title: Tax Savings Calculator
---

<script setup>
import { ref, computed } from 'vue'

const grossIncome = ref(1200000)
const standardDeduction = ref(75000)
const section80c = ref(150000)
const section80d = ref(25000)
const section80ccd = ref(50000)
const homeLoanInterest = ref(0)
const showResult = ref(true)

const totalDeductions = computed(() => {
  return standardDeduction.value + section80c.value + section80d.value + section80ccd.value + homeLoanInterest.value
})

const taxableIncome = computed(() => {
  const taxable = grossIncome.value - totalDeductions.value
  return Math.max(0, taxable)
})

const taxBeforeCess = computed(() => {
  let tax = 0
  const income = taxableIncome.value
  
  if (income <= 250000) {
    tax = 0
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05
  } else if (income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.20
  } else {
    tax = 12500 + 100000 + (income - 1000000) * 0.30
  }
  
  if (taxableIncome.value <= 500000) {
    tax = Math.max(0, tax - 12500)
  }
  
  return Math.round(tax)
})

const cess = computed(() => {
  return Math.round(taxBeforeCess.value * 0.04)
})

const totalTax = computed(() => {
  return taxBeforeCess.value + cess.value
})

const taxWithoutDeductions = computed(() => {
  let tax = 0
  const income = grossIncome.value - standardDeduction.value
  
  if (income <= 250000) {
    tax = 0
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05
  } else if (income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.20
  } else {
    tax = 12500 + 100000 + (income - 1000000) * 0.30
  }
  
  return Math.round(tax * 1.04)
})

const taxSavings = computed(() => {
  return Math.max(0, taxWithoutDeductions.value - totalTax.value)
})

const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}

const calculate = () => {
  showResult.value = true
}
</script>

<div class="page-header">
<h1>📋 Tax Savings Calculator</h1>
<p>Calculate your tax liability and discover savings opportunities</p>
</div>

<div class="calculator-page">
<div class="calculator-container">
<div class="calc-form">

<div class="calc-input-group">
<label>Gross Annual Income (₹)</label>
<input type="number" v-model="grossIncome" min="100000" max="100000000" step="50000">
<p class="input-hint">Total income before any deductions</p>
</div>

<div class="calc-input-group">
<label>Standard Deduction (₹)</label>
<input type="number" v-model="standardDeduction" min="0" max="75000" step="1000">
<p class="input-hint">₹75,000 for FY 2024-25</p>
</div>

<div class="calc-input-group">
<label>80C Investments (₹)</label>
<input type="number" v-model="section80c" min="0" max="150000" step="10000">
<p class="input-hint">Max ₹1.5 lakhs (PPF, ELSS, LIC, etc.)</p>
</div>

<div class="calc-input-group">
<label>80D Health Insurance Premium (₹)</label>
<input type="number" v-model="section80d" min="0" max="100000" step="5000">
<p class="input-hint">Max ₹25,000 (₹50,000 for senior citizens)</p>
</div>

<div class="calc-input-group">
<label>80CCD(1B) NPS Contribution (₹)</label>
<input type="number" v-model="section80ccd" min="0" max="50000" step="5000">
<p class="input-hint">Additional ₹50,000 for NPS investment</p>
</div>

<div class="calc-input-group">
<label>Home Loan Interest (₹)</label>
<input type="number" v-model="homeLoanInterest" min="0" max="200000" step="10000">
<p class="input-hint">Max ₹2 lakhs under Section 24(b)</p>
</div>

<button class="calc-btn" @click="calculate">Calculate Tax</button>
</div>

<div class="calc-result" v-if="showResult">
<h3>Tax Summary (Old Regime)</h3>
<div class="result-value">₹{{ formatNumber(totalTax) }}</div>
<p class="result-label">Total Tax Payable</p>

<div class="calc-breakdown">
<h4>Tax Calculation Details</h4>
<div class="breakdown-item">
<span class="label">Gross Income</span>
<span class="value">₹{{ formatNumber(grossIncome) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Total Deductions</span>
<span class="value">₹{{ formatNumber(totalDeductions) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Taxable Income</span>
<span class="value">₹{{ formatNumber(taxableIncome) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Tax Before Cess</span>
<span class="value">₹{{ formatNumber(taxBeforeCess) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Health and Education Cess (4%)</span>
<span class="value">₹{{ formatNumber(cess) }}</span>
</div>
<div class="breakdown-item">
<span class="label">Tax Savings from Deductions</span>
<span class="value success-text">₹{{ formatNumber(taxSavings) }}</span>
</div>
</div>
</div>
</div>
</div>

## Tax-Saving Investments under Section 80C

- **ELSS Mutual Funds** - Lowest lock-in (3 years), potential for highest returns
- **PPF (Public Provident Fund)** - 15-year lock-in, EEE status, 7.1% interest rate
- **Life Insurance Premium** - Term insurance premium qualifies for deduction
- **Sukanya Samriddhi Yojana** - For girl child, 8.2% interest, best for parents

## Old vs New Tax Regime (FY 2024-25)

- **Old Regime** - Higher tax rates but allows deductions under 80C, 80D, HRA, etc. Better if deductions exceed ₹3.75 lakhs
- **New Regime** - Lower tax rates, standard deduction of ₹75,000, but no other deductions. Better for minimal investments

## Tax Slabs (Old Regime FY 2024-25)

| Income Range | Tax Rate |
|--------------|----------|
| Up to ₹2,50,000 | Nil |
| ₹2,50,001 to ₹5,00,000 | 5% |
| ₹5,00,001 to ₹10,00,000 | 20% |
| Above ₹10,00,000 | 30% |

## Additional Tax-Saving Options

- **Section 80D** - Health Insurance up to ₹1 lakh for self, spouse, children and parents
- **Section 80E** - Education Loan Interest with no upper limit, available for 8 years
- **Section 80G** - Donations with 50% or 100% deduction for eligible charities
- **Section 80TTA** - Savings Bank Interest up to ₹10,000
- **Section 24(b)** - Home Loan Interest up to ₹2 lakhs for self-occupied property
