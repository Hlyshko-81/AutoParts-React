import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css' // Підключаємо стилі

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App