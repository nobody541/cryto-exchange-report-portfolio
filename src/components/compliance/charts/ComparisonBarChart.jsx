import Plot from 'react-plotly.js'

const DEFAULT_COLORS = [
  '#395E9D', '#E24A33', '#348ABD', '#988ED5',
  '#777777', '#FBC15E', '#8EBA42', '#FFB5B8'
]

const ComparisonBarChart = ({ categories, series, title }) => {
  if (!categories || !categories.length || !series || !series.length) {
    return <div className="chart-empty">No comparison data available.</div>
  }

  const traces = series.map((s, i) => ({
    x: categories,
    y: s.values,
    type: 'bar',
    name: s.name,
    marker: {
      color: s.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length],
      opacity: 0.8
    },
    hovertemplate: s.name + '<br>%{x}: %{y:,.2f}<extra></extra>'
  }))

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
        barmode: 'group',
        margin: { t: 60, l: 60, r: 20, b: 60 },
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        legend: { orientation: 'h', y: -0.2 }
      }}
      config={{ displayModeBar: false, responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '320px' }}
    />
  )
}

export default ComparisonBarChart
