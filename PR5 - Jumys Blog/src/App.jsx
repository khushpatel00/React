import Blog from './Components/Blog/Blog'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() { 

  return (
    <>
        {/* header placeholder */}
        {/* <div style={{ 
            height: '108px',
            width: '95vw',
            position: 'sticky',
            top: 0,
            zIndex: 9999,
            backgroundColor: 'transparent',
            borderRadius: '0 0 40px 40px'
        }} className='mx-auto'></div> */}
      <Header />
      <Blog />
      <Footer />
    </>
  )
}

export default App
