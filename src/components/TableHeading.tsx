import { useCarContext } from '../contexts/CarContext';

interface TableHeadProps {
  head: { key: number; name: string };
}

function TableHeading({ head }: TableHeadProps) {
  const { state, dispatch } = useCarContext();

  function handleSort(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    const sort = target.getAttribute('data-sort');
    const order = state.order === 'ASC' ? 'DESC' : 'ASC';

    if (sort === 'car' || sort === 'name') return;
    dispatch({ type: 'setSort', payload: sort || 'id' });
    dispatch({ type: 'setOrder', payload: order });
  }
  return (
    <>
      <td
        className="p-2 text-center"
        onClick={handleSort}
        data-sort={head.name.toLowerCase()}
      >
        {head.name}
      </td>
    </>
  );
}

export default TableHeading;
