const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const addManager = manager => {
        console.log(manager);
        let managerHtml =
            `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
              <p class="card-text">ID: ${manager.employeeId}</p>
              <p class="card-text">Email: ${manager.email}</p>
              <p class="card-text">Phone Number: ${manager.phoneNumber}</p>
            </div>
          </div>

        `;
        html.push(managerHtml)
    }

    const addEngineer = engineer => {
        console.log(engineer);
        let engineerHtml =
        `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.name}</h6>
          <p class="card-text">ID: ${engineer.employeeId}</p>
          <p class="card-text">Email: ${engineer.email}</p>
          <p class="card-text">Github: ${engineer.github}</p>
        </div>
      </div>

    `;
        html.push(engineerHtml)
    }



    const addIntern = intern => {
        console.log(intern);
        let internHtml =
        `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.name}</h6>
          <p class="card-text">ID: ${intern.employeeId}</p>
          <p class="card-text">Email: ${intern.email}</p>
          <p class="card-text">Phone Number: ${intern.github}</p>
        </div>
      </div>

    `;
        html.push(internHtml)

    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            addManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            addEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            addIntern(team[i]);
        }
    }

    return html.join('');

};

module.exports = team => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="/main/dist/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Your Team</h1>
      <p class="lead">Please review your team information</p>
    </div>
  </div>
        <main> ${generateTeam(team)} </main>
    </body>
    </html>
    `
}