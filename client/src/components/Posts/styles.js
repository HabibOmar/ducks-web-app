import { deepPurple } from "@mui/material/colors";
import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  ".mainContainer": {
    borderRadius: "15px",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 50px",
  },
  ".hading": {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  ".image": {
    marginLeft: "15px",
  },
  ".toolBar": {
    display: "flex",
    justifyContent: "felx-end",
    width: "400px",
  },
  ".profile": {
    display: "flex",
    justifyContent: "flex-start",
    width: "400px",
  },
  ".userName": {
    display: "flex",
    alignItems: "center",
  },
  ".brandContainer": {
    display: "flex",
    alignItems: "center",
  },
  ".smMargin": {
    margin: theme.spacing(1),
  },
  ".purlple": {
    color: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    ".appBar": {
      padding: "10px 20px",
    },
    ".heading": {
      display: "none",
    },
    ".userName": {
      display: "none",
    },
    ".image": {
      marginLeft: "5px",
    },
    ".toolBar": {
      display: "flex",
      justifyContent: "flex-end",
      width: "160px",
    },
  },
  ".actionDiv": {
    textAlign: "center",
  },
}));

export default Root;
