import React from "react";
import "./Whitepaper.css";
import Navigation from "../../Components/Navigation";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import Footer from "./../Home/Footer";
import Carousel from "react-multi-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import image1 from "../../Assets/Gallery Images/1.jpeg";
import image2 from "../../Assets/Gallery Images/2.jpeg";
import image3 from "../../Assets/Gallery Images/3.jpeg";
import image4 from "../../Assets/Gallery Images/4.jpeg";
import image5 from "../../Assets/Gallery Images/5.jpeg";
import image6 from "../../Assets/Gallery Images/6.jpeg";
import image7 from "../../Assets/Gallery Images/7.jpeg";
import image8 from "../../Assets/Gallery Images/8.jpeg";
import image9 from "../../Assets/Gallery Images/9.jpeg";
import image10 from "../../Assets/Gallery Images/10.jpeg";
import image11 from "../../Assets/Gallery Images/11.jpeg";
import image12 from "../../Assets/Gallery Images/12.jpeg";
import image13 from "../../Assets/Gallery Images/13.jpeg";
import image14 from "../../Assets/Gallery Images/14.jpeg";
import image15 from "../../Assets/Gallery Images/15.jpeg";
import image16 from "../../Assets/Gallery Images/16.jpeg";
import image17 from "../../Assets/Gallery Images/17.jpeg";
import image18 from "../../Assets/Gallery Images/18.jpeg";
import image19 from "../../Assets/Gallery Images/19.jpeg";
import image20 from "../../Assets/Gallery Images/20.jpeg";
import image21 from "../../Assets/Gallery Images/21.jpeg";
import image22 from "../../Assets/Gallery Images/22.jpeg";
import image23 from "../../Assets/Gallery Images/23.jpeg";
import image24 from "../../Assets/Gallery Images/24.jpeg";
import image25 from "../../Assets/Gallery Images/25.jpeg";
import image26 from "../../Assets/Gallery Images/26.jpeg";
import image27 from "../../Assets/Gallery Images/27.jpeg";
import image28 from "../../Assets/Gallery Images/28.jpeg";
import image29 from "../../Assets/Gallery Images/29.jpeg";
import image30 from "../../Assets/Gallery Images/30.jpeg";
import trans from "../../Assets/images/Screenshot_1.png";
import screen_3 from "../../Assets/images/Screenshot_3.png";
import screen_4 from "../../Assets/images/Screenshot_4.png";
import screen_5 from "../../Assets/images/Screenshot_5.png";
import screen_6 from "../../Assets/images/Screenshot_6.png";
import screen_7 from "../../Assets/images/Screenshot_7.png";
import screen_8 from "../../Assets/images/Screenshot_8.png";
const imagearray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
];
const imagearray1 = [
  image1,
  image28,
  image29,
  image30,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];
const imagearray2 = [image4, image7, image13, image21];
const imagearray3 = [image5, image2, image14, image17];
const imagearray4 = [image7, image11, image15, image29];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TeamData = [
  {
    id: 1,
    image: require("./../../Assets/images/hanzblade.jpg").default,
    name: "Hanz Blade",
    position: "Project/Marketing Lead",
  },
  {
    id: 2,
    image: require("./../../Assets/images/lang.png").default,
    name: "Lang Tambun",
    position: "Artist",
  },
  {
    id: 3,
    image: require("./../../Assets/images/adaptive-code.jpg").default,
    name: "Adaptive Code",
    position: "Back end development team",
  },
  {
    id: 4,
    image: require("./../../Assets/images/priya.jpg").default,
    name: "Priya Jayaprakash",
    position: "Front end developer",
  },
  {
    id: 5,
    image: require("./../../Assets/images/vongola.png").default,
    name: "Vongola",
    position: "Advisor",
  },
  {
    id: 6,
    image: require("./../../Assets/images/filip.png").default,
    name: "Filip Cvijovic",
    position: "Discord Manager",
  },
];
export default function Whitepaper() {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        onClick={() => onMove()}
        style={{ position: "absolute", right: "0px" }}
      >
        Next
      </button>
    );
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <ArrowBackIosIcon
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
          style={{ cursor: "pointer", color: "#FFF", fontSize: "30px" }}
        />
        <ArrowForwardIosIcon
          style={{
            cursor: "pointer",
            color: "#FFF",
            marginLeft: "10px",
            fontSize: "30px",
          }}
          onClick={() => next()}
        />
      </div>
    );
  };
  return (
    <>
      <div className="whitepaper_container">
        <section className="whitepaper">
          <Navigation />
          <div className="container-fluid">
            <Tabs
              defaultTab="vertical-tab-one"
              onChange={(tabId) => {
                console.log(tabId);
              }}
              vertical
              className="vertical-tabs"
            >
              <TabList>
                <Tab tabFor="vertical-tab-one">About Us</Tab>
                <Tab tabFor="vertical-tab-two">Our Collections</Tab>
                <Tab tabFor="vertical-tab-three">Staking + Liquidity Pool</Tab>
                <Tab tabFor="vertical-tab-four">
                  STAKING +LIQUIDITY POOL CON'T
                </Tab>
                <Tab tabFor="vertical-tab-five">$TUSK ERC20 TOKEN</Tab>
                <Tab tabFor="vertical-tab-six">NFT Launchpad</Tab>
                <Tab tabFor="vertical-tab-seven">Play-To-Earn + Metaverse</Tab>
                <Tab tabFor="vertical-tab-eight">Narwhal Dao</Tab>
                <Tab tabFor="vertical-tab-nine">Marketing Growth Plan</Tab>
                <Tab tabFor="vertical-tab-ten">Community Events</Tab>
                <Tab tabFor="vertical-tab-eleven">Charities</Tab>
                <Tab tabFor="vertical-tab-twelve">Other Features</Tab>
              </TabList>
              <TabPanel tabId="vertical-tab-one" style={{ overflowX: "clip" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <h2 className="white_heading">Our Vision</h2>
                      <p className="white_content" style={{ fontSize: "25px" }}>
                        We seek to foster an inclusive environmentthat embraces
                        people for who they are andpushes them to become more
                        than theyenvision. This is accomplished via
                        facilitatinga meaningful discourse both inside andbeyond
                        the NFT space, giving to those whoare truly ready to
                        receive and equippingothers to become leaders themselves
                        in theNFT space and outside of it.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel tabId="vertical-tab-two" style={{ overflowX: "clip" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <h3 className="white_heading">Nautical Narwhals</h3>
                      <ul className="white_points">
                        <li>Collection size: 5757</li>
                        <li>Blockchain: Ethereum</li>
                        <li>Mint price: 0.0457 ETH</li>
                        <li>Staking rewards: 1 $TUSK/da</li>
                      </ul>
                      <h3 className="white_heading mt-5">Mythical Narwhals</h3>
                      <ul className="white_points">
                        <li>Collection Size: 300</li>
                        <li>Blockchain: Ethereum</li>
                        <li>Mint price: Free. Must earn the Narwhal</li>
                        <li>Defender* role in our Discord to be eligible.</li>
                        <li>Staking rewards: 5 $TUSK/day</li>
                        <li>*See the next page for the Narwhal</li>
                        <br />
                        <li>*See the next page for the Narwhal</li>
                        <li>Defender FAQ*</li>
                      </ul>
                    </Grid>
                    {/* <Grid item xs={4} style={{ display: "grid" }}>
                      {imagearray2.map((value, i) => (
                        <img
                          key={i}
                          src={value}
                          width="250px"
                          height="200px"
                          alt="image"
                        />
                      ))}
                    </Grid> */}
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel
                tabId="vertical-tab-three"
                style={{ overflowX: "clip" }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <h3 className="white_heading">
                        What is liquidity staking?
                      </h3>
                      <p className="white_content">
                        Liquidity staking is the process of staking the
                        liquidity you add to the $TUSK Uniswap pool (TUSK/ETH)
                        and earning $TUSK rewards in return.
                      </p>
                      <p className="white_content">
                        By contributing to our Uniswap pool, you will
                        immediately generate LP tokens that will be sent to your
                        account. Staking these LP tokens will net you $TUSK in
                        exchange for your time and effort.
                      </p>
                      <p className="white_content">
                        More information on the amount of money earned will be
                        available after the ERC20 $TUSK token contract has been
                        completed.
                      </p>
                      <p className="white_content">
                        <img src={trans} width="400px" alt="" />
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel tabId="vertical-tab-four" style={{ overflowX: "clip" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <h3 className="white_heading">What is NFT staking?</h3>
                      <p className="white_content">
                        NFTs are essentially tokenized assets that can be staked
                        similar to other cryptocurrency tokens. By staking your
                        token, you establish market scarcity, which increases
                        the value of your NFT, affecting the dynamics of supply
                        and demand. Likewise, stakers will also be compensated
                        with more tokens for temporarily taking their item off
                        the markets.
                      </p>

                      <h3 className="white_heading">Staking Rewards</h3>
                      <ul className="white_points">
                        <li>Nautical Narwhals: 1 $TUSK/day</li>
                        <li>Mythical Narwhals: 5 $TUSK/day</li>
                      </ul>
                      <p className="white_content">
                        Other collections may have staking capabilities.
                        Nonetheless, nothing has been decided as of the present.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel tabId="vertical-tab-five" style={{ overflowX: "clip" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <ul className="white_points">
                        <li>
                          $TUSK will be the native token for Nautical Narwhals.
                        </li>
                        <li>It will be ERC20 and Uniswap tradeable.</li>
                        <li>Our primary trading pair will be TUSK/ETH.</li>
                        <li>
                          Holders can earn tokens by staking, airdrops, playing
                          P2E games, and/orpurchasing tokens via Uniswap pairs.
                        </li>
                      </ul>
                      <h3 className="white_heading mt-4">Uses Cases</h3>
                      <ul className="white_points">
                        <li>Vote and propose ideas in our DAO</li>
                        <li>
                          Burn tokens to get WL spots for exclusive partnerships
                        </li>
                        <li>Burn $TUSK to breed</li>
                        <li>Burn $TUSK to mutate</li>
                        <li>
                          Use $TUSK to purchase land and item in our Metaverse
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel tabId="vertical-tab-six" style={{ overflowX: "clip" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <h3 className="white_heading">Partnerships</h3>
                      <p className="white_content">
                        We aim to partner with a wide variety of
                        projects.Criteria are as follows:
                      </p>
                      <ul className="white_points">
                        <li>
                          Is there long-term value and utility for holders?
                        </li>
                        <li>
                          Does this project bring anything unique to
                          theindustry?
                        </li>
                        <li>Does the art resonate with the community?</li>
                        <li>What ideals does this project embody?</li>
                      </ul>
                      <h3 className="white_heading mt-4">Royalties</h3>
                      <p className="white_content">
                        Anyone who agrees to launch through our launchpadmust
                        agree to give 10% of their initial sales profits to
                        acharity or cause that our DAO vote s on. The
                        remaining90% of the profits will go to the team or
                        artist. Mostimportantly, it is not intended for Nautical
                        Narwhals tobenefit from the success of other ventures.
                      </p>
                      <h3 className="white_heading mt-4">Whitelist</h3>
                      <p className="white_content">
                        Na utical Narwhal and Mythical Narwhal holders will
                        beeligible to be whitelisted on our launchpad part
                        nerships.Normally, we will limit 1 mint per NFT held.
                        Nonetheless,this will depend on the collection sizes and
                        preferencesof our launchpad projects. We will have
                        Narwhal holdersburn $TUSK for smaller collection size
                        projects to get intoa position. This will work on a
                        first-come, first-servedbasis. NFT LAUNCHPAD
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel
                tabId="vertical-tab-seven"
                style={{ overflowX: "clip" }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container>
                    <Grid item xs={8} md={12}>
                      <p className="white_content">
                        The P2E and Metaverse will be our long term project. We
                        are certain that cryptogaming will serve as a catalyst
                        for the widespread adoption of NFT and
                        cryptocurrency.Therefore, we want Nautical Narwhals and
                        our metaverse partner companies to be atthe forefront of
                        this wave of consumer adoption.
                      </p>
                      <h3 className="white_heading mt-4">Mobile game</h3>
                      <p className="white_content">
                        The first phase will be to develop an iOS/Android P2E
                        game. The game's rules willmost likely be
                        straightforward, and it will be developed as a means of
                        earning $TUSKfor holders. It will also be open for
                        public download. Nevertheless, non-holders will notbe
                        able to earn $TUSK. In any case,, all users will have
                        the option to buy $TUSK to usein the game. Additional
                        details will be available in Q1 2022.
                      </p>
                      <h3 className="white_heading mt-4">Metaverse</h3>
                      <p className="white_content">
                        We want to construct an open world metaverse, using the
                        ocean/underwater as ourcore subject. At the moment, we
                        are in discussions with other ocean-themed
                        NFTinitiatives about collaborating on this endeavour.
                        While details are still forthcoming,we see this aquatic
                        environment as a cross between The Sims and Club
                        Penguin.
                      </p>
                      <p className="white_content">
                        Players will be able to purchase houses, household
                        goods, automobiles, and pets.Moreover, holders will be
                        able to establish a family, visit the houses of other
                        pals, andplay games together. Once co ncepts are mostly
                        completed, this Metaverse will getits own whitepaper.
                      </p>
                      <p className="white_content">
                        There will also be a way for holders to monetize their
                        NFTs. We are exploring severaldifferent ways to go about
                        this. Examples include:
                      </p>
                      {/* <ul className="white_points">
                        <li>
                          Renting your NFT for other’s to play with and earn
                          $TUSK
                        </li>
                        <li>
                          Letting other players use your NFTs skin (you earn a
                          commission of their $TUSK)
                        </li>
                      </ul>
                      <h3 className="white_heading mt-5">
                        $TUSK Utility: Marketplace
                      </h3>
                      <p className="white_content">
                        $TUSK will be used to purchase items from the Nautical
                        Narwhals Marketplace. Itemsmay include:
                      </p> */}
                      {/* <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "80%",
                        }}
                      >
                        <img src={screen_6} alt="mobilegame" width="35%" />
                      </div> */}
                    </Grid>
                    <Grid item xs={8} md={12}></Grid>
                    {/* <Grid md={12}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                          <Grid item xs={6}>
                            <ul className="white_points">
                              <li>Homes</li>
                              <li>Vehicles</li>
                              <li>Accessories for your property</li>
                              <li>Items for your home</li>
                              <li>Pets</li>
                              <li>And lot’s more</li>
                            </ul>
                            <p className="white_content mt-3">
                              Overall, having use cases for $TUSKwill increase
                              it’s value.
                            </p>
                          </Grid>
                          <Grid item xs={4}>
                            <div style={{ borderRadius: "10px" }}>
                              <img src={screen_7} width="100%" alt="image5" />
                            </div>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid> */}
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel
                tabId="vertical-tab-eight"
                style={{ overflowX: "clip" }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <h3 className="white_heading mt-4">What is a DAO?</h3>
                      <p className="white_content">
                        DAO stands for Decentralized AutonomousOrganization. In
                        essence, a DAO is an organizationrepresented by rules
                        encoded as a transparentcomputer program, controlled by
                        the organizationmembers and not influenced by a central
                        government.
                      </p>
                      <h3 className="white_heading mt-4">Narwhal DAO</h3>
                      <ul className="white_points">
                        <li>
                          Holders will run narwhal DAO, as each NauticalNarwhal
                          will count as 1 vote.
                        </li>
                        <li>Each Mythical Narwhal will count as 5 votes.</li>
                        <li>
                          Holders will be limited to voting X (to bedetermined)
                          times per wallet, which shoulddiscourage whales from
                          dominating the vote.
                        </li>
                        <li>
                          Any Narwhal holder will be able to propose an ideato
                          the DAO by burning X (amount TBD) $TUSK.
                        </li>
                        <li>
                          Narwhal DAO will primarily be voting on what
                          NFTprojects to invest in (if any) and what
                          charitabledonations to give to (if any).
                        </li>
                        <li>
                          70% of secondary sales royalties will go to
                          NarwhalDAO.
                        </li>
                        <li>
                          Upon sell-out, Nautical Narwhals will establish an80
                          ETH community wallet. This will be the base fundfor
                          our DAO.
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel tabId="vertical-tab-nine" style={{ overflowX: "clip" }}>
                <p className="white_content">
                  We strive to expand Nautical Narwhals as organically as
                  possible. Initially (pre-launch and pre-sellout), we will work
                  with some smaller influencers to help get ourname out. We are
                  privileged to have a few contacts in the industry that
                  areprepared to assist us in standing out and being observed in
                  the midst of all thenoise.
                </p>
                <p className="white_content">
                  Once we've established a foothold in the industry, we'll
                  attempt to formconnections and relationships with other
                  initiatives and influencers. The more brainsthat collaborate
                  on this project, the farther it will go!
                </p>
                <p className="white_content">
                  Furthermore, we aim to position ourselves as a powerful force
                  to be reckoned within the industry. This will happen on
                  Twitter through organic growth. Additionally, weplan to launch
                  a YouTube channel that Hanz Blade will manage. As part of our
                  NFTlaunchpad, we'll be sharing some of the projects that we're
                  working on thischannel, so stay tuned!
                </p>
                <p className="white_content">
                  Outside of networking and gaining influence, we want to be
                  renowned for ourcharitable nature. As long as it is needed, we
                  will help those in need. We’ll givepeople opportunities. We
                  want to establish ourselves as one of the biggest go-giver’s
                  in the space! This will have a huge ripple effect on the NFT
                  market ingeneral, because giving is very contagious!
                  MARKETINGGROWTH PLAN
                </p>
              </TabPanel>
              <TabPanel tabId="vertical-tab-ten" style={{ overflowX: "clip" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <p className="white_content">
                        To strengthen the community around the project, Nautical
                        Narwhals will be hostingvarious live events across the
                        world, which will be complimentary for Narwhalholders.
                        Merchandise and limited-edition NFTs + POAPs will be
                        distributed at theselive events. Locations of events
                        will be determined by the number of holders in
                        eachregion.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel tabId="vertical-tab-eleven">
                <p className="white_content">
                  We focus on giving to charities and organizations that aim to
                  clean the world's oceans and waterways. However, note that
                  this will not be exclusively where donations go. Prior to any
                  contributions being made, holders will vote on the intended
                  use of the funds. Any holder has the right to burn $TUSK and
                  propose giving to a different cause.
                </p>
                <p className="white_content">
                  At 40% mint, Nautical Narwhals pledges $50k to a charity of
                  the community's choice. This charity will be dedicated to
                  cleaning the oceans.
                </p>
                <p className="white_content">
                  10% of all profits from partners of our NFT Launchpad will be
                  given to a charity of the DAO’s choice.
                </p>
              </TabPanel>
              <TabPanel tabId="vertical-tab-twelve">
                <p className="white_content">
                  A few items will be discussed further down the road (Q2 2022
                  and onwards). As ofright now, here are several ideas:
                </p>
                <ol className="white_number_points">
                  <li>
                    Instigate a breeding mechanism. There will be 2 options for
                    this:
                  </li>
                  <li>Hold 2 NN, and get a baby Narwhal</li>
                  <li>Hold 1 NN, burn $TUSK to get a baby Narwhal</li>
                </ol>
                <ol className="white_number_points">
                  <li>
                    Burning mechanism (animated and super rares can be staked)
                  </li>
                  <li>Burn 3 NN and get an animated NN</li>
                  <li>Burn 6 NN and get a super rare NN</li>
                </ol>
                <ol className="white_number_points">
                  <li>Mutate your Nautical Narwhal</li>
                  <li>Mint a potion for your NN to drink</li>
                  <li>
                    Different levels of potions, similar to how BAYC did theirs
                  </li>
                  <li>Mutant Narwhals can also be staked</li>
                </ol>
              </TabPanel>
            </Tabs>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <Carousel
                arrows={false}
                renderButtonGroupOutside={true}
                autoFocus={true}
                customButtonGroup={<ButtonGroup />}
                showDots={false}
                autoPlay={true}
                autoPlaySpeed={2000}
                centerMode={false}
                interval={2000}
                infiniteLoop={true}
                transitionTime={200}
                responsive={responsive}
                emulateTouch={false}
              >
                {imagearray1.map((value, i) => (
                  <img
                    key={i}
                    src={value}
                    style={{ borderRadius: "20px" }}
                    width="230px"
                    height="200px"
                    draggable={false}
                    alt="image"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
