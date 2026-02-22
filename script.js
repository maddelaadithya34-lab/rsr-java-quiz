// Question bank (20+ questions)
const questions = [
  { q: "Output of: System.out.println(10+20+\"Java\");", a: "30Java" },
  { q: "Output of: System.out.println(\"Java\"+10+20);", a: "Java1020" },
  { q: "Error in: int num = 'A';", a: "Type mismatch" },
  { q: "Output of: System.out.println(2+3*4);", a: "14" },
  { q: "What happens if main is private?", a: "Runtime error" },
  { q: "Output of: System.out.println(true && false);", a: "false" },
  { q: "Output of: System.out.println('A' + 1);", a: "66" },
  { q: "Error in: int[] arr = new int[-5];", a: "NegativeArraySizeException" },
  { q: "Output of: System.out.println(5/2);", a: "2" },
  { q: "Output of: System.out.println(5/2.0);", a: "2.5" },
  { q: "Output of: System.out.println(\"Hello\".length());", a: "5" },
  { q: "Error in: String s = null; s.length();", a: "NullPointerException" },
  { q: "Output of: System.out.println(10==10);", a: "true" },
  { q: "Output of: System.out.println(10==20);", a: "false" },
  { q: "Error in: int x = Integer.parseInt(\"abc\");", a: "NumberFormatException" },
  { q: "Output of: System.out.println(Math.max(10,20));", a: "20" },
  { q: "Output of: System.out.println(Math.min(10,20));", a: "10" },
  { q: "Output of: System.out.println(\"Java\".toUpperCase());", a: "JAVA" },
  { q: "Output of: System.out.println(\"Java\".toLowerCase());", a: "java" },
  { q: "Output of: System.out.println(\"Java\".charAt(2));", a: "v" },
  { q: "Output of: System.out.println(100/0);", a: "ArithmeticException" },
  { q: "Output of: System.out.println(\"abc\".equals(\"abc\"));", a: "true" },
  { q: "Output of: System.out.println(\"abc\".equals(\"ABC\"));", a: "false" },
  { q: "Output of: System.out.println(\"abc\".compareTo(\"abd\"));", a: "-1" },
  { q: "Output of: System.out.println(\"abc\".compareTo(\"abc\"));", a: "0" }
];

// Pick random questions
function getRandomQuestions(count) {
  return questions.sort(() => Math.random() - 0.5).slice(0, count);
}

// Load quiz
function loadQuiz() {
  const quizDiv = document.getElementById("quiz");
  const randomQs = getRandomQuestions(20); // Always 20 questions
  quizDiv.innerHTML = "";
  randomQs.forEach((q, i) => {
    quizDiv.innerHTML += `<p>${i+1}. ${q.q}</p>
      <input type="text" id="ans${i}" placeholder="Your answer"><br>`;
  });
  quizDiv.dataset.questions = JSON.stringify(randomQs);
}

// Submit quiz
function submitQuiz() {
  const randomQs = JSON.parse(document.getElementById("quiz").dataset.questions);
  let score = 0;
  randomQs.forEach((q, i) => {
    const userAns = document.getElementById(`ans${i}`).value.trim();
    if (userAns.toLowerCase() === q.a.toLowerCase()) score++;
  });
  document.getElementById("result").innerText = `Score: ${score}/${randomQs.length}`;
}

// Load quiz on page open
window.onload = loadQuiz;