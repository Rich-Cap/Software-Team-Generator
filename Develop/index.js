const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
	{
		type: "input",
		name: "email",
		message:"Enter new team member's email address",
	},
])
.then(function newMember({name, role, id, email}){
	// Role specific properties
	let roleProperty;
	if (role === "Manager"){
		roleProperty = "office number";
		// inquirer.prompt(
		// 	{
		// 		type: "input",
		// 		name: roleProperty,
		// 		message:"Enter new team member's " + roleProperty,
		// 	},
		// )
		// let newMember = new Manager(name, id, email, roleProperty)
		// console.log(newMember.roleProperty)
	} else if (role === "Intern"){
		roleProperty = "school";
		// inquirer.prompt(
		// 	{
		// 		type: "input",
		// 		name: roleProperty,
		// 		message:"Enter new team member's " + roleProperty,
		// 	},
		// )
		// let newMember = new Intern(name, id, email, roleProperty)
		// console.log(Intern(name, id, email, roleProperty));
	} else {
		roleProperty = "github";
		// inquirer.prompt(
		// 	{
		// 		type: "input",
		// 		name: roleProperty,
		// 		message:"Enter new team member's link to " + roleProperty + " profile",
		// 	},
		// )
		// let newMember = new Engineer(name, id, email, roleProperty)
		// console.log(newMember.roleProperty)
	}
	inquirer.prompt([
		{
			type: "input",
			name: "roleProperty",
			message: `Enter new team member's ${roleProperty}`
		},
		{
			type: "confirm",
			name: "moreMembers",
			message: "Would you like to add more team members?"
		}
	])
	.then(function(){
		console.log(role);
		console.log(roleProperty);
	})
})
