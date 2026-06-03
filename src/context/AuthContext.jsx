/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function getUser() {

      const {
        data: { user }
      } = await supabase.auth.getUser()

      setUser(user)
      setLoading(false)

    }

    getUser()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      subscription.unsubscribe()
    }

  }, [])

  async function signUp(email, password) {

    return await supabase.auth.signUp({
      email,
      password
    })

  }

  async function signIn(email, password) {

    return await supabase.auth.signInWithPassword({
      email,
      password
    })

  }

  async function signOut() {

    await supabase.auth.signOut()

  }

  async function resetPassword(email) {

    return await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          'http://localhost:5173/reset-password'
      }
    )

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        signUp,
        signIn,
        signOut,
        resetPassword
      }}
    >

      {children}

    </AuthContext.Provider>

  )

}

export function useAuth() {

  return useContext(AuthContext)

}