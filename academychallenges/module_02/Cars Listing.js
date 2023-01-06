<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="mercedes-benz"></p>
<script>
const cars = ["Toyota", "Honda", "Mazda", "Mitsubishi", "Tesle", "Lexus"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("mercedes-benz").innerHTML = text;


</script>
