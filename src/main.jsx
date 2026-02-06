import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppV2 from './AppV2.jsx'
import VersionSwitcher from './components/VersionSwitcher.jsx'

function Root() {
  const [version, setVersion] = useState(() => {
    // Check URL param first
    const params = new URLSearchParams(window.location.search)
    const urlVersion = params.get('v')
    if (urlVersion === '1' || urlVersion === 'v1') return 'v1'
    if (urlVersion === '2' || urlVersion === 'v2') return 'v2'
    // Default to v1
    return 'v1'
  })

  // Update URL when version changes
  useEffect(() => {
    const url = new URL(window.location)
    if (version === 'v2') {
      url.searchParams.set('v', '2')
    } else {
      url.searchParams.delete('v')
    }
    window.history.replaceState({}, '', url)
  }, [version])

  return (
    <>
      {version === 'v1' ? <App /> : <AppV2 />}
      <VersionSwitcher version={version} onSwitch={setVersion} />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
