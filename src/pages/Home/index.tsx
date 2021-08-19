import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import tvIcon from "../../assets/tv.png";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    maxHeight: "100vh",
  },
  container: {
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: 'center',
    color: '#2196f3',
  },
  icon: {
    width: "250px",
  },
});

const List: FunctionComponent = () => {
  const { container, root, title, icon } = useStyles();
  let history = useHistory();

  const start = () => history.push("/game");

  return (
    <div className={root}>
      <Container className={container} maxWidth={"sm"}>
        <h1 className={title}>Guess the TV show name!</h1>
        <img className={icon} src={tvIcon} alt="Game" />
          <Button variant="contained" color="primary" onClick={start}>Start</Button>
      </Container>
    </div>
  );
};

export default List;
