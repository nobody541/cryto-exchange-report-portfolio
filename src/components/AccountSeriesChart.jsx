import Plot from 'react-plotly.js'

const AccountSeriesChart = ({ title, rows, type = 'line' }) => {
  if (!rows.length) {
    return <div className="chart-empty chart-empty--small">No data available.</div>
  }

  const x = rows.map((row) => row.ts)
  const y = rows.map((row) => row.value)

  const trace =
    type === 'bar'
      ? {
          x,
          y,
          type: 'bar',
          marker: { color: '#395E9D', opacity: 0.6 },
          hovertemplate: '%{x}<br>Volume: %{y:,.2f}<extra></extra>'
        }
      : {
          x,
          y,
          type: 'scatter',
          mode: 'lines',
          line: { color: '#395E9D', width: 2 },
          hovertemplate: '%{x}<br>Balance: %{y:,.2f}<extra></extra>'
        }

  return (
    <Plot
      className="plotly-chart plotly-chart--small"
      data={[trace]}
      layout={{
        title: {
          text: title,
          font: { size: 16, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: { title: 'Date' },
        yaxis: { title: type === 'bar' ? 'Volume' : 'Balance' },
        margin: { t: 50, l: 50, r: 20, b: 50 },
        paper_bgcolor: 'white',
        plot_bgcolor: 'white'
      }}
      config={{ displayModeBar: false, responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '260px' }}
    />
  )
}

export default AccountSeriesChart
