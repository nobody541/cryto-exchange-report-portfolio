export const structuringDeposits = [
  {
    accountId: 'ACC-4410',
    deposits: [
      { date: '2024-01-05', amount: 9800 },
      { date: '2024-01-06', amount: 9500 },
      { date: '2024-01-08', amount: 9700 },
      { date: '2024-01-10', amount: 9900 },
      { date: '2024-01-12', amount: 9600 }
    ],
    totalAmount: 48500,
    depositCount: 5,
    flagged: true
  },
  {
    accountId: 'ACC-7723',
    deposits: [
      { date: '2024-01-03', amount: 9200 },
      { date: '2024-01-04', amount: 9400 },
      { date: '2024-01-07', amount: 9100 },
      { date: '2024-01-09', amount: 9300 }
    ],
    totalAmount: 37000,
    depositCount: 4,
    flagged: true
  },
  {
    accountId: 'ACC-1156',
    deposits: [
      { date: '2024-01-11', amount: 9950 },
      { date: '2024-01-13', amount: 9850 },
      { date: '2024-01-14', amount: 9750 }
    ],
    totalAmount: 29550,
    depositCount: 3,
    flagged: true
  },
  {
    accountId: 'ACC-8890',
    deposits: [
      { date: '2024-01-02', amount: 5200 },
      { date: '2024-01-15', amount: 12500 }
    ],
    totalAmount: 17700,
    depositCount: 2,
    flagged: false
  },
  {
    accountId: 'ACC-3302',
    deposits: [
      { date: '2024-01-06', amount: 7800 },
      { date: '2024-01-20', amount: 3200 }
    ],
    totalAmount: 11000,
    depositCount: 2,
    flagged: false
  }
]

export const structuringParams = [
  { name: 'alert_value', value: '$10,000', description: 'Regulatory reporting threshold for individual cash deposits' },
  { name: 'structuring_alert_number_of_deposit', value: '2', description: 'Minimum number of sub-threshold deposits within the window to trigger alert' }
]
