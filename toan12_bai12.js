window.CURRENT_LESSON = {
  unit_title: "BÀI 12: TÍCH PHÂN",
  theory: "<h4>I. ĐỊNH NGHĨA VÀ ĐỊNH LÝ NEWTON-LEIBNIZ</h4><p>Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn $[a; b]$ thì:<br>$$\\displaystyle\\int_{a}^{b} f(x)\\,dx = F(b) - F(a) = F(x)\\Big|_{a}^{b}$$</p><h4>II. TÍNH CHẤT</h4><ul><li>$\\displaystyle\\int_{a}^{b} f(x)\\,dx = -\\displaystyle\\int_{b}^{a} f(x)\\,dx$; $\\quad \\displaystyle\\int_{a}^{a} f(x)\\,dx = 0$.</li><li>$\\displaystyle\\int_{a}^{b} f(x)\\,dx = \\displaystyle\\int_{a}^{c} f(x)\\,dx + \\displaystyle\\int_{c}^{b} f(x)\\,dx$.</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Tính tích phân bằng định nghĩa và tính chất",
      questions: [
        {
          id: 1,
          question: "Biết $\\displaystyle\\int_{1}^{3} f(x)\\,dx = 4$ và $\\displaystyle\\int_{1}^{3} g(x)\\,dx = -2$. Tích phân $\\displaystyle\\int_{1}^{3} [f(x) + 2g(x)]\\,dx$ bằng:",
          options: ["$0$", "$2$", "$6$", "$-4$"],
          correct: 0,
          solution: "$\\displaystyle\\int_{1}^{3} [f(x) + 2g(x)]\\,dx = \\displaystyle\\int_{1}^{3} f(x)\\,dx + 2\\displaystyle\\int_{1}^{3} g(x)\\,dx = 4 + 2(-2) = 0$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 12 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Tích phân $I = \\displaystyle\\int_{0}^{1} e^x\\,dx$ bằng:",
        options: ["$e - 1$", "$e$", "$e + 1$", "$1$"],
        correct: 0,
        solution: "$I = e^x\\Big|_{0}^{1} = e^1 - e^0 = e - 1$."
      }
    ]
  }
};