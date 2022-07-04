import React from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const Home = () => {
  const Categories = [
    { category: "English", value: 9 },
    { category: "French", value: 10 },
  ];

  return (
    <div className="content">
      <div className="settings">
        <h3>Quiz Setting</h3>

        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map(({ category, value }) => (
              <MenuItem key={value}>{category}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem>Easy</MenuItem>
            <MenuItem>Medium</MenuItem>
            <MenuItem>Hard</MenuItem>
          </TextField>

          <Button variant="contained" size="large">
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
