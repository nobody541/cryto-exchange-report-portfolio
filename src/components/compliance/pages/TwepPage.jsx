import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import ComparisonBarChart from '../charts/ComparisonBarChart.jsx'
import { twepAccounts, twepParams } from '../../../data/compliance/twepData.js'

const TwepPage = () => {
  const categories = twepAccounts.map((a) => a.accountId)
  const series = [
    {
      name: 'Deposits',
      values: twepAccounts.map((a) => a.deposits),
      color: '#395E9D'
    },
    {
      name: 'Withdrawals',
      values: twepAccounts.map((a) => a.withdrawals),
      color: '#E24A33'
    }
  ]

  return (
    <CompliancePageLayout
      title="Transaction Without Economic Purpose (TWEP)"
      category="Transaction Monitoring"
      description={
        <>
          <p>
            Detects accounts showing deposit-withdrawal cycles with minimal or no
            trading activity, indicating potential money laundering pass-through
            where funds flow in and out without genuine economic purpose.
          </p>
        </>
      }
      parameters={twepParams}
      detectionLogic={
        <ol>
          <li>
            Calculate net deposit-to-withdrawal ratio per account.
          </li>
          <li>
            Check if trade volume is negligible relative to deposit/withdrawal
            volume.
          </li>
          <li>
            Flag when ratio exceeds threshold AND trade activity is below minimum.
          </li>
        </ol>
      }
    >
      <ComparisonBarChart
        categories={categories}
        series={series}
        title="Deposits vs Withdrawals by Account"
      />

      <AlertsTable
        title="Flagged Accounts"
        columns={[
          { key: 'accountId', label: 'Account' },
          { key: 'deposits', label: 'Deposits', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'withdrawals', label: 'Withdrawals', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'tradeCount', label: 'Trade Count' },
          { key: 'tradeVolume', label: 'Trade Volume', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'dwRatio', label: 'D/W Ratio' },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={twepAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default TwepPage
