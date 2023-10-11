import React, { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./styles";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const newSearchItem = e.target.value;
    setSearchTerm(newSearchItem);
    onSearch(newSearchItem);
  };

  return (
    <div style={styles.container}>
      <TextField
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by Scrum Master or Developer name..."
      />
    </div>
  );
};
export default SearchBar;
