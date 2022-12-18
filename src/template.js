module.exports = (templateData) => {
  console.log(templateData);

  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <div>
    
    </div>
</head>
<body>
<h1>${templateData.name}</h1>
<h2><a href="https://github.com/${templateData.github}">Github</a></h2>
</body>
</body>
</html>`;
};
