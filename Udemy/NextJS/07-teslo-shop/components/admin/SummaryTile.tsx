import { FC } from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  title: string | number;
  subTitle: string;
  icon: JSX.Element;
}

export const SummaryTile: FC<Props> = ({ title, subTitle, icon }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card sx={{ display: "flex" }}>
        <CardContent
          sx={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </CardContent>
        <CardContent
          sx={{ flex: "1 0 auto", display: "flex", flexWrap: "wrap", alignItems:"center", justifyContent: "space-between" }}
        >
          <Typography variant="h3" sx={{fontSize: "26px"}}>{subTitle}: </Typography>
          <Typography variant="caption"sx={{fontSize: "20px"}}>{title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
