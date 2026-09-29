window.CURRENT_LESSON = {
  unit_title: "BÀI 17: XÁC SUẤT CÓ ĐIỀU KIỆN",
  theory: "<h4>I. ĐỊNH NGHĨA XÁC SUẤT CÓ ĐIỀU KIỆN</h4><p>Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra (kí hiệu $P(A|B)$) được tính bởi:<br>$$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} \\quad (\\text{với } P(B) > 0)$$</p><h4>II. CÔNG THỨC NHÂN XÁC SUẤT</h4><p>Với hai biến cố $A$ và $B$ bất kì:<br>$$P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$$</p>",
  topics: [
    {
      topic_name: "Dạng 1: Áp dụng công thức xác suất có điều kiện",
      questions: [
        {
          id: 1,
          question: "Cho hai biến cố $A$ và $B$ có $P(B) = 0,4$ và $P(A \\cap B) = 0,16$. Xác suất có điều kiện $P(A|B)$ bằng:",
          options: ["$0,4$", "$0,25$", "$0,064$", "$0,56$"],
          correct: 0,
          solution: "Áp dụng định nghĩa: $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0,16}{0,4} = 0,4$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 17 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Gieo một con xúc xắc cân đối. Biết rằng số chấm xuất hiện là số chẵn, xác suất để số chấm xuất hiện chia hết cho 3 là:",
        options: ["$\\dfrac{1}{3}$", "$\\dfrac{1}{6}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$"],
        correct: 0,
        solution: "Gọi $B$ là biến cố 'số chẵn' $\\Rightarrow B = \\{2; 4; 6\\}$. Gọi $A$ là 'chia hết cho 3'. Khi đó $A \\cap B = \\{6\\}$.<br>Vậy $P(A|B) = \\dfrac{n(A \\cap B)}{n(B)} = \\dfrac{1}{3}$."
      }
    ]
  }
};