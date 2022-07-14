import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice'
import TextField from '@mui/material/TextField';

const ContactFilter = () =>{
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return(
  <label>
 Шукати по імені 
  <TextField
              margin="normal"
              required
              fullWidth
    type="text"
    value={value}
    onChange={(e) => {
    dispatch(changeFilter(e.target.value));
    }}
 />
</label>) 
}

export default ContactFilter;

//========================== propTypes ===================
 ContactFilter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func
 };
