import React, { useState } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CustomSlider from "../CustomSlider";
import CustomButton from "../CustomButton";
import CustTextFields from "../CustTextFields";
import CustSelect from "../CustSelect";
import Box from "@material-ui/core/Box";

const SearchScreen = () => {
  const [name, setName] = useState(null);
  const myMarks = [
    {
      value: 0,
      label: "Low",
    },
    {
      value: 1,
      label: "Medium",
    },
    {
      value: 2,
      label: "High",
    },
  ];
  const nameChanged = (handle) => {
    setName(handle.target.value);
  };
  {
    console.log(name);
  }
  return (
    <div style={{ marginTop: "12%" }}>
      <Grid
        spacing={1}
        container
        justify="center"
        xs={6}
        style={{ margin: "auto", alignContent: "center" }}
      >
        {/* Text Line Doctors Search  */}
        <Grid item xs="auto" style={{ textAlign: "center" }}>
          <Typography display="inline" variant="h3">
            Search
          </Typography>
          <Typography display="inline" variant="h3">
            <Box display="inline" fontWeight="fontWeightBold" m={1}>
              Doctors
            </Box>
          </Typography>
        </Grid>
        {/* Text Field  */}
        <Grid item xs={12} md={6}>
          <CustTextFields func_nameChanged={nameChanged} />
        </Grid>

        {/*  Select */}
        <Grid item xs={12} md={6}>
          <CustSelect />
        </Grid>

        {/* Slider double  */}
        <Grid item xs={12} md={4}>
          <CustomSlider
            label1="Price"
            label2="500-1000"
            currentPosition={[600, 750]}
            maxValue={1000}
            minValue={500}
          />
        </Grid>

        {/* Sliders  */}
        <Grid item xs={12} md={4}>
          <CustomSlider
            label1="Distance"
            label2="5km"
            currentPosition={5}
            minValue={0}
            maxValue={5}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomSlider
            label1="Ranking"
            // label2="Medium"
            currentPosition={1}
            minValue={0}
            maxValue={2}
            marks={myMarks}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <CustomButton text="Search" />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchScreen;
