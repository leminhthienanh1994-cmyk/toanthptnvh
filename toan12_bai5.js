window.CURRENT_LESSON = {
  unit_title: "BÀI 5: ỨNG DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN THỰC TIỄN",
  theory: "<h4>QUY TRÌNH GIẢI BÀI TOÁN TỐI ƯU HÓA HÌNH HỌC VÀ KINH TẾ</h4><ol><li><b>Xác định đại lượng cần tối ưu:</b> Kí hiệu đại lượng cần tìm GTLN hoặc GTNN là $y$ (diện tích, thể tích, chi phí, lợi nhuận,...).</li><li><b>Chọn biến số thích hợp:</b> Gọi một đại lượng thay đổi là $x$ và tìm điều kiện thích hợp cho $x$ ($x \in (a; b)$ hoặc $x \in [a; b]$).</li><li><b>Thiết lập hàm số:</b> Biểu diễn đại lượng cần tối ưu theo biến $x$: $y = f(x)$.</li><li><b>Khảo sát hàm số:</b> Tìm GTLN hoặc GTNN của hàm số $f(x)$ trên miền xác định đã tìm và trả lời yêu cầu thực tiễn.</li></ol>",
  topics: [
    {
      topic_name: "Dạng 1: Bài toán tối ưu hóa hình học (Diện tích, thể tích)",
      questions: [
        {
          id: 1,
          question: "Một người nông dân muốn dùng 100 m hàng rào để rào quanh một mảnh đất hình chữ nhật giáp một bờ sông thẳng (không cần rào bờ sông). Diện tích lớn nhất của mảnh đất rào được là:",
          options: ["$1250\\text{ m}^2$", "$1200\\text{ m}^2$", "$2500\\text{ m}^2$", "$625\\text{ m}^2$"],
          correct: 0,
          solution: "Gọi chiều rộng vuông góc với bờ sông là $x$ ($0 < x < 50$, m).<br>Chiều dài song song bờ sông là $100 - 2x$.<br>Diện tích mảnh vườn: $S(x) = x(100 - 2x) = -2x^2 + 100x$.<br>Ta có $S'(x) = -4x + 100 = 0 \\Leftrightarrow x = 25$.<br>Suy ra $\\max S = S(25) = 25 \\times 50 = 1250\\text{ m}^2$."
        }
      ]
    },
    {
      topic_name: "Dạng 2: Bài toán tối ưu hóa kinh tế (Chi phí, doanh thu, lợi nhuận)",
      questions: [
        {
          id: 2,
          question: "Một doanh nghiệp sản xuất $x$ sản phẩm với hàm chi phí tổng cộng là $C(x) = x^2 + 40x + 1000$ (nghìn đồng). Chi phí sản xuất trung bình trên một sản phẩm $c(x) = \\dfrac{C(x)}{x}$ nhỏ nhất khi số sản phẩm $x$ bằng:",
          options: ["$x = 32$", "$x = 40$", "$x = 25$", "$x = 50$"],
          correct: 0,
          solution: "Ta có $c(x) = \\dfrac{x^2 + 40x + 1000}{x} = x + 40 + \\dfrac{1000}{x}$ với $x > 0$.<br>Đạo hàm $c'(x) = 1 - \\dfrac{1000}{x^2} = 0 \\Leftrightarrow x = \\sqrt{1000} \\approx 31,6$.<br>Vì $x \\in \\mathbb{N}^*$, ta kiểm tra $c(31) \\approx 103,26$ và $c(32) \\approx 103,25$. Vậy chi phí trung bình nhỏ nhất khi sản xuất $32$ sản phẩm."
        }
      ]
    }
  ],
  final_quiz: {
    quiz_title: "Đề tự luyện Bài 5 (15 phút)",
    questions: [
      {
        id: 1,
        question: "Từ một tấm tôn hình vuông cạnh $60\\text{ cm}$, người ta cắt bỏ bốn góc bốn hình vuông cạnh $x\\text{ cm}$ rồi gấp lên thành một chiếc hộp không nắp. Thể tích chiếc hộp lớn nhất khi $x$ bằng:",
        options: ["$10\\text{ cm}$", "$15\\text{ cm}$", "$20\\text{ cm}$", "$12\\text{ cm}$"],
        correct: 0,
        solution: "Độ dài đáy hộp là $60 - 2x$, chiều cao hộp là $x$ ($0 < x < 30$).<br>Thể tích: $V(x) = x(60 - 2x)^2 = 4x^3 - 240x^2 + 3600x$.<br>$V'(x) = 12x^2 - 480x + 3600 = 0 \\Leftrightarrow x = 10$ hoặc $x = 30$ (loại).<br>Vậy thể tích lớn nhất khi $x = 10\\text{ cm}$."
      }
    ]
  }
};