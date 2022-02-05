// prompts for creating manager, engineer and intern. 
const questions = {
    questionsManager: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email', // done
            message: "What is their email address?"
        },
        {
            type: 'input',
            name: 'address', // done
            message: 'What is their home address?'
        },
        {
            type: 'input',
            name: 'officeNumber', // done
            message: 'What is their office number?'
        },
    ],
    questionsEngineer: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email', // done
            message: "What is their email address?"
        },
        {
            type: 'input',
            name: 'github', // done
            message: 'What is their github?'
        },
        
    ],
    questionsIntern: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email', // done
            message: "What is their email address?"
        },
        {
            type: 'input',
            name: 'school', // done
            message: 'What school do they attend?'
        },
       
    ]
}

module.exports = questions;