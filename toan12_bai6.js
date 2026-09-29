window.CURRENT_LESSON = {
  unit_title: "BÀI 6: VECTƠ TRONG KHÔNG GIAN",
  theory: "<h4>I. CÁC QUY TẮC VECTƠ TRONG KHÔNG GIAN</h4><ul><li><b>Quy tắc ba điểm:</b> Với ba điểm $A, B, C$ bất kì: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</li><li><b>Quy tắc hình bình hành:</b> Nếu $ABCD$ là hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li><li><b>Quy tắc hình hộp:</b> Cho hình hộp $ABCD.A'B'C'D'$:<br>$$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$$</li><li><b>Quy tắc trung điểm, trọng tâm:</b><ul><li>$M$ là trung điểm đoạn $AB \\Leftrightarrow \\vec{OA} + \\vec{OB} = 2\\vec{OM}$ ($\forall O$).</li><li>$G$ là trọng tâm tứ diện $ABCD \\Leftrightarrow \\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 4\\vec{OG}$.</li></ul></li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Đẳng thức vectơ và quy tắc hình hộp",
      questions: [
        {
          id: 1,
          question: "Cho hình hộp $ABCD.A'B'C'D'$. Vectơ tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng vectơ nào dưới đây?",
          options: ["$\\vec{AC'}$", "$\\vec{A'C}$", "$\\vec{CA'}$", "$\\vec{BD'}$"],
          correct: 0,
          solution: "Theo quy tắc hình hộp trong không gian, đường chéo xuất phát từ đỉnh $A$ là $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 6 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tứ diện $ABCD$. Khẳng định nào sau đây là khẳng định đúng?",
        options: ["$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$", "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = 4\\vec{OG}$", "$\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$", "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$"],
        correct: 0,
        solution: "Theo định nghĩa trọng tâm tứ diện, ta có hệ thức $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$."
      }
    ]
  }
};