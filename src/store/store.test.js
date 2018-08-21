import { ADD_ITEM } from 'actions/actions'
import store from './store';
import initialState from './initialState';

describe('', () => {
  const addItem = (item) => ({
    type: ADD_ITEM,
    item
  });
  it('verify if the store works', () => {
    expect(store.getState()).toEqual(initialState);
  
    const unsubscribe = store.subscribe(() => {
      expect(store.getState().items).toBeDefined();
      expect(store.getState().items.length).toEqual(1);
    });
  
    store.dispatch(addItem('Item 1'));
    unsubscribe();
  });
});
