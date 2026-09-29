window.CURRENT_LESSON = {
  unit_title: "BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ",
  theory: "<h4>I. ĐƯỜNG TIỆM CẬN NGANG</h4><p>Đường thẳng $y = y_0$ được gọi là <b>tiệm cận ngang</b> của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn:<br>$$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0$$</p><h4>II. ĐƯỜNG TIỆM CẬN ĐỨNG</h4><p>Đường thẳng $x = x_0$ được gọi là <b>tiệm cận đứng</b> của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn:<br>$$\\lim_{x \\to x_0^+} f(x) = \\pm\\infty \\quad \\text{hoặc} \\quad \\lim_{x \\to x_0^-} f(x) = \\pm\\infty$$</p><h4>III. ĐƯỜNG TIỆM CẬN XIÊN (Chương trình mới KNTT)</h4><p>Đường thẳng $y = ax + b$ ($a \\neq 0$) là <b>tiệm cận xiên</b> nếu:<br>$$\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$$Trong đó: $a = \\lim_{x \\to \\pm\\infty} \\dfrac{f(x)}{x}$ và $b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$.</p>",
  topics: [
    {
      topic_name: "Dạng 1: Tiệm cận đứng và tiệm cận ngang",
      questions: [
        {
          id: 1,
          question: "Đồ thị hàm số $y = \\dfrac{2x - 3}{x + 1}$ có tiệm cận ngang là đường thẳng nào?",
          options: ["$y = 2$", "$x = -1$", "$y = -3$", "$x = 2$"],
          correct: 0,
          solution: "Ta có $\\lim_{x \\to \\pm\\infty} \\dfrac{2x - 3}{x + 1} = 2$. Do đó tiệm cận ngang của đồ thị là $y = 2$."
        },
        {
          id: 2,
          question: "Số đường tiệm cận đứng của đồ thị hàm số $y = \\dfrac{x + 2}{x^2 - 4}$ là:",
          options: ["$1$", "$2$", "$0$", "$3$"],
          correct: 0,
          solution: "Ta có $y = \\dfrac{x + 2}{(x + 2)(x - 2)} = \\dfrac{1}{x - 2}$ (với $x \\neq -2$).<br>$\\lim_{x \\to 2^+} y = +\\infty$ nên $x = 2$ là tiệm cận đứng duy nhất. Điểm $x = -2$ bị triệt tiêu nên đồ thị chỉ có $1$ tiệm cận đứng."
        }
      ]
    },
    {
      topic_name: "Dạng 2: Đường tiệm cận xiên",
      questions: [
        {
          id: 3,
          question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 - 3x + 1}{x - 1}$ có phương trình là:",
          options: ["$y = x - 2$", "$y = x + 2$", "$y = 2x - 1$", "$y = x - 1$"],
          correct: 0,
          solution: "Chia đa thức: $y = x - 2 - \\dfrac{1}{x - 1}$.<br>Vì $\\lim_{x \\to \\pm\\infty} [y - (x - 2)] = \\lim_{x \\to \\pm\\infty} \\left(-\\dfrac{1}{x - 1}\\right) = 0$ nên tiệm cận xiên là $y = x - 2$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 3 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Tọa độ giao điểm hai đường tiệm cận của đồ thị hàm số $y = \\dfrac{3x - 1}{x + 2}$ là:",
        options: ["$I(-2; 3)$", "$I(2; 3)$", "$I(-2; -1)$", "$I(3; -2)$"],
        correct: 0,
        solution: "Tiệm cận đứng $x = -2$, tiệm cận ngang $y = 3$. Giao điểm là $I(-2; 3)$."
      },
      {
        id: 2,
        question: "Đồ thị hàm số $y = \\dfrac{2x^2 + x - 1}{x + 1}$ có tiệm cận xiên là:",
        options: ["$y = 2x - 1$", "$y = 2x + 1$", "$y = x - 1$", "Không có tiệm cận xiên"],
        correct: 0,
        solution: "Ta phân tích: $2x^2 + x - 1 = (x + 1)(2x - 1)$. Với $x \\neq -1$, hàm số trở thành $y = 2x - 1$ nên đồ thị là một đường thẳng khuyết điểm, không có tiệm cận xiên."
      }
    ]
  }
};