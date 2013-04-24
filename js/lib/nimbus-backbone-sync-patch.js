// Generated by CoffeeScript 1.4.0
(function() {

  Nimbus.backbone_sync = function(method, model, options) {
    var a, resp, s, store;
    resp = void 0;
    store = model.nimbus || model.collection.nimbus;
    window.model = model;
    switch (method) {
      case "read":
        if (model.id) {
          resp = store.find(model);
        } else {
          store.sync_all(function() {
            resp = store.all();
            return options.success(resp);
          });
          return;
        }
        break;
      case "create":
        console.log("create called");
        a = store.init(model.attributes);
        a.id = model.id;
        a.save();
        resp = a;
        break;
      case "update":
        s = store.find(model.id);
        s.updateAttributes(model.attributes);
        s.save();
        resp = s;
        break;
      case "delete":
        console.log("deletion find", store.find(model.id));
        resp = store.find(model.id).destroy();
    }
    if (resp) {
      return options.success(resp);
    } else {
      return options.error("Record not found");
    }
  };

}).call(this);
