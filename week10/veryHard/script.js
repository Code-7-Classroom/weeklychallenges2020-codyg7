const str = "asdscsa";
for (var i = 0; i < str.length; i++) {
  if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
    console.log(str.charAt(i));
    break;
  }
}
