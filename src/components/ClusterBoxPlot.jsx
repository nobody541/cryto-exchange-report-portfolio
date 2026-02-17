import Plot from 'react-plotly.js'

const ClusterBoxPlot = () => {
  const clusters = {
    'Cluster 1': [-0.946388, -0.040417, 0.318588],
    'Cluster 2': [-0.470355, 0.0, 1.55243],
    'Cluster 3': [0.057754, 0.608292, 1.431638],
    'Cluster 4': [-0.36894, 0.0, 0.915682]
  }

  const data = Object.entries(clusters).map(([name, [q1, q2, q3]]) => {
    const iqr = q3 - q1
    const minVal = q1 - 1.5 * iqr
    const maxVal = q3 + 1.5 * iqr

    return {
      name,
      y: [minVal, q1, q2, q3, maxVal],
      type: 'box',
      boxpoints: false,
      jitter: 0
    }
  })

  return (
    <Plot
      className="plotly-chart"
      data={data}
      layout={{
        title: {
          text: 'Money Weighted Return per Group of Users',
          font: { size: 18, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        yaxis: { title: 'MVR (%)' },
        xaxis: { title: 'Clusters' },
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

export default ClusterBoxPlot
