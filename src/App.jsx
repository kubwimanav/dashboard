import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import DashHome from './components/DashHome';
import Payment from './components/Payment';
import Setting from './components/Setting';
import Activecar from './components/Activecar';
import Settingform from './components/Settingform';
import License from './components/License';
import Notification from './components/Notification';
import Account from './components/Account';
import Changepassword from './components/Changepassword';
import Helpcenter from './components/Helpcenter';
import Listening from './components/Listening';
import Login from './components/Login';
import Addcar from './components/Addcar';
import Deals from './components/Deals';
import Singleactive from './components/Singleactive';
import Loginform from './components/Loginform';
import Forgetpassword from './components/Forgetpassword';
import Enternewpassword from './components/Enternewpassword';
import Conformpassword from './components/Conformpassword';
import Paymentmethod from './components/Paymentmethod';
import Addlanguange from './components/Addlanguange';
import Setting2 from './components/Setting2';
import Tableedit from './components/Tableedit';
import Companyreport from './components/Companyreport';
import CarReport from './components/CarReport';
import OurServices from './components/OurServices';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Loginform />} />
          <Route path="forget" element={<Forgetpassword />} />
          <Route path="forget/change" element={<Changepassword />} />
          <Route path="forget/entercode" element={<Enternewpassword />} />
          <Route
            path="forget/entercode/conform"
            element={<Conformpassword />}
          />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<DashHome />} />
          <Route path='dashboard' element={<DashHome />} />
          <Route path="setting2" element={<Setting2 />} />
          <Route path="payments" element={<Payment />} />
          <Route path="activecar" element={<Activecar />} />
          <Route path="activecar/singlecar" element={<Singleactive />} />
          <Route path="helpcenter" element={<Helpcenter />} />
          <Route path="tableedit" element={<Tableedit />} />
          <Route path="deal" element={<Deals />} />
          <Route path="company" element={<Companyreport />} />
          <Route path="carreport" element={<CarReport />} />
          <Route path="service" element={<OurServices />} />
          <Route path="settings" element={<Setting />}>
            <Route index element={<Settingform />} />
            <Route path="settingform" element={<Settingform />} />
            <Route path="license" element={<License />} />
            <Route path="notification" element={<Notification />} />
            <Route path="account" element={<Account />} />
            <Route path="changepassword" element={<Changepassword />} />
            <Route path="paymentmethod" element={<Paymentmethod />} />
            <Route path="changelanguage" element={<Addlanguange />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
