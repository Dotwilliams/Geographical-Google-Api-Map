function addCookie() {
  const username = document.getElementById("username").value;
  let email = "mj@c.com";
  // set cookie value
  document.cookie = "username=" + username + "email =" + email;

  let x = document.cookie;

  document.getElementById("root").innerHTML = x;
}

function showCookie() {
  document.getElementById("root2").innerHTML = document.cookie;
}
