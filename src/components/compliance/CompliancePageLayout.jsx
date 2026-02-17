const CompliancePageLayout = ({ title, category, description, parameters, detectionLogic, children }) => {
  return (
    <>
      <h1 className="mb-4 text-center" id="myWord">{title}</h1>
      <div className="card container my-4 p-5 shadow-sm p-3 mb-5 bg-body rounded">
        <span className="compliance-category-badge">{category}</span>

        <section className="compliance-section">
          <h3>Algorithm Description</h3>
          {typeof description === 'string' ? <p>{description}</p> : description}
        </section>

        {parameters && parameters.length > 0 && (
          <section className="compliance-section compliance-params">
            <h3>Parameters</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((p) => (
                    <tr key={p.name}>
                      <td><code>{p.name}</code></td>
                      <td>{p.value}</td>
                      <td>{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {detectionLogic && (
          <section className="compliance-section detection-logic">
            <h3>Detection Logic</h3>
            {typeof detectionLogic === 'string' ? <p>{detectionLogic}</p> : detectionLogic}
          </section>
        )}

        <section className="compliance-section">
          <h3>Sample Visualizations</h3>
          {children}
        </section>
      </div>
    </>
  )
}

export default CompliancePageLayout
