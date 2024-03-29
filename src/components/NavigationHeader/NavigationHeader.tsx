import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

export interface NavigationHeaderProps {
}

const ButtonLink: React.FC<{ link: string; children: ReactNode; }> = ({ link, children }) => {
  const navigate = useNavigate();

  return <Button style={{ color: '#fff' }} onClick={() => navigate(link)}>{children}</Button>;
};

const NavigationHeader: React.FC<NavigationHeaderProps> = () => {
  return <AppBar component="nav">
    <Toolbar>
      <ButtonLink link="/">
        Home
      </ButtonLink>
    </Toolbar>
  </AppBar>;
};

export default NavigationHeader;
