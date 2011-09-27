function(newDoc, oldDoc, userCtx) {

  function forbidden(message) {    
    throw({forbidden : message});
  };
  // not logged in
  if (!userCtx.name) {
    forbidden ("");
  }
  return true;
};
