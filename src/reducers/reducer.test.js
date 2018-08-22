import reducer from './reducer';
import { ADD_ITEM, REMOVE_ITEM, RESET, SEARCH } from 'actions/actions';

describe('Reducers', () => {
  let mockData = [{ key: 1, name: 'Item 1' }, { key: 2, name: 'Item 2' }];
  let doSearch;
  let initialState;
  let stateA;
  let stateB;
  let stateC;
  let stateD;
  let stateE;
  let stateF;
  let stateG;
  let stateH;
  let stateI;
  let stateJ;
  beforeEach(() => {
    const addItem = (key, name) => ({
      type: ADD_ITEM,
      key,
      name
    });
    const removeItem = key => ({
      type: REMOVE_ITEM,
      key
    });
    const removeAllItems = () => ({
      type: RESET
    });
    doSearch = keyword => ({
      type: SEARCH,
      keyword
    });
    initialState = reducer(undefined, {});
    stateA = reducer(initialState, addItem('1', 'Item 1'));
    stateB = reducer(stateA, addItem('2', 'Item 2'));
    stateC = reducer(stateB, addItem('3', 'Item 3'));
    stateD = reducer(stateC, removeItem(1));
    stateE = reducer(stateD, removeItem(2));
    stateF = reducer(stateE, removeItem(3));
    stateG = reducer(stateC, removeAllItems());
  });
  it('initial state', () => {
    expect(initialState).not.toBeNull();
    expect(initialState).toBeDefined();
    expect(initialState.items).toBeDefined();
    expect(initialState.items.length).toBe(0);
  });

  it('after 3 additions', () => {
    expect(stateC.items.length).toBe(3);
  });

  it('after 1 deletion', () => {
    expect(stateD.items.length).toBe(2);
  });

  it('after 3 deletion', () => {
    expect(stateF.items.length).toBe(0);
  });

  it('after delete all', () => {
    expect(stateG.items.length).toBe(0);
  });

  it('Return 1 result after search', () => {
    const state = reducer(stateA, doSearch('Item 1'));
    expect(state.items.length).toBe(1);
  });

  it('Return 3 results after search', () => {
    const state = reducer(stateC, doSearch('Item'));
    expect(state.items.length).toBe(3);
  });

  it('Return empty results after search', () => {
    const state = reducer(stateC, doSearch('Item 4'));
    expect(state.items.length).toBe(0);
  });
});
