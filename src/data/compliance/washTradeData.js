export const wtType1Data = [
  { tradeId: 'WT1-0041', userId: 'USR-2281', accountA: 'ACC-2281-A', accountB: 'ACC-2281-B', symbol: 'BTC/USD', amount: 24500, timestamp: '2024-01-11 09:14:32', flagged: true },
  { tradeId: 'WT1-0042', userId: 'USR-2281', accountA: 'ACC-2281-A', accountB: 'ACC-2281-C', symbol: 'BTC/USD', amount: 18200, timestamp: '2024-01-11 09:14:45', flagged: true },
  { tradeId: 'WT1-0058', userId: 'USR-4490', accountA: 'ACC-4490-A', accountB: 'ACC-4490-B', symbol: 'ETH/USD', amount: 31700, timestamp: '2024-01-15 14:22:10', flagged: true },
  { tradeId: 'WT1-0063', userId: 'USR-7712', accountA: 'ACC-7712-A', accountB: 'ACC-7712-B', symbol: 'SOL/USD', amount: 8900, timestamp: '2024-01-18 11:05:48', flagged: true },
  { tradeId: 'WT1-0071', userId: 'USR-3305', accountA: 'ACC-3305-A', accountB: 'ACC-3305-B', symbol: 'BTC/USD', amount: 42100, timestamp: '2024-01-21 16:33:19', flagged: true }
]

export const wtType2Data = [
  { userId: 'USR-1120', counterpartyId: 'USR-1121', symbol: 'BTC/USD', trades: 47, totalNotional: 385000, avgTimeDelta: 12.4, advPct: 42.1, flagged: true },
  { userId: 'USR-3340', counterpartyId: 'USR-3341', symbol: 'ETH/USD', trades: 31, totalNotional: 214000, avgTimeDelta: 8.7, advPct: 35.8, flagged: true },
  { userId: 'USR-5580', counterpartyId: 'USR-5582', symbol: 'SOL/USD', trades: 22, totalNotional: 127000, avgTimeDelta: 19.2, advPct: 31.5, flagged: true },
  { userId: 'USR-6670', counterpartyId: 'USR-6671', symbol: 'BTC/USD', trades: 14, totalNotional: 89000, avgTimeDelta: 45.6, advPct: 18.3, flagged: false },
  { userId: 'USR-8890', counterpartyId: 'USR-8891', symbol: 'AVAX/USD', trades: 9, totalNotional: 52000, avgTimeDelta: 62.1, advPct: 12.7, flagged: false },
  { userId: 'USR-2210', counterpartyId: 'USR-2215', symbol: 'ETH/USD', trades: 6, totalNotional: 34000, avgTimeDelta: 88.3, advPct: 8.4, flagged: false }
]

export const wtType3Network = {
  nodes: [
    // Community A (wash ring)
    { id: 'A1', x: 0.1, y: 0.8, group: 'Community A', label: 'USR-1120' },
    { id: 'A2', x: 0.25, y: 0.95, group: 'Community A', label: 'USR-1121' },
    { id: 'A3', x: 0.35, y: 0.75, group: 'Community A', label: 'USR-1124' },
    { id: 'A4', x: 0.15, y: 0.6, group: 'Community A', label: 'USR-1130' },
    // Community B (wash ring)
    { id: 'B1', x: 0.55, y: 0.85, group: 'Community B', label: 'USR-3340' },
    { id: 'B2', x: 0.7, y: 0.95, group: 'Community B', label: 'USR-3341' },
    { id: 'B3', x: 0.8, y: 0.78, group: 'Community B', label: 'USR-3345' },
    { id: 'B4', x: 0.65, y: 0.65, group: 'Community B', label: 'USR-3348' },
    // Community C (wash ring)
    { id: 'C1', x: 0.3, y: 0.3, group: 'Community C', label: 'USR-5580' },
    { id: 'C2', x: 0.5, y: 0.35, group: 'Community C', label: 'USR-5582' },
    { id: 'C3', x: 0.45, y: 0.15, group: 'Community C', label: 'USR-5585' },
    { id: 'C4', x: 0.2, y: 0.15, group: 'Community C', label: 'USR-5590' }
  ],
  edges: [
    // Community A edges (dense wash trading)
    { source: 'A1', target: 'A2', weight: 4 },
    { source: 'A1', target: 'A3', weight: 3 },
    { source: 'A1', target: 'A4', weight: 2 },
    { source: 'A2', target: 'A3', weight: 3 },
    { source: 'A2', target: 'A4', weight: 2 },
    { source: 'A3', target: 'A4', weight: 2 },
    // Community B edges
    { source: 'B1', target: 'B2', weight: 4 },
    { source: 'B1', target: 'B3', weight: 3 },
    { source: 'B1', target: 'B4', weight: 2 },
    { source: 'B2', target: 'B3', weight: 2 },
    { source: 'B2', target: 'B4', weight: 3 },
    { source: 'B3', target: 'B4', weight: 2 },
    // Community C edges
    { source: 'C1', target: 'C2', weight: 3 },
    { source: 'C1', target: 'C3', weight: 2 },
    { source: 'C1', target: 'C4', weight: 2 },
    { source: 'C2', target: 'C3', weight: 3 },
    { source: 'C2', target: 'C4', weight: 2 },
    { source: 'C3', target: 'C4', weight: 2 }
  ]
}

export const wtParams = [
  { name: 'WT_time_window', value: '1 day', description: 'Rolling window for aggregating trades between counterparties' },
  { name: 'WT_timedelta', value: '60 seconds', description: 'Maximum time gap between matching buy/sell orders to flag as coordinated' },
  { name: 'WT_notional_threshold', value: '$5,000', description: 'Minimum notional value of wash trade pair to trigger alert' },
  { name: 'WT_ADV_PCT', value: '30%', description: 'Minimum percentage of ADV that paired trading must exceed' },
  { name: 'WT_volume_pct', value: '50%', description: 'Minimum percentage of a user pair total volume that must be mutual' },
  { name: 'net_value_threshold_percent', value: '0.5%', description: 'Maximum net value as percentage of gross to qualify as wash' },
  { name: 'score_threshold', value: '5', description: 'Minimum community detection score to flag a network cluster' }
]
