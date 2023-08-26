import React, { useEffect, useState } from "react";
import NavToggle from "./NavToggle";
import TokenCard from "./TokenCard";
import "./container.less";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Nav,
  Col,
  Row,
} from "rsuite";

import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";

const headerStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const styles = {
  marginBottom: 10,
  marginLeft: "2rem",
  color: "white",
};
const App = () => {
  const [expand, setExpand] = useState(true); 
  const [tokens, setTokens] = useState([]); 
  const [searchKeyword, setSearchKeyword] = useState("");

  const API = `https://api.dexscreener.io/latest/dex/search?q=${searchKeyword}`;

  const fetchData = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setTokens(data.pairs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchKeyword]); 

  const handleInput = (event) => {
    setSearchKeyword(event); 
  };
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="#FFF"
                className="brand-icon"
              >
                <path
                  d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z"
                  fill="white"
                />
              </svg>{" "}
              <span className="brand-name">NFTify</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  Tokens Adress
                </Nav.Item>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                  Pair Address
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container className="main">
          <Row>
            <Col md={12} className="mt-3 ml-5">
              <InputGroup inside style={styles}>
                <Input className="searchbar" value={searchKeyword} onChange={(e)=>handleInput(e)} placeholder="Search Token 5" />
                <InputGroup.Button>
                  <SearchIcon />
                </InputGroup.Button>
              </InputGroup>
            </Col>
            <Col md={4}></Col>
          </Row>

          <Header>
            <div className="content-heading pt-3">Token Search Results</div>
          </Header>
          <Content>
            {tokens ? tokens.map((token, index) => (
              <div className="row mb-5" key={index}>
                <TokenCard token={token} />
              </div>
            )) : null}
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default App;
