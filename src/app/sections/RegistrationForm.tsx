"use client"; // nếu bạn dùng Next.js 13+ với App Router

import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    productInterest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(
          "Cảm ơn thông tin của anh chị, chuyên viên tư vấn sẽ kết nối hỗ trợ chi tiết dự án đến anh chị nhé ạ!"
        );
      } else {
        alert("Gửi thất bại: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi gửi thông tin.");
    }
  };

  return (
    <section
      className="bg-green-900 text-white py-12 px-6 w-[80%] mx-auto rounded-lg shadow-lg bg-cover bg-center my-10"
      style={{ backgroundImage: `url('images/bg-register-vgp.jpg')` }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">
          Đăng ký tham quan, chiêm ngưỡng nhịp sống sôi động tại đại đô thị đáng
          sống bậc nhất Sài Gòn
        </h2>
        <p className="text-sm mb-6">
          Và nhận ngay giỏ hàng chính thức từ Chủ đầu tư, được ưu đãi khủng - Số
          lượng giới hạn - Đừng bỏ lỡ!
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Họ tên (*)"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 text-white bg-transparent"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại (*)"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 text-white bg-transparent"
            required
          />
          <input
            type="text"
            name="productInterest"
            placeholder="Quan tâm sản phẩm ..."
            value={formData.productInterest}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 text-white bg-transparent"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-3 px-6 rounded"
          >
            NHẬN THÔNG TIN
          </button>
        </form>
      </div>
    </section>
  );
}
