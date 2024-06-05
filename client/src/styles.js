import { styled } from '@mui/system';

const Root = styled('div')({
  '.appBar': {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.heading': {
    color: 'rgba(255, 191, 0, 1)',
  },
  '.image': {
    marginLeft: '15px',
  },
});

export default Root;
