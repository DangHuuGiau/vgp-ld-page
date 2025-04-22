"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    productInterest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        router.push("/success");
      } else {
        alert("Gửi thất bại: " + data.error);
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi gửi thông tin.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-green-900 text-white py-12 px-6 w-[80%] mx-auto rounded-lg shadow-lg bg-cover bg-center my-10"
      style={{ backgroundImage: `url('images/bg-register-vgp.jpg')` }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm md:text-lg font-semibold mb-2">
          Đăng ký tham quan, chiêm ngưỡng nhịp sống sôi động tại đại đô thị đáng
          sống bậc nhất Sài Gòn
        </h2>
        <p className="text-xs mb-6 md:text-sm">
          Và nhận ngay giỏ hàng chính thức từ Chủ đầu tư, được ưu đãi khủng - Số
          lượng giới hạn - Đừng bỏ lỡ!
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs md:text-sm"
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
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 text-white bg-transparent"
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
            className="bg-yellow-500 text-white font-bold py-3 px-6 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "ĐANG XỬ LÝ..." : "NHẬN THÔNG TIN"}
          </button>
        </form>
      </div>
    </section>
  );
}
