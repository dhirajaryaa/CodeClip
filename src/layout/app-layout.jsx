import { useTheme } from '@/components/theme-provider'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

function AppLayout() {
  const {theme} = useTheme();
  return (
    <main>
      <Outlet/>
      <Toaster theme={theme}/>
    </main>
  )
}

export default AppLayout