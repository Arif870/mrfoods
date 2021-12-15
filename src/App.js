import { Grid } from "@material-ui/core";
import "./App.css";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Map } from "./components/Map/Map";

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ width: "95%", margin: "50px auto" }}>
        <Grid xs={12} md={4}>
          <List />
        </Grid>
        <Grid xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
