window.CURRENT_LESSON = {
  unit_title: "BÀI 13: ỨNG DỤNG HÌNH HỌC CỦA TÍCH PHÂN",
  theory: "<h4>I. TÍNH DIỆN TÍCH HÌNH PHẲNG</h4><ul><li>Hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục $Ox$ và hai đường thẳng $x = a, x = b$:<br>$$S = \\displaystyle\\int_{a}^{b} |f(x)|\\,dx$$</li><li>Hình phẳng giới hạn bởi $y = f(x)$ và $y = g(x)$:<br>$$S = \\displaystyle\\int_{a}^{b} |f(x) - g(x)|\\,dx$$</li></ul><h4>II. TÍNH THỂ TÍCH KHỐI TRÒN XOAY</h4><p>Hình phẳng quay quanh trục $Ox$:<br>$$V = \\pi \\displaystyle\\int_{a}^{b} [f(x)]^2\\,dx$$</p>",
  topics: [
    {
      topic_name: "Dạng 1: Diện tích hình phẳng",
      questions: [
        {
          id: 1,
          question: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$ là:",
          options: ["$\\dfrac{16}{3}$", "$-\\dfrac{16}{3}$", "$4$", "$\\dfrac{8}{3}$"],
          correct: 0,
          solution: "Trên đoạn $[0; 2]$, ta có $x^2 - 4 \\le 0$. Do đó $S = \\displaystyle\\int_{0}^{2} |x^2 - 4|\\,dx = -\\displaystyle\\int_{0}^{2} (x^2 - 4)\\,dx = -\\left(\\dfrac{x^3}{3} - 4x\\right)\\Big|_{0}^{2} = \\dfrac{16}{3}$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 13 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x=0, x=4$ quanh trục $Ox$ là:",
        options: ["$8\\pi$", "$16\\pi$", "$4\\pi$", "$\\dfrac{8\\pi}{3}$"],
        correct: 0,
        solution: "$V = \\pi \\displaystyle\\int_{0}^{4} (\\sqrt{x})^2\\,dx = \\pi \\displaystyle\\int_{0}^{4} x\\,dx = \\pi \\left(\\dfrac{x^2}{2}\\right)\\Big|_{0}^{4} = 8\\pi$."
      }
    ]
  }
};