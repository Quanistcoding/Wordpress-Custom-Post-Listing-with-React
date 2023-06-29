import { useEffect, useState } from "react";
import PropertyCard, { Property } from "./PropertyCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://test10.local/wp-json/wp/v2/property?location=" + id)
      .then((res) => {
        setProperties(res.data);
      });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {properties.map((property) => (
          <Grid item xs={2} sm={4} md={4} key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Properties;
