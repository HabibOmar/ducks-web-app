import { styled } from "@mui/system";

const Root = styled("div")(() => ({
  "& .media": {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "darken",
  },
  "& .border": {
    border: "solid",
  },
  "& .fullHeightCard": {
    height: "100%",
  },
  "& .card": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    transition: "box-shadow 0.3s ease-in-out", // Add transition for smooth animation
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Add shadow on hover
    },
  },
  "& .overlay": {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  "& .overlay2": {
    position: "absolute",
    top: "20px",
    right: "10px",
    color: "white",
  },
  "& .grid": {
    display: "flex",
  },
  "& .details": {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  "& .title": {
    padding: "0 16px",
  },
  "& .cardActions": {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  "& .cardAction": {
    display: "block",
    textAlign: "initial",
  },
}));

export default Root;
