export const uvDailyVolume = [
  { date: '2024-01-01', volume: 12400, avgVolume: 14200, flagged: false },
  { date: '2024-01-02', volume: 15800, avgVolume: 14200, flagged: false },
  { date: '2024-01-03', volume: 13100, avgVolume: 14200, flagged: false },
  { date: '2024-01-04', volume: 11900, avgVolume: 14200, flagged: false },
  { date: '2024-01-05', volume: 16200, avgVolume: 14200, flagged: false },
  { date: '2024-01-06', volume: 14700, avgVolume: 14200, flagged: false },
  { date: '2024-01-07', volume: 13500, avgVolume: 14200, flagged: false },
  { date: '2024-01-08', volume: 15100, avgVolume: 14200, flagged: false },
  { date: '2024-01-09', volume: 12800, avgVolume: 14200, flagged: false },
  { date: '2024-01-10', volume: 14400, avgVolume: 14200, flagged: false },
  { date: '2024-01-11', volume: 52300, avgVolume: 14200, flagged: true },
  { date: '2024-01-12', volume: 16900, avgVolume: 14200, flagged: false },
  { date: '2024-01-13', volume: 13700, avgVolume: 14200, flagged: false },
  { date: '2024-01-14', volume: 14900, avgVolume: 14200, flagged: false },
  { date: '2024-01-15', volume: 11600, avgVolume: 14200, flagged: false },
  { date: '2024-01-16', volume: 15500, avgVolume: 14200, flagged: false },
  { date: '2024-01-17', volume: 13200, avgVolume: 14200, flagged: false },
  { date: '2024-01-18', volume: 14800, avgVolume: 14200, flagged: false },
  { date: '2024-01-19', volume: 12300, avgVolume: 14200, flagged: false },
  { date: '2024-01-20', volume: 15700, avgVolume: 14200, flagged: false },
  { date: '2024-01-21', volume: 67800, avgVolume: 14200, flagged: true },
  { date: '2024-01-22', volume: 14100, avgVolume: 14200, flagged: false },
  { date: '2024-01-23', volume: 13800, avgVolume: 14200, flagged: false },
  { date: '2024-01-24', volume: 16100, avgVolume: 14200, flagged: false },
  { date: '2024-01-25', volume: 12500, avgVolume: 14200, flagged: false },
  { date: '2024-01-26', volume: 14600, avgVolume: 14200, flagged: false },
  { date: '2024-01-27', volume: 45100, avgVolume: 14200, flagged: true },
  { date: '2024-01-28', volume: 13900, avgVolume: 14200, flagged: false },
  { date: '2024-01-29', volume: 15300, avgVolume: 14200, flagged: false },
  { date: '2024-01-30', volume: 14000, avgVolume: 14200, flagged: false }
]

export const uvFlaggedAccounts = [
  { accountId: 'ACC-7821', symbol: 'BTC/USD', totalVolume: 285000, avgDailyVolume: 42000, deviationPct: 578.6, flagged: true },
  { accountId: 'ACC-3394', symbol: 'ETH/USD', totalVolume: 192000, avgDailyVolume: 31500, deviationPct: 509.5, flagged: true },
  { accountId: 'ACC-5510', symbol: 'BTC/USD', totalVolume: 147000, avgDailyVolume: 28000, deviationPct: 425.0, flagged: true },
  { accountId: 'ACC-1287', symbol: 'SOL/USD', totalVolume: 89000, avgDailyVolume: 22000, deviationPct: 304.5, flagged: true },
  { accountId: 'ACC-6643', symbol: 'ETH/USD', totalVolume: 64000, avgDailyVolume: 35000, deviationPct: 82.9, flagged: false },
  { accountId: 'ACC-9102', symbol: 'BTC/USD', totalVolume: 51000, avgDailyVolume: 44000, deviationPct: 15.9, flagged: false },
  { accountId: 'ACC-4478', symbol: 'AVAX/USD', totalVolume: 38000, avgDailyVolume: 19000, deviationPct: 100.0, flagged: false },
  { accountId: 'ACC-2056', symbol: 'SOL/USD', totalVolume: 27000, avgDailyVolume: 25000, deviationPct: 8.0, flagged: false }
]

export const uvParams = [
  { name: 'UV_num_of_trade_threshold', value: '5', description: 'Minimum number of trades required to trigger analysis' },
  { name: 'UV_trade_volume_threshold', value: '$2,000', description: 'Minimum individual trade volume to be considered' },
  { name: 'UV_pct_threshold_ADV', value: '30%', description: 'Percentage of average daily volume (ADV) that triggers ADV-based alert' },
  { name: 'UV_pct_threshold_UserId', value: '20%', description: 'Percentage threshold for user-level historical volume deviation' },
  { name: 'UV_min_volume', value: '$1,000', description: 'Minimum cumulative volume in the analysis window' },
  { name: 'UV_min_15m_volume', value: '$5,000', description: 'Minimum 15-minute rolling window volume to qualify for ADV check' }
]
