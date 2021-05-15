import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
  decrementBy,
} from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align="center">
          <Typography align="center" variant="h1">
            {counter}
          </Typography>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button onClick={() => dispatch(incrementBy(10))}>
            Increment by 10
          </Button>
          <Button onClick={() => dispatch(decrementBy(5))}>
            Decrement by 5
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
