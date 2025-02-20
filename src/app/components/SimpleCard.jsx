import { Card, Box, styled } from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link } from 'react-router-dom';
const CardRoot = styled(Card)({
  height: '100%',
  padding: '20px 24px'
});

const CardTitle = styled('div')(({ subtitle }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
  marginBottom: !subtitle && '16px',
}));

const SimpleCard = ({ children, title, subtitle, component}) => {
  return (
    <CardRoot elevation={12}>
      <CardTitle subtitle={subtitle}>{title} {component}</CardTitle>
      {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
