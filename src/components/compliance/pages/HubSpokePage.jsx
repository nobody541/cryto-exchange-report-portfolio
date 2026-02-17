import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import NetworkGraph from '../charts/NetworkGraph.jsx'
import { hubSpokeNetworks, hubSpokeGraph, hubSpokeParams } from '../../../data/compliance/hubSpokeData.js'

const HubSpokePage = () => {
  // Build table rows from hubSpokeNetworks, deriving spokeCount from spokes.length
  const tableRows = hubSpokeNetworks.map((net) => ({
    hub: net.hub,
    role: net.role,
    spokeCount: net.spokes.length,
    totalAmount: net.totalAmount,
    flagged: net.flagged
  }))

  return (
    <CompliancePageLayout
      title="Hub and Spoke Detection"
      category="Transaction Monitoring"
      description={
        <>
          <p>
            Detects money laundering patterns where funds are funneled through one
            central account (hub) from many external accounts (spokes), or dispersed
            from one hub to many spokes.
          </p>
        </>
      }
      parameters={hubSpokeParams}
      detectionLogic={
        <ol>
          <li>
            Identify accounts interacting with multiple unique external accounts.
          </li>
          <li>
            Count spoke connections exceeding minimum threshold.
          </li>
          <li>
            Verify aggregate transaction amount exceeds threshold.
          </li>
          <li>
            Flag hub accounts meeting both spoke count and amount criteria.
          </li>
        </ol>
      }
    >
      <NetworkGraph
        nodes={hubSpokeGraph.nodes}
        edges={hubSpokeGraph.edges}
        title="Hub and Spoke Transaction Network"
      />

      <AlertsTable
        title="Flagged Accounts"
        columns={[
          { key: 'hub', label: 'Hub Account' },
          { key: 'role', label: 'Role' },
          { key: 'spokeCount', label: 'Spoke Count' },
          { key: 'totalAmount', label: 'Total Amount', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={tableRows}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default HubSpokePage
