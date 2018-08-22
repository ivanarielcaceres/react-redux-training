import { databaseRef } from 'config/firebase';
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
export const removeItem = key => async dispatch => {
  const itemRef = databaseRef.ref(`noticias/${key}`);
  itemRef.remove().then(() => {
    dispatch({
      type: REMOVE_ITEM,
      key
    });
  });
};

export const removeAllItems = items => async dispatch => {
  databaseRef
    .ref(`noticias`)
    .remove()
    .then(() => {
      dispatch({
        type: RESET
      });
    });
};

export const doSearch = keyword => ({
  type: SEARCH,
  keyword
});

export const addItem = name => async dispatch => {
  const itemsRef = databaseRef.ref(`noticias`);
  itemsRef.push({ name }).then(ref => {
    dispatch({
      type: ADD_ITEM,
      key: ref.key,
      name
    });
  });
};

export const fetchItems = () => async dispatch => {
  const itemsRef = databaseRef.ref(`noticias`);
  itemsRef.once('value', snap => {
    let items = [];
    snap.forEach(item => {
      item = { name: item.val().name, key: item.key };
      items.push(item);
    });
    dispatch({
      type: FETCH_ITEMS,
      items: items
    });
  });
};
