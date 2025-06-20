import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
