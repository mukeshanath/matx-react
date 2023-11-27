import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import PaginationTable from '../tables/PaginationTable';
import { useLocation } from 'react-router-dom';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AppCompanyList = () => {

    const location = useLocation();
    const fullPath = location.pathname + location.search;

    console.log(fullPath.split("/")[1]);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: fullPath.split("/")[1], path: '/material' }, { name: fullPath.split("/")[2] }]}
        />
      </Box>

      
      <SimpleCard title="Company List">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
};

export default AppCompanyList;
