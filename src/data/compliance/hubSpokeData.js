export const hubSpokeNetworks = [
  {
    hub: 'ACC-5500',
    role: 'Aggregator',
    spokes: [
      { id: 'EXT-0011', amount: 18500, direction: 'inbound', type: 'Crypto Transfer' },
      { id: 'EXT-0022', amount: 24200, direction: 'inbound', type: 'Crypto Transfer' },
      { id: 'EXT-0033', amount: 12800, direction: 'inbound', type: 'Wire Transfer' },
      { id: 'EXT-0044', amount: 31000, direction: 'inbound', type: 'Crypto Transfer' },
      { id: 'EXT-0055', amount: 9700, direction: 'outbound', type: 'Wire Transfer' }
    ],
    totalAmount: 96200,
    flagged: true
  },
  {
    hub: 'ACC-7780',
    role: 'Distributor',
    spokes: [
      { id: 'EXT-1101', amount: 42000, direction: 'inbound', type: 'Crypto Transfer' },
      { id: 'EXT-1102', amount: 14500, direction: 'outbound', type: 'Wire Transfer' },
      { id: 'EXT-1103', amount: 13200, direction: 'outbound', type: 'Crypto Transfer' },
      { id: 'EXT-1104', amount: 11800, direction: 'outbound', type: 'Wire Transfer' }
    ],
    totalAmount: 81500,
    flagged: true
  },
  {
    hub: 'ACC-2210',
    role: 'Intermediary',
    spokes: [
      { id: 'EXT-2201', amount: 5400, direction: 'inbound', type: 'Crypto Transfer' },
      { id: 'EXT-2202', amount: 3200, direction: 'outbound', type: 'Wire Transfer' }
    ],
    totalAmount: 8600,
    flagged: false
  }
]

export const hubSpokeGraph = {
  nodes: [
    // Network 1 - ACC-5500 hub
    { id: 'H1', x: 0.2, y: 0.5, group: 'Hub', label: 'ACC-5500' },
    { id: 'S1a', x: 0.05, y: 0.85, group: 'Spoke', label: 'EXT-0011' },
    { id: 'S1b', x: 0.35, y: 0.85, group: 'Spoke', label: 'EXT-0022' },
    { id: 'S1c', x: 0.05, y: 0.15, group: 'Spoke', label: 'EXT-0033' },
    { id: 'S1d', x: 0.35, y: 0.15, group: 'Spoke', label: 'EXT-0044' },
    { id: 'S1e', x: 0.02, y: 0.5, group: 'Spoke', label: 'EXT-0055' },
    // Network 2 - ACC-7780 hub
    { id: 'H2', x: 0.65, y: 0.5, group: 'Hub', label: 'ACC-7780' },
    { id: 'S2a', x: 0.5, y: 0.8, group: 'Spoke', label: 'EXT-1101' },
    { id: 'S2b', x: 0.8, y: 0.8, group: 'Spoke', label: 'EXT-1102' },
    { id: 'S2c', x: 0.8, y: 0.2, group: 'Spoke', label: 'EXT-1103' },
    { id: 'S2d', x: 0.5, y: 0.2, group: 'Spoke', label: 'EXT-1104' },
    // Network 3 - ACC-2210 hub (not flagged)
    { id: 'H3', x: 0.92, y: 0.5, group: 'Hub', label: 'ACC-2210' },
    { id: 'S3a', x: 0.98, y: 0.7, group: 'Spoke', label: 'EXT-2201' },
    { id: 'S3b', x: 0.98, y: 0.3, group: 'Spoke', label: 'EXT-2202' }
  ],
  edges: [
    // Hub 1 connections
    { source: 'H1', target: 'S1a', weight: 3 },
    { source: 'H1', target: 'S1b', weight: 4 },
    { source: 'H1', target: 'S1c', weight: 2 },
    { source: 'H1', target: 'S1d', weight: 4 },
    { source: 'H1', target: 'S1e', weight: 2 },
    // Hub 2 connections
    { source: 'H2', target: 'S2a', weight: 4 },
    { source: 'H2', target: 'S2b', weight: 3 },
    { source: 'H2', target: 'S2c', weight: 2 },
    { source: 'H2', target: 'S2d', weight: 2 },
    // Hub 3 connections
    { source: 'H3', target: 'S3a', weight: 1 },
    { source: 'H3', target: 'S3b', weight: 1 }
  ]
}

export const hubSpokeParams = [
  { name: 'HP_min_spoke_count', value: '2', description: 'Minimum number of unique external counterparties connected to the hub' },
  { name: 'HP_threshold_amount', value: '$2,000', description: 'Minimum aggregate transaction amount across all spokes' },
  { name: 'HP_time_window', value: '1 day', description: 'Rolling window for aggregating hub-spoke interactions' }
]
