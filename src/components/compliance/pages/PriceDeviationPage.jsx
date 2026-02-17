import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { pdTrades, pdMarketTimeline, pdParams } from '../../../data/compliance/priceDeviationData.js'

const PriceDeviationPage = () => {
  const marketTimes = pdMarketTimeline.map(d => d.time)
  const marketPrices = pdMarketTimeline.map(d => d.marketPrice)

  // Filter BTC/USD trades that fall within the timeline window for scatter overlay
  const btcTrades = pdTrades.filter(t => t.symbol === 'BTC/USD')
  const flaggedTrades = btcTrades.filter(t => t.flagged)
  const normalTrades = btcTrades.filter(t => !t.flagged)

  return (
    <CompliancePageLayout
      title="Price Deviation Detection (PD)"
      category="Trade Surveillance"
      description={
        <p>
          Identifies trades executed at prices that deviate significantly from prevailing
          market prices. Such deviations may indicate off-market transactions, preferential
          pricing, front-running, or other forms of market abuse where trades are intentionally
          priced away from fair value.
        </p>
      }
      parameters={pdParams}
      detectionLogic={
        <p>
          Compare each trade price against the contemporaneous market price for the same
          instrument. Flag trades where the absolute deviation exceeds the configured
          threshold percentage, provided the trade notional meets the minimum value. Assign
          risk scores based on deviation magnitude and trade characteristics.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: marketTimes,
            y: marketPrices,
            type: 'scatter',
            mode: 'lines',
            name: 'Market Price (BTC/USD)',
            line: { color: '#395E9D', width: 2 }
          },
          {
            x: flaggedTrades.map(t => {
              const parts = t.timestamp.split(' ')
              return parts[1]
            }),
            y: flaggedTrades.map(t => t.tradePrice),
            type: 'scatter',
            mode: 'markers',
            name: 'Flagged Trades',
            marker: { color: '#E74C3C', size: 14, symbol: 'x', line: { width: 2 } }
          },
          {
            x: normalTrades.map(t => {
              const parts = t.timestamp.split(' ')
              return parts[1]
            }),
            y: normalTrades.map(t => t.tradePrice),
            type: 'scatter',
            mode: 'markers',
            name: 'Normal Trades',
            marker: { color: '#3498DB', size: 10, symbol: 'circle' }
          }
        ]}
        layout={{
          title: { text: 'BTC/USD Market Price vs Trade Prices', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Time' },
          yaxis: { title: 'Price ($)' },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 30, b: 50, l: 70 },
          legend: { orientation: 'h', y: -0.2 },
          annotations: [
            {
              x: '14:30',
              y: 41500,
              text: 'PD-001: -3.04%',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#E74C3C',
              font: { color: '#E74C3C', size: 11 },
              ax: -60,
              ay: 30
            }
          ]
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Price Deviation Alerts"
        columns={[
          { key: 'tradeId', label: 'Trade ID' },
          { key: 'accountId', label: 'Account ID' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'tradePrice', label: 'Trade Price', format: v => `$${v.toLocaleString()}` },
          { key: 'marketPrice', label: 'Market Price', format: v => `$${v.toLocaleString()}` },
          { key: 'deviationPct', label: 'Deviation %', format: v => `${v > 0 ? '+' : ''}${v}%` },
          { key: 'timestamp', label: 'Timestamp' }
        ]}
        rows={pdTrades}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default PriceDeviationPage
