
<!DOCTYPE html>

<html>

<body>

<h1> Hello Username</h1>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>

function myFunction() {

  let text;

  let person = prompt("Please enter your name:", "Adamu Sani");

  if (person == null || person == "") {

    text = "User cancelled the prompt.";

  } else {

    text = "Hello " + person + "! How are you today?";

  }

  

}

</script>

</body>
