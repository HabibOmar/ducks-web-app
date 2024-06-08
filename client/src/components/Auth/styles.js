import { styled } from "@mui/system";
import { deepPurple } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
  // Use object property syntax for class selectors
  ".paper": {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  // Use string interpolation for nested selectors
  [`& .MuiTextField-root`]: {
    margin: theme.spacing(1),
  },
  // Use object property syntax for class selectors
  ".avatar": {
    margin: theme.spacing(1),
    backgroundColor: deepPurple[500],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    msMarginTop: theme.spacing(3),
  },
  // Use object property syntax for class selectors
  ".submit": {
    margin: theme.spacing(3, 0, 2),
  },
  // Use object property syntax for class selectors
  ".googleButton": {
    marginBottom: theme.spacing(2),
  },
}));

export default Root;
