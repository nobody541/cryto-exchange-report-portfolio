export const pdTrades = [
  { tradeId: 'PD-001', accountId: 'ACC-1001', symbol: 'BTC/USD', tradePrice: 41500, marketPrice: 42800, deviationPct: -3.04, timestamp: '2024-01-15 14:30', flagged: true },
  { tradeId: 'PD-002', accountId: 'ACC-1018', symbol: 'ETH/USD', tradePrice: 2380, marketPrice: 2310, deviationPct: 3.03, timestamp: '2024-01-16 09:15', flagged: true },
  { tradeId: 'PD-003', accountId: 'ACC-1033', symbol: 'BTC/USD', tradePrice: 43200, marketPrice: 42900, deviationPct: 0.70, timestamp: '2024-01-16 11:45', flagged: false },
  { tradeId: 'PD-004', accountId: 'ACC-1040', symbol: 'SOL/USD', tradePrice: 88.50, marketPrice: 95.20, deviationPct: -7.04, timestamp: '2024-01-17 16:22', flagged: true },
  { tradeId: 'PD-005', accountId: 'ACC-1055', symbol: 'BTC/USD', tradePrice: 42750, marketPrice: 42800, deviationPct: -0.12, timestamp: '2024-01-18 10:05', flagged: false },
  { tradeId: 'PD-006', accountId: 'ACC-1062', symbol: 'ETH/USD', tradePrice: 2250, marketPrice: 2315, deviationPct: -2.81, timestamp: '2024-01-18 14:50', flagged: true },
  { tradeId: 'PD-007', accountId: 'ACC-1079', symbol: 'BTC/USD', tradePrice: 44100, marketPrice: 42850, deviationPct: 2.92, timestamp: '2024-01-19 08:30', flagged: true },
  { tradeId: 'PD-008', accountId: 'ACC-1086', symbol: 'SOL/USD', tradePrice: 94.80, marketPrice: 95.10, deviationPct: -0.32, timestamp: '2024-01-19 15:10', flagged: false }
]

export const pdMarketTimeline = [
  { time: '14:00', marketPrice: 42750 }, { time: '14:05', marketPrice: 42770 },
  { time: '14:10', marketPrice: 42790 }, { time: '14:15', marketPrice: 42800 },
  { time: '14:20', marketPrice: 42810 }, { time: '14:25', marketPrice: 42795 },
  { time: '14:30', marketPrice: 42800 }, { time: '14:35', marketPrice: 42820 },
  { time: '14:40', marketPrice: 42815 }, { time: '14:45', marketPrice: 42830 },
  { time: '14:50', marketPrice: 42825 }, { time: '14:55', marketPrice: 42840 },
  { time: '15:00', marketPrice: 42835 }
]

export const pdParams = [
  { name: 'deviation_threshold', value: '2%', description: 'Minimum price deviation from market to flag' },
  { name: 'monitoring_period', value: '24h', description: 'Rolling window for price comparison' },
  { name: 'min_trade_notional', value: '$5,000', description: 'Minimum trade value to consider' },
  { name: 'base_risk_score', value: '50', description: 'Default risk score assigned to alerts' }
]
