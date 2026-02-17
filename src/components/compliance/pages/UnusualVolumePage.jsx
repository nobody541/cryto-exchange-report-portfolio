import CompliancePageLayout from '../CompliancePageLayout.jsx'
import AlertsTable from '../charts/AlertsTable.jsx'
import VolumeBarChart from '../charts/VolumeBarChart.jsx'
import { uvDailyVolume, uvFlaggedAccounts, uvParams } from '../../../data/compliance/unusualVolumeData.js'

const UnusualVolumePage = () => {
  return (
    <CompliancePageLayout
      title="Unusual Volume Detection (UV)"
      category="Trade Surveillance"
      description={
        <>
          <p>
            Detects users trading abnormally high volumes compared to their 30-day
            historical average (UHV approach) or as a percentage of market average
            daily volume (ADV approach).
          </p>
        </>
      }
      parameters={uvParams}
      detectionLogic={
        <ol>
          <li>
            <strong>UHV:</strong> Calculate mean + 4&times;std_dev of user&rsquo;s
            30-day volume. Flag if current volume exceeds this threshold.
          </li>
          <li>
            <strong>ADV:</strong> Calculate market&rsquo;s 7-day ADV. Flag if
            user&rsquo;s 15-min volume &gt; configured percentage of market ADV.
          </li>
          <li>
            Both methods require minimum trade count and volume thresholds to be met.
          </li>
        </ol>
      }
    >
      <VolumeBarChart
        rows={uvDailyVolume}
        xKey="date"
        yKey="volume"
        highlightKey="flagged"
        thresholdValue={14200 * 4}
        thresholdLabel="Alert Threshold (4σ)"
        title="Daily Volume with Alert Threshold"
      />

      <AlertsTable
        title="Flagged Accounts"
        columns={[
          { key: 'accountId', label: 'Account' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'totalVolume', label: 'Total Volume', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'avgDailyVolume', label: 'Avg Daily Volume', format: (v) => '$' + Number(v).toLocaleString() },
          { key: 'deviationPct', label: 'Deviation %', format: (v) => v + '%' },
          { key: 'flagged', label: 'Flagged' }
        ]}
        rows={uvFlaggedAccounts}
        flagKey="flagged"
      />
    </CompliancePageLayout>
  )
}

export default UnusualVolumePage
