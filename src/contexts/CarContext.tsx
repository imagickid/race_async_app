import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

interface CarState {
  currentPageCars: number;
  currentPageWinners: number;
  raceAll: boolean;
  isOpenModal: boolean;
  sort: string;
  order: string;
}

type Action =
  | { type: "setCarsPage"; payload?: number }
  | { type: "setWinnersPage"; payload?: number }
  | { type: "setRaceAll"; payload?: boolean }
  | { type: "setIsOpenModal"; payload?: boolean }
  | { type: "setSort"; payload?: string }
  | { type: "setOrder"; payload?: string };

const initialState = {
  currentPageCars: 1,
  currentPageWinners: 1,
  raceAll: false,
  isOpenModal: false,
  sort: "id",
  order: "ASC",
};

interface CarContextType {
  state: CarState;
  dispatch: React.Dispatch<Action>;
  updatePosition: (id: number, newPosition: number) => void;
  getPosition: (id: number) => number;
  winner: WinnerProps | null;
  winnerIs: (data: WinnerProps | null) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

function reducer(state: CarState, action: Action): CarState {
  switch (action.type) {
    case "setCarsPage":
      return {
        ...state,
        currentPageCars: action.payload ?? state.currentPageCars,
      };
    case "setWinnersPage":
      return {
        ...state,
        currentPageWinners: action.payload ?? state.currentPageWinners,
      };
    case "setRaceAll":
      return {
        ...state,
        raceAll: action.payload ?? state.raceAll,
      };
    case "setIsOpenModal":
      return {
        ...state,
        isOpenModal: action.payload ?? state.isOpenModal,
      };
    case "setSort":
      return {
        ...state,
        sort: action.payload ?? state.sort,
      };
    case "setOrder":
      return {
        ...state,
        order: action.payload ?? state.order,
      };
    default:
      return state;
  }
}

type PositionData = {
  [id: number]: number;
};

type WinnerProps = {
  id: number;
  time: number;
  name: string;
};

function CarProvider({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<PositionData>({});
  const [winner, setWinner] = useState<WinnerProps | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const updatePosition = useCallback((id: number, newPosition: number) => {
    setPosition((prev) => ({
      ...prev,
      [id]: newPosition,
    }));
  }, []);

  const getPosition = useCallback(
    (id: number) => {
      return position[id];
    },
    [position]
  );

  const winnerIs = useCallback(
    (winnerData: WinnerProps | null) => {
      if (!winner) setWinner(winnerData);
      if (winnerData === null) setWinner(null);
    },
    [setWinner, winner]
  );

  const valueOptions = useMemo(
    () => ({ state, dispatch, updatePosition, getPosition, winnerIs, winner }),
    [state, dispatch, updatePosition, getPosition, winnerIs, winner]
  );

  return (
    <CarContext.Provider value={valueOptions}>{children}</CarContext.Provider>
  );
}

function useCarContext(): CarContextType {
  const context = useContext(CarContext);
  if (context === undefined)
    throw new Error("CarContext was used outside the CarProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CarProvider, useCarContext };
