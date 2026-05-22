<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>output</title>
</head>

<body>
  <?php
  function renderElementsCycle(string $tag, string $content, int $count): void
  {
    for ($i = 0; $i < $count; $i++) {
      echo "<{$tag}>{$content}</{$tag}>";
    }
  }
  ?>
</body>

</html>