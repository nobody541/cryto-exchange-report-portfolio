import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import TimelineChart from '../charts/TimelineChart.jsx'
import { structuringDeposits, structuringParams } from '../../../data/compliance/structuringData.js'

const DEFAULT_COLORS = [
  '#395E9D', '#E24A33', '#348ABD', '#988ED5',
  '#777777', '#FBC15E', '#8EBA42', '#FFB5B8'
]

const StructuringPage = () => {
  // Build timeline series from each flagged account's deposits
  const series = structuringDeposits
    .filter((acct) => acct.flagged)
    .map((acct, i) => ({
      label: acct.accountId,
      color: DEFAULT_COLORS[i % DEFAULT_COLORS.length],
      data: acct.deposits.map((d) => ({ date: d.date, amount: d.amount }))
    }))

  // Build flat rows for the alerts table
  const tableRows = structuringDeposits.map((acct) => ({
    accountId: acct.accountId,
    depositCount: acct.depositCount,
    totalAmount: acct.totalAmount,
    avgDeposit: Math.round(acct.totalAmount / acct.depositCount),
    flagged: acct.flagged
  }))

  return (
    <CompliancePageLayout
      title="Structuring Detection"
      category="Transaction Monitoring"
      description={
        <>
          <p>
            Detects deposits intentionally broken into smaller amounts below
            regulatory reporting thresholds (typically $10,000) to avoid Currency
            Transaction Reports (CTRs).
          </p>
        </>
      }
      parameters={structuringParams}
      detectionLogic={
        <ol>
          <li>
            Monitor deposit transactions per account within rolling window.
          </li>
          <li>
            Flag accounts with 2+ deposits where individual amounts are below
            threshold but aggregate exceeds it.
          </li>
          <li>
            Score based on proximity of amounts to threshold and frequency.
          </li>
        </ol>
      }
    >
      <TimelineChart
        series={series}
        title="Flagged Account Deposit Patterns"
        thresholdValue={10000}
        thresholdLabel="$10K Reporting Threshold"
      />

      <AlertsTable
        title="Flagged Accounts"
        columns={[
          { key: 'accountId', label: 'Account' },
          { key: 'depositCount', label: 'Deposit Count' },
          { key: 'totalAmount', label: 'Total Amount', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'avgDeposit', label: 'Avg Deposit', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={tableRows}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default StructuringPage
