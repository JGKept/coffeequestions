
const questionsByRoast = {
  "Light Roast": [
    "What made you smile today?",
    "What’s something you’re proud of recently?",
    "How do you recharge when you feel drained?",
    "What scripture or quote has helped you lately?",
    "What does peace feel like to you?"
  ],
  "Medium Roast": [
    "What lesson did you learn the hard way?",
    "What’s a relationship that shaped you?",
    "When did you feel most aligned with your purpose?",
    "How do you define spiritual growth?",
    "What’s a moment where your faith carried you?"
  ],
  "Bold Roast": [
    "What’s a truth you’re afraid to say out loud?",
    "What pain have you made peace with?",
    "What do you wish others knew about your story?",
    "When were you ready to give up but didn’t?",
    "What’s something you’ve forgiven that freed you?"
  ]
};

let currentRoast = "";
function selectRoast(roast) {
  currentRoast = roast;
  nextQuestion();
  document.getElementById("next-btn").style.display = "inline-block";
}
function nextQuestion() {
  const questions = questionsByRoast[currentRoast];
  const index = Math.floor(Math.random() * questions.length);
  document.getElementById('question').textContent = questions[index];
}
