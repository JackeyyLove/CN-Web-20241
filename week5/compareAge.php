<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculate Age and Difference</title>
</head>
<body>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name1 = $_POST['name1'];
    $birthday1 = $_POST['birthday1'];
    $name2 = $_POST['name2'];
    $birthday2 = $_POST['birthday2'];

    $date1 = new DateTime($birthday1);
    $date2 = new DateTime($birthday2);

    $today = new DateTime();

    $age1 = $today->diff($date1)->y;
    $age2 = $today->diff($date2)->y;

    $dateDifference = $date1->diff($date2)->days;

    echo "<h3>Results:</h3>";
    echo "<p>$name1 is $age1 years old.</p>";
    echo "<p>$name2 is $age2 years old.</p>";
    echo "<p>The difference in days between their birthdays is $dateDifference days.</p>";
}
?>
<h2> Input information of name and birthday of 2 user </h2> 
<form method="post">
    <label for="name1">Name of User 1:</label><br>
    <input type="text" id="name1" name="name1" required><br><br>

    <label for="birthday1">Birthday of User 1 (yyyy-mm-dd):</label><br>
    <input type="date" id="birthday1" name="birthday1" required><br><br>

    <label for="name2">Name of User 2:</label><br>
    <input type="text" id="name2" name="name2" required><br><br>

    <label for="birthday2">Birthday of User 2 (yyyy-mm-dd):</label><br>
    <input type="date" id="birthday2" name="birthday2" required><br><br>

    <input type="submit" value="Calculate">
</form>

</body>
</html>

