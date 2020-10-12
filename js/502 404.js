function myFunction {
  if (location.pathname == "/502.html") {
    document.getElementById("p1").innerHTML = "The server was acting as a gateway or proxy and received an invalid response from the upstream server."
  } else if (location.pathname == "/404.html") {
    document.getElementById("p1").innerHTML = "The requested page could not be found but may be available again in the future."
  }
}
