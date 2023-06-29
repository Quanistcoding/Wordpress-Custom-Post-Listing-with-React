import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LocationCard from "./components/LocationCard";
import { Grid } from "@mui/material";

export interface Location {
  id: number;
  name: string;
  slug: string;
  acf: { image: number };
  description: string;
}

function App() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    axios.get("http://test10.local/wp-json/wp/v2/location").then((res) => {
      setLocations(res.data);
    });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {locations.map((location) => (
          <Grid item xs={2} sm={4} md={4} key={location.id}>
            <LocationCard location={location} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
