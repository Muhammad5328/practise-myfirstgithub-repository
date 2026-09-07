import './App.css'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Statcard from './components/statcard'
import Incidentable from './components/Incidentable'
import Camerapanel from './components/Camerapanel'



function App() {
  return (
    <div className="app">
      <Sidebar/>

      <main>
        <Header/>

        <div>
          <Statcard
            title="Total Workers"
            value="24"
            description="Workers currently on site"
          />

          <Statcard
            title="Active Cameras"
            value="4"
            description="Cameras currently online"
          />

          <Statcard
            title="Violations"
            value="3"
            description="Safety violations detected"
          />

          <Statcard
            title="Critical Incidents"
            value="1"
            description="Requires immediate action"
          />
        </div>

         <Camerapanel /> 
         <Incidentable /> 

      </main>
    </div>
  )
}

export default App