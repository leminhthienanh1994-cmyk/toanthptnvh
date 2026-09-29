window.CURRENT_LESSON = {
  unit_title: "BÀI 18: CÔNG THỨC XÁC SUẤT TOÀN PHẦN VÀ CÔNG THỨC BAYES",
  theory: "<h4>I. CÔNG THỨC XÁC SUẤT TOÀN PHẦN</h4><p>Nếu $B$ và $\\bar{B}$ là hai biến cố đối nhau thì với mọi biến cố $A$:<br>$$P(A) = P(B) \\cdot P(A|B) + P(\\bar{B}) \\cdot P(A|\\bar{B})$$</p><h4>II. CÔNG THỨC BAYES</h4><p>Giúp xác định lại xác suất của nguyên nhân sau khi có kết quả:<br>$$P(B|A) = \\dfrac{P(B) \\cdot P(A|B)}{P(A)} = \\dfrac{P(B) \\cdot P(A|B)}{P(B) \\cdot P(A|B) + P(\\bar{B}) \\cdot P(A|\\bar{B})}$$</p>",
  topics: [
    {
      topic_name: "Dạng 1: Công thức xác suất toàn phần",
      questions: [
        {
          id: 1,
          question: "Một hộp kín chứa 60% phế phẩm từ máy I và 40% từ máy II. Tỉ lệ hỏng của máy I là 2%, của máy II là 5%. Chọn ngẫu nhiên một sản phẩm, xác suất để sản phẩm đó bị hỏng là:",
          options: ["$0,032$", "$0,035$", "$0,07$", "$0,025$"],
          correct: 0,
          solution: "Gọi $A$ là biến cố 'sản phẩm bị hỏng'. Theo công thức toàn phần:<br>$P(A) = 0,6 \\times 0,02 + 0,4 \\times 0,05 = 0,012 + 0,020 = 0,032$ (tức $3,2\\%$)."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 18 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Biết $P(B) = 0,3; P(A|B) = 0,8$ và xác suất toàn phần $P(A) = 0,48$. Xác suất có điều kiện $P(B|A)$ theo công thức Bayes bằng:",
        options: ["$0,5$", "$0,4$", "$0,6$", "$0,24$"],
        correct: 0,
        solution: "Theo công thức Bayes: $P(B|A) = \\dfrac{P(B) \\cdot P(A|B)}{P(A)} = \\dfrac{0,3 \\cdot 0,8}{0,48} = \\dfrac{0,24}{0,48} = 0,5$."
      }
    ]
  }
};