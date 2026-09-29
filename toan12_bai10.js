window.CURRENT_LESSON = {
  unit_title: "BÀI 10: PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN CỦA MẪU SỐ LIỆU GHÉP NHÓM",
  theory: "<h4>CÔNG THỨC TÍNH PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN</h4><ul><li><b>Giá trị đại diện:</b> Nhóm $[a_i; a_{i+1})$ có giá trị đại diện là $c_i = \\dfrac{a_i + a_{i+1}}{2}$.</li><li><b>Số trung bình:</b> $\\bar{x} = \\dfrac{1}{n}(m_1c_1 + m_2c_2 + ... + m_kc_k)$.</li><li><b>Phương sai:</b> $s^2 = \\dfrac{1}{n} \\sum_{i=1}^k m_i (c_i - \\bar{x})^2 = \\dfrac{1}{n}\\sum_{i=1}^k m_i c_i^2 - (\\bar{x})^2$.</li><li><b>Độ lệch chuẩn:</b> $s = \\sqrt{s^2}$.</li></ul>",
  topics: [
    {
      topic_name: "Dạng 1: Tính số trung bình và phương sai mẫu ghép nhóm",
      questions: [
        {
          id: 1,
          question: "Giá trị đại diện của nhóm ghép $[40; 50)$ trong bảng số liệu là:",
          options: ["$45$", "$40$", "$50$", "$10$"],
          correct: 0,
          solution: "Giá trị đại diện $c_i = \\dfrac{40 + 50}{2} = 45$."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 10 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Một mẫu ghép nhóm có phương sai tính được là $s^2 = 16$. Độ lệch chuẩn $s$ của mẫu này là:",
        options: ["$4$", "$256$", "$8$", "$2$"],
        correct: 0,
        solution: "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{16} = 4$."
      }
    ]
  }
};