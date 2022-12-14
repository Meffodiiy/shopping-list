import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, List } from './pages'
import GlobalStyle from './GlobalStyle'


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:id" element={<List/>}/>
        <Route path="/:id/edit" element={<List edit/>}/>
      </Routes>
    </BrowserRouter>
    <GlobalStyle/>
  </>
)
