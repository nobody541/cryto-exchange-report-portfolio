import Plot from 'react-plotly.js'

const ProfitScatterChart = ({ rows }) => {
  if (!rows.length) {
    return <div className="chart-empty">No profit/trade data available.</div>
  }

  const x = rows.map((row) => row.profit)
  const y = rows.map((row) => row.trades)
  const text = rows.map((row) => `Account ${row.accountId}`)

  return (
    <Plot
      className="plotly-chart"
      data={[
        {
          x,
          y,
          text,
          type: 'scatter',
          mode: 'markers',
          marker: {
            size: 8,
            color: y,
            colorscale: 'Viridis',
            opacity: 0.6
          },
          hovertemplate: 'Profit: %{x:,.0f}<br>Trades: %{y}<br>%{text}<extra></extra>'
        }
      ]}
      layout={{
        title: {
          text: 'Profit vs Number of Trades',
          font: { size: 18, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: {
          title: 'Profit',
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray'
        },
        yaxis: {
          title: 'Number of Trades',
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray'
        },
        margin: { t: 60, l: 60, r: 20, b: 60 },
        paper_bgcolor: 'white',
        plot_bgcolor: 'white'
      }}
      config={{ displayModeBar: false, responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '320px' }}
    />
  )
}

export default ProfitScatterChart
