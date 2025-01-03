// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext'; // AuthContext import
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import TextSearch from './pages/TextSearch';
import DetailsPage from './pages/DetailsPage'; // 상세 설명 페이지
import TextScanPage from './pages/TextScanPage'; // 텍스트 스캔 페이지 추가
import Mypage from './pages/Mypage'; // 통합된 Mypage.js 파일

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 로그인 페이지 */}
          <Route path="/" element={<Login />} />
          {/* 회원가입 페이지 */}
          <Route path="/signup" element={<SignUp />} />
          {/* 메인 페이지 */}
          <Route path="/main" element={<Main />} />
          {/* 캘린더 페이지 */}
          <Route path="/calendar" element={<Calendar />} />
          {/* 텍스트 검색 페이지 */}
          <Route path="/search" element={<TextSearch />} />
          {/* 마이 페이지 */}
          <Route path="/mypage" element={<Mypage />} />
          {/* 디테일 페이지 */}
          <Route path="/details" element={<DetailsPage />} />
          {/* 텍스트 스캔 페이지 */}
          <Route path="/text-scan" element={<TextScanPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;