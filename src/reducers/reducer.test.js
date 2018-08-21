import {
  addItem,
  removeItem,
  removeAllItems,
  doSearch
} from '../actions/actions';
import reducer from './reducer';

describe('Reducers', () => {
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
    initialState = reducer(undefined, {});
    stateA = reducer(initialState, addItem('Item 1'));
    stateB = reducer(stateA, addItem('Item 2'));
    stateC = reducer(stateB, addItem('Item 3'));
    stateD = reducer(stateC, removeItem(0));
    stateE = reducer(stateD, removeItem(1));
    stateF = reducer(stateE, removeItem(2));
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
