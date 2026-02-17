const techStack = [
  { category: 'Cloud & Infrastructure', items: ['Google Cloud Platform (GCP)', 'Cloud Functions', 'Cloud Scheduler', 'AWS S3'] },
  { category: 'Backend & Data Pipeline', items: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Django REST API', 'NetworkX (Louvain algorithm)'] },
  { category: 'APIs & Integrations', items: ['Jira REST API', 'OpenAI API (GPT)', 'SMTP Email Alerts', 'Exchange Market Data APIs'] },
  { category: 'Frontend & Visualization', items: ['React', 'Plotly.js', 'Django Templates', 'Bootstrap (SB Admin 2)'] },
  { category: 'Data Storage', items: ['AWS S3 (data lake)', 'GCP Buckets', 'CSV/Parquet pipelines'] }
]

const pipelineSteps = [
  {
    icon: 'fas fa-database',
    title: 'Data Ingestion',
    desc: 'Daily automated collection of trade, deposit, withdrawal, and order data from the crypto exchange via scheduled GCP Cloud Functions. Data stored in S3 buckets partitioned by date.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Feature Engineering & Detection',
    desc: 'Python-based detection algorithms process raw data through statistical models (z-score, moving averages, standard deviation), graph analysis (Louvain community detection), and threshold-based rule engines across 7 compliance categories.'
  },
  {
    icon: 'fas fa-ticket-alt',
    title: 'Alert Generation',
    desc: 'Flagged accounts automatically generate Jira tickets with structured descriptions, labels, and severity levels. Duplicate detection prevents redundant alerts by querying existing tickets via Jira REST API.'
  },
  {
    icon: 'fas fa-robot',
    title: 'AI-Enhanced Reporting',
    desc: 'OpenAI API generates human-readable narrative summaries from raw alert data, transforming statistical outputs into actionable compliance reports for non-technical stakeholders.'
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'Management Dashboard',
    desc: 'Django-powered dashboard with Plotly visualizations presents aggregated insights: BTC correlation analysis, exceptional account profiling, cluster-based user segmentation (Contrarian, Mainstream, Always-On, Low-Key), and churn risk identification.'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Notification & Monitoring',
    desc: 'SMTP-based email alerts notify the engineering team of pipeline failures. Error handling with try/catch ensures each compliance function runs independently, preventing cascade failures.'
  }
]

const complianceAlgos = [
  {
    name: 'Unusual Volume (UHV + ADV)',
    category: 'Trade Surveillance',
    approach: 'Two-pronged detection: User Historical Volume compares against rolling 30-day mean + 4 standard deviations; Average Daily Volume flags users exceeding 30% of 7-day market ADV in any 15-minute window.'
  },
  {
    name: 'Wash Trade (3 Types)',
    category: 'Trade Surveillance',
    approach: 'Type 1: Self-trading across accounts owned by the same user. Type 2: Counterparty analysis detecting coordinated rapid execution (< 60s) with high volume concentration. Type 3: Louvain community detection on trade networks to identify wash trading rings.'
  },
  {
    name: 'Structuring',
    category: 'Transaction Monitoring',
    approach: 'Detects deposits deliberately broken into amounts below the $10,000 CTR reporting threshold. Flags accounts with multiple deposits that individually fall below threshold but aggregate above it.'
  },
  {
    name: 'TWEP',
    category: 'Transaction Monitoring',
    approach: 'Identifies deposit-withdrawal cycles with negligible trading activity (deposit/withdrawal ratio < 1%), indicating potential pass-through money laundering.'
  },
  {
    name: 'Hub & Spoke',
    category: 'Transaction Monitoring',
    approach: 'Detects funnel patterns where one central account transacts with many external accounts. Configurable minimum spoke count and aggregate amount thresholds.'
  },
  {
    name: 'Spoofing',
    category: 'Trade Surveillance',
    approach: 'Monitors for large order placement followed by rapid cancellation (< 5s) with subsequent opposite-side execution (< 30s). Validates cancellation volume multiplier exceeds 10x the execution volume.'
  },
  {
    name: 'KYC Profile Deviation',
    category: 'KYC / Risk',
    approach: 'Compares 30-day net deposits against declared KYC attributes (income, assets, financial assets). Flags when actual activity exceeds 30% of any declared value.'
  }
]

const IntroductionPage = () => {
  return (
    <>
      <h1 className="mb-4 text-center" id="myWord">Project Overview</h1>

      <div className="card container my-4 p-5 shadow-sm p-3 mb-5 bg-body rounded">

        {/* Hero Section */}
        <section className="compliance-section">
          <h3>Automated Compliance & Surveillance Platform</h3>
          <p>
            An end-to-end compliance monitoring system built for a cryptocurrency exchange, designed to detect
            market manipulation, money laundering patterns, and regulatory violations in real-time. The platform
            processes daily transaction data through 7+ proprietary detection algorithms, automatically generates
            Jira tickets for the compliance team, and produces AI-enhanced management reports.
          </p>
          <div className="alert alert-primary" role="alert">
            <i className="fas fa-info-circle mr-2" />
            <strong>Note:</strong> This is a portfolio demonstration. The data shown is synthetic sample data.
            The production system processes live exchange data with automated daily GCP Cloud Function triggers.
          </div>
        </section>

        {/* Architecture */}
        <section className="compliance-section">
          <h3>System Architecture & Pipeline</h3>
          <p>
            The system follows an event-driven architecture with daily batch processing. Each stage operates
            independently with built-in error handling and email-based failure notifications.
          </p>
          <div className="row">
            {pipelineSteps.map((step, idx) => (
              <div className="col-md-6 mb-3" key={idx}>
                <div className="card h-100 border-left-primary shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: '#4e73df',
                          color: '#fff',
                          fontSize: 16,
                          flexShrink: 0
                        }}
                      >
                        <i className={step.icon} />
                      </div>
                      <h6 className="mb-0 font-weight-bold" style={{ color: '#395E9D' }}>
                        {idx + 1}. {step.title}
                      </h6>
                    </div>
                    <p className="mb-0" style={{ fontSize: 14, color: '#5a5c69' }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="compliance-section">
          <h3>Technology Stack</h3>
          <div className="row">
            {techStack.map((group) => (
              <div className="col-md-4 mb-3" key={group.category}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h6 className="font-weight-bold" style={{ color: '#395E9D' }}>{group.category}</h6>
                    <ul className="mb-0 pl-3" style={{ fontSize: 14 }}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Algorithms */}
        <section className="compliance-section">
          <h3>Compliance Detection Algorithms</h3>
          <p>
            Each algorithm was implemented in Python and deployed as an independent GCP Cloud Function with
            its own Cloud Scheduler trigger. This modular design ensures that a failure in one algorithm does
            not affect the others. Alert deduplication is handled via Jira label queries before ticket creation.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered table-sm compliance-table">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>Category</th>
                  <th>Detection Approach</th>
                </tr>
              </thead>
              <tbody>
                {complianceAlgos.map((algo) => (
                  <tr key={algo.name}>
                    <td><strong>{algo.name}</strong></td>
                    <td><span className="compliance-category-badge" style={{ fontSize: 11, padding: '2px 8px' }}>{algo.category}</span></td>
                    <td style={{ fontSize: 13 }}>{algo.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Jira Integration */}
        <section className="compliance-section">
          <h3>Automated Alert Workflow</h3>
          <div className="row">
            <div className="col-md-6">
              <h6 className="font-weight-bold" style={{ color: '#395E9D' }}>Jira Ticket Automation</h6>
              <ul style={{ fontSize: 14 }}>
                <li>Each flagged account generates a structured Jira ticket via REST API</li>
                <li>Tickets include: user ID, transaction details, alert type, risk score, and supporting evidence</li>
                <li>Labels enable categorization (e.g., <code>UV-UHV</code>, <code>WT-TYPE3</code>, <code>STRUCT-10K</code>)</li>
                <li>Duplicate detection queries existing tickets by label before creation</li>
                <li>S3-hosted chart images attached directly to tickets as evidence</li>
                <li>Custom alert confirmation field tracks compliance team disposition</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6 className="font-weight-bold" style={{ color: '#395E9D' }}>AI-Enhanced Reporting</h6>
              <ul style={{ fontSize: 14 }}>
                <li>OpenAI GPT API transforms raw statistical data into human-readable narratives</li>
                <li>Contextual summaries explain <em>why</em> an account was flagged, not just the numbers</li>
                <li>Management reports aggregate daily alerts into weekly trend analysis</li>
                <li>Recommendations generated for marketing, risk mitigation, and data-driven decisions</li>
                <li>AI content clearly marked as generated to maintain compliance standards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Management Report */}
        <section className="compliance-section">
          <h3>Management Report</h3>
          <p>
            The management report (accessible via the sidebar) demonstrates the executive-facing output of the
            pipeline. It combines:
          </p>
          <ul style={{ fontSize: 14 }}>
            <li>
              <strong>BTC Market Correlation Analysis:</strong> Historical analysis of how BTC price changes
              correlate with platform deposit volumes, enabling predictive deposit forecasting
            </li>
            <li>
              <strong>Account Profiling:</strong> Interactive scatter plots mapping profit vs. trade frequency
              to identify exceptional accounts (high-profit/low-trade and high-frequency traders)
            </li>
            <li>
              <strong>User Clustering (K-Means):</strong> Behavioral segmentation into four trader archetypes
              (Contrarian, Mainstream, Always-On, Low-Key) using Money Weighted Return (MWR) as the
              clustering metric
            </li>
            <li>
              <strong>Churn Risk Prediction:</strong> Identifying accounts likely to become inactive based on
              profit percentile, engagement level, and cryptocurrency-specific loss patterns
            </li>
          </ul>
        </section>

        {/* Skills Demonstrated */}
        <section className="compliance-section">
          <h3>Key Skills Demonstrated</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-left-success shadow-sm">
                <div className="card-body">
                  <h6 className="font-weight-bold text-success">Data Engineering</h6>
                  <ul className="mb-0 pl-3" style={{ fontSize: 13 }}>
                    <li>ETL pipeline design (GCP + S3)</li>
                    <li>Daily batch processing with error recovery</li>
                    <li>Data partitioning and incremental loading</li>
                    <li>Cross-service data integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-left-info shadow-sm">
                <div className="card-body">
                  <h6 className="font-weight-bold text-info">Financial Domain Knowledge</h6>
                  <ul className="mb-0 pl-3" style={{ fontSize: 13 }}>
                    <li>AML/CTF compliance frameworks</li>
                    <li>Market manipulation detection (spoofing, wash trading, pump & dump)</li>
                    <li>KYC due diligence and profile monitoring</li>
                    <li>Money Weighted Return (MWR) analysis</li>
                    <li>Regulatory reporting thresholds (BSA/CTR)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-left-warning shadow-sm">
                <div className="card-body">
                  <h6 className="font-weight-bold text-warning">Full-Stack Development</h6>
                  <ul className="mb-0 pl-3" style={{ fontSize: 13 }}>
                    <li>Python (Pandas, NumPy, NetworkX)</li>
                    <li>React + Plotly.js interactive dashboards</li>
                    <li>Django REST framework</li>
                    <li>REST API integrations (Jira, OpenAI)</li>
                    <li>Cloud deployment (GCP Functions + Scheduler)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default IntroductionPage
