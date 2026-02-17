import Plot from 'react-plotly.js'

const GROUP_COLORS = [
  '#395E9D', '#E24A33', '#348ABD', '#988ED5',
  '#777777', '#FBC15E', '#8EBA42', '#FFB5B8'
]

const NetworkGraph = ({ nodes, edges, title }) => {
  if (!nodes || !nodes.length) {
    return <div className="chart-empty">No network data available.</div>
  }

  const nodeMap = {}
  nodes.forEach((node) => {
    nodeMap[node.id] = node
  })

  const edgeTraces = (edges || []).map((edge, i) => {
    const src = nodeMap[edge.source]
    const tgt = nodeMap[edge.target]
    if (!src || !tgt) return null
    return {
      x: [src.x, tgt.x, null],
      y: [src.y, tgt.y, null],
      type: 'scatter',
      mode: 'lines',
      line: { color: '#CCCCCC', width: edge.weight || 1 },
      hoverinfo: 'none',
      showlegend: false
    }
  }).filter(Boolean)

  const groups = [...new Set(nodes.map((n) => n.group))]

  const nodeTraces = groups.map((group, gi) => {
    const groupNodes = nodes.filter((n) => n.group === group)
    return {
      x: groupNodes.map((n) => n.x),
      y: groupNodes.map((n) => n.y),
      text: groupNodes.map((n) => n.label || n.id),
      type: 'scatter',
      mode: 'markers',
      name: String(group),
      marker: {
        size: 12,
        color: GROUP_COLORS[gi % GROUP_COLORS.length],
        opacity: 0.9
      },
      hovertemplate: '%{text}<extra>' + String(group) + '</extra>'
    }
  })

  return (
    <Plot
      className="plotly-chart"
      data={[...edgeTraces, ...nodeTraces]}
      layout={{
        title: {
          text: title || '',
          font: { size: 18, color: '#395E9D' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: {
          showgrid: false,
          zeroline: false,
          showticklabels: false
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
          showticklabels: false
        },
        margin: { t: 60, l: 20, r: 20, b: 20 },
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        hovermode: 'closest',
        showlegend: true,
        legend: { orientation: 'h', y: -0.05 }
      }}
      config={{ displayModeBar: false, responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '320px' }}
    />
  )
}

export default NetworkGraph
