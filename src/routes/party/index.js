// import { h, Component } from "preact";
// import { withStyles } from "material-ui/styles";
// import Table, {
//   TableBody,
//   TableCell,
//   TableFooter,
//   TablePagination,
//   TableRow
// } from "material-ui/Table";
// import Paper from "material-ui/Paper";
// import IconButton from "material-ui/IconButton";
// import FirstPageIcon from "material-ui-icons/FirstPage";
// import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
// import LastPageIcon from "material-ui-icons/LastPage";

// const actionsStyles = theme => ({
//   root: {
//     flexShrink: 0,
//     color: theme.palette.text.secondary,
//     marginLeft: theme.spacing.unit * 2.5
//   }
// });

// class TablePaginationActions extends Component {
//   handleFirstPageButtonClick = event => {
//     this.props.onChangePage(event, 0);
//   };

//   handleBackButtonClick = event => {
//     this.props.onChangePage(event, this.props.page - 1);
//   };

//   handleNextButtonClick = event => {
//     this.props.onChangePage(event, this.props.page + 1);
//   };

//   handleLastPageButtonClick = event => {
//     this.props.onChangePage(
//       event,
//       Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
//     );
//   };

//   render() {
//     const { classes, count, page, rowsPerPage, theme } = this.props;

//     return (
//       <div className={classes.root}>
//         <IconButton
//           onClick={this.handleFirstPageButtonClick}
//           disabled={page === 0}
//           aria-label="First Page"
//         >
//           {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//         </IconButton>
//         <IconButton
//           onClick={this.handleBackButtonClick}
//           disabled={page === 0}
//           aria-label="Previous Page"
//         >
//           {theme.direction === "rtl" ? (
//             <KeyboardArrowRight />
//           ) : (
//             <KeyboardArrowLeft />
//           )}
//         </IconButton>
//         <IconButton
//           onClick={this.handleNextButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="Next Page"
//         >
//           {theme.direction === "rtl" ? (
//             <KeyboardArrowLeft />
//           ) : (
//             <KeyboardArrowRight />
//           )}
//         </IconButton>
//         <IconButton
//           onClick={this.handleLastPageButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="Last Page"
//         >
//           {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//         </IconButton>
//       </div>
//     );
//   }
// }

// const TablePaginationActionsWrapped = withStyles(actionsStyles, {
//   withTheme: true
// })(TablePaginationActions);

// let counter = 0;
// function createData(name, calories, fat) {
//   counter += 1;
//   return { id: counter, name, calories, fat };
// }

// const styles = theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3
//   },
//   table: {
//     minWidth: 500
//   },
//   tableWrapper: {
//     overflowX: "auto"
//   }
// });

// class CustomPaginationActionsTable extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       data: [
//         createData("Cupcake", 305, 3.7),
//         createData("Donut", 452, 25.0),
//         createData("Eclair", 262, 16.0),
//         createData("Frozen yoghurt", 159, 6.0),
//         createData("Gingerbread", 356, 16.0),
//         createData("Honeycomb", 408, 3.2),
//         createData("Ice cream sandwich", 237, 9.0),
//         createData("Jelly Bean", 375, 0.0),
//         createData("KitKat", 518, 26.0),
//         createData("Lollipop", 392, 0.2),
//         createData("Marshmallow", 318, 0),
//         createData("Nougat", 360, 19.0),
//         createData("Oreo", 437, 18.0)
//       ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
//       page: 0,
//       rowsPerPage: 5
//     };
//   }

//   handleChangePage = (event, page) => {
//     this.setState({ page });
//   };

//   handleChangeRowsPerPage = event => {
//     this.setState({ rowsPerPage: event.target.value });
//   };

//   render() {
//     const { classes } = this.props;
//     const { data, rowsPerPage, page } = this.state;
//     const emptyRows =
//       rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

//     return (
//       <Paper className={classes.root}>
//         <div className={classes.tableWrapper}>
//           <Table className={classes.table}>
//             <TableBody>
//               {data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map(n => {
//                   return (
//                     <TableRow key={n.id}>
//                       <TableCell>{n.name}</TableCell>
//                       <TableCell numeric>{n.calories}</TableCell>
//                       <TableCell numeric>{n.fat}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 49 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   colSpan={3}
//                   count={data.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onChangePage={this.handleChangePage}
//                   onChangeRowsPerPage={this.handleChangeRowsPerPage}
//                   Actions={TablePaginationActionsWrapped}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </div>
//       </Paper>
//     );
//   }
// }

// export default withStyles(styles)(CustomPaginationActionsTable);
import { h, Component } from "preact";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const data = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];
import { getParties } from "../../api/parties";
class SimpleTable extends Component {
  state = {
    parties: undefined
  };

  componentDidMount() {
    getParties().then(parties => this.setState({ parties }));
  }

  render() {
    const { classes } = this.props;
    const { parties } = this.state;

    return (
      <div>
        {parties ? (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Party ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Party Date</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell numeric>Orders</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {parties.map(p => {
                  return (
                    <TableRow key={p.PartyID}>
                      <TableCell>{p.DisplayID}</TableCell>
                      <TableCell>{p.Name}</TableCell>
                      <TableCell>{p.PartyDateTime}</TableCell>
                      <TableCell>Address TODO</TableCell>
                      <TableCell numeric>{p.OrderCount}</TableCell>
                      <TableCell>{p.Status}</TableCell>
                      <TableCell>{p.PartyType}</TableCell>
                      <TableCell />
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTable);
