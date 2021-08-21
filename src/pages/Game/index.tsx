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
  buttons: {
    margin: "5px",
  },
  paper: {
    margin: "5px",
    padding: "10px",
    width: "50%",
    boxSizing: "border-box",
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
  //change to page
  const { isLoading, isError, shows } = useShows(1);
  const { genres, getGenresFromTV } = useGenres();
  const [selectedShow, setSelectedShow] = useState<number>(1);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [hint, setHint] = useState(<div></div>);
  const [name, setName] = useState<Array<string>>([]);

  const points = useCounter(0);
  const lifes = useCounter(3);
  const hints = useCounter(1);

  //save in a provider or something with session
  const correctAnswersCounter = useCounter(0);
  const wrongAnswersCounter = useCounter(0);
  const hintsCounter = useCounter(0);

  useEffect(() => {
    if (shows.length > 0) {
      setName(parseNameToShow(shows[selectedShow].name));
    }
  }, [shows]);

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
      setName(parseNameToShow(shows[selectedShow + 1].name));
      hints.reset();
      setHint(<div></div>);
    } else {
      lifes.decrease();
      wrongAnswersCounter.increase();
      if (lifes.counter === 0) {
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

  return (
    <div className={root}>
      <Container className={container} maxWidth={"sm"}>
        {isLoading && <Loader />}
        {isError && <div>Error</div>}
        {!isLoading && shows.length > 0 && (
          <>
            <h1 className={title}>Guess the TV show name!</h1>
            <div className={info}>
              <h4>Points: {points.counter}</h4>
              <h4>Lifes: {lifes.counter}</h4>
            </div>
            <Paper className={paper} variant="outlined">
              {name}
            </Paper>
            <TextField
              className={textfield}
              id="outlined-basic"
              label="Answer"
              variant="outlined"
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
            <Button className={buttons} variant="contained" color="primary">
              Statistics
            </Button>
            <div className="hint">{hint}</div>
          </>
        )}
      </Container>
    </div>
  );
};

export default List;
