import Blog from './Components/Blog/Blog'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() { 

  return (
    <>
        {/* header placeholder */}
        <div style={{ 
            height: '108px',
            width: '100vw',
            position: 'sticky',
            top: 0,
            backgroundColor: '#e0e7ef',
            borderRadius: '0 0 40px 40px'
        }}> 
            
        </div>
      <Blog />
    </>
  )
}

export default App
