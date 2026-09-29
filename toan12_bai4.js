window.CURRENT_LESSON = {
  unit_title: "BÀI 4: KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ HÀM SỐ",
  theory: "<h4>SƠ ĐỒ KHẢO SÁT VÀ VẼ ĐỒ THỊ</h4><ol><li><b>Tìm tập xác định</b> của hàm số.</li><li><b>Khảo sát sự biến thiên:</b><ul><li>Xét chiều biến thiên: Tính đạo hàm $y'$, tìm nghiệm của $y'=0$ và các điểm không xác định.</li><li>Tìm cực trị của hàm số.</li><li>Tìm giới hạn tại vô cực, giới hạn vô cực và tìm các đường tiệm cận (nếu có).</li><li>Lập bảng biến thiên tóm tắt toàn bộ tính chất.</li></ul></li><li><b>Vẽ đồ thị:</b> Xác định các điểm đặc biệt (giao với $Ox, Oy$, tâm đối xứng, trục đối xứng) và vẽ đồ thị.</li></ol>",
  topics: [
    {
      topic_name: "Dạng 1: Nhận dạng đồ thị hàm số bậc ba",
      questions: [
        {
          id: 1,
          question: "Đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có nhánh cuối đi lên phía bên phải thì dấu của hệ số $a$ là:",
          options: ["$a > 0$", "$a < 0$", "$a = 0$", "$a \\ge 0$"],
          correct: 0,
          solution: "Khi $x \\to +\\infty$, nhánh đồ thị đi lên nghĩa là $\\lim_{x \\to +\\infty} y = +\\infty$, điều này tương đương với $a > 0$."
        }
      ]
    },
    {
      topic_name: "Dạng 2: Khảo sát hàm phân thức hữu tỉ $y = \\dfrac{ax+b}{cx+d}$ và $y = \\dfrac{ax^2+bx+c}{px+q}$",
      questions: [
        {
          id: 2,
          question: "Tâm đối xứng của đồ thị hàm số $y = \\dfrac{2x - 1}{x + 1}$ là:",
          options: ["$I(-1; 2)$", "$I(1; 2)$", "$I(-1; -1)$", "$I(2; -1)$"],
          correct: 0,
          solution: "Đồ thị hàm số nhất biến nhận giao điểm của 2 đường tiệm cận làm tâm đối xứng. Tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2 \\Rightarrow I(-1; 2)$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 4 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Đồ thị hàm số $y = \\dfrac{x^2 - x + 1}{x - 1}$ nhận giao điểm của hai tiệm cận nào làm tâm đối xứng?",
        options: ["Giao điểm của tiệm cận đứng và tiệm cận xiên", "Giao điểm của tiệm cận đứng và tiệm cận ngang", "Gốc tọa độ $O(0;0)$", "Điểm cực đại của hàm số"],
        correct: 0,
        solution: "Hàm phân thức bậc hai trên bậc nhất nhận giao điểm của tiệm cận đứng ($x = 1$) và tiệm cận xiên ($y = x$) làm tâm đối xứng."
      }
    ]
  }
};