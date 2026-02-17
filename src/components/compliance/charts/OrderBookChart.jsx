import Plot from 'react-plotly.js'

const OrderBookChart = ({ levels, highlightPrice, title }) => {
  if (!levels || !levels.length) {
    return <div className="chart-empty">No order book data available.</div>
  }

  const prices = levels.map((l) => l.price)
  const bidSizes = levels.map((l) => l.bidSize || 0)
  const askSizes = levels.map((l) => l.askSize || 0)

  const bidColors = levels.map((l) =>
    highlightPrice != null && l.price === highlightPrice ? 'orange' : 'rgba(34, 139, 34, 0.7)'
  )
  const askColors = levels.map((l) =>
    highlightPrice != null && l.price === highlightPrice ? 'orange' : 'rgba(220, 20, 60, 0.7)'
  )

  return (
    <Plot
      className="plotly-chart"
      data={[
        {
          y: prices,
          x: bidSizes.map((v) => -v),
          type: 'bar',
          orientation: 'h',
          name: 'Bids',
          marker: { color: bidColors },
          hovertemplate: 'Price: %{y}<br>Bid Size: %{customdata:,.2f}<extra></extra>',
          customdata: bidSizes
        },
        {
          y: prices,
          x: askSizes,
          type: 'bar',
          orientation: 'h',
          name: 'Asks',
          marker: { color: askColors },
          hovertemplate: 'Price: %{y}<br>Ask Size: %{x:,.2f}<extra></extra>'
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
          title: 'Order Size',
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray',
          tickvals: undefined,
          ticktext: undefined
        },
        yaxis: {
          title: 'Price',
          titlefont: { size: 16 },
          tickfont: { size: 14 },
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'Gray',
          type: 'category'
        },
        barmode: 'overlay',
        margin: { t: 60, l: 80, r: 20, b: 60 },
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

export default OrderBookChart
