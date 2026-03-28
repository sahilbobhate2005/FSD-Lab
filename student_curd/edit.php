<?php 
include('db.php'); 
$id = $_GET['id'];
$data = mysqli_query($conn, "SELECT * FROM student WHERE id=$id");
$row = mysqli_fetch_assoc($data);

if(isset($_POST['update'])){
    $name = $_POST['name'];
    mysqli_query($conn, "UPDATE student SET name='$name' WHERE id=$id");
    header('location: index.php');
}
?>
<form method="POST">
    <input type="text" name="name" value="<?php echo $row['name']; ?>">
    <button type="submit" name="update">Update Record</button>
</form>