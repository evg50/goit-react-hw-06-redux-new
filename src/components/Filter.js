import { useDispatch } from 'react-redux';
// import { setFilter } from '../redux/action';
import { setFilter } from '../redux/filterContactSlice';
// import { useState } from 'react';

export default function Filter() {
  const dispatch = useDispatch();
  // const [filterValue, setFilterValue] = useState('');
  // console.log('filterValue=', filterValue);
  // dispatch(setFilter(filterValue));
  const handleChange = e => {
    // setFilterValue(e.target.value);
    // setFilter(filterValue);
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <h3>filter</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
