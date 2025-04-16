"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
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
        setFormData({ fullName: "", phone: "" });
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
      id="contact"
      className="text-white py-12 px-6 mx-auto shadow-lg bg-cover bg-center flex md:flex-row flex-col items-center justify-center gap-8"
    >
      <div className="md:w-1/2 mx-auto text-center flex flex-col items-center p-8 bg-white rounded-lg text-gray-700 border border-yellow-600">
        <h2 className="text-base font-semibold mb-2">
          Đăng ký tham quan dự án
        </h2>
        <p className="text-sm mb-6">
          Đăng ký ngay để được hỗ trợ tham quan thực tế dự án Vinhomes Grand
          Park và chọn cho mình căn hộ TP HCM (căn hộ Sài Gòn) ưng ý nhất, an cư
          lạc nghiệp lâu dài
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 text-sm"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Họ tên (*)"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300"
          />
          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại (*)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-3 px-6 rounded hover:bg-yellow-600 transition"
          >
            GỬI THÔNG TIN
          </button>
        </form>
      </div>
      <div className="md:w-1/2 mx-auto text-center flex flex-col items-center">
        <div className="mb-6 w-full aspect-video max-w-xl">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/yPpaqRUt8hs?si=c7C5lB4YnpTo0b8m"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
