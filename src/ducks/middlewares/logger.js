export default function(store) {
  return function(next) {
    return function(action) {
      console.log('Action: ', action);
      next(action);
      console.log('State: ', store.getState());
    }
  }
}