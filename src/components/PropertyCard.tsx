import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import { useEffect, useState } from "react";
import axios from "axios";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HouseIcon from "@mui/icons-material/House";

export interface Property {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    price: number;
    size: number;
    property_type: string;
    property_features: [];
    bedrooms: number;
    agent_email: string;
  };
}

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  const [iamgeUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://test10.local/wp-json/wp/v2/media/" + property.featured_media)
      .then((res) => {
        setImageUrl(res.data.guid.rendered);
      });
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={iamgeUrl}
          alt={property.slug}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {property.title.rendered}
          </Typography>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
            marginBottom={1}
          >
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <HotelIcon />
              {property.acf.bedrooms} Bed Rooms
            </Box>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <AttachMoneyIcon />
              {property.acf.price}
            </Box>
          </Box>

          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HouseIcon />
              {property.acf.property_type}
            </Box>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {property.acf.size} Acres
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
