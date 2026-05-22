<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  $numbers = [12, 5, 8, 23, 42, 0, 7, 14, 91, 100];

  for ($i = 0; $i < count($numbers); $i++) {
    if ($numbers[$i] % 2 === 0) {
      echo $numbers[$i] . " ";
    }
  }
  ?>
</body>

</html>