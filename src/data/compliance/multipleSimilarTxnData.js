export const mstAccounts = [
  { accountId: 'ACC-6501', repeatCount: 8, amount: 5000, totalAmount: 40000, timePeriod: '7 days', isRoundDollar: true, flagged: true },
  { accountId: 'ACC-6518', repeatCount: 6, amount: 3000, totalAmount: 18000, timePeriod: '5 days', isRoundDollar: true, flagged: true },
  { accountId: 'ACC-6533', repeatCount: 12, amount: 2500, totalAmount: 30000, timePeriod: '10 days', isRoundDollar: true, flagged: true },
  { accountId: 'ACC-6540', repeatCount: 3, amount: 7500, totalAmount: 22500, timePeriod: '14 days', isRoundDollar: true, flagged: false },
  { accountId: 'ACC-6555', repeatCount: 5, amount: 4237, totalAmount: 21185, timePeriod: '7 days', isRoundDollar: false, flagged: false },
  { accountId: 'ACC-6562', repeatCount: 10, amount: 1000, totalAmount: 10000, timePeriod: '3 days', isRoundDollar: true, flagged: true }
]

export const mstTransactions = [
  { date: '2024-01-10', amount: 5000, type: 'deposit' }, { date: '2024-01-11', amount: 5000, type: 'deposit' },
  { date: '2024-01-12', amount: 5000, type: 'deposit' }, { date: '2024-01-13', amount: 5000, type: 'deposit' },
  { date: '2024-01-14', amount: 5000, type: 'deposit' }, { date: '2024-01-15', amount: 5000, type: 'deposit' },
  { date: '2024-01-16', amount: 5000, type: 'deposit' }, { date: '2024-01-17', amount: 5000, type: 'deposit' }
]

export const mstParams = [
  { name: 'allowed_pct_difference', value: '5%', description: 'Maximum percentage difference between transaction amounts' },
  { name: 'combine_deposits_withdrawals', value: 'true', description: 'Whether to analyze deposits and withdrawals together' },
  { name: 'base_risk_score', value: '50', description: 'Default risk score assigned to alerts' }
]
