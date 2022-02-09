import { React, useState, useEffect } from "react";
import { Section } from "react-scroll-section";
import useWeb3Integration from "../../hooks/useWeb3Integration.js";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Button from "@mui/material/Button";

export default function Mint() {
  const [counter, setCounter] = useState(1);
  const [blocknum, setblocknum] = useState("");
  const [transcount, settranscount] = useState("");
  const [eminer, setminner] = useState("");
  const [totalDifficultye, settotalDifficultyy] = useState("");
  const [tansactionarray, settansactionarray] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - tansactionarray.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const mint = () => alert(counter);
  const [
    account,
    provider,
    web3provider,
    onConnect,
    resetApp,
    toggle,
    blocknumber,
    transactioncount,
    miner,
    totalDifficulty,
    buttontext,
  ] = useWeb3Integration(counter);
  useEffect(() => {
    setblocknum(blocknumber);
    settranscount(transactioncount);
    setminner(miner);
    settotalDifficultyy(totalDifficulty);
    setInterval(() => {
      var dataobj = JSON.parse(localStorage.getItem("alldata"));
      if (dataobj != null && dataobj != undefined && dataobj != []) {
        console.log(dataobj);
        settansactionarray(dataobj);
      }
    }, 6000);
  }, [blocknumber, transactioncount, miner, totalDifficulty]);
  return (
    <Section className="mint" id="mint">
      <div className="blocknumberfield">
        <span style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
          Block Number:
        </span>
        <span
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            fontFamily: "sans-serif",
          }}
        >
          {blocknum}
        </span>
      </div>
      <div className="blocknumberfield">
        <span style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
          Number of transactions:
        </span>
        <span
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            fontFamily: "sans-serif",
          }}
        >
          {transcount}
        </span>
      </div>
      <div className="blocknumberfield">
        <span style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
          Miner:
        </span>
        <span
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            fontFamily: "sans-serif",
          }}
        >
          {eminer}
        </span>
      </div>
      <div className="blocknumberfield">
        <span style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
          Total difficulty:
        </span>
        <span
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            fontFamily: "sans-serif",
          }}
        >
          {totalDifficultye}
        </span>
      </div>
      <div className="button_field">
        <Button variant="contained" onClick={toggle}>
          {buttontext}
        </Button>
      </div>
      <div className="tablefield">
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <TableHead>
              <TableRow>
                <TableCell>Hash</TableCell>
                <TableCell align="center">Miner</TableCell>
                <TableCell align="center">GasUsed</TableCell>
                <TableCell align="center">Difficulty</TableCell>
                <TableCell align="center">Total Difficulty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? tansactionarray.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : tansactionarray
              ).map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.hash}
                  </TableCell>
                  <TableCell align="center">{row.miner}</TableCell>
                  <TableCell align="center">{row.gasUsed}</TableCell>
                  <TableCell align="center">{row.difficulty}</TableCell>
                  <TableCell align="center">{row.totalDifficulty}</TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={tansactionarray.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
      <div className="svgdive" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Section>
  );
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
