window.CURRENT_LESSON = {
  unit_title: "BÀI 11: NGUYÊN HÀM",
  theory: "<h4>BẢNG NGUYÊN HÀM CÁC HÀM SỐ SƠ CẤP</h4><ul><li>$\\displaystyle\\int 0 \\, dx = C$; $\\quad \\displaystyle\\int 1 \\, dx = x + C$.</li><li>$\\displaystyle\\int x^{\\alpha} \\, dx = \\dfrac{x^{\\alpha + 1}}{\\alpha + 1} + C \\; (\\alpha \\neq -1)$.</li><li>$\\displaystyle\\int \\dfrac{1}{x} \\, dx = \\ln|x| + C$.</li><li>$\\displaystyle\\int e^x \\, dx = e^x + C$; $\\quad \\displaystyle\\int a^x \\, dx = \\dfrac{a^x}{\\ln a} + C$.</li><li>$\\displaystyle\\int \\cos x \\, dx = \\sin x + C$; $\\quad \\displaystyle\\int \\sin x \\, dx = -\\cos x + C$.</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Áp dụng bảng nguyên hàm cơ bản",
      questions: [
        {
          id: 1,
          question: "Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 - 2x + 1$ là:",
          options: ["$x^3 - x^2 + x + C$", "$3x^3 - 2x^2 + x + C$", "$6x - 2 + C$", "$x^3 - x^2 + C$"],
          correct: 0,
          solution: "$\\displaystyle\\int (3x^2 - 2x + 1)\\,dx = 3\\cdot\\dfrac{x^3}{3} - 2\\cdot\\dfrac{x^2}{2} + x + C = x^3 - x^2 + x + C$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 11 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Họ nguyên hàm của hàm số $f(x) = \\cos 2x$ là:",
        options: ["$\\dfrac{1}{2}\\sin 2x + C$", "$-\\dfrac{1}{2}\\sin 2x + C$", "$2\\sin 2x + C$", "$-\\sin 2x + C$"],
        correct: 0,
        solution: "Ta có $\\displaystyle\\int \\cos(ax+b)\\,dx = \\dfrac{1}{a}\\sin(ax+b) + C$. Do đó kết quả là $\\dfrac{1}{2}\\sin 2x + C$."
      }
    ]
  }
};