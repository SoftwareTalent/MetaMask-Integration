import { React, useState } from "react";
import "./Navigation.css";
import "boxicons";
import { useScrollSection } from "react-scroll-section";
import { useLocation } from "react-router-dom";
import useWeb3Integration from "../hooks/useWeb3Integration.js";
import { Tooltip, Button } from "@mui/material";
import { AccountBalanceWallet } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

export default function Navigation(props) {
  const [mintAmount, setMintAmount] = useState(0);
  const [account, provider, web3provider, onConnect, resetApp] =
    useWeb3Integration(mintAmount);
  const mintSection = useScrollSection("mint");
  const ourvisionSection = useScrollSection("ourvision");
  const roadmapSection = useScrollSection("roadmap");
  const ourteamSection = useScrollSection("ourteam");
  const gallerySection = useScrollSection("gallery");
  const commingSoonSection = useScrollSection("commingsoon");

  const location = useLocation();
  const { pathname } = location;
  const CurrentLocation = pathname.split("/");
  const [toggle, setToggle] = useState(false);
  const handleclick = () => {
    console.log("ok");
  };
  const OpenToggle = () => {
    setToggle(true);
  };
  const CloseToggle = () => {
    setToggle(false);
  };
  return (
    <section className="navigation" id="navigation">
      <div className="container">
        <div className="navigation_container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                md={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px",
                }}
              >
                {CurrentLocation[1] === "home" || CurrentLocation[1] === "" ? (
                  <div
                    className="social_links"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    {web3provider ? (
                      <Tooltip title="Disconnect">
                        <Button color="warning" onClick={resetApp}>
                          <AccountBalanceWallet titleAccess="Wallet Address" />
                          <Typography variant="subtitle1">
                            {account.slice(0, 7)}...{account.slice(-4)}
                          </Typography>
                        </Button>
                      </Tooltip>
                    ) : (
                      <Button className="connect_wallet" onClick={onConnect}>
                        Connect wallet
                      </Button>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </section>
  );
}
