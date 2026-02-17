import Plot from 'react-plotly.js'

// Process flow: boxes on a spaced grid with arrows
// Row y=4: main pipeline   Row y=2: branch   Row y=0: end users
const steps = [
  { x: 0, y: 4, label: 'Exchange<br>Market Data',     color: '#36b9cc', sub: 'Source' },
  { x: 2, y: 4, label: 'AWS S3<br>Data Lake',         color: '#f6c23e', sub: 'Storage' },
  { x: 4, y: 4, label: 'GCP Cloud<br>Functions',      color: '#4e73df', sub: 'Daily Trigger' },
  { x: 6, y: 4, label: 'Python<br>Detection',         color: '#e74a3b', sub: '7 Algorithms' },
  { x: 4, y: 2, label: 'Jira<br>Tickets',             color: '#fd7e14', sub: 'Auto Alerts' },
  { x: 6, y: 2, label: 'OpenAI<br>GPT API',           color: '#6f42c1', sub: 'AI Narrative' },
  { x: 8, y: 4, label: 'React +<br>Plotly',           color: '#1cc88a', sub: 'Dashboard' },
  { x: 4, y: 0, label: 'Compliance<br>Team',          color: '#20c9a6', sub: 'Alert Review' },
  { x: 8, y: 2, label: 'Management',                  color: '#5a5c69', sub: 'Executive View' },
]

const arrows = [
  [0, 1], [1, 2], [2, 3],
  [3, 4], [3, 5],
  [5, 6],
  [4, 7], [5, 7],
  [6, 8],
]

const BW = 0.75
const BH = 0.7

const IntroductionPage = () => {
  const shapes = steps.map((s) => ({
    type: 'rect',
    x0: s.x - BW, x1: s.x + BW,
    y0: s.y - BH, y1: s.y + BH,
    fillcolor: s.color,
    opacity: 0.93,
    line: { color: '#dee2e6', width: 1.5 },
    layer: 'below',
  }))

  const arrowAnns = arrows.map(([fi, ti]) => {
    const f = steps[fi], t = steps[ti]
    const dx = t.x - f.x, dy = t.y - f.y
    let ax, ay, bx, by
    if (Math.abs(dx) >= Math.abs(dy)) {
      ax = f.x + (dx > 0 ? BW : -BW); ay = f.y
      bx = t.x + (dx > 0 ? -BW : BW); by = t.y
    } else {
      ax = f.x; ay = f.y + (dy > 0 ? BH : -BH)
      bx = t.x; by = t.y + (dy > 0 ? -BH : BH)
    }
    return {
      x: bx, y: by, ax, ay,
      xref: 'x', yref: 'y', axref: 'x', ayref: 'y',
      showarrow: true, arrowhead: 3, arrowsize: 1.4, arrowwidth: 2.5,
      arrowcolor: '#b0b0b0',
    }
  })

  const labels = steps.map((s) => ({
    x: s.x, y: s.y + 0.12,
    text: `<b>${s.label}</b>`,
    showarrow: false,
    font: { size: 13, color: '#fff', family: 'Nunito, sans-serif' },
    xref: 'x', yref: 'y',
  }))

  const subs = steps.map((s) => ({
    x: s.x, y: s.y - 0.38,
    text: `<i>${s.sub}</i>`,
    showarrow: false,
    font: { size: 11, color: 'rgba(255,255,255,0.85)', family: 'Nunito, sans-serif' },
    xref: 'x', yref: 'y',
  }))

  return (
    <>
      <h1 className="mb-4 text-center" id="myWord">Project Overview</h1>

      <div className="card container my-4 p-5 shadow-sm p-3 mb-5 bg-body rounded">

        <section className="compliance-section">
          <h3>Automated Compliance & Surveillance Platform</h3>
          <p>
            End-to-end compliance monitoring for a cryptocurrency exchange &mdash; 7+ detection algorithms
            running daily via GCP Cloud Functions, auto-generating Jira tickets and AI-written narrative
            reports for the compliance team and management.
          </p>
          <div className="alert alert-primary mb-0" role="alert">
            <i className="fas fa-info-circle mr-2" />
            <strong>Portfolio demo</strong> &mdash; synthetic data. Production system processes live exchange data daily.
          </div>
        </section>

        <section className="compliance-section">
          <h3>System Architecture &mdash; Process Flow</h3>
          <Plot
            data={[
              {
                type: 'scatter',
                mode: 'markers',
                x: steps.map((s) => s.x),
                y: steps.map((s) => s.y),
                marker: { size: 0.1, color: 'rgba(0,0,0,0)' },
                hoverinfo: 'none',
                showlegend: false,
              }
            ]}
            layout={{
              height: 500,
              margin: { t: 15, b: 15, l: 15, r: 15 },
              xaxis: {
                range: [-1.2, 9.2],
                showgrid: false, zeroline: false, showticklabels: false,
                fixedrange: true,
              },
              yaxis: {
                range: [-1.2, 5.2],
                showgrid: false, zeroline: false, showticklabels: false,
                fixedrange: true,
                scaleanchor: 'x', scaleratio: 0.55,
              },
              shapes,
              annotations: [...arrowAnns, ...labels, ...subs],
              paper_bgcolor: 'transparent',
              plot_bgcolor: 'transparent',
              font: { family: 'Nunito, sans-serif' },
              dragmode: false,
              showlegend: false,
            }}
            config={{ displayModeBar: false, responsive: true, staticPlot: true }}
            useResizeHandler
            style={{ width: '100%' }}
          />
        </section>

        <section className="compliance-section">
          <h3>Technology & Skills</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-left-success shadow-sm">
                <div className="card-body">
                  <h6 className="font-weight-bold text-success">Data Engineering</h6>
                  <ul className="mb-0 pl-3" style={{ fontSize: 13 }}>
                    <li>GCP Cloud Functions + Scheduler</li>
                    <li>AWS S3 data lake (date-partitioned)</li>
                    <li>Daily ETL with error recovery</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-left-info shadow-sm">
                <div className="card-body">
                  <h6 className="font-weight-bold text-info">Finance & Compliance</h6>
                  <ul className="mb-0 pl-3" style={{ fontSize: 13 }}>
                    <li>AML/CTF &amp; market manipulation detection</li>
                    <li>Spoofing, wash trading, structuring</li>
                    <li>KYC monitoring &amp; BSA/CTR thresholds</li>
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
                    <li>React + Plotly.js + Django REST</li>
                    <li>Jira &amp; OpenAI API integrations</li>
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
