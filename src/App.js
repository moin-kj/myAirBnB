import './assets/style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
import HomePage from './pages/homePage';




const App = () => {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<HomePage/>}  />
        {/* <Route exact path="/PersonalInformation" element={<PersonalInformation />} /> */}

      </Routes>
    </Layout>
  </Router>
  );
}

export default App;