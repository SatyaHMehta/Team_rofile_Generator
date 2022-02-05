// Create the Manager card.
const generateManager = function ({ name, id, email, officeNumber }) {
  return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fas mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:email">${email}</a>
          </li>
          <li class="list-group-item">Office number:${officeNumber}</li>
        </ul>
      </div>
    </div>
    `;
};

// Create the Engineer card.
const generateEngineer = function ({ name, id, email, github }) {
  return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-title"><i class="fas mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:email">${email}</a>
        </li>
        <li class="list-group-item">Github:${github}</li>
      </ul>
    </div>
  </div>
`;
};

// Create the Intern card.
const generateIntern = function ({ name, id, email, school }) {
  return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-title"><i class="fas mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:email">${email}</a>
        </li>
        <li class="list-group-item">School:${school}</li>
      </ul>
    </div>
  </div>
`;
};

// function that creates the main html information
const generatePage = teamCards => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
  <div class="container-fluid">
  <div class="row">
  <div class="col-12 jumbotron mb-3 team-heading">
  <h1 class="text-center">My Team</h1>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="row">
  <div class="team-area col-12 d-flex justify-content-center">
  ${teamCards}
  </div>
        </div>
      </div>
    </body>
  </html> 
`;
}

// Main function that generates the HTML page.
const generateHTML = (newEmployees) => {
  //Holds all of the cards that are created.
  const pageArray = [];
  // creates the employee card.
  const createCards = (employee) =>{
    switch (employee.getRole()){
      case "Manager":
        const cardManager = generateManager(employee);
        pageArray.push(cardManager)
        break;
      case "Engineer":
        const cardEngineer = generateEngineer(employee)
        pageArray.push(cardEngineer)
        break;
      case "Intern":
        const cardIntern = generateIntern(employee)
        pageArray.push(cardIntern)
        break;
    }
  }
  // Iterates over each employee and runs the createCards function to create multiple employee cards.
  newEmployees.forEach((employee, i) => {
    createCards(employee,i);
  });

  // joins the pageArray contents array content. 
  const teamCards = pageArray.join('')
  
  // return teamCards to generate the page.
  const generateTeam = generatePage(teamCards);
  return generateTeam;
  }

module.exports = generateHTML;