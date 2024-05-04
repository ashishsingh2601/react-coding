import './App.css'
import DraggableGrid from './components/DraggableGrid'

function App() {

  return (
    <div className='main'>

      <DraggableGrid />
    </div>
  )
}

export default App



// Features that I'm gonna add into this app
// 1) Landing page
// 2) Threate customization form 
// (fully customize threate (name, tiers (tier count, tier name), rows and columns in that tier)

// 3) apply form validations using RHF
// 4) use MongoDB to store your theatre configuration
// 5) use Node.js to make required api calls
// 6) implement download tickets functionality
// 7) calculate prices depending upon tier
// 8) implement google maps to show location of theatre 
//   - while customizing there will be a field to set address of threate
//   - use that address to get location and than show it on the map
// 9) use react router
//   - implement breadcrumbs
// 10) implement checkout page
// 11) add payment gateway
// 12) send mail after successful booking
