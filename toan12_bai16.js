window.CURRENT_LESSON = {
  unit_title: "BÀI 16: PHƯƠNG TRÌNH MẶT CẦU",
  theory: "<h4>I. DẠNG CHÍNH TẮC VÀ DẠNG KHAI TRIỂN</h4><ul><li><b>Chính tắc:</b> Mặt cầu tâm $I(a; b; c)$, bán kính $R$ có phương trình:<br>$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$</li><li><b>Khai triển:</b> Phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ là phương trình mặt cầu khi và chỉ khi $a^2 + b^2 + c^2 - d > 0$. Khi đó tâm $I(a; b; c)$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$.</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Xác định tâm và bán kính của mặt cầu",
      questions: [
        {
          id: 1,
          question: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 25$ có tọa độ tâm $I$ và bán kính $R$ là:",
          options: ["$I(2; -1; 4), R = 5$", "$I(-2; 1; -4), R = 5$", "$I(2; -1; 4), R = 25$", "$I(-2; 1; -4), R = 25$"],
          correct: 0,
          solution: "Tâm $I(a;b;c) = (2; -1; 4)$ và bán kính $R = \\sqrt{25} = 5$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 16 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Bán kính của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$ bằng:",
        options: ["$4$", "$\\sqrt{14}$", "$16$", "$\\sqrt{12}$"],
        correct: 0,
        solution: "Hệ số: $a = 1, b = -2, c = 3, d = -2$. Bán kính $R = \\sqrt{1^2 + (-2)^2 + 3^2 - (-2)} = \\sqrt{1 + 4 + 9 + 2} = \\sqrt{16} = 4$."
      }
    ]
  }
};