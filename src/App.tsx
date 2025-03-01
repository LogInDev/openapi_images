import React from 'react';
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 페이지 컴포넌트
import MainPage from '@pages/index/index'
import BookmarkPage from '@pages/bookmark/index'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />}></Route>
          <Route path='/:id' element={<MainPage />}></Route>
          <Route path='/bookmark' element={<BookmarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )

}

export default App