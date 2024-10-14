import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import Home from './pages/home/home';
import "./css/main.css"
import Solutions from './pages/solutions';
import InsurancePlanning from './pages/solutions/InsurancePlanning';
import IssuanceManagement from './pages/solutions/IssuanceManagement';
import AccuracyandAdequacy from './pages/solutions/AccuracyandAdequacy';
import OngoingReview from './pages/solutions/OngoingReview';
import ClaimManagement from './pages/solutions/ClaimManagement';
import PolicyRenewal from './pages/solutions/PolicyRenewal';
import Customer from './pages/customer';
import About from './pages/about';
import Contact from './pages/contact';
import Life from './pages/insurences/Life';
import Medical from './pages/insurences/Medical';
import Accident from './pages/insurences/Accident';
import Investment from './pages/insurences/Investment';
import Motor from './pages/insurences/Motor';
import Cargo from './pages/insurences/Cargo';
import Hull from './pages/insurences/Hull';
import Aviation from './pages/insurences/Aviation';
import Engineering from './pages/insurences/Engineering';
import OilGas from './pages/insurences/OilGas';
import Fire from './pages/insurences/Fire';
import Misellineous from './pages/insurences/Misellineous';
import Terms from './pages/about/Terms';
import Privacy from './pages/about/privacy';
import NonPayment from './pages/insurences/NonPayment';
import Cyber from './pages/insurences/Cyber';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/solutions"
          element={
            <>
              <Solutions />
            </>
          }
        />
        <Route
          path="/Insurance-Planning"
          element={
            <>
              <InsurancePlanning />
            </>
          }
        />
        <Route
          path="/non-payment-risks-insurance"
          element={
            <>
              <NonPayment />
            </>
          }
        />
        <Route
          path="/Cyber-insurance"
          element={
            <>
              <Cyber />
            </>
          }
        />
        <Route
          path="/Issuance-Management"
          element={
            <>
              <IssuanceManagement />
            </>
          }
        />
        <Route
          path="/Accuracy-and-Adequacy"
          element={
            <>
              <AccuracyandAdequacy />
            </>
          }
        />
        <Route
          path="/Ongoing-Review"
          element={
            <>
              <OngoingReview />
            </>
          }
        />
        <Route
          path="/Claim-Management"
          element={
            <>
              <ClaimManagement />
            </>
          }
        />
        <Route
          path="/Policy-Renewal"
          element={
            <>
              <PolicyRenewal />
            </>
          }
        />
        <Route
          path="/Customer-Rights"
          element={
            <>
              <Customer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/Life-Insurance"
          element={
            <>
              <Life />
            </>
          }
        />
        <Route
          path="/Medical-Insurance"
          element={
            <>
              <Medical />
            </>
          }
        />
        <Route
          path="/Accident-Insurance"
          element={
            <>
              <Accident />
            </>
          }
        />
        <Route
          path="/Investment-Insurance"
          element={
            <>
              <Investment />
            </>
          }
        />
        <Route
          path="/Motor-Insurance"
          element={
            <>
              <Motor />
            </>
          }
        />
        <Route
          path="/Cargo-Insurance"
          element={
            <>
              <Cargo />
            </>
          }
        />
        <Route
          path="/Hull-Insurance"
          element={
            <>
              <Hull />
            </>
          }
        />
        <Route
          path="/Aviation-Insurance"
          element={
            <>
              <Aviation />
            </>
          }
        />
        <Route
          path="/Engineering-Insurance"
          element={
            <>
              <Engineering />
            </>
          }
        />
        <Route
          path="/Oil-&-Gas-Insurance"
          element={
            <>
              <OilGas />
            </>
          }
        />
        <Route
          path="/Fire-Insurance"
          element={
            <>
              <Fire />
            </>
          }
        />
        <Route
          path="/Misellineous-Insurance"
          element={
            <>
              <Misellineous />
            </>
          }
        />
        <Route
          path="/Terms-and-Conditions"
          element={
            <>
              <Terms />
            </>
          }
        />
        <Route
          path="/Privacy-policy"
          element={
            <>
              <Privacy />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
