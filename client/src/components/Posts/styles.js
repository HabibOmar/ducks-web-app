import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  '.mainContainer': {
    display: 'flex',
    alignItems: 'center',
  },
  '.smMargin': {
    margin: theme.spacing(1),
  },
  '.actionDiv': {
    textAlign: 'center',
  },
}));

export default Root;
