window.CURRENT_LESSON = {
  unit_title: "CHUYÊN ĐỀ: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ",
  theory: "<h4>I. TÓM TẮT LÝ THUYẾT TRỌNG TÂM</h4><h5>1. Tính đơn điệu của hàm số</h5><ul><li>Cho hàm số $y = f(x)$ xác định và có đạo hàm trên khoảng $K$:<ul><li>Nếu $f'(x) > 0, \\forall x \\in K$ thì hàm số $f(x)$ <b>đồng biến</b> (tăng) trên $K$.</li><li>Nếu $f'(x) < 0, \\forall x \\in K$ thì hàm số $f(x)$ <b>nghịch biến</b> (giảm) trên $K$.</li><li>Nếu $f'(x) = 0, \\forall x \\in K$ thì hàm số $f(x)$ là hàm hằng (không đổi) trên $K$.</li></ul></li><li><i>Mở rộng:</i> Nếu $f'(x) \\ge 0$ (hoặc $f'(x) \\le 0$), $\\forall x \\in K$ và đẳng thức $f'(x) = 0$ chỉ xảy ra tại một số hữu hạn điểm thì hàm số đồng biến (hoặc nghịch biến) trên $K$.</li></ul><h5>2. Cực trị của hàm số</h5><ul><li><b>Định nghĩa:</b> Giả sử hàm số $y=f(x)$ xác định trên $D$ và $x_0 \\in D$:<ul><li>Nếu tồn tại khoảng $(a;b) \\subset D$ chứa $x_0$ sao cho $f(x) < f(x_0), \\forall x \\in (a;b) \\setminus \\{x_0\\}$ thì $x_0$ là điểm cực đại của hàm số.</li><li>Nếu tồn tại khoảng $(a;b) \\subset D$ chứa $x_0$ sao cho $f(x) > f(x_0), \\forall x \\in (a;b) \\setminus \\{x_0\\}$ thì $x_0$ là điểm cực tiểu của hàm số.</li></ul></li><li><b>Dấu hiệu 1 (Đổi dấu đạo hàm cấp 1):</b> Giả sử $f(x)$ liên tục trên $(a;b)$ chứa $x_0$ và có đạo hàm trên $(a;b) \\setminus \\{x_0\\}$:<ul><li>Nếu $f'(x)$ đổi dấu từ dương sang âm khi $x$ qua $x_0$ thì $x_0$ là <b>điểm cực đại</b>.</li><li>Nếu $f'(x)$ đổi dấu từ âm sang dương khi $x$ qua $x_0$ thì $x_0$ là <b>điểm cực tiểu</b>.</li></ul></li><li><b>Dấu hiệu 2 (Sử dụng đạo hàm cấp 2):</b> Giả sử $f'(x_0) = 0$ và $f''(x_0)$ tồn tại:<ul><li>Nếu $f''(x_0) < 0$ thì $x_0$ là điểm cực đại.</li><li>Nếu $f''(x_0) > 0$ thì $x_0$ là điểm cực tiểu.</li></ul></li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Xét tính đơn điệu của hàm số cho bởi công thức",
      questions: [
        {
          id: 1,
          question: "Hàm số $y = -x^3 + 3x^2 - 1$ đồng biến trên khoảng nào dưới đây?",
          options: ["$(0; 2)$", "$(-\\infty; 0)$", "$(2; +\\infty)$", "$(-\\infty; 2)$"],
          correct: 0,
          solution: "Tập xác định: $D = \\mathbb{R}$.<br>Ta có $y' = -3x^2 + 6x$.<br>Giải phương trình: $y' = 0 \\Leftrightarrow -3x(x - 2) = 0 \\Leftrightarrow \\left[\\begin{aligned} x &= 0 \\\\ x &= 2 \\end{aligned}\\right.$<br>Xét dấu đạo hàm $y'$: Ta thấy $y' > 0 \\Leftrightarrow x \\in (0; 2)$.<br>Vậy hàm số đồng biến trên khoảng $(0; 2)$."
        },
        {
          "id": 2,
          "question": "Cho hàm số $y = \\dfrac{2x - 1}{x + 1}$. Khẳng định nào sau đây là khẳng định đúng?",
          "options": [
            "Hàm số đồng biến trên từng khoảng xác định.",
            "Hàm số nghịch biến trên từng khoảng xác định.",
            "Hàm số đồng biến trên khoảng $(-\\infty; +\\infty)$.",
            "Hàm số nghịch biến trên $\\mathbb{R} \\setminus \\{-1\\}$."
          ],
          "correct": 0,
          "solution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.<br>Đạo hàm: $y' = \\dfrac{2 \\cdot 1 - (-1) \\cdot 1}{(x + 1)^2} = \\dfrac{3}{(x + 1)^2} > 0, \\forall x \\neq -1$.<br>Do đó hàm số đồng biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$."
        }
      ]
    },
    {
      topic_name: "Dạng 2: Tìm cực trị của hàm số cơ bản",
      questions: [
        {
          id: 3,
          question: "Điểm cực đại của đồ thị hàm số $y = x^3 - 3x + 2$ là:",
          options: ["$M(-1; 4)$", "$N(1; 0)$", "$P(-1; 0)$", "$Q(1; 4)$"],
          correct: 0,
          solution: "Tập xác định: $D = \\mathbb{R}$.<br>Đạo hàm: $y' = 3x^2 - 3 = 3(x^2 - 1)$; $y' = 0 \\Leftrightarrow x = \\pm 1$.<br>Bảng biến thiên cho thấy đạo hàm $y'$ đổi dấu từ dương sang âm khi qua điểm $x = -1$.<br>Với $x = -1 \\Rightarrow y = (-1)^3 - 3(-1) + 2 = 4$.<br>Vậy điểm cực đại của <i>đồ thị</i> hàm số là $M(-1; 4)$."
        },
        {
          id: 4,
          question: "Số điểm cực trị của hàm số $y = x^4 - 2x^2 + 3$ là:",
          options: ["$3$", "$1$", "$2$", "$0$"],
          correct: 0,
          solution: "Tập xác định: $D = \\mathbb{R}$.<br>Đạo hàm: $y' = 4x^3 - 4x = 4x(x^2 - 1)$.<br>Phương trình $y' = 0 \\Leftrightarrow \\left[\\begin{aligned} x &= 0 \\\\ x &= \\pm 1 \\end{aligned}\\right.$<br>Vì $y'=0$ có $3$ nghiệm đơn phân biệt nên đạo hàm đổi dấu $3$ lần qua các nghiệm này. Do đó hàm số có 3 điểm cực trị."
        }
      ]
    },
    {
      topic_name: "Dạng 3: Bài toán tìm tham số $m$ liên quan đến đơn điệu và cực trị",
      questions: [
        {
          id: 5,
          question: "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\dfrac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 3$ đạt cực đại tại $x = 1$.",
          options: ["$m = 3$", "$m = -1$", "$m = 3$ hoặc $m = -1$", "$m = 1$"],
          correct: 0,
          solution: "Đạo hàm bậc nhất: $y' = x^2 - 2mx + m^2 - 4$.<br>Đạo hàm bậc hai: $y'' = 2x - 2m$.<br>Hàm số đạt cực đại tại $x = 1$, điều kiện cần là:<br>$$y'(1) = 0 \\Leftrightarrow 1 - 2m + m^2 - 4 = 0 \\Leftrightarrow m^2 - 2m - 3 = 0 \\Leftrightarrow \\left[\\begin{aligned} m &= -1 \\\\ m &= 3 \\end{aligned}\\right.$$Kiểm tra lại bằng đạo hàm cấp 2:<ul><li>Với $m = -1 \\Rightarrow y''(1) = 2(1) - 2(-1) = 4 > 0$ (hàm số đạt cực tiểu, loại).</li><li>Với $m = 3 \\Rightarrow y''(1) = 2(1) - 2(3) = -4 < 0$ (hàm số đạt cực đại, nhận).</li></ul>Vậy $m = 3$ thỏa mãn yêu cầu bài toán."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện tổng hợp (Thời gian: 15 phút)",
    questions: [
      {
        id: 1,
        question: "Hàm số $y = x^4 - 4x^2 + 1$ nghịch biến trên khoảng nào dưới đây?",
        options: ["$(-\\infty; -\\sqrt{2})$", "$(-\\sqrt{2}; 0)$", "$(0; \\sqrt{2})$", "$(-\\sqrt{2}; \\sqrt{2})$"],
        correct: 0,
        solution: "Ta có $y' = 4x^3 - 8x = 4x(x^2 - 2)$. Cho $y' = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm\\sqrt{2}$. Dựa vào bảng xét dấu, hàm số nghịch biến trên $(-\\infty; -\\sqrt{2})$ và $(0; \\sqrt{2})$."
      },
      {
        id: 2,
        question: "Cho hàm số $y = f(x)$ có bảng xét dấu của $f'(x)$ như sau:<br><div style='overflow-x:auto; margin: 10px 0;'><table border='1' cellpadding='6' style='border-collapse:collapse; text-align:center; margin:auto;'><tr><td>$x$</td><td>$-\\infty$</td><td></td><td>$-2$</td><td></td><td>$0$</td><td></td><td>$2$</td><td></td><td>$+\\infty$</td></tr><tr><td>$f'(x)$</td><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td>$0$</td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr></table></div>Hàm số đã cho có bao nhiêu điểm cực trị?",
        options: ["$3$", "$2$", "$1$", "$0$"],
        correct: 0,
        solution: "Đạo hàm $f'(x)$ đổi dấu $3$ lần khi qua các điểm $x = -2$, $x = 0$, $x = 2$ nên hàm số có $3$ điểm cực trị."
      },
      {
        id: 3,
        question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\dfrac{x + m}{x + 1}$ đồng biến trên từng khoảng xác định.",
        options: ["$m < 1$", "$m > 1$", "$m \\le 1$", "$m \\ge 1$"],
        correct: 0,
        solution: "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$. Ta có $y' = \\dfrac{1 - m}{(x + 1)^2}$. Để hàm số đồng biến trên từng khoảng xác định thì $y' > 0, \\forall x \\neq -1 \\Leftrightarrow 1 - m > 0 \\Leftrightarrow m < 1$."
      },
      {
        id: 4,
        question: "Đồ thị hàm số $y = x^3 - 3x^2 + 2$ có điểm cực tiểu là:",
        options: ["$(2; -2)$", "$(0; 2)$", "$(2; 2)$", "$(-2; 2)$"],
        correct: 0,
        solution: "Ta có $y' = 3x^2 - 6x = 3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Bảng biến thiên cho thấy điểm cực tiểu của hàm số là $x = 2 \\Rightarrow y(2) = 2^3 - 3\\cdot 2^2 + 2 = -2$. Vậy điểm cực tiểu của đồ thị là $(2; -2)$."
      },
      {
        id: 5,
        question: "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x + 2$ có hai điểm cực trị?",
        options: ["$\\forall m \\in \\mathbb{R}$", "$m \\neq 0$", "$m > 1$", "$m < -1$"],
        correct: 0,
        solution: "Tập xác định: $D = \\mathbb{R}$. Ta có $y' = 3x^2 - 6mx + 3(m^2 - 1)$. Phương trình $y' = 0 \\Leftrightarrow x^2 - 2mx + m^2 - 1 = 0$. Hàm số có hai điểm cực trị khi phương trình $y' = 0$ có 2 nghiệm phân biệt $\\Leftrightarrow \\Delta' = m^2 - (m^2 - 1) = 1 > 0$ (luôn đúng với mọi $m \\in \\mathbb{R}$)."
      }
    ]
  }
};