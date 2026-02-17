import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { iaAccounts, iaTimeline, iaParams } from '../../../data/compliance/irregularActivityData.js'

const IrregularActivityPage = () => {
  const dates = iaTimeline.map(d => d.date)
  const activity = iaTimeline.map(d => d.activity)
  const baseline = iaTimeline.map(d => d.baseline)

  const spikeIndex = activity.indexOf(Math.max(...activity))

  return (
    <CompliancePageLayout
      title="Irregular Activity Detection (IA)"
      category="KYC / Risk"
      description={
        <p>
          Identifies accounts exhibiting activity levels that deviate significantly from their
          established baseline. This algorithm compares current transaction volumes against
          historical norms to detect sudden, unexplained surges in deposits, withdrawals, or trading.
        </p>
      }
      parameters={iaParams}
      detectionLogic={
        <p>
          Establish a rolling baseline of average daily activity over the configured window.
          Flag accounts where the current activity exceeds the baseline by the deviation multiple
          threshold, provided the aggregate notional meets the minimum value requirement.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: dates,
            y: activity,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Activity',
            line: { color: '#395E9D', width: 2 },
            marker: { size: 6 }
          },
          {
            x: dates,
            y: baseline,
            type: 'scatter',
            mode: 'lines',
            name: 'Baseline',
            line: { color: '#E74C3C', width: 2, dash: 'dash' }
          }
        ]}
        layout={{
          title: { text: 'Activity vs Baseline (ACC-5501)', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Date' },
          yaxis: { title: 'Activity ($)' },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 30, b: 50, l: 70 },
          annotations: [
            {
              x: dates[spikeIndex],
              y: activity[spikeIndex],
              text: `Spike: $${activity[spikeIndex].toLocaleString()}`,
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#E74C3C',
              font: { color: '#E74C3C', size: 12 },
              ax: 0,
              ay: -40
            }
          ],
          legend: { orientation: 'h', y: -0.2 }
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Irregular Activity Alerts"
        columns={[
          { key: 'accountId', label: 'Account ID' },
          { key: 'baselineAvgDaily', label: 'Baseline Avg Daily', format: v => `$${v.toLocaleString()}` },
          { key: 'currentActivity', label: 'Current Activity', format: v => `$${v.toLocaleString()}` },
          { key: 'deviationMultiple', label: 'Deviation (x)', format: v => `${v}x` },
          { key: 'activityType', label: 'Activity Type' }
        ]}
        rows={iaAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default IrregularActivityPage
