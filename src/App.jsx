import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Report from './components/Report.jsx'
import ComplianceRouter from './components/compliance/ComplianceRouter.jsx'
import IntroductionPage from './components/IntroductionPage.jsx'
import Footer from './components/Footer.jsx'

const scrollToTop = (event) => {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const App = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false)
  const [activeView, setActiveView] = useState('report')

  useEffect(() => {
    document.body.classList.toggle('sidebar-toggled', sidebarToggled)
    return () => document.body.classList.remove('sidebar-toggled')
  }, [sidebarToggled])

  const handleNavigate = (view) => {
    setActiveView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="wrapper" className={sidebarToggled ? 'toggled' : ''}>
      <Sidebar
        isToggled={sidebarToggled}
        onToggle={() => setSidebarToggled((current) => !current)}
        activeView={activeView}
        onNavigate={handleNavigate}
      />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
              type="button"
              onClick={() => setSidebarToggled((current) => !current)}
            >
              <i className="fa fa-bars" />
            </button>
            <div className="pt-5" />
            {activeView === 'introduction' && <IntroductionPage />}
            {activeView === 'report' && <Report />}
            {activeView.startsWith('compliance-') && <ComplianceRouter viewKey={activeView} />}
          </div>
        </div>
        <Footer />
      </div>
      <a className="scroll-to-top rounded" href="#page-top" onClick={scrollToTop}>
        <i className="fas fa-angle-up" />
      </a>
    </div>
  )
}

export default App
