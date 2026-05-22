<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP</title>
</head>

<body>
  <?php
  require_once 'output.php';
  require_once 'output-cycle.php';
  require_once 'counter-even.php';

  echo "<hr><p>--- Демонстрация работы функций ---</p>";

  renderElement('h2', 'Привет, это один заголовок!');

  renderElementsCycle('p', 'Это повторяющийся абзац.', 3);
  ?>
</body>

</html>