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
          id: 2,
          question: "Cho hàm số $y = \\dfrac{2x - 1}{x + 1}$. Khẳng định nào sau đây là khẳng định đúng?",
          options: [
            "Hàm số đồng biến trên từng khoảng xác định.",
            "Hàm số nghịch biến trên từng khoảng xác định.",
            "Hàm số đồng biến trên khoảng $(-\\infty; +\\infty)$.",
            "Hàm số nghịch biến trên $\\mathbb{R} \\setminus \\{-1\\}$."
          ],
          correct: 0,
          solution: "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.<br>Đạo hàm: $y' = \\dfrac{2 \\cdot 1 - (-1) \\cdot 1}{(x + 1)^2} = \\dfrac{3}{(x + 1)^2} > 0, \\forall x \\neq -1$.<br>Do đó hàm số đồng biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$."
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
        question: "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ:<br><div style='overflow-x:auto; margin: 10px 0;'><table border='1' cellpadding='6' style='border-collapse:collapse; text-align:center; margin:auto;'><tr><td>$x$</td><td>$-\\infty$</td><td></td><td>$-2$</td><td></td><td>$2$</td><td></td><td>$+\\infty$</td></tr><tr><td>$f'(x)$</td><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td style='border-left: 3px double black; border-right: 3px double black;'></td><td>$+$</td><td></td></tr><tr><td>$f(x)$</td><td>$+\\infty$</td><td>$\\searrow$</td><td>$1$</td><td>$\\nearrow$</td><td style='border-left: 3px double black; border-right: 3px double black;'>$+\\infty$ | $-\\infty$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr></table></div>Hàm số đồng biến trên khoảng nào dưới đây?",
        options: ["$(-2; +\\infty)$", "$(-1; 1)$", "$(-\\infty; 0)$", "$(-1; 3)$"],
        correct: 1, // Đáp án đúng là (-1; 1)
        solution: "Theo bảng biến thiên, hàm số đồng biến trên khoảng $(-2; 2)$.<br>Vì $(-1; 1) \\subset (-2; 2)$ nên hàm số cũng đồng biến trên khoảng $(-1; 1)$."
      },
      {
        id: 2,
        question: "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:<br><div style='overflow-x:auto; margin: 10px 0;'><table border='1' cellpadding='6' style='border-collapse:collapse; text-align:center; margin:auto;'><tr><td>$x$</td><td>$-\\infty$</td><td></td><td>$1$</td><td></td><td>$2$</td><td></td><td>$+\\infty$</td></tr><tr><td>$y'$</td><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr><tr><td>$y$</td><td>$-\\infty$</td><td>$\\nearrow$</td><td>$3$</td><td>$\\searrow$</td><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr></table></div>Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
        options: ["$(-\\infty; 3)$", "$(0; +\\infty)$", "$(2; +\\infty)$", "$(1; 2)$"],
        correct: 2, // Đáp án đúng là (2; +\\infty)
        solution: "Dựa vào bảng biến thiên, ta thấy $y' > 0$ trên các khoảng $(-\\infty; 1)$ và $(2; +\\infty)$. Do đó hàm số đồng biến trên $(-\\infty; 1)$ và $(2; +\\infty)$."
      },
      {
        id: 3,
        question: "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên như sau:<br><div style='overflow-x:auto; margin: 10px 0;'><table border='1' cellpadding='6' style='border-collapse:collapse; text-align:center; margin:auto;'><tr><td>$x$</td><td>$-\\infty$</td><td></td><td>$-2$</td><td></td><td>$0$</td><td></td><td>$2$</td><td></td><td>$+\\infty$</td></tr><tr><td>$y'$</td><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td>$0$</td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr><tr><td>$y$</td><td>$-\\infty$</td><td>$\\nearrow$</td><td>$3$</td><td>$\\searrow$</td><td>$-1$</td><td>$\\nearrow$</td><td>$3$</td><td>$\\searrow$</td><td>$-\\infty$</td></tr></table></div>Hàm số $y=f(x)$ nghịch biến trên khoảng nào dưới đây?",
        options: ["$(0; +\\infty)$", "$(-\\infty; -2)$", "$(-2; 0)$", "$(0; 2)$"],
        correct: 2, // Đáp án đúng là (-2; 0)
        solution: "Dựa vào bảng biến thiên của hàm số $y=f(x)$, ta thấy $y' \\le 0$ trên $(-2; 0)$ và $(2; +\\infty)$. Do đó hàm số nghịch biến trên $(-2; 0)$ và $(2; +\\infty)$."
      },
      {
        id: 4,
        question: "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:<br><div style='overflow-x:auto; margin: 10px 0;'><table border='1' cellpadding='6' style='border-collapse:collapse; text-align:center; margin:auto;'><tr><td>$x$</td><td>$-\\infty$</td><td></td><td>$-3$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr><tr><td>$y'$</td><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr><tr><td>$y$</td><td>$+\\infty$</td><td>$\\searrow$</td><td>$-28$</td><td>$\\nearrow$</td><td>$4$</td><td>$\\searrow$</td><td>$-\\infty$</td></tr></table></div>Hàm số đã cho nghịch biến trên khoảng nào sau đây?",
        options: ["$(-3; +\\infty)$", "$(1; +\\infty)$", "$(-3; 1)$", "$(-\\infty; 1)$"],
        correct: 1, // Đáp án đúng là (1; +\\infty)
        solution: "Từ bảng biến thiên, ta thấy $y' < 0$ trên các khoảng $(-\\infty; -3)$ và $(1; +\\infty)$. Do đó hàm số nghịch biến trên $(-\\infty; -3)$ và $(1; +\\infty)$."
      },
      {
        id: 5,
      question: "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 520 180' width='100%' style='max-width:520px; font-family:serif; font-size:15px; user-select:none; background:#fff;'><rect x='1' y='1' width='518' height='178' fill='none' stroke='#333' stroke-width='1.5'/><line x1='70' y1='0' x2='70' y2='180' stroke='#333' stroke-width='1.5'/><line x1='0' y1='40' x2='520' y2='40' stroke='#333' stroke-width='1.5'/><line x1='0' y1='80' x2='520' y2='80' stroke='#333' stroke-width='1.5'/><text x='35' y='26' text-anchor='middle' font-style='italic'>x</text><text x='105' y='26' text-anchor='middle'>-∞</text><text x='230' y='26' text-anchor='middle'>1</text><text x='355' y='26' text-anchor='middle'>2</text><text x='485' y='26' text-anchor='middle'>+∞</text><text x='35' y='66' text-anchor='middle' font-style='italic'>f '(x)</text><text x='167' y='66' text-anchor='middle'>+</text><text x='230' y='66' text-anchor='middle'>0</text><text x='292' y='66' text-anchor='middle'>-</text><text x='355' y='66' text-anchor='middle'>0</text><text x='420' y='66' text-anchor='middle'>+</text><text x='35' y='135' text-anchor='middle' font-style='italic'>f(x)</text><defs><marker id='arr5' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1.5 L 8 5 L 0 8.5 z' fill='#333'/></marker></defs><text x='105' y='165' text-anchor='middle'>-∞</text><text x='230' y='105' text-anchor='middle'>2</text><text x='355' y='165' text-anchor='middle'>-1</text><text x='485' y='105' text-anchor='middle'>+∞</text><line x1='125' y1='158' x2='215' y2='108' stroke='#333' stroke-width='1.5' marker-end='url(#arr5)'/><line x1='245' y1='108' x2='340' y2='158' stroke='#333' stroke-width='1.5' marker-end='url(#arr5)'/><line x1='370' y1='158' x2='465' y2='108' stroke='#333' stroke-width='1.5' marker-end='url(#arr5)'/></svg></div>Hàm số nghịch biến trên khoảng nào sau đây?",        
        options: ["$(-\\infty; 1)$", "$(2; +\\infty)$", "$(0; 3)$", "$(1; 2)$"],
        correct: 3, // Đáp án đúng là (1; 2)
        solution: "Từ bảng biến thiên, ta thấy đạo hàm $f'(x) < 0$ với mọi $x \\in (1; 2)$. Do đó hàm số nghịch biến trên khoảng $(1; 2)$."
      }
    ]
  }
};
