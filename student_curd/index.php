<?php include('db.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student CRUD | Portfolio Style</title>
    <link rel="stylesheet" href="../html-css/style.css"> </head>
<body>
    <header><h1>Student Management System</h1></header>
    <main>
        <section>
            <h2>Add Student</h2>
            <form method="POST">
                <input type="text" name="name" placeholder="Name" required><br><br>
                <input type="email" name="email" placeholder="Email" required><br><br>
                <input type="text" name="mobile" placeholder="Mobile" required><br><br>
                <input type="text" name="dept" placeholder="Department" required><br><br>
                <button type="submit" name="save" class="btn-submit">Save Student</button>
            </form>
        </section>

        <?php
        if(isset($_POST['save'])){
            $name = $_POST['name']; $email = $_POST['email']; 
            $mobile = $_POST['mobile']; $dept = $_POST['dept'];
            mysqli_query($conn, "INSERT INTO student (name, email, mobile, department) VALUES ('$name', '$email', '$mobile', '$dept')");
            header('location: index.php'); // Refresh to show new data [cite: 64]
        }
        ?>

        <section>
            <h2>Student Records</h2>
            <table border="1" style="width:100%; text-align:left;">
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
                <?php
                $res = mysqli_query($conn, "SELECT * FROM student");
                while($row = mysqli_fetch_assoc($res)){
                    echo "<tr>
                        <td>{$row['id']}</td><td>{$row['name']}</td><td>{$row['email']}</td>
                        <td>
                            <a href='edit.php?id={$row['id']}'>Edit</a> | 
                            <a href='delete.php?id={$row['id']}'>Delete</a>
                        </td>
                    </tr>";
                }
                ?>
            </table>
        </section>
    </main>
</body>
</html>