const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", 
                 "True or False: 5000 meters =  5 kilometers? ", 
                 "(5+3)/2*10 = ? ", 
                 "Given the arry[8, 'Orbit', 'Trajectory', 45]. what entry is at index 2? ", 
                 "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let grade = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++){
    candidateAnswer = input.question(`${questions[i]}`);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(let i = 0; i < questions.length; i++){
    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
        console.log(`Question ${[i + 1]} : Correct!`);
        grade++;
        }else{
        console.log(`Question ${[i + 1]} Incorrect! Correct Answer: ${correctAnswers[i]}.`);
      }
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello: ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);

  //Grade The Quizz
  console.log("---------------------------------");
  console.log(" Quizz Results");
  console.log(`Candidate Name: ${candidateName} `);
    for(let i = 0; i < questions.length; i++){
      console.log(questions[i]);
      console.log(` Your answer: ${candidateAnswers[i]}`);
      console.log(` Correct Answer: ${correctAnswers[i]}`);
    }
    console.log(">>> Overall Grade: " + (grade / questions.length * 100) + "% (" + grade + " of 5 rsponses correct) <<<");
    if(grade / questions.length * 100 >= 80) {
      console.log(">>> Status: PASSED <<<");
    } else {
      console.log(">>> Status: FAILED <<<");
    }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};