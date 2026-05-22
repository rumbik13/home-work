<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>output</title>
</head>
<body>
      <?php
      function renderElement(string $tag, string $content): void {
          echo "<{$tag}>{$content}</{$tag}>";
      }
      ?>
</body>
</html>