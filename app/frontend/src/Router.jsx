import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login'
import MainTodo from './pages/MainTodo';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todo/:id" element={<MainTodo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
