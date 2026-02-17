import Plot from 'react-plotly.js'

const DEFAULT_COLORS = [
  '#395E9D', '#E24A33', '#348ABD', '#988ED5',
  '#777777', '#FBC15E', '#8EBA42', '#FFB5B8'
]

const TimelineChart = ({ series, title, thresholdValue, thresholdLabel }) => {
  if (!series || !series.length) {
    return <div className="chart-empty">No timeline data available.</div>
  }

  const traces = series.map((s, i) => ({
    x: s.data.map((d) => d.date),
    y: s.data.map((d) => d.amount),
    type: 'scatter',
    mode: 'lines+markers',
    name: s.label,
    line: { color: s.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length], width: 2 },
    marker: { size: 5 },
    hovertemplate: s.label + '<br>%{x}<br>%{y:,.2f}<extra></extra>'
  }))

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
      data={traces}
      layout={{
        title: {
          text: title || '',
          font: { size: 18, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: {
          title: 'Date',
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray'
        },
        yaxis: {
          title: 'Amount',
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
        plot_bgcolor: 'white',
        hovermode: 'x unified',
        legend: { orientation: 'h', y: -0.2 }
      }}
      config={{ displayModeBar: false, responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '320px' }}
    />
  )
}

export default TimelineChart
