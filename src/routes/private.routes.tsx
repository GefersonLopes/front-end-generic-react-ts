import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const RoutesPrivate: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/home" replace />} />
    <Route path="/" element={<></>} />
  </Routes>
);

export default RoutesPrivate;
