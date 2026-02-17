export const spoofingEvents = [
  {
    eventId: 'SPF-0012',
    accountId: 'ACC-9910',
    symbol: 'BTC/USD',
    spoofSide: 'Buy',
    spoofSize: 125000,
    spoofPrice: 42150.00,
    cancelTime: 2.3,
    tradeSide: 'Sell',
    tradeSize: 8500,
    tradePrice: 42180.50,
    tradeNotional: 358534.25,
    flagged: true
  },
  {
    eventId: 'SPF-0018',
    accountId: 'ACC-3345',
    symbol: 'ETH/USD',
    spoofSide: 'Sell',
    spoofSize: 84000,
    spoofPrice: 2285.00,
    cancelTime: 1.8,
    tradeSide: 'Buy',
    tradeSize: 12200,
    tradePrice: 2278.25,
    tradeNotional: 27794.65,
    flagged: false
  },
  {
    eventId: 'SPF-0024',
    accountId: 'ACC-9910',
    symbol: 'BTC/USD',
    spoofSide: 'Buy',
    spoofSize: 210000,
    spoofPrice: 42300.00,
    cancelTime: 3.1,
    tradeSide: 'Sell',
    tradeSize: 15400,
    tradePrice: 42345.00,
    tradeNotional: 652113.00,
    flagged: true
  },
  {
    eventId: 'SPF-0031',
    accountId: 'ACC-6682',
    symbol: 'SOL/USD',
    spoofSide: 'Sell',
    spoofSize: 190000,
    spoofPrice: 98.50,
    cancelTime: 4.2,
    tradeSide: 'Buy',
    tradeSize: 22000,
    tradePrice: 97.80,
    tradeNotional: 2151600.00,
    flagged: true
  }
]

export const spoofingOrderBook = [
  { price: 42400, bidSize: 120, askSize: 450 },
  { price: 42380, bidSize: 280, askSize: 620 },
  { price: 42360, bidSize: 350, askSize: 510 },
  { price: 42340, bidSize: 410, askSize: 390 },
  { price: 42320, bidSize: 520, askSize: 280 },
  { price: 42300, bidSize: 8500, askSize: 150 },
  { price: 42280, bidSize: 680, askSize: 95 },
  { price: 42260, bidSize: 430, askSize: 70 },
  { price: 42240, bidSize: 310, askSize: 45 },
  { price: 42220, bidSize: 250, askSize: 30 },
  { price: 42200, bidSize: 190, askSize: 20 },
  { price: 42180, bidSize: 140, askSize: 15 }
]

export const spoofingParams = [
  { name: 'cancellation_period', value: '5 seconds', description: 'Maximum time between order placement and cancellation to qualify as spoof' },
  { name: 'execution_period', value: '30 seconds', description: 'Maximum time between spoof cancellation and opposite-side execution' },
  { name: 'cancellation_volume_multiplier', value: '10x', description: 'Minimum ratio of cancelled volume to executed volume' },
  { name: 'minimum_executed_notional', value: '$50,000', description: 'Minimum notional value of the executed opposite-side trade' },
  { name: 'two_sided_order_skew', value: '0.75', description: 'Maximum skew ratio between spoof and execution sides of the book' }
]
