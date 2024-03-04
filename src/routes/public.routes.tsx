import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const RoutesPublic: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<></>} />
    <Route path="/register" element={<></>} />
  </Routes>
);

export default RoutesPublic;
