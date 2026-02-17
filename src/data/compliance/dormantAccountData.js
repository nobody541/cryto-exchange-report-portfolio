export const dormantAccounts = [
  { accountId: 'ACC-4010', lastActivityDate: '2023-09-12', reactivationDate: '2024-01-18', dormantDays: 128, reactivationAmount: 45200, transactionType: 'deposit', flagged: true },
  { accountId: 'ACC-4025', lastActivityDate: '2023-10-05', reactivationDate: '2024-01-22', dormantDays: 109, reactivationAmount: 28700, transactionType: 'withdrawal', flagged: true },
  { accountId: 'ACC-4038', lastActivityDate: '2023-08-20', reactivationDate: '2024-01-15', dormantDays: 148, reactivationAmount: 67300, transactionType: 'deposit', flagged: true },
  { accountId: 'ACC-4051', lastActivityDate: '2023-11-01', reactivationDate: '2024-01-29', dormantDays: 89, reactivationAmount: 85, transactionType: 'deposit', flagged: false },
  { accountId: 'ACC-4062', lastActivityDate: '2023-07-15', reactivationDate: '2024-01-10', dormantDays: 179, reactivationAmount: 112500, transactionType: 'deposit', flagged: true },
  { accountId: 'ACC-4079', lastActivityDate: '2023-12-28', reactivationDate: '2024-01-30', dormantDays: 33, reactivationAmount: 5200, transactionType: 'withdrawal', flagged: false }
]

export const dormantTimeline = [
  { date: '2023-08-20', activity: 3200 },
  { date: '2023-09-01', activity: 0 },
  { date: '2023-10-01', activity: 0 },
  { date: '2023-11-01', activity: 0 },
  { date: '2023-12-01', activity: 0 },
  { date: '2024-01-01', activity: 0 },
  { date: '2024-01-15', activity: 67300 },
  { date: '2024-01-16', activity: 12400 },
  { date: '2024-01-17', activity: 8900 },
  { date: '2024-01-18', activity: 0 },
  { date: '2024-01-20', activity: 0 }
]

export const dormantParams = [
  { name: 'dormancy_period', value: '90 days', description: 'Time since last transaction to classify account as dormant' },
  { name: 'activity_time_window', value: '6 hours', description: 'Monitoring window after first transaction on dormant account' },
  { name: 'min_aggregate_notional', value: '$100', description: 'Minimum aggregate transaction value to trigger alert' },
  { name: 'alert_on_empty_history', value: 'false', description: 'Whether to alert on accounts with no prior transaction history' }
]
