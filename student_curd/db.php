<?php
// Connect to MySQL on port 3307 [cite: 53-56]
$conn = mysqli_connect("localhost:3307", "root", "", "studentdb");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>