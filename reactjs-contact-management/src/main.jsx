import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './components/layout'
import UserRegister from './components/User/UserRegister'
import UserLogin from './components/User/UserLogin'
import DashboardLayout from './DashboardLayout'
import UserProfile from './components/User/UserProfile'
import ContactCreate from './components/Contact/ContactCreate'
import UserLogout from './components/User/UserLogout'
import ContactList from './components/Contact/Contact_List'
import ContactEdit from './components/Contact/ContactEdit'
import ContactDetail from './components/Contact/ContactDetail'
import AddressCreate from './components/Address/AddressCreate'
import AddressEdit from './components/Address/AdressEdit'
import Auth from './components/Auth/Auth'
import Redirect from './components/Auth/Redirect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
        </Route>
        <Route element={<Auth />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path='users'>
              <Route path='profile' element={<UserProfile />} />
              <Route path='logout' element={<UserLogout />} />
            </Route>

            <Route path='contacts'>
              <Route index element={<ContactList />} />
              <Route path='create' element={<ContactCreate />} />
              <Route path=':id'>
                <Route index element={<ContactDetail />} />
                <Route path='edit' element={<ContactEdit />} />
                <Route path='addresses'>
                  <Route path='create' element={<AddressCreate />} />
                  <Route path=':addressId/edit' element={<AddressEdit />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path='/' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
