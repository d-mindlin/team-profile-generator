
const generateManager = function(manager) {

    return `

    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
            <img src="images/manager.png" />
            <h3 class="card-title" id="managername1">${manager.name} </h3>   
            <h5 id="managerrole1">Manager</h5>   
        </div>
            <div id="manager">

                <h6 id="managerid1">Id: ${manager.id} </h6>
                <a href="mailto:${manager.email}">${manager.email}</a>
                <h6 id="managerofficenumber1">Office #: ${manager.officeNumber} </h6>
            </div>
        </div>
    </div>

    `;
}

const generateEngineer = function(engineer) {
    return `

    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
                <img src="images/engineer.png" />
                <h3 class="card-title" id="engineername1">${engineer.name} </h3>  
                <h5 id="engineerrole1">Engineer </h5>
            </div>
            <div id="engineer">

                <h6 id="engineerid1">Id: ${engineer.id} </h6>
                <a href="mailto:${engineer.email}">${engineer.email}</a>
                <div>
                <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                </div>

            </div>
        </div>
    </div>
    `;

}



const generateIntern = function(intern) {
    return `

    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
                <img src="images/student.png" />
                <h3 class="card-title" id="internname1">${intern.name}</h3>
                <h5 id="internrole1">Intern</h5>
             </div>
            <div id="engineer">

                <h6 id="internid1">Id: ${intern.id}</h6>
                <a href="mailto:${intern.email}">${intern.email}</a>
                <h6 id="internschool1">School: ${intern.school} </h6>
            </div>
        </div>
    </div>
    `;

}


const generateCompletePage = function(employeeHTMLString) {
    return`
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
  <body>

      <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-6">My Team</h1>
                </div>
            </div>
      </header>

        <main>
            <div class="container" >
            <div class="row" id="employees">
                    <!-- Employee Cards -->
                    ${employeeHTMLString}
            </div>
            </div>
        </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

  </body>

  </html>

    `
}



function generateHTML(data) {

    const finalHTMLArr = []
    console.log(data);

        for (let i = 0; i < data.length; i++) {
        const currentEmployee = data[i];
        const role = currentEmployee.getRole();


                if(role === "Manager") {
            const managerCardHtml = generateManager(currentEmployee)
            finalHTMLArr.push(managerCardHtml);

        }

            if (role === "Engineer") {
            const engineerCardHtml = generateEngineer(currentEmployee);
            finalHTMLArr.push(engineerCardHtml);
        }

            if (role === "Intern") {
            const internCardHtml = generateIntern(currentEmployee);

            finalHTMLArr.push(internCardHtml);
        }

    }

    const employeeHTMLString = finalHTMLArr.join("")

    const finalHTMLString = generateCompletePage(employeeHTMLString);
    return finalHTMLString;

}

module.exports = generateHTML;