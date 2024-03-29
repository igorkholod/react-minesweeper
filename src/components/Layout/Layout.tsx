import * as React from 'react';
import NavigationHeader from '../NavigationHeader';
import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return <>
    <NavigationHeader />
    <Toolbar />
    <Outlet />
  </>;
};

export default Layout;
