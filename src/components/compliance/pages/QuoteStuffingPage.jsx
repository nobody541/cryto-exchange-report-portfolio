import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { qsEvents, qsOrderRate, qsParams } from '../../../data/compliance/quoteStuffingData.js'

const QuoteStuffingPage = () => {
  const seconds = qsOrderRate.map(d => d.second)
  const ordersPlaced = qsOrderRate.map(d => d.ordersPlaced)

  const barColors = qsOrderRate.map(d =>
    d.second >= 22 && d.second <= 30 ? '#E74C3C' : '#395E9D'
  )

  return (
    <CompliancePageLayout
      title="Quote Stuffing Detection (QS)"
      category="Trade Surveillance"
      description={
        <p>
          Detects quote stuffing, a manipulative strategy where a trader rapidly submits and
          cancels a large number of orders to create confusion, slow down other market
          participants, and exploit the resulting latency advantage. This behavior degrades
          market quality and constitutes market manipulation.
        </p>
      }
      parameters={qsParams}
      detectionLogic={
        <p>
          Monitor order submission and cancellation rates per second. Flag events where the
          order rate exceeds the threshold and the cancellation rate is above the configured
          percentage within the analysis time window. Require a minimum total order count
          to filter out normal high-frequency activity.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: seconds,
            y: ordersPlaced,
            type: 'bar',
            marker: { color: barColors },
            name: 'Orders Placed/sec'
          }
        ]}
        layout={{
          title: { text: 'Order Rate Per Second (QS-001)', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Second' },
          yaxis: { title: 'Orders Placed' },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 30, b: 50, l: 50 },
          shapes: [
            {
              type: 'rect',
              xref: 'x',
              yref: 'paper',
              x0: 22,
              x1: 30,
              y0: 0,
              y1: 1,
              fillcolor: 'rgba(231,76,60,0.08)',
              line: { width: 0 }
            },
            {
              type: 'line',
              xref: 'paper',
              yref: 'y',
              x0: 0,
              x1: 1,
              y0: 50,
              y1: 50,
              line: { color: '#E74C3C', width: 1, dash: 'dash' }
            }
          ],
          annotations: [
            {
              x: 26,
              y: 1.0,
              yref: 'paper',
              text: 'Spike Period',
              showarrow: false,
              font: { color: '#E74C3C', size: 12 }
            },
            {
              x: 58,
              y: 50,
              text: 'Threshold (50/s)',
              showarrow: false,
              font: { color: '#E74C3C', size: 10 },
              xanchor: 'right'
            }
          ]
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Quote Stuffing Events"
        columns={[
          { key: 'eventId', label: 'Event ID' },
          { key: 'accountId', label: 'Account ID' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'ordersPlaced', label: 'Orders Placed' },
          { key: 'ordersCancelled', label: 'Orders Cancelled' },
          { key: 'cancellationRate', label: 'Cancel Rate', format: v => `${v}%` },
          { key: 'timeWindow', label: 'Time Window' }
        ]}
        rows={qsEvents}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default QuoteStuffingPage
