window.CURRENT_LESSON = {
  unit_title: "BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN",
  theory: "<h4>I. PHƯƠNG TRÌNH THAM SỐ VÀ CHÍNH TẮC</h4><p>Đường thẳng $d$ đi qua điểm $M(x_0; y_0; z_0)$ và có VTCP $\\vec{u} = (a; b; c)$:</p><ul><li><b>Phương trình tham số:</b><br>$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$</li><li><b>Phương trình chính tắc</b> ($a, b, c \\neq 0$):<br>$$\\dfrac{x - x_0}{a} = \\dfrac{y - y_0}{b} = \\dfrac{z - z_0}{c}$$</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Viết phương trình tham số và chính tắc của đường thẳng",
      questions: [
        {
          id: 1,
          question: "Đường thẳng $d$ đi qua $A(1; -3; 2)$ và có VTCP $\\vec{u} = (2; -1; 4)$ có phương trình chính tắc là:",
          options: ["$\\dfrac{x - 1}{2} = \\dfrac{y + 3}{-1} = \\dfrac{z - 2}{4}$", "$\\dfrac{x + 1}{2} = \\dfrac{y - 3}{-1} = \\dfrac{z + 2}{4}$", "$\\dfrac{x - 2}{1} = \\dfrac{y + 1}{-3} = \\dfrac{z - 4}{2}$", "$\\dfrac{x - 1}{2} = \\dfrac{y - 3}{-1} = \\dfrac{z - 2}{4}$"],
          correct: 0,
          solution: "Phương trình chính tắc dạng $\\dfrac{x - x_0}{a} = \\dfrac{y - y_0}{b} = \\dfrac{z - z_0}{c} \\Rightarrow \\dfrac{x - 1}{2} = \\dfrac{y + 3}{-1} = \\dfrac{z - 2}{4}$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 15 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 2 - t \\\\ y = 1 + 3t \\\\ z = -2t \\end{cases}$. Một vectơ chỉ phương của $d$ là:",
        options: ["$\\vec{u} = (-1; 3; -2)$", "$\\vec{u} = (2; 1; 0)$", "$\\vec{u} = (1; 3; 2)$", "$\\vec{u} = (-1; 3; 2)$"],
        correct: 0,
        solution: "Các hệ số đi cùng tham số $t$ chính là tọa độ VTCP: $\\vec{u} = (-1; 3; -2)$."
      }
    ]
  }
};