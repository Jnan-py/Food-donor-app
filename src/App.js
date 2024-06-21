import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donor from './pages/Dashboard/Donor';
import Trusts from './pages/Dashboard/Trusts';
import Organisations from './pages/Dashboard/Organisations';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
import DonorList from './pages/Admin/DonorList';
import TrustList from './pages/Admin/TrusList';
import OrgList from './pages/Admin/OrgList';
import AdminHome from './pages/Admin/AdminHome';
import AllOrg from './pages/Dashboard/AllOrg';
import AllDonor from './pages/Dashboard/AllDonor';
import AllTrust from './pages/Dashboard/AllTrust';
import DonorHome from './pages/DonorHome';
import TrustHome from './pages/TrustHome';
import OrgHome from './pages/OrgHome';
import FoodStock from './pages/FoodStock';
import PageNotFound from './pages/404page';

function App() {
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        }
        />
        <Route path='/food-stock' element={
        <ProtectedRoute>
          <FoodStock/>
        </ProtectedRoute>
        }
        />
        <Route path='/all-organisation' element={
        <ProtectedRoute>
          <AllOrg/>
        </ProtectedRoute>
        }
        />
        <Route path='/all-donor' element={
        <ProtectedRoute>
          <AllDonor/>
        </ProtectedRoute>
        }
        />
        <Route path='/all-trust' element={
        <ProtectedRoute>
          <AllTrust/>
        </ProtectedRoute>
        }
        />
        <Route path='/donor' element={
        <ProtectedRoute>
          <Donor/>
        </ProtectedRoute>
        }
        />
        <Route path='/trust' element={
        <ProtectedRoute>
          <Trusts/>
        </ProtectedRoute>
        }
        />
        <Route path='/donor-list' element={
        <ProtectedRoute>
          <DonorList/>
        </ProtectedRoute>
        }
        />
        <Route path='/admin' element={
        <ProtectedRoute>
          <AdminHome/>
        </ProtectedRoute>
        }
        />
        <Route path='/home-donor' element={
        <ProtectedRoute>
          <DonorHome/>
        </ProtectedRoute>
        }
        />
        <Route path='/home-trust' element={
        <ProtectedRoute>
          <TrustHome/>
        </ProtectedRoute>
        }
        />
        <Route path='/home-org' element={
        <ProtectedRoute>
          <OrgHome/>
        </ProtectedRoute>
        }
        />
        <Route path='/trust-list' element={
        <ProtectedRoute>
          <TrustList/>
        </ProtectedRoute>
        }
        />
        <Route path='/org-list' element={
        <ProtectedRoute>
          <OrgList/>
        </ProtectedRoute>
        }
        />
        <Route path='/consumer' element={
        <ProtectedRoute>
          <Consumer/>
        </ProtectedRoute>
        }
        />
        <Route path='/overview' element={
        <ProtectedRoute>
          <Analytics/>
        </ProtectedRoute>
        }
        />
        <Route path='/donation' element={
        <ProtectedRoute>
          <Donation/>
        </ProtectedRoute>
        }
        />
        <Route path='/organisation' element={
        <ProtectedRoute>
          <Organisations/>
        </ProtectedRoute>
        }
        />
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>
        <Route path='/register' element={
         <PublicRoute>
        <Register/>
        </PublicRoute>
        } />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
