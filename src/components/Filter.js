import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/action';
export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>filter</h3>
      <input type="text" />
    </div>
  );
}
