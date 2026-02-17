export const iaAccounts = [
  { accountId: 'ACC-5501', baselineAvgDaily: 5200, currentActivity: 87000, deviationMultiple: 16.7, activityType: 'deposits', flagged: true },
  { accountId: 'ACC-5518', baselineAvgDaily: 8400, currentActivity: 62000, deviationMultiple: 7.4, activityType: 'trading', flagged: true },
  { accountId: 'ACC-5533', baselineAvgDaily: 12000, currentActivity: 95000, deviationMultiple: 7.9, activityType: 'withdrawals', flagged: true },
  { accountId: 'ACC-5540', baselineAvgDaily: 15000, currentActivity: 28000, deviationMultiple: 1.9, activityType: 'deposits', flagged: false },
  { accountId: 'ACC-5555', baselineAvgDaily: 3200, currentActivity: 8100, deviationMultiple: 2.5, activityType: 'trading', flagged: false },
  { accountId: 'ACC-5562', baselineAvgDaily: 22000, currentActivity: 145000, deviationMultiple: 6.6, activityType: 'deposits', flagged: true }
]

export const iaTimeline = [
  { date: '2023-11-15', activity: 5100, baseline: 5200 }, { date: '2023-11-22', activity: 4800, baseline: 5200 },
  { date: '2023-11-29', activity: 5400, baseline: 5200 }, { date: '2023-12-06', activity: 5000, baseline: 5200 },
  { date: '2023-12-13', activity: 4700, baseline: 5200 }, { date: '2023-12-20', activity: 5600, baseline: 5200 },
  { date: '2023-12-27', activity: 5300, baseline: 5200 }, { date: '2024-01-03', activity: 4900, baseline: 5200 },
  { date: '2024-01-10', activity: 87000, baseline: 5200 }, { date: '2024-01-17', activity: 12000, baseline: 5200 },
  { date: '2024-01-24', activity: 5100, baseline: 5200 }
]

export const iaParams = [
  { name: 'baseline_window', value: '60 days', description: 'Historical period for establishing activity baseline' },
  { name: 'min_aggregate_notional', value: '$10,000', description: 'Minimum cumulative value for alert consideration' },
  { name: 'min_active_days', value: '1', description: 'Minimum active days in baseline for valid comparison' },
  { name: 'sensitivity', value: 'Medium', description: 'Detection sensitivity level (Low/Medium/High)' }
]
