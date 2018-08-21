import {
  ADD_ITEM,
  REMOVE_ITEM,
  RESET,
  SEARCH,
  FETCH_ITEMS
} from '../actions/actions';
import initialState from '../store/initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS: {
      let items = action.items;
      return {
        ...state,
        items
      };
    }
    case ADD_ITEM: {
      const items = [...state.items];

      const newItem = {
        id: items.length,
        name: action.name
      };
      items.push(newItem);

      return {
        ...state,
        items
      };
    }
    case REMOVE_ITEM: {
      let items = [...state.items];
      items = items.filter(function(item) {
        return item.id !== action.id;
      });

      return {
        ...state,
        items
      };
    }

    case RESET: {
      let items = [];

      return {
        ...state,
        items
      };
    }

    case SEARCH: {
      let items = [...state.items];     
      items = items.filter(item => {
        return item.name.match(action.keyword);
      });

      return {
        ...state,
        items
      };
    }

    default:
      return state;
  }
}
