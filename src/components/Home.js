import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  Card,
} from "@mui/material";
// import Select from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import value from "../data.json";

const Home = () => {
  const data = ["Polar", "Africa", "Europe", "Americas", "Oceania", "Asia"];
  console.log(data, "datattattat");

  const [search, setSearch] = useState();
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue, "selecrtttt");

  console.log(filteredResults, "filtered");

  console.log(search, "search");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    const filterData = value.filter((item) => {
      return item.region?.toLowerCase() === event.target.value?.toLowerCase();
    });
    setFilteredResults(filterData);
  };

  const Handlesearch = (searchValue) => {
    // e.target.value;
    setSearch(searchValue);
    if (search !== "") {
      const filterData = value.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchValue);
      });
      setFilteredResults(filterData);
    }
  };
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        marginBottom={5}
        marginTop={2}
      >
        <TextField
          type="text"
          name="search"
          onChange={(e) => Handlesearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                // onClick={handleClickShowPassword}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="search country"
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValue}
              label="region"
              onChange={handleChange}
            >
              <MenuItem disabled>select region</MenuItem>
              {data?.map((value) => {
                return <MenuItem value={value}>{value}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {search?.length > 1 || selectedValue !== ""
            ? filteredResults?.map((value, index) => {
                return (
                  <Grid sx={4}>
                    <Grid item marginLeft={9} key={index}>
                      <Card
                        sx={{
                          width: "260px",
                          height: "320px",
                          marginTop: "30px",
                        }}
                      >
                        <img
                          src={value.flags.svg}
                          alt={value.name}
                          width={260}
                          height={150}
                        />

                        <Typography
                          marginLeft={3}
                          fontWeight={500}
                          variant="h6"
                        >
                          {value.name}
                        </Typography>
                        <Box display={"flex"} marginLeft={3} marginTop={3}>
                          <label>population :</label>
                          <Typography>{value.population}</Typography>
                        </Box>

                        <Box display={"flex"} marginLeft={3}>
                          <label>region :</label>
                          <Typography>{value.region}</Typography>
                        </Box>
                        <Box display={"flex"} marginLeft={3}>
                          <label>capital :</label>
                          <Typography>{value.capital}</Typography>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })
            : value?.map((value, index) => {
                return (
                  <Grid sx={4}>
                    <Grid marginLeft={9} item key={index}>
                      <Card
                        sx={{
                          width: "260px",
                          height: "310px",
                          marginTop: "30px",
                        }}
                      >
                        <img
                          src={value.flags.svg}
                          alt={value.name}
                          width={260}
                          height={150}
                        />

                        <Typography
                          marginLeft={3}
                          fontWeight={500}
                          variant="h6"
                        >
                          {value.name}
                        </Typography>
                        <Box display={"flex"} marginLeft={3} marginTop={3}>
                          <label>population :</label>
                          <Typography>{value.population}</Typography>
                        </Box>

                        <Box display={"flex"} marginLeft={3}>
                          <label>region :</label>
                          <Typography>{value.region}</Typography>
                        </Box>
                        <Box display={"flex"} marginLeft={3}>
                          <label>capital :</label>
                          <Typography>{value.capital}</Typography>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
