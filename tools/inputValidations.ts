//validate email
export function emailIsValid(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//validate password
export function passwordIsValid(inputtxt: string): boolean {
  var passw = /^[A-Za-z]\w{7,14}$/;
  if (inputtxt.match(passw)) {
    return true;
  } else {
    return false;
  }
}

export function isValidPhone(phone: string) {
  // eslint-disable-next-line no-useless-escape
  let match = phone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
  return match != null;
}
