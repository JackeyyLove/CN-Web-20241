<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $mssv = $_POST['mssv'];
    $hoten = $_POST['hoten'];

    $sql = "INSERT INTO sinhviens (mssv, hoten) VALUES ('$mssv', '$hoten')";

    if ($conn->query($sql) === TRUE) {
        echo "<p style='color: green;'>Ghi thành công!</p>";
    } else {
        echo "<p style='color: red;'>Lỗi: " . $sql . "<br>" . $conn->error . "</p>";
    }
}

$sql = "SELECT * FROM sinhviens";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản lý Sinh viên</title>
</head>
<body>

<h1>Nhập thông tin sinh viên</h1>
<form method="post" action="">
    <label for="mssv">Mã số sinh viên (MSSV):</label><br>
    <input type="text" id="mssv" name="mssv" required><br><br>

    <label for="hoten">Họ và Tên:</label><br>
    <input type="text" id="hoten" name="hoten" required><br><br>

    <input type="submit" value="Ghi vào CSDL">
</form>

<h2>Danh sách sinh viên</h2>

<table>
    <tr>
        <th>ID</th>
        <th>MSSV</th>
        <th>Họ và Tên</th>
    </tr>
    <?php
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['mssv'] . "</td>";
            echo "<td>" . $row['hoten'] . "</td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='3'>Không có sinh viên nào</td></tr>";
    }
    ?>
</table>

</body>
</html>

<?php
$conn->close();
?>

