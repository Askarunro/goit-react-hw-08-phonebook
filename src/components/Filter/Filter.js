import l from "./Filter.module.css";
import PropTypes from 'prop-types';

function Filter({onChange}) {

  return (
    <label className={l.label}>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </label>
  );
}

export default Filter;

Filter.prototype={
  onChange: PropTypes.func
}