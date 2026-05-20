import { useAuth } from '../context/AuthContext'

export function useUserAuth() {
  return useAuth()
}