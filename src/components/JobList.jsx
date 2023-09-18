import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { selectFilters } from 'store/filters/filters-selectors';

import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state.positions, currentFilters));

  const handleAddFilter = filter => {
    dispatch(addFilter(filter));
  }


  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
        key={item.id} 
            {...item} 
        handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};