window.CURRENT_LESSON = {
  unit_title: "BÀI 8: BIỂU THỨC TỌA ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ",
  theory: "<h4>CÁC CÔNG THỨC TỌA ĐỘ CẦN NHỚ</h4><p>Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:</p><ul><li>Độ dài: $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$.</li><li>Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$.</li><li>Hai vectơ vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1x_2 + y_1y_2 + z_1z_2 = 0$.</li><li>Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:<br>$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Tính toán độ dài và tích vô hướng",
      questions: [
        {
          id: 1,
          question: "Trong không gian $Oxyz$, cho $\\vec{a} = (1; 2; -1)$ và $\\vec{b} = (-2; 1; 3)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$:",
          options: ["$-3$", "$3$", "$-1$", "$5$"],
          correct: 0,
          solution: "$\\vec{a} \\cdot \\vec{b} = 1 \\cdot (-2) + 2 \\cdot 1 + (-1) \\cdot 3 = -2 + 2 - 3 = -3$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 8 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Trong không gian $Oxyz$, khoảng cách giữa hai điểm $A(1; 0; -2)$ và $B(3; 2; -1)$ là:",
        options: ["$3$", "$\\sqrt{5}$", "$9$", "$\\sqrt{13}$"],
        correct: 0,
        solution: "$AB = \\sqrt{(3-1)^2 + (2-0)^2 + (-1 - (-2))^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
      }
    ]
  }
};