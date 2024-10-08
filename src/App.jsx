import React from 'react'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   
   <h1>theme</h1>
  </ThemeProvider>
  )
}

export default App