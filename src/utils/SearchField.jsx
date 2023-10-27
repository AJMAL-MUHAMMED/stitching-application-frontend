import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

const SearchField = ({
  placeholder,
  onChange,
  searchBarWidth,
}) => {
  return (
    <Box
      sx={{
        width: searchBarWidth,
        display: "flex",
        alignItems: "center",
        border: "solid #FFFFFF4D 1px",
        height: "46px",
        padding: "10px",
        borderRadius: "5px",
        justifyContent: "space-between",
      }}
    >
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          color: "#FFFFFF",
          fontSize: "1rem",
          marginRight: "5px",
        }}
        disableUnderline
      />
      <SearchIcon style={{ color: "#FFFFFF4D" }} />
    </Box>
  );
};

export default SearchField;
