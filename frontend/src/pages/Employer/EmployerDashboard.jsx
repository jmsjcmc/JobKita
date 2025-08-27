import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function EmployerDashboard() {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDashboardOverview = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.OVERVIEW);
      if (response.status === 200){
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDashboardOverview();
    return () => {};
  }, []);
  return (
    <DashboardLayout activeMenu='employer-dashboard'>

    </DashboardLayout>
  )
}
