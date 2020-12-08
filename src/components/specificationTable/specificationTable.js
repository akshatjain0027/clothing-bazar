import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from '@material-ui/core';
import React from 'react';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    body: {
        fontSize: "12px"
    }
}))(TableCell)

const SpecificationTable = ({specs}) => {
    return (
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Typography variant="h5" style={{fontWeight: "bold"}}>
                                    SPECIFICATIONS
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="h5" style={{fontWeight: "bold"}}>
                                    VALUE
                                </Typography>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            specs.map(s=>{
                                return (
                                    <TableRow>
                                        <StyledTableCell>{s.key}</StyledTableCell>
                                        <StyledTableCell>{s.value}</StyledTableCell>
                                    </TableRow>
                                )
                            }) 
                        } 
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default SpecificationTable;