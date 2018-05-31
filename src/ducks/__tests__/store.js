import { actions } from '../counter';
import store from '../store';

describe('CounterStore', function(){
  it('should have foo state', function(){
    const state = store.getState();
    expect(state.foo).toEqual({hello: 'world'});
  })
  it('should return state', function(){
    const state = store.getState();
    expect(state.counter.count).toEqual(0)
  });

  it('should dispatch action and update the state', function(){
    const action = actions.increaseCount(4);
    store.dispatch(action);
    expect(store.getState().counter.count).toEqual(4);
  });

  it('should call the subscribers when store changes', function(){
    const listener = jest.fn();
    store.subscribe(listener);
    const action = actions.increaseCount();
    store.dispatch(action);
    expect(listener).toHaveBeenCalled();
  });

  it('should call the subscribers when store changes', function(){
    const listener = jest.fn();
    const unsubscribe = store.subscribe(listener);
    const action = actions.increaseCount();
    unsubscribe();
    store.dispatch(action);
    expect(listener).not.toHaveBeenCalled();
  });
});