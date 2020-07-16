const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// New members
const members = [];

// Display initial prompts to New Member
function addMember(){
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
			roleProperty = "office phone number";
		} else if (role === "Intern"){
			roleProperty = "school";
		} else {
			roleProperty = "github username";
		}
		inquirer.prompt([
			{
				type: "input",
				name: "roleProperty",
				message: `Enter new team member's ${roleProperty}?`
			},
			{
				type: "confirm",
				name: "moreMembers",
				message: "Would you like to add more team members?"
			}
		])
		.then(function({roleProperty, moreMembers}){
			let newMember;
			if (role === "Manager"){
				newMember = new Manager(name, id, email, roleProperty);
			} else if (role === "Intern"){
				newMember = new Intern(name, id, email, roleProperty);
			} else {
				newMember = new Engineer(name, id, email, roleProperty)
			}
			// Add newMember to list
			members.push(newMember);
			if (moreMembers == true){
				addMember();
			} else {
				finishHTML();
			}
		})
	})
}
// Function to write HTML file with members
function finishHTML(){
	const template = render(members);
    fs.writeFile("./output/team.html", template, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Congrats Your Software Engineering Team Is Complete!");
}

// Run addMember function
addMember();
