import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import ComparisonBarChart from '../charts/ComparisonBarChart.jsx'
import { kycAccounts, kycParams } from '../../../data/compliance/kycDeviationData.js'

const KycDeviationPage = () => {
  // Show comparison for flagged accounts: Declared Income vs Net Deposits
  const flaggedAccounts = kycAccounts.filter((a) => a.flagged)
  const categories = flaggedAccounts.map((a) => a.accountId)
  const series = [
    {
      name: 'Declared Income',
      values: flaggedAccounts.map((a) => a.declaredIncome),
      color: '#395E9D'
    },
    {
      name: 'Net Deposits (30d)',
      values: flaggedAccounts.map((a) => a.netDeposits30d),
      color: '#E24A33'
    }
  ]

  return (
    <CompliancePageLayout
      title="KYC Profile Deviation (KPD)"
      category="KYC / Risk"
      description={
        <>
          <p>
            Detects users whose deposit and transaction activity significantly
            exceeds their declared KYC profile attributes (income, net worth,
            financial assets), indicating potential misrepresentation or suspicious
            activity.
          </p>
        </>
      }
      parameters={kycParams}
      detectionLogic={
        <ol>
          <li>
            Compare 30-day net deposits against declared annual income, total
            assets, and financial assets.
          </li>
          <li>
            Flag when net deposits exceed configured percentage of any declared
            value.
          </li>
          <li>
            Higher deviation percentages result in higher risk scores.
          </li>
        </ol>
      }
    >
      <ComparisonBarChart
        categories={categories}
        series={series}
        title="Declared Income vs Net Deposits (Flagged Accounts)"
      />

      <AlertsTable
        title="Flagged Accounts"
        columns={[
          { key: 'accountId', label: 'Account' },
          { key: 'declaredIncome', label: 'Declared Income', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'netDeposits30d', label: 'Net Deposits (30d)', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'incomeRatio', label: 'Income Ratio', format: (v) => v + '%' },
          { key: 'assetRatio', label: 'Asset Ratio', format: (v) => v + '%' },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={kycAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default KycDeviationPage
