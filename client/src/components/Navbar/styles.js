import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
  ".appBar": {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  ".heading": {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  ".image": {
    marginTop: "5px",
  },
  ".toolbar": {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  ".profile": {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  ".logout": {
    marginLeft: "20px",
  },
  ".userName": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  ".brandContainer": {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    gap: "15px",
  },
  ".purple": {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  ".media": {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  ".border": {
    border: "solid",
  },
  ".fullHeightCard": {
    height: "100%",
  },
  ".card": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  ".overlay": {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  ".overlay2": {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  ".grid": {
    display: "flex",
  },
  ".details": {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  ".title": {
    padding: "0 16px",
  },
  ".cardActions": {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default Root;
