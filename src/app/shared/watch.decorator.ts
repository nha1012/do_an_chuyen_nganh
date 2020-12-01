export function watch(property: string) {
  return (object, propertyName) => {
    object['_' + property] = object[property];
    Object.defineProperty(object, property, {
      get: function () {
        return object['_' + property];
      },
      set: function (val) {
        var oldValue = object['_' + property];
        object['_' + property] = val;
        object[propertyName].apply(this, [val,oldValue]);
      }
    });
  };
}
