import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIcon from '@mui/icons-material/Phone';



const ContactListItem = ({ name, id, number }) => {
    const dispatch = useDispatch();
    const onDelete = id => dispatch(contactsOperations.deleteContacts(id)); 
    const [secondary, setSecondary] = React.useState(false);

  
    return (
      <ListItem  key={id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
          <DeleteIcon  variant="contained" color="success"  type='submit' />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <PhoneIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary= {name}
       
        secondary={secondary ? 'Secondary text' : null}
      />
       <ListItemText
        primary= {number}
       
        secondary={secondary ? 'Secondary text' : null}
      />
    </ListItem>
    )
      
      
    
  };

export default ContactListItem;

 ContactListItem.propTypes = {
   name: PropTypes.string,
   number: PropTypes.string,
  
 };