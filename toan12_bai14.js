window.CURRENT_LESSON = {
  unit_title: "BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG",
  theory: "<h4>I. VECTƠ PHÁP TUYẾN VÀ PHƯƠNG TRÌNH TỔNG QUÁT</h4><ul><li>Mặt phẳng đi qua $M(x_0; y_0; z_0)$ có VTPT $\\vec{n} = (A; B; C)$ có phương trình:<br>$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$</li><li><b>Phương trình đoạn chắn:</b> Cắt ba trục tại $(a;0;0), (0;b;0), (0;0;c)$:<br>$$\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1$$</li><li><b>Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(P)$:<br>$$d(M_0, (P)) = \\dfrac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Viết phương trình mặt phẳng cơ bản",
      questions: [
        {
          id: 1,
          question: "Trong không gian $Oxyz$, mặt phẳng $(P)$ đi qua $A(1; -2; 3)$ và có VTPT $\\vec{n} = (2; 1; -4)$ có phương trình là:",
          options: ["$2x + y - 4z + 12 = 0$", "$2x + y - 4z - 12 = 0$", "$x - 2y + 3z + 12 = 0$", "$2x + y - 4z = 0$"],
          correct: 0,
          solution: "Phương trình: $2(x - 1) + 1(y + 2) - 4(z - 3) = 0 \\Leftrightarrow 2x + y - 4z + 12 = 0$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 14 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng:",
        options: ["$2$", "$6$", "$\\dfrac{2}{3}$", "$3$"],
        correct: 0,
        solution: "$d(M, (P)) = \\dfrac{|2(1) - 2(2) + 1(3) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\dfrac{|6|}{3} = 2$."
      }
    ]
  }
};