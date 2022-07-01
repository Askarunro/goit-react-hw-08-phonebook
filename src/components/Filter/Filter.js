import l from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts';

function Filter() {
  const dispatch = useDispatch();

  const changeFilter = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label className={l.label}>
      Find contacts by name
      <input type="text" onChange={changeFilter} />
    </label>
  );
}

export default Filter;
