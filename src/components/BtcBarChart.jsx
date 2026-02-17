import Plot from 'react-plotly.js'

const BtcBarChart = ({ rows }) => {
  if (!rows.length) {
    return <div className="chart-empty">No BTC deposit data available.</div>
  }

  const x = rows.map((row) => row.btcChange)
  const y = rows.map((row) => row.total7Day)

  return (
    <Plot
      className="plotly-chart"
      data={[
        {
          x,
          y,
          type: 'bar',
          marker: {
            color: y,
            colorscale: 'Viridis',
            opacity: 0.6
          },
          hovertemplate: '%{x}<br>Average deposit: %{y:,.0f}<extra></extra>'
        }
      ]}
      layout={{
        title: {
          text: 'Average deposits in the week following BTC market change',
          font: { size: 18, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: {
          title: '% BTC Change',
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray'
        },
        yaxis: {
          title: 'Average deposits in 7 days',
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

export default BtcBarChart
