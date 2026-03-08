// ─── Multipliers ─────────────────────────────────────────────────────────────
// Modest adjustments — industry affects inventory turns and stockout risk;
// current system affects how much manual time is wasted.

export const industryMultipliers: Record<string, number> = {
  'food-beverage': 1.1,
  'manufacturing': 1.0,
  'wholesale': 0.95,
  'cosmetics': 1.05,
  'supplements': 1.1,
  'apparel': 0.9,
  'electronics': 1.05,
  'other': 1.0,
}

export const systemMultipliers: Record<string, number> = {
  'spreadsheets': 1.2,   // manual + error-prone → highest gain
  'quickbooks': 1.05,    // some automation but no real inventory
  'other-software': 0.85, // already have a system → lower delta
  'paper': 1.3,          // no system at all → highest gain
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
//
// Plans:
//   Starter    $199/mo    < $1M revenue
//   Growth     $499/mo    $1M – $7M
//   Pro        $999/mo    $7M – $10M   (all features included, no add-ons)
//   Enterprise $999/mo*   $10M+        (all features + implementation package)
//     * Custom enterprise pricing available; $999 used as a conservative baseline.
//
// Enterprise onboarding (one-time, included for $10M+):
//   Data Migration:           $2,500
//   Advanced Workflow Setup:  $1,500
//   Total:                    $4,000
//
// Add-ons (Starter / Growth only — Pro and Enterprise include everything):
//   Manufacturing Pro:      $100 / $200
//   Compliance Essentials:  $38  / $75
//   Planning & Analytics:   $50  / $100

export type Plan = 'starter' | 'growth' | 'pro' | 'enterprise'

export const ENTERPRISE_ONBOARDING = 4_000  // one-time, included for $10M+

export function getBrahminPlan(revenueMillion: number): Plan {
  if (revenueMillion < 1)  return 'starter'
  if (revenueMillion < 7)  return 'growth'
  if (revenueMillion < 10) return 'pro'
  return 'enterprise'
}

export function getBrahminPlanLabel(plan: Plan): string {
  const labels: Record<Plan, string> = {
    starter: 'Starter', growth: 'Growth', pro: 'Pro', enterprise: 'Enterprise',
  }
  return labels[plan]
}

export function getBrahminBaseCost(plan: Plan): number {
  const costs: Record<Plan, number> = {
    starter: 199, growth: 499, pro: 999, enterprise: 999,
  }
  return costs[plan]
}

// One-time onboarding cost — only for Enterprise ($10M+).
// Includes data migration and advanced workflow setup.
export function getOnboardingCost(plan: Plan): number {
  return plan === 'enterprise' ? ENTERPRISE_ONBOARDING : 0
}

// Industry-based add-on estimate.
// Pro and Enterprise include everything — no add-ons.
// Returns the single most relevant add-on for the industry on Starter/Growth.
export function getIndustryAddon(
  industry: string,
  plan: Plan,
): { cost: number; label: string } {
  if (plan === 'pro' || plan === 'enterprise') return { cost: 0, label: '' }

  const isStarter = plan === 'starter'

  const addons: Record<string, { cost: number; label: string }> = {
    // Lot/expiry tracking is non-negotiable for FDA/FSMA compliance
    'food-beverage': { cost: isStarter ? 38 : 75,   label: 'Compliance Essentials' },
    // Multi-level BOMs and advanced production scheduling
    'manufacturing': { cost: isStarter ? 100 : 200, label: 'Manufacturing Pro' },
    // Demand forecasting and profitability dashboards for distributors
    'wholesale':     { cost: isStarter ? 50 : 100,  label: 'Planning & Analytics' },
    // Ingredient lot tracking and regulatory compliance
    'cosmetics':     { cost: isStarter ? 38 : 75,   label: 'Compliance Essentials' },
    // FDA lot/serial/expiry tracking — critical for supplements
    'supplements':   { cost: isStarter ? 38 : 75,   label: 'Compliance Essentials' },
    // Simpler operations — no typical add-on needed
    'apparel':       { cost: 0, label: '' },
    // Component-level tracking and multi-level BOMs
    'electronics':   { cost: isStarter ? 100 : 200, label: 'Manufacturing Pro' },
    'other':         { cost: 0, label: '' },
  }

  return addons[industry] ?? { cost: 0, label: '' }
}

export function getBrahminMonthlyCost(revenueMillion: number, industry = 'other'): number {
  const plan = getBrahminPlan(revenueMillion)
  return getBrahminBaseCost(plan) + getIndustryAddon(industry, plan).cost
}

export function getBrahminAnnualCost(revenueMillion: number, industry = 'other'): number {
  return getBrahminMonthlyCost(revenueMillion, industry) * 12
}

// Human-readable plan + add-on label for the cost breakdown display.
export function getBrahminCostLabel(revenueMillion: number, industry = 'other'): string {
  const plan = getBrahminPlan(revenueMillion)
  const planName = getBrahminPlanLabel(plan)
  const addon = getIndustryAddon(industry, plan)
  if (addon.label) return `${planName} + ${addon.label}`
  if (plan === 'enterprise') return 'Enterprise (all-inclusive)'
  return `${planName} plan`
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CalcInputs {
  // Quick (3 inputs)
  revenue: number          // in $M
  industry: string
  currentSystem: string
  // Medium (+ 4 inputs)
  teamSize: number         // people who touch inventory
  manualHoursWeek: number  // total hrs/week on manual inventory work
  stockoutsPerMonth: number
  avgOrderValue: number    // $
  // Detailed (+ 4 inputs)
  laborCost: number        // $/hr
  productionDelaysPerMonth: number
  hasCompliance: boolean
  wholesalePercent: number // 0–100 (% of revenue from wholesale/B2B)
}

export interface SavingsBreakdown {
  timeSavings: number
  inventoryCarrySavings: number
  stockoutSavings: number
  delaySavings: number
  complianceSavings: number
  total: number
  totalLow: number   // ±15% range (quick/medium); exact (detailed)
  totalHigh: number
  weeklyHoursSaved: number
}

export interface GrowthBreakdown {
  salesCapacityLow: number    // 2% of revenue (conservative)
  salesCapacityHigh: number   // 4% of revenue (moderate)
  workingCapitalValue: number // annual value of freed inventory capital
  b2bLift: number             // wholesale revenue × 10% (detailed only)
  inventoryFreed: number      // raw $ of inventory freed (for display)
  totalLow: number
  totalHigh: number
}

export interface ROIResults {
  savings: SavingsBreakdown
  growth: GrowthBreakdown
  brahminMonthlyCost: number
  brahminAnnualCost: number
  brahminCostLabel: string   // e.g. "Growth plan + Compliance Essentials"
  onboardingCost: number     // $9,000 for enterprise; $0 for all other plans
  isEnterprise: boolean
  yearOneCost: number        // brahminAnnualCost + onboardingCost
  yearTwoPlusCost: number    // brahminAnnualCost (recurring only)
  paybackMonths: number
  threeYearCost: number      // subscription × 3 + onboarding (year 1 only)
  threeYearSavings: number
  threeYearNetGain: number
  threeYearROIPercent: number
  isRange: boolean
}

// ─── Core calculation ─────────────────────────────────────────────────────────

export function calculate(mode: 'quick' | 'medium' | 'detailed', inputs: CalcInputs): ROIResults {
  const revenueUSD = inputs.revenue * 1_000_000
  const industryMult = industryMultipliers[inputs.industry] ?? 1.0
  const systemMult = systemMultipliers[inputs.currentSystem] ?? 1.0

  const plan = getBrahminPlan(inputs.revenue)
  const brahminMonthlyCost = getBrahminBaseCost(plan) + getIndustryAddon(inputs.industry, plan).cost
  const brahminAnnualCost = brahminMonthlyCost * 12
  const brahminCostLabel = getBrahminCostLabel(inputs.revenue, inputs.industry)
  const onboardingCost = getOnboardingCost(plan)
  const isEnterprise = plan === 'enterprise'
  const yearOneCost = brahminAnnualCost + onboardingCost
  const yearTwoPlusCost = brahminAnnualCost

  // ── Time savings ─────────────────────────────────────────────────────────
  // Anchored to real Brahmin customer data: 10–12 hrs/week saved on average.
  // Quick mode uses benchmark; medium/detailed use the user's actual hours.
  // 75% of manual hours are eliminated (conservative — some work always remains).
  const laborCostPerHr = mode === 'detailed' ? inputs.laborCost : 32
  const teamSize = mode === 'quick' ? 1 : inputs.teamSize

  let weeklyHoursSaved: number
  if (mode === 'quick') {
    // Scale with company size — bigger companies have more people touching inventory
    weeklyHoursSaved = inputs.revenue < 2 ? 8 : inputs.revenue < 10 ? 10 : 12
  } else {
    weeklyHoursSaved = inputs.manualHoursWeek * 0.75
  }

  // System multiplier applied here: switching from paper/spreadsheets saves more
  // than switching from another software system that already handles some of this.
  const timeSavings = weeklyHoursSaved * teamSize * 52 * laborCostPerHr * systemMult

  // ── Inventory carrying savings ────────────────────────────────────────────
  // Brahmin customers consistently run leaner — less capital tied up in buffer stock.
  // Benchmark: inventory value ≈ 12% of annual revenue for small manufacturers.
  // Reduction: 15% of buffer stock eliminated (conservative; customers report 15–22%).
  // Annual carrying cost: 25% of inventory value (storage, insurance, obsolescence,
  // and the opportunity cost of capital tied up in excess stock).
  const estimatedInventoryValue = revenueUSD * 0.12
  const inventoryReduced = estimatedInventoryValue * 0.15
  const inventoryCarrySavings = inventoryReduced * 0.25 * industryMult

  // ── Stockout savings ──────────────────────────────────────────────────────
  // Customer data: stockouts drop near-completely after Brahmin implementation.
  // We use 85% reduction as a conservative floor.
  // Quick mode: stockout losses estimated at 0.5% of annual revenue
  //   (industry average for manufacturers without real-time inventory visibility).
  // Medium/detailed: uses user's actual stockout frequency and average order value.
  let stockoutSavings: number
  if (mode === 'quick') {
    stockoutSavings = revenueUSD * 0.005 * 0.85 * industryMult
  } else {
    const annualStockoutLoss = inputs.stockoutsPerMonth * inputs.avgOrderValue * 1.5 * 12
    stockoutSavings = annualStockoutLoss * 0.85 * industryMult
  }

  // ── Production delay savings (detailed only) ──────────────────────────────
  // Each production delay costs approximately half a day of production output.
  // Brahmin reduces delays by ~60% through better material visibility and MRP.
  let delaySavings = 0
  if (mode === 'detailed') {
    const dailyProductionValue = revenueUSD / 250
    const annualDelayCost = inputs.productionDelaysPerMonth * dailyProductionValue * 0.5 * 12
    delaySavings = annualDelayCost * 0.6
  }

  // ── Compliance risk avoidance (detailed only) ─────────────────────────────
  // Risk-adjusted annual value of audit readiness, faster recall response, and
  // reduced probability of regulatory fines or product holds.
  let complianceSavings = 0
  if (mode === 'detailed' && inputs.hasCompliance) {
    complianceSavings = Math.min(revenueUSD * 0.003, 15_000)
  }

  // ── Totals ────────────────────────────────────────────────────────────────
  const totalSavings = timeSavings + inventoryCarrySavings + stockoutSavings + delaySavings + complianceSavings
  const isRange = mode !== 'detailed'
  const totalLow = isRange ? totalSavings * 0.85 : totalSavings
  const totalHigh = isRange ? totalSavings * 1.15 : totalSavings

  // ── Growth upside (shown separately — NOT in the ROI calculation) ─────────
  // These represent revenue potential, not cost reduction. Kept separate to
  // maintain credibility and let prospects apply their own confidence levels.

  // Sales capacity unlocked: real-time inventory visibility means you can
  // commit to orders you previously declined or delayed. Conservative: 2–4%.
  const salesCapacityLow = revenueUSD * 0.02
  const salesCapacityHigh = revenueUSD * 0.04

  // Working capital freed: the cash previously tied up in excess buffer stock.
  // Annual value at a 5% cost of capital (conservative; many use 8–12%).
  const workingCapitalValue = inventoryReduced * 0.05

  // B2B portal order frequency lift (detailed only, when wholesale % is entered).
  // Self-service ordering increases repeat purchase frequency by 10–20%.
  let b2bLift = 0
  if (mode === 'detailed' && inputs.wholesalePercent > 0) {
    const wholesaleRevenue = revenueUSD * (inputs.wholesalePercent / 100)
    b2bLift = wholesaleRevenue * 0.10
  }

  const growthTotalLow = salesCapacityLow + workingCapitalValue + b2bLift
  const growthTotalHigh = salesCapacityHigh + workingCapitalValue + b2bLift

  // ── ROI metrics ───────────────────────────────────────────────────────────
  // Payback is based on full year-1 cost (includes onboarding for enterprise).
  const payback = yearOneCost / (totalSavings / 12)
  const threeYearSavings = totalSavings * 3
  // Enterprise: onboarding is one-time (year 1 only), so 3-yr cost = subscription×3 + onboarding
  const threeYearCost = brahminAnnualCost * 3 + onboardingCost
  const threeYearNetGain = threeYearSavings - threeYearCost
  const threeYearROIPercent = threeYearCost > 0 ? (threeYearNetGain / threeYearCost) * 100 : 0

  return {
    savings: {
      timeSavings,
      inventoryCarrySavings,
      stockoutSavings,
      delaySavings,
      complianceSavings,
      total: totalSavings,
      totalLow,
      totalHigh,
      weeklyHoursSaved: weeklyHoursSaved * teamSize,
    },
    growth: {
      salesCapacityLow,
      salesCapacityHigh,
      workingCapitalValue,
      b2bLift,
      inventoryFreed: inventoryReduced,
      totalLow: growthTotalLow,
      totalHigh: growthTotalHigh,
    },
    brahminMonthlyCost,
    brahminAnnualCost,
    brahminCostLabel,
    onboardingCost,
    isEnterprise,
    yearOneCost,
    yearTwoPlusCost,
    paybackMonths: Math.max(0.25, payback), // floor at ~7 days
    threeYearCost,
    threeYearSavings,
    threeYearNetGain,
    threeYearROIPercent: Math.max(0, threeYearROIPercent),
    isRange,
  }
}

// ─── Formatters ───────────────────────────────────────────────────────────────

export function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${Math.round(n / 1000).toLocaleString()}K`
  return `$${Math.round(n).toLocaleString()}`
}

export function formatMonths(n: number): string {
  if (n < 0.5) return `${Math.round(n * 30)} days`
  if (n < 2) return `~${Math.round(n * 4)} weeks`
  return `${n.toFixed(1)} months`
}

export function getResultHeadline(threeYearROI: number): string {
  if (threeYearROI > 1000) return "Every dollar you put into Brahmin returns more than 10×"
  if (threeYearROI > 500) return "You're leaving significant money on the table"
  if (threeYearROI > 200) return 'Brahmin would pay for itself many times over'
  return "Even with conservative estimates, you'd see meaningful savings"
}
