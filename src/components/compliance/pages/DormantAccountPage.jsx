import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { dormantAccounts, dormantTimeline, dormantParams } from '../../../data/compliance/dormantAccountData.js'

const DormantAccountPage = () => {
  // Find the boundaries of the dormant period for annotation
  const dormantStart = '2023-09-01'
  const dormantEnd = '2024-01-01'

  return (
    <CompliancePageLayout
      title="Dormant Account Detection (DA)"
      category="Transaction Monitoring"
      description={
        <>
          <p>
            Detects sudden activity on accounts that have been inactive for an
            extended period (90+ days), which may indicate account takeover, money
            laundering through dormant accounts, or reactivation for illicit
            purposes.
          </p>
        </>
      }
      parameters={dormantParams}
      detectionLogic={
        <ol>
          <li>Track last activity date for all accounts.</li>
          <li>
            Classify accounts as dormant after configured inactivity period (90
            days).
          </li>
          <li>Monitor for new transactions on dormant accounts.</li>
          <li>
            Alert when reactivation amount exceeds minimum aggregate threshold
            within monitoring window.
          </li>
        </ol>
      }
    >
      <div className="compliance-chart-container">
        <h5>Account Activity Timeline</h5>
        <Plot
          className="plotly-chart"
          data={[
            {
              x: dormantTimeline.map((d) => d.date),
              y: dormantTimeline.map((d) => d.activity),
              type: 'scatter',
              mode: 'lines+markers',
              name: 'Activity',
              line: { color: '#395E9D', width: 2 },
              marker: { size: 6 },
              hovertemplate: '%{x}<br>$%{y:,.0f}<extra></extra>'
            }
          ]}
          layout={{
            title: {
              text: 'Dormant Account Activity Timeline',
              font: { size: 18, color: '#395E9D' },
              x: 0.5,
              xanchor: 'center'
            },
            xaxis: {
              title: 'Date',
              titlefont: { size: 16 },
              tickfont: { size: 14 },
              showgrid: true,
              gridwidth: 1,
              gridcolor: 'Gray'
            },
            yaxis: {
              title: 'Transaction Amount ($)',
              titlefont: { size: 16 },
              tickfont: { size: 14 },
              showgrid: true,
              gridwidth: 1,
              gridcolor: 'Gray'
            },
            shapes: [
              {
                type: 'rect',
                x0: dormantStart,
                x1: dormantEnd,
                y0: 0,
                y1: 1,
                yref: 'paper',
                fillcolor: 'rgba(255, 0, 0, 0.08)',
                line: { width: 0 }
              }
            ],
            annotations: [
              {
                x: '2023-10-15',
                y: 1,
                yref: 'paper',
                yanchor: 'top',
                text: 'Dormant Period',
                showarrow: false,
                font: { size: 13, color: '#c0392b' },
                bgcolor: 'rgba(255,255,255,0.8)'
              },
              {
                x: '2024-01-15',
                y: 67300,
                text: 'Reactivation Spike',
                showarrow: true,
                arrowhead: 2,
                ax: 40,
                ay: -30,
                font: { size: 12, color: '#E24A33' }
              }
            ],
            margin: { t: 60, l: 70, r: 20, b: 60 },
            paper_bgcolor: 'white',
            plot_bgcolor: 'white',
            hovermode: 'x unified'
          }}
          config={{ displayModeBar: false, responsive: true }}
          useResizeHandler
          style={{ width: '100%', height: '350px' }}
        />
      </div>

      <AlertsTable
        title="Flagged Accounts"
        columns={[
          { key: 'accountId', label: 'Account' },
          { key: 'lastActivityDate', label: 'Last Activity' },
          { key: 'reactivationDate', label: 'Reactivation Date' },
          { key: 'dormantDays', label: 'Dormant Days' },
          { key: 'reactivationAmount', label: 'Reactivation Amount', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'transactionType', label: 'Transaction Type' },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={dormantAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default DormantAccountPage
