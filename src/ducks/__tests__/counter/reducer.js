import { actions as actions, reducer } from '../../counter'


describe('Counter', function(){
  it('should have default state', function(){
    const result = reducer();
    expect(result.count).toEqual(0);
  });

  it('should increaseCount', function(){
    const action = actions.increaseCount(4);
    const result = reducer(undefined, action);
    expect(result.count).toEqual(4)
  });
});