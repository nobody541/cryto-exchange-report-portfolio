import React from 'react'
import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import Plot from 'react-plotly.js'
import { mstAccounts, mstTransactions, mstParams } from '../../../data/compliance/multipleSimilarTxnData.js'

const MultipleSimilarTxnPage = () => {
  const dates = mstTransactions.map(d => d.date)
  const amounts = mstTransactions.map(d => d.amount)

  return (
    <CompliancePageLayout
      title="Multiple Similar Transactions (MST)"
      category="Transaction Monitoring"
      description={
        <p>
          Detects patterns of repeated transactions with identical or nearly identical amounts,
          especially round-dollar values. This behavior may indicate automated structuring,
          layering, or other attempts to move funds in a manner designed to avoid scrutiny.
        </p>
      }
      parameters={mstParams}
      detectionLogic={
        <p>
          Identify clusters of transactions where the amount varies by less than the allowed
          percentage difference. Flag accounts with a high repeat count of similar amounts
          within the configured time period, with elevated risk for round-dollar values.
        </p>
      }
    >
      <Plot
        data={[
          {
            x: dates,
            y: amounts,
            type: 'bar',
            marker: { color: '#395E9D' },
            name: 'Transaction Amount'
          }
        ]}
        layout={{
          title: { text: 'Repeated Transaction Pattern (ACC-6501)', font: { size: 18, color: '#395E9D' } },
          xaxis: { title: 'Date' },
          yaxis: { title: 'Amount ($)', range: [0, 6000] },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          margin: { t: 50, r: 30, b: 50, l: 60 },
          annotations: [
            {
              x: dates[3],
              y: 5200,
              text: '8 identical $5,000 deposits',
              showarrow: false,
              font: { color: '#E74C3C', size: 13 }
            }
          ]
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: '100%', height: '320px' }}
      />

      <AlertsTable
        title="Multiple Similar Transaction Alerts"
        columns={[
          { key: 'accountId', label: 'Account ID' },
          { key: 'repeatCount', label: 'Repeat Count' },
          { key: 'amount', label: 'Amount', format: v => `$${v.toLocaleString()}` },
          { key: 'totalAmount', label: 'Total Amount', format: v => `$${v.toLocaleString()}` },
          { key: 'timePeriod', label: 'Time Period' },
          { key: 'isRoundDollar', label: 'Round Dollar', format: v => v ? 'Yes' : 'No' }
        ]}
        rows={mstAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default MultipleSimilarTxnPage
