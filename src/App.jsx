import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-indigo-100 rounded-md border">
      {/* Header always on top */}
      <Header />

      {/* Main content expands to push footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  ) : null;
}

export default App
