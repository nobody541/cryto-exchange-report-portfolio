import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { padPriceVolume, padSuspects, padParams } from '../../../data/compliance/pumpAndDumpData.js'

const PumpAndDumpPage = () => {
  const dates = padPriceVolume.map(d => d.date)
  const prices = padPriceVolume.map(d => d.price)
  const volumes = padPriceVolume.map(d => d.volume)
  const phases = padPriceVolume.map(d => d.phase)

  const volumeColors = phases.map(p => {
    if (p === 'pump') return '#2ECC71'
    if (p === 'dump') return '#E74C3C'
    return '#BDC3C7'
  })

  const priceColors = phases.map(p => {
    if (p === 'pump') return '#2ECC71'
    if (p === 'dump') return '#E74C3C'
    return '#395E9D'
  })

  // Find pump and dump date ranges for shapes
  const pumpStart = dates[phases.indexOf('pump')]
  const pumpEnd = dates[phases.lastIndexOf('pump')]
  const dumpStart = dates[phases.indexOf('dump')]
  const dumpEnd = dates[phases.lastIndexOf('dump')]

  return (
    <CompliancePageLayout
      title="Pump and Dump Detection (PAD)"
      category="Trade Surveillance"
      description={
        <p>
          Identifies coordinated pump and dump schemes where actors artificially inflate the
          price of an asset through aggressive buying, then sell at the inflated price for
          profit. This algorithm detects the characteristic price and volume patterns of
          accumulation, pump, and dump phases.
        </p>
      }
      parameters={padParams}
      detectionLogic={
        <p>
          Analyze price and volume trajectories to identify rapid price appreciation accompanied
          by volume spikes (pump phase), followed by sharp price decline with high sell volume
          (dump phase). Flag accounts that accumulated positions before the pump and liquidated
          during/after, generating disproportionate profit.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: dates,
            y: prices,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Price ($)',
            line: { color: '#395E9D', width: 2 },
            marker: { color: priceColors, size: 7 },
            yaxis: 'y'
          },
          {
            x: dates,
            y: volumes,
            type: 'bar',
            name: 'Volume',
            marker: { color: volumeColors, opacity: 0.6 },
            yaxis: 'y2'
          }
        ]}
        layout={{
          title: { text: 'TOKEN-X Price & Volume Analysis', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Date' },
          yaxis: { title: 'Price ($)', side: 'left', showgrid: false },
          yaxis2: {
            title: 'Volume',
            side: 'right',
            overlaying: 'y',
            showgrid: false
          },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 70, b: 50, l: 60 },
          legend: { orientation: 'h', y: -0.2 },
          shapes: [
            {
              type: 'rect',
              xref: 'x',
              yref: 'paper',
              x0: pumpStart,
              x1: pumpEnd,
              y0: 0,
              y1: 1,
              fillcolor: 'rgba(46,204,113,0.08)',
              line: { width: 0 }
            },
            {
              type: 'rect',
              xref: 'x',
              yref: 'paper',
              x0: dumpStart,
              x1: dumpEnd,
              y0: 0,
              y1: 1,
              fillcolor: 'rgba(231,76,60,0.08)',
              line: { width: 0 }
            }
          ],
          annotations: [
            {
              x: '2024-01-14',
              y: 1.0,
              yref: 'paper',
              text: 'PUMP',
              showarrow: false,
              font: { color: '#2ECC71', size: 13, weight: 'bold' }
            },
            {
              x: '2024-01-20',
              y: 1.0,
              yref: 'paper',
              text: 'DUMP',
              showarrow: false,
              font: { color: '#E74C3C', size: 13, weight: 'bold' }
            }
          ]
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Pump and Dump Suspects"
        columns={[
          { key: 'accountId', label: 'Account ID' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'buyVolumePump', label: 'Buy Vol (Pump)', format: v => v.toLocaleString() },
          { key: 'sellVolumeDump', label: 'Sell Vol (Dump)', format: v => v.toLocaleString() },
          { key: 'estimatedProfit', label: 'Est. Profit', format: v => `$${v.toLocaleString()}` },
          { key: 'tradingPct', label: 'Trading %', format: v => `${v}%` }
        ]}
        rows={padSuspects}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default PumpAndDumpPage
