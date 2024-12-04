import {React, Route} from 'react-router-dom'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/counter" element={<h1>Counter Page</h1>}></Route>
        <Route path="/stopwatch" element={<h1>Stop Watch App</h1>}></Route>
        <Route path="*" element={<h1>No page available</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App;