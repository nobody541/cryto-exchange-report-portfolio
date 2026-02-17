import { lazy, Suspense } from 'react'

const UnusualVolumePage = lazy(() => import('./pages/UnusualVolumePage.jsx'))
const WashTradePage = lazy(() => import('./pages/WashTradePage.jsx'))
const StructuringPage = lazy(() => import('./pages/StructuringPage.jsx'))
const TwepPage = lazy(() => import('./pages/TwepPage.jsx'))
const HubSpokePage = lazy(() => import('./pages/HubSpokePage.jsx'))
const SpoofingPage = lazy(() => import('./pages/SpoofingPage.jsx'))
const KycDeviationPage = lazy(() => import('./pages/KycDeviationPage.jsx'))
const DormantAccountPage = lazy(() => import('./pages/DormantAccountPage.jsx'))
const MicrostructuringPage = lazy(() => import('./pages/MicrostructuringPage.jsx'))
const IrregularActivityPage = lazy(() => import('./pages/IrregularActivityPage.jsx'))
const MultipleSimilarTxnPage = lazy(() => import('./pages/MultipleSimilarTxnPage.jsx'))
const PumpAndDumpPage = lazy(() => import('./pages/PumpAndDumpPage.jsx'))
const MomentumIgnitionPage = lazy(() => import('./pages/MomentumIgnitionPage.jsx'))
const QuoteStuffingPage = lazy(() => import('./pages/QuoteStuffingPage.jsx'))
const PriceDeviationPage = lazy(() => import('./pages/PriceDeviationPage.jsx'))

const pages = {
  'compliance-uv': UnusualVolumePage,
  'compliance-wt': WashTradePage,
  'compliance-structuring': StructuringPage,
  'compliance-twep': TwepPage,
  'compliance-hub-spoke': HubSpokePage,
  'compliance-spoofing': SpoofingPage,
  'compliance-kyc': KycDeviationPage,
  'compliance-dormant': DormantAccountPage,
  'compliance-mcst': MicrostructuringPage,
  'compliance-ia': IrregularActivityPage,
  'compliance-mst': MultipleSimilarTxnPage,
  'compliance-pad': PumpAndDumpPage,
  'compliance-mi': MomentumIgnitionPage,
  'compliance-qs': QuoteStuffingPage,
  'compliance-pd': PriceDeviationPage,
}

const ComplianceRouter = ({ viewKey }) => {
  const Page = pages[viewKey]
  if (!Page) return <div className="text-center p-5">Page not found.</div>

  return (
    <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
      <Page />
    </Suspense>
  )
}

export default ComplianceRouter
