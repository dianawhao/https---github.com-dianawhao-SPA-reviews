
// React-Router dependencies
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import in page components
import ShowReviews from './pages/ShowReviews';
import EditReview from './pages/EditReview';
import AddReview from './pages/AddReview';

function App() {


  return (
    <>
    <div className="container">
    <h1>RecipeBook App</h1>
    {/* All the routes must be defined as children of the BrowserRouter */}
     <BrowserRouter>
      {/* All the routes must be in the <Routes> as children */}
      <Routes>
        <Route path="/" element={
            <ShowReviews/>
        } />
        <Route path="/add" element={<AddReview/>} />
        <Route path="/edit/:index" element={
          <EditReview/>
        }/>
      </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
