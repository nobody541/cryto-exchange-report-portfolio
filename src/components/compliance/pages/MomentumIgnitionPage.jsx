import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { miEvents, miPriceImpact, miParams } from '../../../data/compliance/momentumIgnitionData.js'

const MomentumIgnitionPage = () => {
  const times = miPriceImpact.map(d => d.time)
  const prices = miPriceImpact.map(d => d.price)

  // Separate event points by type
  const ignitionPoints = miPriceImpact.filter(d => d.event && (d.event === 'ignition_start' || d.event === 'ignition_orders'))
  const peakPoints = miPriceImpact.filter(d => d.event === 'peak')
  const profitPoints = miPriceImpact.filter(d => d.event === 'profit_trade')

  return (
    <CompliancePageLayout
      title="Momentum Ignition Detection (MI)"
      category="Trade Surveillance"
      description={
        <p>
          Detects momentum ignition strategies where a trader submits a rapid series of
          aggressive orders to move the price in a desired direction, then profits by trading
          on the resulting momentum before the price reverts. This manipulative pattern
          exploits market microstructure and other participants' algorithms.
        </p>
      }
      parameters={miParams}
      detectionLogic={
        <p>
          Monitor for bursts of rapid-fire order submissions that cause meaningful price
          movements within a short time window. Flag events where the initiating account
          subsequently executes a profit-taking trade in the opposite direction during the
          reversal window.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: times,
            y: prices,
            type: 'scatter',
            mode: 'lines',
            name: 'ETH/USD Price',
            line: { color: '#395E9D', width: 2 }
          },
          {
            x: ignitionPoints.map(d => d.time),
            y: ignitionPoints.map(d => d.price),
            type: 'scatter',
            mode: 'markers',
            name: 'Ignition Orders',
            marker: { color: '#E74C3C', size: 12, symbol: 'triangle-up' }
          },
          {
            x: peakPoints.map(d => d.time),
            y: peakPoints.map(d => d.price),
            type: 'scatter',
            mode: 'markers',
            name: 'Peak',
            marker: { color: '#3498DB', size: 14, symbol: 'diamond' }
          },
          {
            x: profitPoints.map(d => d.time),
            y: profitPoints.map(d => d.price),
            type: 'scatter',
            mode: 'markers',
            name: 'Profit Trade',
            marker: { color: '#2ECC71', size: 12, symbol: 'star' }
          }
        ]}
        layout={{
          title: { text: 'Momentum Ignition Event (MI-001)', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Time' },
          yaxis: { title: 'Price ($)' },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 30, b: 50, l: 70 },
          legend: { orientation: 'h', y: -0.2 },
          annotations: [
            {
              x: '10:00:15',
              y: 2452.00,
              text: 'Ignition Start',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#E74C3C',
              font: { color: '#E74C3C', size: 11 },
              ax: -60,
              ay: -30
            },
            {
              x: '10:00:35',
              y: 2468.00,
              text: 'Peak (+0.73%)',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#3498DB',
              font: { color: '#3498DB', size: 11 },
              ax: 40,
              ay: -30
            },
            {
              x: '10:00:45',
              y: 2460.00,
              text: 'Profit Trade',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#2ECC71',
              font: { color: '#2ECC71', size: 11 },
              ax: 50,
              ay: 25
            }
          ]
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Momentum Ignition Events"
        columns={[
          { key: 'eventId', label: 'Event ID' },
          { key: 'accountId', label: 'Account ID' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'initialOrders', label: 'Initial Orders' },
          { key: 'priceMovementPct', label: 'Price Move %', format: v => `${v}%` },
          { key: 'profitTrade', label: 'Profit Trade', format: v => `$${v.toLocaleString()}` },
          { key: 'timeWindow', label: 'Time Window' }
        ]}
        rows={miEvents}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default MomentumIgnitionPage
