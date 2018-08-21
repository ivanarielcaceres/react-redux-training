import { itemsRef } from 'config/firebase';
/*
 * Action types
 */
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RESET = 'RESET';
export const SEARCH = 'SEARCH';

export const FETCH_ITEMS = 'FETCH_ITEMS';

/*
 * Action creators
 */
// export const addItem = name => ({
//   type: ADD_ITEM,
//   name
// });

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
});

export const removeAllItems = () => ({
  type: RESET
});

export const doSearch = keyword => ({
  type: SEARCH,
  keyword
});

export const addItem = name => async dispatch => {
  itemsRef.push({ name });
  dispatch({
    type: ADD_ITEM,
    name
  });
};

export const fetchItems = () => async dispatch => {
  itemsRef.on('value', snap => {
    let items = [];
    snap.forEach(item => {
      item = { name: item.val().name, id: item.key };
      items.push(item);
    });
    dispatch({
      type: FETCH_ITEMS,
      items: items
    });
  });
};
