import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  ".AppBarSearch": {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  ".Pagination": {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  ".GridContainer": {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));

export default Root;
