import React from "react";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const styles = {
  marginBottom: 10,
  marginLeft: "2rem",

};

const Search = () => (
  <>
    <InputGroup inside style={styles}>
      <Input  className="searchbar"/>
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  </>
);

export default Search;
