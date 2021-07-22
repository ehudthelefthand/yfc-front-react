import React from 'react'
import { makeStyles,
         withStyles,
         TableContainer,
         Table,
         TableCell,
         TableHead,
         TableRow,
         TableBody,
         Paper
} from '@material-ui/core'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
     minWidth: 700,
    },
})

const rows = [
    createData('0001', 'ผู้ถวายคนที่ 1', '00000000'),
    createData('0002', 'ผู้ถวายคนที่่ 2', '00000000'),
    createData('0003', 'ผู้ถวายคนที่่ 3', '00000000'),
];

function createData(code_ID, Fullname, Phone){
    return { code_ID, Fullname, Phone};
}

export default function Supporter() {
    const classes = useStyles();
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
               <TableHead>
                   <StyledTableRow>
                        <StyledTableCell> Staff ID </StyledTableCell>
                        <StyledTableCell align="center"> Full Name </StyledTableCell>
                        <StyledTableCell align="center"> Phone Number </StyledTableCell>
                   </StyledTableRow>
               </TableHead>
               <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.code_ID}>
                            <StyledTableCell component="th" scope="row">
                                {row.code_ID}
                            </StyledTableCell>
                            <StyledTableCell align="center"> {row.Fullname} </StyledTableCell>
                            <StyledTableCell align="center"> {row.Phone} </StyledTableCell>
                        </StyledTableRow>
                    ))}
               </TableBody>
            </Table>
        </TableContainer>
    );
}