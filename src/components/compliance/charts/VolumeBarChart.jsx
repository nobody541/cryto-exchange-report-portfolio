import Plot from 'react-plotly.js'

const VolumeBarChart = ({ rows, xKey, yKey, title, thresholdValue, thresholdLabel, highlightKey }) => {
  if (!rows || !rows.length) {
    return <div className="chart-empty">No volume data available.</div>
  }

  const x = rows.map((row) => row[xKey])
  const y = rows.map((row) => row[yKey])

  const colors = rows.map((row, i) => {
    if (highlightKey && row[highlightKey]) return 'red'
    return undefined
  })

  const hasHighlight = highlightKey && rows.some((row) => row[highlightKey])

  const marker = hasHighlight
    ? { color: colors.map((c, i) => c || '#395E9D'), opacity: 0.8 }
    : { color: y, colorscale: 'Viridis', opacity: 0.8 }

  const shapes = []
  if (thresholdValue != null) {
    shapes.push({
      type: 'line',
      x0: 0,
      x1: 1,
      xref: 'paper',
      y0: thresholdValue,
      y1: thresholdValue,
      line: { color: 'red', width: 2, dash: 'dash' }
    })
  }

  const annotations = []
  if (thresholdValue != null && thresholdLabel) {
    annotations.push({
      x: 1,
      xref: 'paper',
      y: thresholdValue,
      yanchor: 'bottom',
      xanchor: 'right',
      text: thresholdLabel,
      showarrow: false,
      font: { size: 12, color: 'red' }
    })
  }

  return (
    <Plot
      className="plotly-chart"
      data={[
        {
          x,
          y,
          type: 'bar',
          marker,
          hovertemplate: '%{x}<br>%{y:,.2f}<extra></extra>'
        }
      ]}
      layout={{
        title: {
          text: title || '',
          font: { size: 18, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: {
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray'
        },
        yaxis: {
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray'
        },
        shapes,
        annotations,
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

export default VolumeBarChart
