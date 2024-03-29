import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export interface ButtonLinkProps extends Omit<ButtonProps, 'onClick'>{
  link: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, link, ...rest }) => {
  const navigate = useNavigate();

  return <Button variant="contained" onClick={() => navigate(link)} {...rest}>
    {children}
  </Button>;
};

export default ButtonLink;
