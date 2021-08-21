import {
  FunctionComponent,
  useEffect,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import useShows from "../../hooks/useShows";
import { useCounter } from "../../hooks/useCounter";
import useGenres from "../../hooks/useGenres";
import Loader from "../../components/Loader";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import StatisticsDialog from "../../components/StatisticsDialog";
import { useSession } from "../../hooks/useSession";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    maxHeight: "100vh",
    marginTop: "0px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    backgroundColor: "#2196f3",
    color: "#ffffff",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    width: "100%",
    padding: "25px",
    marginTop: "0px",
    boxSizing: "border-box",
  },
  buttons: {
    margin: "5px",
  },
  paper: {
    margin: "5px",
    padding: "10px",
    width: "50%",
    boxSizing: "border-box",
    letterSpacing: "3px",
  },
  textfield: {
    width: "50%",
  },
  image: {
    width: "200px",
  },
  info: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonsContainer: {
    margin: "25px",
  },
});

const List: FunctionComponent = () => {
  let history = useHistory();
  const {
    container,
    root,
    title,
    buttons,
    paper,
    textfield,
    image,
    info,
    buttonsContainer,
  } = useStyles();
  const { isLoading, isError, shows } = useShows();
  const { getGenresFromTV } = useGenres();
  const [selectedShow, setSelectedShow] = useState<number>(1);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [hint, setHint] = useState(<div></div>);
  const [name, setName] = useState<Array<string>>([]);
  const [open, setOpen] = useState<boolean>(false);

  const correctAnswers = useSession({
    keyName: "correctAnswers",
    defaultValue: 0,
  });
  const wrongAnswers = useSession({ keyName: "wrongAnswers", defaultValue: 0 });
  const hintsUsed = useSession({ keyName: "hintsUsed", defaultValue: 0 });

  const points = useCounter(0);
  const lifes = useCounter(3);
  const hints = useCounter(1);

  //save in a provider or something with session
  const correctAnswersCounter = useCounter(correctAnswers.getter);
  const wrongAnswersCounter = useCounter(wrongAnswers.getter);
  const hintsCounter = useCounter(hintsUsed.getter);

  useEffect(() => {
    if (shows.length > 0) {
      setName(parseNameToShow(shows[selectedShow].name));
    }
  }, [shows]);

  useEffect(() => {
    correctAnswers.setter(correctAnswersCounter.counter.toString());
    wrongAnswers.setter(wrongAnswersCounter.counter.toString());
    hintsUsed.setter(hintsCounter.counter.toString());
  }, [
    hints.counter,
    correctAnswersCounter.counter,
    wrongAnswersCounter.counter,
  ]);

  const endGame = () => history.push("/end");

  const imgUrl = `https://image.tmdb.org/t/p/original`;

  const getRandomBoolean = () => {
    return Math.random() < 0.5;
  };

  const parseNameToShow = (name: string) => {
    const nameParsed = name.split("").map((char) => {
      if (char == " ") return " ";
      if (getRandomBoolean() === true) {
        return char;
      } else {
        return "_";
      }
    });
    return nameParsed;
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkTheGuess: MouseEventHandler<HTMLElement> = () => {
    if (userAnswer === "") return;
    const { name } = shows[selectedShow];
    if (userAnswer === name) {
      setSelectedShow((prevSelectedShow) => prevSelectedShow + 1);
      setUserAnswer("");
      points.increase();
      correctAnswersCounter.increase();
      hints.reset();
      setName(parseNameToShow(shows[selectedShow + 1].name));
      setHint(<div></div>);
    } else {
      lifes.decrease();
      wrongAnswersCounter.increase();
      if (lifes.counter === 1) {
        endGame();
      }
    }
  };

  const showHint = () => {
    setHint(getHint());
    hints.increase();
    hintsCounter.increase();
  };

  const getHint = () => {
    switch (hints.counter) {
      case 1:
        return <div>First air date: {shows[selectedShow].first_air_date}</div>;
      case 2:
        return (
          <div>Original language: {shows[selectedShow].original_language}</div>
        );
      case 3:
        return (
          <div>Genres: {getGenresFromTV(shows[selectedShow].genre_ids)}</div>
        );
      case 4:
        return <div>Overview: {shows[selectedShow].overview}</div>;
      case 5:
        return (
          <img
            className={image}
            src={`${imgUrl}${shows[selectedShow].backdrop_path}`}
            alt="TV show"
          />
        );
      default:
        return <div>No more hints</div>;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={root}>
      <h1 className={title}>¡Guess the TV show name!</h1>
      <Container className={container} maxWidth={"sm"}>
        {isLoading && <Loader />}
        {isError && <div>Error</div>}
        {!isLoading && shows.length > 0 && (
          <>
            <div className={info}>
              <h4>Points: {points.counter}</h4>
              <h4>Lifes: {lifes.counter}</h4>
            </div>
            <Paper className={paper} variant="outlined">
              <h2>{name}</h2>
            </Paper>
            <TextField
              className={textfield}
              id="outlined-basic"
              label="Answer"
              onChange={handleInputChange}
              value={userAnswer}
            />
            <div className={buttonsContainer}>
              <Button
                className={buttons}
                variant="contained"
                color="primary"
                onClick={checkTheGuess}
                disabled={userAnswer.length === 0}
              >
                Check the guess
              </Button>
              <Button
                className={buttons}
                variant="contained"
                color="primary"
                onClick={showHint}
                disabled={hints.counter > 5}
              >
                Hint
              </Button>
            </div>
            <Button
              className={buttons}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Statistics
            </Button>
            <div className="hint">{hint}</div>
            <StatisticsDialog
              open={open}
              onClose={handleClose}
              correctAnswers={correctAnswers.getter}
              wrongAnswers={wrongAnswers.getter}
              hintsUsed={hintsUsed.getter}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default List;
