"use client";

import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DelayedContactForm(props: Props) {
  const { open, setOpen } = props;   
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    productInterest: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
          "Cảm ơn bạn đã gửi thông tin, chuyên viên tư vấn sẽ liên hệ bạn ngay."
        );
        handleClose();
      } else {
        alert("Gửi thất bại: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi gửi thông tin.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 animate-fadeIn">
      <div
        className="bg-white w-full max-w-md mx-4 p-6 rounded-2xl shadow-2xl relative border border-yellow-600"
        style={{
          backgroundImage: `url('images/bg-register-vgp.jpg')`,
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-xl font-semibold text-white hover:text-gray-900"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          Đăng kí nhận tư vấn miễn phí
        </h3>
        <p className="text-xs mb-6 text-center text-white md:text-sm">
          Đăng ký ngay để được hỗ trợ tham quan thực tế dự án Vinhomes Grand
          Park và chọn cho mình căn hộ ưng ý nhất, an cư lạc nghiệp lâu dài.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-xs text-white md:text-sm">
          <input
            type="text"
            name="fullName"
            placeholder="Họ và tên"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 text-white bg-transparent w-full"
          >
            <option className="text-black" value="">
              Quan tâm sản phẩm ...
            </option>
            <option className="text-black" value="1Pn+">
              1 Phòng ngủ+
            </option>
            <option className="text-black" value="2Pn, 2Pn+">
              2 Phòng ngủ, 2 Phòng ngủ+
            </option>
            <option className="text-black" value="3Pn">
              3 Phòng ngủ
            </option>
          </select>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded hover:bg-yellow-600 transition"
          >
            Gửi thông tin
          </button>
        </form>
      </div>
    </div>
  );
}
