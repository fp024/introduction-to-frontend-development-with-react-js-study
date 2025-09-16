import type { Item } from '../App';

type ItemAction =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: { id: number } };

export default function itemReducer(state: Item[], action: ItemAction): Item[] {
  switch (action.type) {
    case 'ADD_ITEM':
      // 데이터가 3개이상 넘어가면 추가하지 않음
      if (state.length >= 3) {
        return state;
      }
      // 이미 있으면 추가하지 않음.
      if (state.find((i) => i.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
  }
}
