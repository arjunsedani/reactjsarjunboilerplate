import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Grid,
  InputBase,
  IconButton,
  Divider
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearSharp from "@material-ui/icons/ClearSharp";
import Spacing from "components/Spacing";
import { HotelData } from "mock_data/hotel";


function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  
  function getSorting(order, orderBy) {
    return order === "desc"
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  }
  
  const headCells = [
    {
      id: "name",
      numeric: true,
      disablePadding: false,
      label: "name"
    },
    {
      id: "price",
      numeric: true,
      disablePadding: false,
      label: "price"
    },
    {
      id: "available",
      numeric: true,
      disablePadding: false,
      label: "available"
    },
    {
      id: "rateStatus",
      numeric: true,
      disablePadding: false,
      label: "rateStatus"
    },
    { id: "numReviews", numeric: true, disablePadding: false, label: "numReviews" },
  ];
  
  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align={"left"}
              padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
  };
  
  const useStyles = makeStyles(theme => ({
    paper: {
      padding: "0 25px",
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    nostyle: {
      padding: "0 10px"
    },
    icon: {
      color: "#333333",
      backgroundColor: "#FDFEFF",
      margin: "10px auto 0",
      width: "150px",
      height: "150px",
      border: "1px solid #333333",
      lineHeight: "184px",
      "& svg": {
        width: "55px",
        height: "55px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "55px",
        fontSize: "55px"
      }
    },
  
    table: {
      minWidth: 750
    },
    tableWrapper: {
      overflowX: "auto"
    },
    searchbarroot: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 300
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  }));


const Module1 = (props) => {
    const { onSearch, className, ...rest } = props;
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [tableData, setTableData] = React.useState([]);
    const [originalData, setOriginalTableData] = React.useState([]);
    const [tableDataPage, settableDataPage] = React.useState(0);
    const [searchInput, setSearchInput] = React.useState("");
  
    const updateSearchInputValue = evt => {
      return setSearchInput(evt.target.value);
    };
  
    const [tableDatarowsPerPage, settableDatarowsPerPage] = React.useState(10);
  
    const tableDataPageChange = (event, page) => {
      settableDataPage(page);
    };
  
    const handletableDataRowsPerPageChange = event => {
      settableDatarowsPerPage(event.target.value);
    };
    
  
    const onSearchClick = () => {
          const filteredpatientList = originalData.filter(
            x =>
              x.name.includes(searchInput) ||
              x.available.includes(searchInput) ||
              x.rateStatus.includes(searchInput)
          );
          return setTableData(filteredpatientList);
      };
      const onclearSearch = () => {
          setTableData(originalData);
          setSearchInput("");
      };
      
  
    useEffect(async => {
        setOriginalTableData(HotelData);
        setTableData(HotelData);
    }, []);
  
    const handleRequestSort = (event, property) => {
      const isDesc = orderBy === property && order === "desc";
      setOrder(isDesc ? "asc" : "desc");
      setOrderBy(property);
    };

  return (
    <>
     {tableData && (
            <Grid alignItems="center" container justify="space-between">
              <Grid item>
                <Paper component="form" className={classes.searchbarroot}>
                  <InputBase
                    className={classes.input}
                    placeholder="Search List"
                    value={searchInput}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        onSearchClick(); // here was the mistake
                      }
                    }}
                    onChange={e => updateSearchInputValue(e)}
                  />
                  <IconButton
                    className={classes.iconButton}
                    onClick={onSearchClick}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <Divider className={classes.divider} orientation="vertical" />
                  <IconButton
                    className={classes.iconButton}
                    aria-label="clear"
                    onClick={onclearSearch}
                  >
                    <ClearSharp />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          )}
          <Spacing height={"30px"} />
          {tableData && (
            <Paper className={classes.paper}>
              <div className={classes.tableWrapper}>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size="medium"
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={
                      tableData.length
                    }
                  />
                  <TableBody>
                    {tableData && tableData.length > 0 && 
                     stableSort(tableData, getSorting(order, orderBy))
                      .slice(
                        tableDataPage * tableDatarowsPerPage,
                        tableDataPage * tableDatarowsPerPage +
                        tableDatarowsPerPage
                      )
                     
                        .map((row, index) => {
                          return (
                            <>
                              <TableRow
                                hover
                                tabIndex={-1}
                                key={row.name}
                              >
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">
                                  {row.price}
                                </TableCell>
                                <TableCell align="left">
                                  {row.available}
                                </TableCell>
                                <TableCell align="left">
                                  {row.rateStatus}
                                </TableCell>
                                <TableCell align="left">{row.numReviews}</TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                  </TableBody>
                </Table>
              </div>
              <TablePagination
                component="div"
                count={tableData.length}
                onChangePage={tableDataPageChange}
                onChangeRowsPerPage={handletableDataRowsPerPageChange}
                page={tableDataPage}
                rowsPerPage={tableDatarowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </Paper>
          )}
    </>
  );
};

export default Module1;
