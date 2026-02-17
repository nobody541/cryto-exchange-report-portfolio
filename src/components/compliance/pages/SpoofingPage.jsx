import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import OrderBookChart from '../charts/OrderBookChart.jsx'
import { spoofingEvents, spoofingOrderBook, spoofingParams } from '../../../data/compliance/spoofingData.js'

const SpoofingPage = () => {
  // Find the price level with the largest bid size to highlight as the spoof
  const maxBid = spoofingOrderBook.reduce(
    (max, entry) => (entry.bidSize > max.bidSize ? entry : max),
    spoofingOrderBook[0]
  )

  return (
    <CompliancePageLayout
      title="Spoofing Detection (SPF)"
      category="Trade Surveillance"
      description={
        <>
          <p>
            Detects order spoofing and layering &mdash; placing large non-bona fide
            orders to create false impression of market demand/supply, then
            cancelling them and trading on the opposite side at more favorable
            prices.
          </p>
        </>
      }
      parameters={spoofingParams}
      detectionLogic={
        <ol>
          <li>
            Monitor for large order placements followed by rapid cancellations.
          </li>
          <li>
            Check if cancellation occurs within configured time period.
          </li>
          <li>
            Verify subsequent execution on opposite side within execution window.
          </li>
          <li>
            Validate cancellation volume exceeds multiplier threshold relative to
            execution volume.
          </li>
        </ol>
      }
    >
      <OrderBookChart
        levels={spoofingOrderBook}
        highlightPrice={maxBid.price}
        title="Order Book Snapshot (Spoof Highlighted)"
      />

      <AlertsTable
        title="Flagged Events"
        columns={[
          { key: 'eventId', label: 'Event ID' },
          { key: 'accountId', label: 'Account' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'spoofSide', label: 'Spoof Side' },
          { key: 'spoofSize', label: 'Spoof Size' },
          { key: 'cancelTime', label: 'Cancel Time (s)' },
          { key: 'tradeSide', label: 'Trade Side' },
          { key: 'tradeSize', label: 'Trade Size' },
          { key: 'tradeNotional', label: 'Trade Notional', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={spoofingEvents}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default SpoofingPage
