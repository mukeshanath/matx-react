import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';

import SimpleForm from './Companyform';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const EditCompany = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Form' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Edit Company" component={<Link to="/masters/company"><CancelIcon style={{ float: 'right',color:"rgba(52, 49, 76, 1)" }}/></Link>}>
         <SimpleForm/>
        </SimpleCard>

    
      </Stack>
    </Container>
  );
};

export default EditCompany;
