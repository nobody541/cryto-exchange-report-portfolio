export const qsEvents = [
  { eventId: 'QS-001', accountId: 'ACC-9501', symbol: 'BTC/USD', ordersPlaced: 520, ordersCancelled: 515, cancellationRate: 99.0, timeWindow: '8s', flagged: true },
  { eventId: 'QS-002', accountId: 'ACC-9518', symbol: 'ETH/USD', ordersPlaced: 340, ordersCancelled: 332, cancellationRate: 97.6, timeWindow: '12s', flagged: true },
  { eventId: 'QS-003', accountId: 'ACC-9533', symbol: 'BTC/USD', ordersPlaced: 180, ordersCancelled: 175, cancellationRate: 97.2, timeWindow: '6s', flagged: true },
  { eventId: 'QS-004', accountId: 'ACC-9540', symbol: 'SOL/USD', ordersPlaced: 45, ordersCancelled: 30, cancellationRate: 66.7, timeWindow: '15s', flagged: false }
]

export const qsOrderRate = Array.from({ length: 60 }, (_, i) => ({
  second: i,
  ordersPlaced: i >= 22 && i <= 30 ? 50 + Math.floor(Math.random() * 30) : 2 + Math.floor(Math.random() * 5),
  ordersCancelled: i >= 22 && i <= 30 ? 48 + Math.floor(Math.random() * 28) : 1 + Math.floor(Math.random() * 3)
}))

export const qsParams = [
  { name: 'order_rate_threshold', value: '50/second', description: 'Minimum order submission rate to flag' },
  { name: 'cancellation_rate_threshold', value: '90%', description: 'Minimum cancellation rate within time window' },
  { name: 'time_window', value: '10s', description: 'Analysis window for measuring order rates' },
  { name: 'min_orders', value: '100', description: 'Minimum total orders in window to flag' }
]
