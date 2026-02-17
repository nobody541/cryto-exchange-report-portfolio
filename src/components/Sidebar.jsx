import { useState } from 'react'

const complianceCategories = [
  {
    id: 'txn-monitoring',
    label: 'Transaction Monitoring',
    icon: 'fas fa-exchange-alt',
    items: [
      { key: 'compliance-structuring', label: 'Structuring' },
      { key: 'compliance-mcst', label: 'Microstructuring' },
      { key: 'compliance-twep', label: 'TWEP' },
      { key: 'compliance-hub-spoke', label: 'Hub & Spoke' },
      { key: 'compliance-dormant', label: 'Dormant Account' },
      { key: 'compliance-mst', label: 'Multiple Similar Txns' },
    ]
  },
  {
    id: 'trade-surveillance',
    label: 'Trade Surveillance',
    icon: 'fas fa-chart-line',
    items: [
      { key: 'compliance-uv', label: 'Unusual Volume' },
      { key: 'compliance-wt', label: 'Wash Trade' },
      { key: 'compliance-spoofing', label: 'Spoofing' },
      { key: 'compliance-pad', label: 'Pump and Dump' },
      { key: 'compliance-mi', label: 'Momentum Ignition' },
      { key: 'compliance-qs', label: 'Quote Stuffing' },
      { key: 'compliance-pd', label: 'Price Deviation' },
    ]
  },
  {
    id: 'kyc-risk',
    label: 'KYC / Risk',
    icon: 'fas fa-user-shield',
    items: [
      { key: 'compliance-kyc', label: 'KYC Profile Deviation' },
      { key: 'compliance-ia', label: 'Irregular Activity' },
    ]
  }
]

const Sidebar = ({ isToggled, onToggle, activeView, onNavigate }) => {
  const [reportsOpen, setReportsOpen] = useState(true)
  const [openCategories, setOpenCategories] = useState({})

  const toggleCategory = (id) => {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <ul
      className={
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion backgroundsidebar' +
        (isToggled ? ' toggled' : '')
      }
      id="accordionSidebar"
    >
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div className="sidebar-brand-text">Report Demo</div>
      </a>

      <hr className="sidebar-divider my-0" />
      <hr className="sidebar-divider" />

      <li className="nav-item">
        <span
          className={'nav-link clickable' + (activeView === 'introduction' ? ' active-view' : '')}
          onClick={() => onNavigate('introduction')}
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-home" />
          <span>Introduction</span>
        </span>
      </li>

      <hr className="sidebar-divider" />

      <li className="nav-item">
        <button
          className="nav-link collapsed btn btn-link text-left w-100"
          type="button"
          onClick={() => setReportsOpen((current) => !current)}
          aria-expanded={reportsOpen}
          aria-controls="collapseReports"
        >
          <i className="fas fa-file" />
          <span>Management Reports</span>
        </button>
        <div
          id="collapseReports"
          className={'collapse' + (reportsOpen ? ' show' : '')}
          aria-labelledby="headingReports"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <span
              className={'collapse-item clickable' + (activeView === 'report' ? ' active-view' : '')}
              onClick={() => onNavigate('report')}
            >
              Report Demo
            </span>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />
      <div className="sidebar-heading-compliance">Compliance</div>

      {complianceCategories.map((cat) => (
        <li className="nav-item" key={cat.id}>
          <button
            className="nav-link collapsed btn btn-link text-left w-100"
            type="button"
            onClick={() => toggleCategory(cat.id)}
            aria-expanded={!!openCategories[cat.id]}
          >
            <i className={cat.icon} />
            <span>{cat.label}</span>
          </button>
          <div className={'collapse' + (openCategories[cat.id] ? ' show' : '')}>
            <div className="bg-white py-2 collapse-inner rounded">
              {cat.items.map((item) => (
                <span
                  key={item.key}
                  className={
                    'collapse-item clickable' + (activeView === item.key ? ' active-view' : '')
                  }
                  onClick={() => onNavigate(item.key)}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}

      <hr className="sidebar-divider" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={onToggle} />
      </div>
    </ul>
  )
}

export default Sidebar
