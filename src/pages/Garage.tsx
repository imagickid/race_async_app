import Car from '../components/Car';
import ControlPanel from '../components/ControlPanel';

function Garage() {
  return (
    <div className="flex flex-col gap-3 m-2 px-10">
      <ControlPanel />
      <Car />
    </div>
  );
}

export default Garage;
