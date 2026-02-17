export const mcstAccounts = [
  { accountId: 'ACC-4501', transactionCount: 22, totalAmount: 9200, avgAmount: 418, minAmount: 210, maxAmount: 495, frequency: '3.1/day', flagged: true },
  { accountId: 'ACC-4518', transactionCount: 18, totalAmount: 7650, avgAmount: 425, minAmount: 220, maxAmount: 490, frequency: '2.6/day', flagged: true },
  { accountId: 'ACC-4533', transactionCount: 15, totalAmount: 6300, avgAmount: 420, minAmount: 250, maxAmount: 480, frequency: '2.1/day', flagged: true },
  { accountId: 'ACC-4540', transactionCount: 8, totalAmount: 4800, avgAmount: 600, minAmount: 150, maxAmount: 1200, frequency: '1.1/day', flagged: false },
  { accountId: 'ACC-4555', transactionCount: 5, totalAmount: 2100, avgAmount: 420, minAmount: 380, maxAmount: 470, frequency: '0.7/day', flagged: false },
  { accountId: 'ACC-4562', transactionCount: 28, totalAmount: 11200, avgAmount: 400, minAmount: 200, maxAmount: 500, frequency: '4.0/day', flagged: true }
]

export const mcstDistribution = [
  { date: '2024-01-10', amount: 450 }, { date: '2024-01-10', amount: 380 }, { date: '2024-01-10', amount: 420 },
  { date: '2024-01-11', amount: 490 }, { date: '2024-01-11', amount: 310 }, { date: '2024-01-11', amount: 440 },
  { date: '2024-01-12', amount: 370 }, { date: '2024-01-12', amount: 460 }, { date: '2024-01-12', amount: 400 },
  { date: '2024-01-13', amount: 425 }, { date: '2024-01-13', amount: 350 }, { date: '2024-01-13', amount: 480 },
  { date: '2024-01-14', amount: 410 }, { date: '2024-01-14', amount: 390 }, { date: '2024-01-14', amount: 445 },
  { date: '2024-01-15', amount: 360 }, { date: '2024-01-15', amount: 470 }, { date: '2024-01-15', amount: 415 },
  { date: '2024-01-16', amount: 435 }, { date: '2024-01-16', amount: 385 }, { date: '2024-01-16', amount: 450 },
  { date: '2024-01-16', amount: 210 }
]

export const mcstParams = [
  { name: 'total_period', value: '1 week', description: 'Rolling window for aggregating transactions' },
  { name: 'frequency_threshold', value: '3', description: 'Minimum transactions per frequency period' },
  { name: 'min_amount', value: '$200', description: 'Lower bound of suspicious amount range' },
  { name: 'max_amount', value: '$500', description: 'Upper bound of suspicious amount range' },
  { name: 'min_tx_count', value: '5', description: 'Minimum total transactions to trigger alert' }
]
