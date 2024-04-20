import { ReactNode, createContext, useContext, useReducer } from 'react';
import { WORST_TIME } from '../utils/constants';

interface CarState {
  bestTime: CarData;
  currentPageCars: number;
  currentPageWinners: number;
  raceAll: boolean;
  globalPosition: number;
  sort: string;
  order: string;
}

interface CarData {
  id: number;
  time: number;
}

type Action =
  | { type: 'setBestTimeCar'; payload?: CarData }
  | { type: 'setCarsPage'; payload?: number }
  | { type: 'setWinnersPage'; payload?: number }
  | { type: 'setRaceAll'; payload?: boolean }
  | { type: 'setGlobalPosition'; payload?: number }
  | { type: 'setSort'; payload?: string }
  | { type: 'setOrder'; payload?: string };

const initialState = {
  carsWithTime: [{ id: 0, time: WORST_TIME }],
  bestTime: { id: 0, time: WORST_TIME },
  currentPageCars: 1,
  currentPageWinners: 1,
  raceAll: false,
  globalPosition: 0,
  sort: 'id',
  order: 'ASC',
};

interface CarContextType {
  state: CarState;
  dispatch: React.Dispatch<Action>;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

function reducer(state: CarState, action: Action): CarState {
  switch (action.type) {
    case 'setCarsPage':
      return {
        ...state,
        currentPageCars: action.payload ?? state.currentPageCars,
      };
    case 'setWinnersPage':
      return {
        ...state,
        currentPageWinners: action.payload ?? state.currentPageWinners,
      };
    case 'setRaceAll':
      return {
        ...state,
        raceAll: action.payload ?? state.raceAll,
      };
    case 'setGlobalPosition':
      return {
        ...state,
        globalPosition: action.payload ?? state.globalPosition,
      };
    case 'setSort':
      return {
        ...state,
        sort: action.payload ?? state.sort,
      };
    case 'setOrder':
      return {
        ...state,
        order: action.payload ?? state.order,
      };
    default:
      return state;
  }
}

function CarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
}

function useCarContext(): CarContextType {
  const context = useContext(CarContext);
  if (context === undefined)
    throw new Error('CarContext was used outside the CarProvider');
  return context;
}

export { CarProvider, useCarContext };
