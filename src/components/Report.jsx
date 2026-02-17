import { useMemo, useState } from 'react'
import { accountData } from '../data/accountData.js'
import useCsv from '../hooks/useCsv.js'
import BtcBarChart from './BtcBarChart.jsx'
import ProfitScatterChart from './ProfitScatterChart.jsx'
import ClusterBoxPlot from './ClusterBoxPlot.jsx'
import AccountSeriesChart from './AccountSeriesChart.jsx'

const mapTradeRow = (row) => ({
  accountId: row.account_id,
  trades: Number(row.num_of_trades),
  profit: Number(row.profit)
})

const mapBtcRow = (row) => ({
  btcChange: row.BTC_change,
  total7Day: Number(row.total_7_day_sum)
})

const Report = () => {
  const [activeModal, setActiveModal] = useState(null)
  const [selectedAccount, setSelectedAccount] = useState(null)

  const base = import.meta.env.BASE_URL

  const tradesCsv = useCsv(`${base}data/num_of_trade_for_chart.csv`, mapTradeRow)

  const btcCsv = useCsv(`${base}data/btc_change.csv`, mapBtcRow)

  const handleAccountClick = (accountId) => {
    setSelectedAccount(accountId)
    setActiveModal('account')
  }

  const balanceMapper = useMemo(() => {
    return (row) => ({
      ts: row.ts,
      value: Number(row[String(selectedAccount)] || 0)
    })
  }, [selectedAccount])

  const volumeMapper = useMemo(() => {
    return (row) => ({
      ts: row.ts,
      value: Number(row[String(selectedAccount)] || 0)
    })
  }, [selectedAccount])

  const balanceCsv = useCsv(`${base}data/balance.csv`, balanceMapper, Boolean(selectedAccount))
  const volumeCsv = useCsv(`${base}data/trading_volume.csv`, volumeMapper, Boolean(selectedAccount))

  const modalTitle = useMemo(() => {
    if (!selectedAccount) return 'User account information: user id'
    return `User account information: ${selectedAccount}`
  }, [selectedAccount])

  const accountInfo = selectedAccount ? accountData[String(selectedAccount)] : null
  const displayBalance = accountInfo ? Math.max(0, accountInfo.balance) : 0

  const closeModal = () => setActiveModal(null)

  return (
    <>
      <h1 className="mb-4 text-center" id="myWord">Management Report</h1>
      <div className="card container my-4 p-5 shadow-sm p-3 mb-5 bg-body rounded">
        <section className="mb-1">
          <h3>Executive Summary</h3>
          <ul>
            <li>
              BTC value took a -6.0% dip yesterday; historically, such a decrease leads to higher average deposits in
              the following week.
            </li>
            <li>
              Identified exceptional accounts and clusters based on trading activity and market responsiveness; one of
              these could be the golden ticket for optimizing platform engagement.
            </li>
            <li>Spotted accounts at risk of churning in the next 30 days; immediate action recommended.</li>
          </ul>
        </section>

        <section className="mb-1">
          <h3>Performance</h3>
          <p>BTC Value and Deposits</p>
          <p>
            BTC value dipped by -6.0% today. Based on historical data, we can expect an average deposit of around USD
            4,508,000 in the following week.
          </p>

          {btcCsv.loading && <div className="chart-empty">Loading BTC deposit chart...</div>}
          {btcCsv.error && <div className="chart-empty">Failed to load BTC deposit chart.</div>}
          {!btcCsv.loading && !btcCsv.error && <BtcBarChart rows={btcCsv.data} />}

          <h3 className="mt-1">Exceptional Accounts</h3>
          <ul>
            <li>
              <span className="accountId" onClick={() => handleAccountClick(463616)}>
                X463616
              </span>
              : High profit (USD 1,247,805) with low number of trades (3).
            </li>
            <li>
              <span className="accountId" onClick={() => handleAccountClick(138370)}>
                X138370
              </span>
              : High profit (USD 1,275,723) but also high number of trades (2,509)
            </li>
            <li>
              <span className="accountId" onClick={() => handleAccountClick(288980)}>
                X288980
              </span>
              : Low profit (USD -1,632) but exceptionally high number of trades (19,247)
            </li>
          </ul>

          {tradesCsv.loading && <div className="chart-empty">Loading profit scatter chart...</div>}
          {tradesCsv.error && <div className="chart-empty">Failed to load profit scatter chart.</div>}
          {!tradesCsv.loading && !tradesCsv.error && <ProfitScatterChart rows={tradesCsv.data} />}

          <h3>Activity Clusters</h3>
          <p>We've identified four main types of traders based on their behavior:</p>
          <ol>
            <li>
              Contrarian Investors: 29 accounts that trade less when BTC is up and more when it's down. Average profit
              of USD 1,502.
            </li>
            <li>
              Mainstream Investors: 66 accounts that trade more when BTC is up and less when it's down. Average profit
              of USD 47,263.
            </li>
            <li>
              Always-On Traders: 13 accounts that are active regardless of BTC movement. Average profit of USD 5,619.
            </li>
            <li>
              Low-Key Traders: 42 accounts that trade less, no matter what BTC is doing. Average profit of USD 4,585.
            </li>
          </ol>

          <ClusterBoxPlot />

          <h3>Money Weighted Return (MWR)</h3>
          <p>
            MWR considers not just the profit, but also how much and when money is invested. It's a measure of the
            effectiveness of the funds used. For example, a high MWR in the 'Mainstream Investors' cluster indicates
            they're investing their money more efficiently.
          </p>
        </section>

        <section className="mb-1">
          <h3>Risks:</h3>
          <h5>Churn Risk Accounts</h5>
          <p>We've identified the following accounts that might stop using our platform within the next month::</p>
          <ul>
            <li>
              <span className="accountId" onClick={() => handleAccountClick(3084)}>
                X3084
              </span>
              ,{' '}
              <span className="accountId" onClick={() => handleAccountClick(10540)}>
                X10540
              </span>
              ,{' '}
              <span className="accountId" onClick={() => handleAccountClick(594090)}>
                X594090
              </span>
              ,{' '}
              <span className="accountId" onClick={() => handleAccountClick(621686)}>
                X621686
              </span>
            </li>
          </ul>
          <p>Those accounts have the following characteristics:</p>
          <ul>
            <li>Account with profits in the bottom 10%</li>
            <li>Account with low engagement in trading</li>
            <li>Account with losses in top-traded cryptocurrencies</li>
          </ul>
          <p>Immediate actions are needed to retain them.</p>
        </section>

        <section className="mb-1">
          <h3>Recommendations:</h3>
          <h5 className="text-decoration-underline">Marketing and Engagement:</h5>
          <ul>
            <li>Use the dip in BTC as an opportunity to market deposit bonuses or trading incentives.</li>
            <li>
              Target the 'Mainstream Investors' with upsell opportunities as they have high MWR and average profits.
            </li>
          </ul>
          <p className="pl-4 modal-trigger" onClick={() => setActiveModal('marketing')}>
            <i className="fas fa-arrow-right" /> READ MORE
          </p>

          <h5>Exceptional Accounts:</h5>
          <ul>
            <li>
              Consider offering specialized account managers or premium features to our high-profit, low-trade accounts
              like{' '}
              <span className="accountId" onClick={() => handleAccountClick(463616)}>
                X463616
              </span>
              .
            </li>
          </ul>
          <p className="pl-4 modal-trigger" onClick={() => setActiveModal('exceptional')}>
            <i className="fas fa-arrow-right" /> READ MORE
          </p>

          <h5>Risk Mitigation:</h5>
          <ul>
            <li>
              Proactively reach out to accounts at risk of churning with personalized offers or educational content to
              improve their trading.
            </li>
          </ul>
          <p className="pl-4 modal-trigger" onClick={() => setActiveModal('risk')}>
            <i className="fas fa-arrow-right" /> READ MORE
          </p>

          <h5>Data-Driven Decisions:</h5>
          <ul>
            <li>
              Further study the 'Contrarian Investors' and 'Always-On Traders' for untapped revenue opportunities,
              especially focusing on Money Weighted Return and active trading profits.
            </li>
          </ul>
          <p className="pl-4 modal-trigger" onClick={() => setActiveModal('decision')}>
            <i className="fas fa-arrow-right" /> READ MORE
          </p>
        </section>
      </div>

      <div className={activeModal === 'marketing' ? 'modal active' : 'modal'}>
        <div className="modal-dialog modal-lg pt-0">
          <h3 className="modal-title">Marketing and Engagement</h3>
          <div className="modal-body">
            <p>
              Leveraging the recent dip in BTC value can be seen as a strategic move to increase our user base and
              sustain the existing one. Here's how we can proceed:
            </p>
            <ul>
              <li>
                <p>
                  Deposit Bonuses or Trading Incentives: Roll out a campaign offering an additional bonus percentage on
                  the deposits made in the following week. Given the historical response to the [-6%, -4%] BTC value
                  change, where we observed an average deposit amount of USD 3272000, we can set a realistic target to
                  surpass this value with our bonus campaign.
                </p>
                <ul>
                  <li>Step 1: Identify a lucrative yet sustainable bonus percentage for the deposits.</li>
                  <li>
                    Step 2: Reach out to potential and existing users through email marketing and in-app notifications
                    emphasizing the bonus offer.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Upsell Opportunities for Mainstream Investors: These are the investors from the group that responds
                  positively both during the BTC price increase and decrease, having a high MWR and average profit.
                  Utilize this data to offer them premium features or higher tiered account benefits encouraging them
                  to trade more.
                </p>
                <ul>
                  <li>Step 1: Identify the premium features that would be most appealing to this group.</li>
                  <li>
                    Step 2: Create a segmented marketing campaign targeting this group specifically, outlining the
                    benefits they would receive.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="alert alert-info" role="alert">
            <i className="fas fa-exclamation-triangle" /> Note: The content above is AI-generated and should be
            considered only as a source of inspiration on how to get started.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary enable-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className={activeModal === 'exceptional' ? 'modal active' : 'modal'}>
        <div className="modal-dialog modal-lg pt-0">
          <h3 className="modal-title">Exceptional Accounts:</h3>
          <div className="modal-body">
            <p>
              For our high-profit, low-trade accounts like user X463616, it's pivotal to keep them engaged and retained.
              Let's make their experience more exclusive and beneficial:
            </p>
            <ul>
              <li>
                <p>Specialized Account Managers:</p>
                <ul>
                  <li>Step 1: Recruitment of skilled account managers with profound knowledge in cryptocurrency trading.</li>
                  <li>
                    Step 2: Assign these managers to our exceptional accounts for personalized assistance and advisory
                    (without pushing financial advice, respecting the guidelines).
                  </li>
                </ul>
              </li>
              <li>
                <p>Premium Features:</p>
                <ul>
                  <li>
                    Step 1: Develop premium features that facilitate easier, faster, and more efficient trading.
                  </li>
                  <li>
                    Step 2: Offer a free trial of these premium features to the user X463616 to exhibit the potential
                    benefits firsthand.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="alert alert-info" role="alert">
            <i className="fas fa-exclamation-triangle" /> Note: The content above is AI-generated and should be
            considered only as a source of inspiration on how to get started.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary enable-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className={activeModal === 'risk' ? 'modal active' : 'modal'}>
        <div className="modal-dialog modal-lg pt-0">
          <h3 className="modal-title">Risk Mitigation:</h3>
          <div className="modal-body">
            <p>To mitigate the risk of losing users at risk of churning, we propose:</p>
            <ul>
              <li>
                <p>Personalized Offers:</p>
                <ul>
                  <li>
                    Step 1: Analyze the trading patterns of the at-risk accounts to understand their preferences
                  </li>
                  <li>
                    Step 2: Craft personalized offers that align with their trading patterns to lure them back into
                    active trading.
                  </li>
                </ul>
              </li>
              <li>
                <p>Educational Content:</p>
                <ul>
                  <li>
                    Step 1: Create educational content that addresses common trading dilemmas and ways to strategically
                    handle the BTC value fluctuations.
                  </li>
                  <li>
                    Step 2: Share this content with at-risk users to equip them with knowledge and foster confidence in
                    trading.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="alert alert-info" role="alert">
            <i className="fas fa-exclamation-triangle" /> Note: The content above is AI-generated and should be
            considered only as a source of inspiration on how to get started.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary enable-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className={activeModal === 'decision' ? 'modal active' : 'modal'}>
        <div className="modal-dialog modal-lg pt-0">
          <h3 className="modal-title">Data-Driven Decisions:</h3>
          <div className="modal-body">
            <p>
              Understanding the behavior and preferences of the 'Contrarian Investors' and 'Always-On Traders' groups
              can unlock new revenue streams. Here is how we can explore this:
            </p>
            <ul>
              <li>
                <p>Study Money Weighted Return (MWR):</p>
                <ul>
                  <li>
                    Step 1: Conduct a deep dive analysis to understand the factors influencing high MWR in these groups.
                  </li>
                  <li>
                    Step 2: Develop strategies to facilitate other users in achieving similar MWRs, potentially
                    increasing their trading volumes.
                  </li>
                </ul>
              </li>
              <li>
                <p>Active Trading Profits:</p>
                <ul>
                  <li>
                    Step 1: Investigate the strategies adopted by users in these groups which lead to high active
                    trading profits.
                  </li>
                  <li>
                    Step 2: Create educational content or tools that aid users in adopting similar profitable
                    strategies, thus nurturing a more profitable user base.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="alert alert-info" role="alert">
            <i className="fas fa-exclamation-triangle" /> Note: The content above is AI-generated and should be
            considered only as a source of inspiration on how to get started.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary enable-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className={activeModal === 'account' ? 'modal active' : 'modal'}>
        <div className="modal-dialog modal-lg pt-0">
          <h5 className="modal-title text-primary">{modalTitle}</h5>
          <div className="modal-body">
            <ul>
              <li>Current notional balance: {displayBalance}</li>
              <li>Assets currently held: {accountInfo ? accountInfo.assets.join(', ') : ''}</li>
            </ul>
            <h6>Some chart:</h6>
            {balanceCsv.loading && <div className="chart-empty chart-empty--small">Loading balance...</div>}
            {balanceCsv.error && (
              <div className="chart-empty chart-empty--small">Failed to load balance data.</div>
            )}
            {!balanceCsv.loading && !balanceCsv.error && (
              <AccountSeriesChart title="Balance Over Time" rows={balanceCsv.data} type="line" />
            )}

            {selectedAccount && (
              <>
                {volumeCsv.loading && <div className="chart-empty chart-empty--small">Loading volume...</div>}
                {volumeCsv.error && (
                  <div className="chart-empty chart-empty--small">Failed to load volume data.</div>
                )}
                {!volumeCsv.loading && !volumeCsv.error && (
                  <AccountSeriesChart title="Trading Volume Over Time" rows={volumeCsv.data} type="bar" />
                )}
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary enable-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className={activeModal ? 'overlay active' : 'overlay'} onClick={closeModal} />
    </>
  )
}

export default Report
