var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "root",
    database: "greatBayDB"

});

function postItem() {
    inquirer
        .prompt([
            // Here we create a basic text prompt.
            {
                type: "input",
                message: "Name of Item?",
                name: "itemName"
            },
            {
                type: "input",
                message: "New or Used?",
                name: "condition"
            },
            {
                type: "input",
                message: "Appraised Price?",
                name: "appraisedPrice"
            },
            {
                type: "input",
                message: "Minimum Bid",
                name: "minBid"
            
        }]).then(function(answer) {
            


            }
        };

    inquirer.prompt([{
            name: "choice",
            type: "list",
            message: "What would you like to do first?",
            choices: ["POST ITEM", "BID ON ITEM"]

        }]).then(function (response) {
                if (response.choice === "POST ITEM") {
                    postItem();
                } else if (response.choice === "BID ON ITEM") {

                }
            }