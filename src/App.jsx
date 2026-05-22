import { Toaster } from 'react-hot-toast'
import { FloatingCTA } from './components/FloatingCTA'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useTheme } from './hooks/useTheme'
import { Academy } from './sections/Academy'
import { Contact } from './sections/Contact'
import { Gallery } from './sections/Gallery'
import { Home } from './sections/Home'
import { Services } from './sections/Services'
import { Testimonials } from './sections/Testimonials'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Home />
        <Services />
        <Academy />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-center" />
    </>
  )
}

export default App
