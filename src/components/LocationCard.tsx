import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Location } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  location: Location;
}

export default function LocationCard({ location }: Props) {
  const [iamgeUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://test10.local/wp-json/wp/v2/media/" + location.acf.image)
      .then((res) => {
        setImageUrl(res.data.guid.rendered);
      });
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/location/" + location.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={iamgeUrl}
            alt={location.slug}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              {location.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {location.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
