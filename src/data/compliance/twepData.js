export const twepAccounts = [
  { accountId: 'ACC-6620', deposits: 145000, withdrawals: 143800, tradeCount: 2, tradeVolume: 320, dwRatio: 0.992, flagged: true },
  { accountId: 'ACC-3318', deposits: 89000, withdrawals: 88200, tradeCount: 0, tradeVolume: 0, dwRatio: 0.991, flagged: true },
  { accountId: 'ACC-9905', deposits: 212000, withdrawals: 210500, tradeCount: 1, tradeVolume: 150, dwRatio: 0.993, flagged: true },
  { accountId: 'ACC-1147', deposits: 67000, withdrawals: 66400, tradeCount: 3, tradeVolume: 480, dwRatio: 0.991, flagged: true },
  { accountId: 'ACC-5534', deposits: 54000, withdrawals: 41000, tradeCount: 87, tradeVolume: 38200, dwRatio: 0.759, flagged: false },
  { accountId: 'ACC-2209', deposits: 78000, withdrawals: 32000, tradeCount: 142, tradeVolume: 65400, dwRatio: 0.410, flagged: false },
  { accountId: 'ACC-8871', deposits: 125000, withdrawals: 95000, tradeCount: 231, tradeVolume: 112000, dwRatio: 0.760, flagged: false },
  { accountId: 'ACC-4456', deposits: 33000, withdrawals: 28000, tradeCount: 56, tradeVolume: 21500, dwRatio: 0.848, flagged: false }
]

export const twepParams = [
  { name: 'twep_threshold', value: '$500', description: 'Minimum total deposit+withdrawal amount to be analyzed' },
  { name: 'twep_threshold_deposit_withdrawal', value: '0.01', description: 'Maximum allowed difference ratio between deposits and withdrawals (|D-W|/D < threshold)' },
  { name: 'twep_threshold_buy_sell', value: '0.01', description: 'Maximum trade volume as a fraction of deposit volume (tradeVol/deposits < threshold)' }
]
