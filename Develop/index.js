// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// console.log(inquirer);
// const path = require("path");
// const fs = require("fs");
// ​
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// ​
// const render = require("./lib/htmlRenderer");


// Display initial prompts to New Member
inquirer.prompt([
	{
		type: "input",
		name: "name",
		message:"Enter new team member's name"
	},
	{
		type: "list",
		name: "role",
		message:"Select new team member's role",
		choices: [
			"Manager",
			"Engineer",
			"Intern"
		]
	},
	{
		type: "input",
		name: "id",
		message:"Enter new team member's id",
	},
])
.then(function roleProperty(name, role, id){
	// Role specific properties
	console.log(name, role, id);
})