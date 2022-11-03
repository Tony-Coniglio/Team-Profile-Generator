const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const addManager = manager => {
        console.log(manager);
        let managerHtml =
            `
        <div> class="card">
            <div class="card-header">
            ${manager.name}
            </div>
            <ul>
                <li>ID: ${manager.ID}</li>
                <li>Email: ${manager.email}</li>
                <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>

        `;
        html.push(managerHtml)
    }

    const addEngineer = engineer => {
        console.log(engineer);
        let engineerHtml =
            `
        <div> class="card">
            <div class="card-header">
            ${engineer.name}
            </div>
            <ul>
                <li>ID: ${engineer.ID}</li>
                <li>Email: ${engineer.email}</li>
                <li>Github Account: ${engineer.github}</li>
            </ul>
        </div>

        `;
        html.push(engineerHtml)
    }



    const addIntern = intern => {
        console.log(intern);
        let internHtml =
            `
            <div> class="card">
                <div class="card-header">
                ${intern.name}
                </div>
                <ul>
                    <li>ID: ${intern.ID}</li>
                    <li>Email: ${intern.email}</li>
                    <li>Github Account: ${intern.github}</li>
                </ul>
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
    return
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/main/dist/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <Header>
            <h1>Team</h1>
        </Header>
        <main> ${generateTeam(team)} </main>
    </body>
    </html>
    `
}