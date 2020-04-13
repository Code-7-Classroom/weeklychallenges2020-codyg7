//objects are stored using name/value pairs ie. name: "Cody Gilliam"

var me = {
  name: "Cody Gilliam",
  sayHi() {
    alert(this.name);
  },
};
sayHi();
