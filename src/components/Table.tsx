import DataTable from 'react-data-table-component';

interface Row {
  id: number;
  fullName: string;
  height: string;
  weight: string;
  seconds: number;
}

interface Column {
  name: string;
  selector: (row: Row) => string;
  sortable?: boolean;
}

const columns: Column[] = [
  {
    name: '#',
    selector: (row: Row) => row.id.toString(),
  },
  {
    name: 'CAR',
    selector: (row: Row) => row.fullName,
  },
  {
    name: 'NAME',
    selector: row => row.height,
  },
  {
    name: 'WINS',
    selector: row => row.weight,
    sortable: true,
  },
  {
    name: 'BEST TIME (SECONDS)',
    selector: row => row.seconds.toString(),
    sortable: true,
  },
];
const rows: Row[] = [
  {
    id: 1,
    fullName: 'John Doe',
    height: '1.75m',
    weight: '89kg',
    seconds: 2.1,
  },
  {
    id: 2,
    fullName: 'Jane Doe',
    height: '1.64m',
    weight: '55kg',
    seconds: 2.2,
  },
  {
    id: 3,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.3,
  },
  {
    id: 4,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 5,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 6,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 7,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 8,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 9,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 10,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
  {
    id: 11,
    fullName: 'Sheera Maine',
    height: '1.69m',
    weight: '74kg',
    seconds: 2.4,
  },
];

const customsStyles = {
  headRow: {
    style: {
      backgroundColor: '#242424',
      color: '#fff',
    },
  },
  title: {
    style: {
      fontWeight: 'bold',
      backgroundColor: '#242424',
      color: 'blue',
    },
  },
  rows: {
    style: {
      backgroundColor: '#242424',
      color: '#fff',
    },
  },
  cells: {
    style: {
      fontSize: '18px',
    },
  },
};

export default function Table() {
  return (
    <>
      <div>
        <DataTable
          columns={columns}
          data={rows}
          title="WINNERS"
          fixedHeader
          pagination
          paginationPerPage={7}
          paginationRowsPerPageOptions={[7]}
          customStyles={customsStyles}
        />
      </div>
    </>
  );
}
