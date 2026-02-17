import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import NetworkGraph from '../charts/NetworkGraph.jsx'
import Plot from 'react-plotly.js'
import { wtType1Data, wtType2Data, wtType3Network, wtParams } from '../../../data/compliance/washTradeData.js'

const WashTradePage = () => {
  // Build horizontal bar chart data for Type 2 top pairs by totalNotional
  const sortedType2 = [...wtType2Data].sort((a, b) => b.totalNotional - a.totalNotional)
  const pairLabels = sortedType2.map((d) => d.userId + ' / ' + d.counterpartyId)
  const pairNotionals = sortedType2.map((d) => d.totalNotional)

  return (
    <CompliancePageLayout
      title="Wash Trade Detection (WT)"
      category="Trade Surveillance"
      description={
        <>
          <p>
            Detects wash trading across three detection types: self-trading between
            accounts owned by the same user, coordinated high-frequency trading
            between counterparties, and community-based network detection using the
            Louvain algorithm.
          </p>
        </>
      }
      parameters={wtParams}
      detectionLogic={
        <ol>
          <li>
            <strong>Type 1 &ndash; Self-Trading:</strong> Identify trades where the
            same user owns both sides of a transaction across different accounts.
          </li>
          <li>
            <strong>Type 2 &ndash; Counterparty Coordination:</strong> Detect pairs
            of users with abnormally frequent, closely timed opposing trades that
            exceed ADV percentage thresholds.
          </li>
          <li>
            <strong>Type 3 &ndash; Community Detection:</strong> Apply Louvain
            algorithm to trading graph to identify densely connected clusters
            exhibiting wash-like patterns.
          </li>
        </ol>
      }
    >
      {/* Type 1: Self-Trading */}
      <h4>Type 1: Self-Trading</h4>
      <AlertsTable
        title="Self-Trade Alerts"
        columns={[
          { key: 'tradeId', label: 'Trade ID' },
          { key: 'userId', label: 'User' },
          { key: 'accountA', label: 'Account A' },
          { key: 'accountB', label: 'Account B' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'amount', label: 'Amount', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'timestamp', label: 'Timestamp' }
        ]}
        rows={wtType1Data}
        flagKey="flagged"
      />

      {/* Type 2: Counterparty Coordination */}
      <h4>Type 2: Counterparty Coordination</h4>
      <div className="compliance-chart-container">
        <h5>Top Pairs by Total Notional</h5>
        <Plot
          className="plotly-chart"
          data={[
            {
              y: pairLabels,
              x: pairNotionals,
              type: 'bar',
              orientation: 'h',
              marker: { color: '#395E9D', opacity: 0.85 },
              hovertemplate: '%{y}<br>$%{x:,.0f}<extra></extra>'
            }
          ]}
          layout={{
            margin: { t: 20, l: 160, r: 20, b: 40 },
            xaxis: { title: 'Total Notional ($)', tickformat: ',.0f' },
            yaxis: { automargin: true },
            paper_bgcolor: 'white',
            plot_bgcolor: 'white'
          }}
          config={{ displayModeBar: false, responsive: true }}
          useResizeHandler
          style={{ width: '100%', height: '280px' }}
        />
      </div>

      <AlertsTable
        title="Counterparty Pair Alerts"
        columns={[
          { key: 'userId', label: 'User' },
          { key: 'counterpartyId', label: 'Counterparty' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'trades', label: 'Trades' },
          { key: 'totalNotional', label: 'Total Notional', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'avgTimeDelta', label: 'Avg Time Delta (s)', format: (v) => v + 's' },
          { key: 'advPct', label: 'ADV %', format: (v) => v + '%' }
        ]}
        rows={wtType2Data}
        flagKey="flagged"
      />

      {/* Type 3: Community Detection */}
      <h4>Type 3: Community Detection</h4>
      <NetworkGraph
        nodes={wtType3Network.nodes}
        edges={wtType3Network.edges}
        title="Wash Trade Network Communities"
      />
    </CompliancePageLayout>
  )
}

export default WashTradePage
