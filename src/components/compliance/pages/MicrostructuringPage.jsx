import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { mcstAccounts, mcstDistribution, mcstParams } from '../../../data/compliance/microstructuringData.js'

const MicrostructuringPage = () => {
  const amounts = mcstDistribution.map(d => d.amount)

  return (
    <CompliancePageLayout
      title="Microstructuring Detection (MCST)"
      category="Transaction Monitoring"
      description={
        <p>
          Detects actors breaking down activity into many small transactions within a narrow
          amount range to avoid detection thresholds. This algorithm identifies patterns where
          transaction amounts are deliberately kept below reporting limits while maintaining
          unusually high frequency.
        </p>
      }
      parameters={mcstParams}
      detectionLogic={
        <p>
          Monitor transaction frequency and amount clustering within the configured range
          ($200 - $500). Flag accounts when both the transaction count and aggregate amount
          exceed defined thresholds within the rolling window period.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: amounts,
            type: 'histogram',
            xbins: { size: 50 },
            marker: { color: '#395E9D' },
            name: 'Transaction Amounts'
          }
        ]}
        layout={{
          title: { text: 'Transaction Amount Distribution', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Amount ($)' },
          yaxis: { title: 'Frequency' },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 30, b: 50, l: 50 }
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Microstructuring Alerts"
        columns={[
          { key: 'accountId', label: 'Account ID' },
          { key: 'transactionCount', label: 'Txn Count' },
          { key: 'totalAmount', label: 'Total Amount', format: v => `$${v.toLocaleString()}` },
          { key: 'avgAmount', label: 'Avg Amount', format: v => `$${v}` },
          { key: 'minAmount', label: 'Min Amount', format: v => `$${v}` },
          { key: 'maxAmount', label: 'Max Amount', format: v => `$${v}` },
          { key: 'frequency', label: 'Frequency' }
        ]}
        rows={mcstAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default MicrostructuringPage
