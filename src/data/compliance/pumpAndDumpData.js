export const padPriceVolume = [
  { date: '2024-01-01', price: 1.20, volume: 50000, phase: 'normal' },
  { date: '2024-01-02', price: 1.22, volume: 55000, phase: 'normal' },
  { date: '2024-01-03', price: 1.19, volume: 48000, phase: 'normal' },
  { date: '2024-01-04', price: 1.21, volume: 52000, phase: 'normal' },
  { date: '2024-01-05', price: 1.25, volume: 61000, phase: 'normal' },
  { date: '2024-01-06', price: 1.18, volume: 47000, phase: 'normal' },
  { date: '2024-01-07', price: 1.20, volume: 53000, phase: 'normal' },
  { date: '2024-01-08', price: 1.24, volume: 58000, phase: 'normal' },
  { date: '2024-01-09', price: 1.23, volume: 54000, phase: 'normal' },
  { date: '2024-01-10', price: 1.21, volume: 51000, phase: 'normal' },
  { date: '2024-01-11', price: 1.28, volume: 78000, phase: 'pump' },
  { date: '2024-01-12', price: 1.35, volume: 125000, phase: 'pump' },
  { date: '2024-01-13', price: 1.48, volume: 210000, phase: 'pump' },
  { date: '2024-01-14', price: 1.62, volume: 340000, phase: 'pump' },
  { date: '2024-01-15', price: 1.78, volume: 520000, phase: 'pump' },
  { date: '2024-01-16', price: 1.95, volume: 680000, phase: 'pump' },
  { date: '2024-01-17', price: 2.15, volume: 850000, phase: 'pump' },
  { date: '2024-01-18', price: 1.45, volume: 920000, phase: 'dump' },
  { date: '2024-01-19', price: 1.10, volume: 750000, phase: 'dump' },
  { date: '2024-01-20', price: 0.95, volume: 420000, phase: 'dump' },
  { date: '2024-01-21', price: 0.88, volume: 280000, phase: 'dump' },
  { date: '2024-01-22', price: 0.82, volume: 180000, phase: 'dump' },
  { date: '2024-01-23', price: 0.85, volume: 120000, phase: 'normal' },
  { date: '2024-01-24', price: 0.87, volume: 95000, phase: 'normal' },
  { date: '2024-01-25', price: 0.84, volume: 78000, phase: 'normal' }
]

export const padSuspects = [
  { accountId: 'ACC-7501', symbol: 'TOKEN-X', buyVolumePump: 450000, sellVolumeDump: 435000, estimatedProfit: 82000, tradingPct: 34.2, flagged: true },
  { accountId: 'ACC-7518', symbol: 'TOKEN-X', buyVolumePump: 280000, sellVolumeDump: 270000, estimatedProfit: 51000, tradingPct: 21.5, flagged: true },
  { accountId: 'ACC-7533', symbol: 'TOKEN-X', buyVolumePump: 120000, sellVolumeDump: 95000, estimatedProfit: 18500, tradingPct: 9.2, flagged: true },
  { accountId: 'ACC-7540', symbol: 'TOKEN-X', buyVolumePump: 35000, sellVolumeDump: 28000, estimatedProfit: 4200, tradingPct: 2.7, flagged: false }
]

export const padParams = [
  { name: 'price_change_threshold', value: '20%', description: 'Minimum price increase during pump phase to trigger analysis' },
  { name: 'volume_spike_multiplier', value: '3x', description: 'Volume must exceed normal average by this factor' },
  { name: 'monitoring_window', value: '7 days', description: 'Time window for detecting pump-dump cycle' },
  { name: 'min_notional', value: '$10,000', description: 'Minimum account trading notional to flag as suspect' }
]
