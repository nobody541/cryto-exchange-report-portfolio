export const miEvents = [
  { eventId: 'MI-001', accountId: 'ACC-8501', symbol: 'ETH/USD', initialOrders: 15, priceMovementPct: 2.5, profitTrade: 12000, timeWindow: '45s', flagged: true },
  { eventId: 'MI-002', accountId: 'ACC-8518', symbol: 'BTC/USD', initialOrders: 22, priceMovementPct: 1.8, profitTrade: 28500, timeWindow: '30s', flagged: true },
  { eventId: 'MI-003', accountId: 'ACC-8533', symbol: 'SOL/USD', initialOrders: 8, priceMovementPct: 3.1, profitTrade: 7800, timeWindow: '55s', flagged: true },
  { eventId: 'MI-004', accountId: 'ACC-8540', symbol: 'ETH/USD', initialOrders: 5, priceMovementPct: 0.6, profitTrade: 1200, timeWindow: '40s', flagged: false }
]

export const miPriceImpact = [
  { time: '10:00:00', price: 2450.00, event: null },
  { time: '10:00:05', price: 2450.50, event: null },
  { time: '10:00:10', price: 2451.00, event: null },
  { time: '10:00:15', price: 2452.00, event: 'ignition_start' },
  { time: '10:00:20', price: 2455.00, event: 'ignition_orders' },
  { time: '10:00:25', price: 2459.50, event: 'ignition_orders' },
  { time: '10:00:30', price: 2464.00, event: 'ignition_orders' },
  { time: '10:00:35', price: 2468.00, event: 'peak' },
  { time: '10:00:40', price: 2465.00, event: null },
  { time: '10:00:45', price: 2460.00, event: 'profit_trade' },
  { time: '10:00:50', price: 2456.00, event: null },
  { time: '10:00:55', price: 2453.00, event: null },
  { time: '10:01:00', price: 2451.50, event: null }
]

export const miParams = [
  { name: 'order_rate_threshold', value: '10/second', description: 'Minimum order submission rate to qualify as rapid-fire' },
  { name: 'price_impact_threshold', value: '1%', description: 'Minimum price movement to qualify as ignition' },
  { name: 'reversal_window', value: '60s', description: 'Window after ignition for detecting profit-taking trades' },
  { name: 'min_notional', value: '$25,000', description: 'Minimum notional of profit trade to flag' }
]
