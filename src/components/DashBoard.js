import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { fetchList } from "../actions";
import { Button } from "@material-ui/core";


class DashBoard extends Component {

    componentDidMount(){
        this.props.fetchList();
    }

    handleClick =()=>{
      this.props.history.push("/");
    }
    renderList(){
        return( 
            this.props.employeList && this.props.employeList.user.map((item)=>{
            return(
                    <TableRow key={item.id}>
                       <TableCell component="th" scope="row">
                        {item.name}
                       </TableCell>
                       <TableCell align="center">{item.age}</TableCell>
                       <TableCell align="center">{item.gender}</TableCell>
                       <TableCell align="center">{item.email}</TableCell>
                       <TableCell align="center">{item.phoneNo}</TableCell>
                    </TableRow>
                )
        })
        )
    }
    render() { 
        return (
          <div>
            <div className="nav"> <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={this.handleClick}
                >
                  LogOut
                </Button></div>
         <TableContainer className = "table-container" component ={ Paper}>
             <Table  aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell className="bold">Name</TableCell>
            <TableCell className="bold" align="center">Age</TableCell>
            <TableCell className="bold"  align="center">Gender</TableCell>
            <TableCell className="bold" align="center">Email</TableCell>
            <TableCell className="bold" align="center">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderList()}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
    }
}
const mapStateToProps = (state) => {
    return { employeList: state.employeList.userLists};
  };
export default connect(mapStateToProps,{fetchList})(DashBoard);