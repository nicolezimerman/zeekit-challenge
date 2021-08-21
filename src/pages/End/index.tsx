import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import tvIcon from "../../assets/tv.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    maxHeight: "100vh",
  },
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#2196f3",
  },
});

const List: FunctionComponent = () => {
  const { container, root, title } = useStyles();
  let history = useHistory();

  const restart = () => history.push("/game");

  return (
    <div className={root}>
      <Container className={container} maxWidth={"sm"}>
        <h1 className={title}>You lost, ¿Do you want to start again?</h1>
        <Button variant="contained" color="primary" onClick={restart}>
          Start
        </Button>
      </Container>
    </div>
  );
};

export default List;
