import './tableList.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {tableData} from '../../utils/tableData'



function TableList() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell table_head">ID</TableCell>
            <TableCell className="tableCell table_head">Username</TableCell>
            <TableCell className="tableCell table_head">Product</TableCell>
            <TableCell className="tableCell table_head">Price</TableCell>
            <TableCell className="tableCell table_head">Method</TableCell>
            <TableCell className="tableCell table_head">Status</TableCell>
            <TableCell className="tableCell table_head">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className="tableCell">{row.username}</TableCell>
              <TableCell className="tableCell">
                <div className="cell_wrapper">
                  <img src={row.image} alt="product image" className='img' />
                {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList