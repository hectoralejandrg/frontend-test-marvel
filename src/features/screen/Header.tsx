import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Hidden } from "@mui/material";
import SearchInput from "../components/SearchInput";

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
          height: 55px;
          color: #4086f4;
          padding: 2;
          right: 0;
          z-index: 5;
          background-color: #FFFFFF;
          box-shadow: 0px 2px 3px rgba(159, 162, 191, 0.18), 0px 1px 1px rgba(159, 162, 191, 0.32);
          position: fixed;
          justify-content: space-between;
          width: 100%;
          `
);
//   @media (min-width: ${theme.breakpoints.values.lg}px) {
//       left: ${theme.sidebar.width};
//       width: auto;
//   }

const Header = () => {
  return (
    <HeaderWrapper display="flex" alignItems="center" p={2}>
      <Box display="flex" alignItems="center">
        <SearchInput />
      </Box>
      {/* <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
        <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Hidden>
      </Box> */}
    </HeaderWrapper>
  );
};

export default Header;
