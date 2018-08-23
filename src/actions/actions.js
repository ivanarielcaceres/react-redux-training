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
  itemRef.remove();
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

export const addItem = name => async dispatch => {
  const itemsRef = databaseRef.ref(`noticias`);
  itemsRef.push({ name });
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
      items
    });
  });
};

export const addedItemListener = () => async dispatch => {
  const itemsRef = databaseRef.ref(`noticias`);
  itemsRef.on('child_added', snap => {
    dispatch({
      type: ADD_ITEM,
      key: snap.key,
      name: snap.val().name
    });
  });
};

export const removedItemListener = () => async dispatch => {
  const itemsRef = databaseRef.ref(`noticias`);
  itemsRef.on('child_removed', snap => {
    dispatch({
      type: REMOVE_ITEM,
      key: snap.key
    });
  });
};

export const doSearch = keyword => async dispatch => {
  const itemsRef = databaseRef.ref(`noticias`);
  itemsRef
    .orderByChild('name')
    .startAt(keyword)
    .endAt(keyword + '\uf8ff"')
    .once('value')
    .then(snap => {
      let items = [];
      snap.forEach(item => {
        item = { name: item.val().name, key: item.key };
        items.push(item);
      });
      dispatch({
        type: FETCH_ITEMS,
        items
      });
    });
};
