const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    action.payload.then(
      (res) => {
        action.payload = res;
        store.dispatch(action);
      },
      (error) => {
        action.error = true;
        action.payload = error;
        store.dispatch(action);
      }
    );

    return;
  } else if (isObject(action.playload)) {
    store.dispatch(action.payload);
    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

function isObject(v) {
  return typeof v === "object" && v !== null;
}

export { promiseMiddleware };
