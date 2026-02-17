const AlertsTable = ({ columns, rows, flagKey = 'flagged', title }) => {
  return (
    <div className="compliance-chart-container">
      {title && <h5>{title}</h5>}
      <div className="table-responsive">
        <table className="table table-bordered table-sm compliance-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={row[flagKey] ? 'flagged-row' : ''}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.format ? col.format(row[col.key], row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AlertsTable
