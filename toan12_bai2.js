window.CURRENT_LESSON = {
  unit_title: "BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ",
  theory: "<h4>I. ĐỊNH NGHĨA</h4><p>Cho hàm số $y = f(x)$ xác định trên tập hợp $D$:</p><ul><li>Số $M$ gọi là <b>giá trị lớn nhất</b> (GTLN) của $f(x)$ trên $D$ nếu $f(x) \\le M, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$. Kí hiệu: $M = \\max_{D} f(x)$.</li><li>Số $m$ gọi là <b>giá trị nhỏ nhất</b> (GTNN) của $f(x)$ trên $D$ nếu $f(x) \\ge m, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = m$. Kí hiệu: $m = \\min_{D} f(x)$.</li></ul><h4>II. CÁCH TÌM GTLN, GTNN TRÊN ĐOẠN $[a; b]$</h4><ol><li>Tìm các điểm $x_1, x_2, ..., x_n \\in (a; b)$ mà tại đó $f'(x) = 0$ hoặc $f'(x)$ không xác định.</li><li>Tính các giá trị: $f(a), f(b), f(x_1), f(x_2), ..., f(x_n)$.</li><li>So sánh và kết luận: Số lớn nhất là $\\max_{[a; b]} f(x)$, số nhỏ nhất là $\\min_{[a; b]} f(x)$.</li></ol>",
  topics: [
    {
      topic_name: "Dạng 1: Tìm GTLN và GTNN trên đoạn $[a; b]$",
      questions: [
        {
          id: 1,
          question: "Giá trị lớn nhất của hàm số $y = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng:",
          options: ["$4$", "$2$", "$0$", "$1$"],
          correct: 0,
          solution: "Ta có $y' = 3x^2 - 3$. Cho $y' = 0 \\Leftrightarrow x = \\pm 1$. Vì xét trên đoạn $[0; 2]$ nên ta nhận $x = 1$.<br>Tính các giá trị biên và điểm dừng: $y(0) = 2;\\; y(1) = 0;\\; y(2) = 4$.<br>Vậy $\\max_{[0; 2]} y = 4$ tại $x = 2$."
        },
        {
          id: 2,
          question: "Giá trị nhỏ nhất của hàm số $y = \\dfrac{x - 1}{x + 1}$ trên đoạn $[0; 3]$ bằng:",
          options: ["$-1$", "$\\dfrac{1}{2}$", "$0$", "$-2$"],
          correct: 0,
          solution: "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$. Đoạn $[0; 3] \\subset D$.<br>Đạo hàm: $y' = \\dfrac{2}{(x + 1)^2} > 0, \\forall x \\in [0; 3]$. Do đó hàm số đồng biến trên $[0; 3]$.<br>Vậy giá trị nhỏ nhất đạt tại đầu mút trái: $\\min_{[0; 3]} y = y(0) = -1$."
        }
      ]
    },
    {
      topic_name: "Dạng 2: Tìm GTLN và GTNN trên khoảng hoặc nửa khoảng",
      questions: [
        {
          id: 3,
          question: "Giá trị nhỏ nhất của hàm số $y = x + \\dfrac{4}{x}$ trên khoảng $(0; +\\infty)$ là:",
          options: ["$4$", "$2$", "$5$", "$0$"],
          correct: 0,
          solution: "Với mọi $x > 0$, áp dụng bất đẳng thức Cauchy cho hai số dương $x$ và $\\dfrac{4}{x}$:<br>$$y = x + \\dfrac{4}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{4}{x}} = 4$$Dấu đẳng thức xảy ra khi $x = \\dfrac{4}{x} \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = 2$ (do $x > 0$). Vậy $\\min_{(0; +\\infty)} y = 4$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 2 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Giá trị lớn nhất của hàm số $y = -x^4 + 2x^2 + 3$ trên đoạn $[0; 2]$ bằng:",
        options: ["$4$", "$3$", "$-5$", "$1$"],
        correct: 0,
        solution: "Ta có $y' = -4x^3 + 4x = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm 1$. Trên $[0; 2]$, nhận $x = 0$ và $x = 1$.<br>Tính giá trị: $y(0) = 3;\\; y(1) = 4;\\; y(2) = -5$. Vậy GTLN là $4$."
      },
      {
        id: 2,
        question: "Gọi $M, m$ lần lượt là GTLN và GTNN của hàm số $y = \\dfrac{2x + 1}{x - 2}$ trên đoạn $[3; 5]$. Giá trị của $M + m$ bằng:",
        options: ["$\\dfrac{32}{3}$", "$\\dfrac{22}{3}$", "$8$", "$10$"],
        correct: 0,
        solution: "Ta có $y' = \\dfrac{-5}{(x - 2)^2} < 0, \\forall x \\in [3; 5]$. Hàm số nghịch biến trên $[3; 5]$.<br>Do đó $M = y(3) = 7$ và $m = y(5) = \\dfrac{11}{3}$. Suy ra $M + m = 7 + \\dfrac{11}{3} = \\dfrac{32}{3}$."
      },
      {
        id: 3,
        question: "Biết giá trị lớn nhất của hàm số $y = x^3 - 3x + m$ trên đoạn $[0; 2]$ bằng $5$. Tham số $m$ bằng:",
        options: ["$3$", "$5$", "$1$", "$-1$"],
        correct: 0,
        solution: "$y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. Ta có $y(0) = m;\\; y(1) = m - 2;\\; y(2) = m + 2$.<br>Do đó $\\max_{[0; 2]} y = m + 2 = 5 \\Leftrightarrow m = 3$."
      }
    ]
  }
};