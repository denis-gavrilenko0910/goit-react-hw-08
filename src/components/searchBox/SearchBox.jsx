// src/components/SearchBox/SearchBox.jsx
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    return (
        <div className={styles.searchBox}>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                />
            </label>
        </div>
    );
};

export default SearchBox;
