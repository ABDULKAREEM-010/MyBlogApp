import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout } from './components/index.js'

import AddPost from './pages/AddPost'
import Signup from './pages/Signup'
import Login from './pages/Login.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post'
import AllPosts from './pages/AllPosts.jsx'
import ContactUs from './pages/ContactUs.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import PressKit from './pages/PressKit.jsx'
import AffiliateProgram from './pages/AffililateProgram.jsx'
import Help from './pages/Help.jsx'
import Pricing from './pages/Pricing.jsx'
import Licensing from './pages/Licensing.jsx'
import CustomerSupport from './pages/CustomerSupport.jsx'
import Features from './pages/Features.jsx'
import Ownership from './pages/Owner.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/press-kit",
        element: <PressKit />,
      },{
        path: "/affiliate-program",
        element: <AffiliateProgram />,
      },{
        path: "/help",
        element: <Help />,
      },{
        path: "/pricing",
        element: <Pricing />,
      },{
        path: "/licensing",
        element: <Licensing />,
      },
      {
        path: "/customer-support",
        element: <CustomerSupport />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/ownership",
        element: <Ownership/>,
      },
      
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
