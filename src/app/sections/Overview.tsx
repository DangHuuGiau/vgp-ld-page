import Image from "next/image";
export default function Overview() {
  return (
    <section id="overview">
      <div
        className="text-center mb-12 w-full md:[80%] h-[100vh] bg-cover bg-center text-white flex items-end justify-end shadow-lg"
        style={{ backgroundImage: `url('images/hero-vinhomes-gp.jpg')` }}
      ></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 text-left">
          <h2 className="text-xl font-bold text-green-700 underline">
            Tổng quan dự án Vinhomes Grand Park
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4 border border-green-600 mt-4">
            <table className="w-full text-left text-gray-700 mb-6 text-xs">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="font-bold py-2">Tên dự án</td>
                  <td className="py-2 text-right">Vinhomes Grand Park</td>
                  <td className="font-bold p-2">Chủ đầu tư</td>
                  <td className="py-2 text-right">Vinhomes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-bold py-2">Hình thức sở hữu</td>
                  <td className="py-2 text-right">Sở hữu lâu dài</td>
                  <td className="font-bold p-2">Tổng diện tích</td>
                  <td className="py-2 text-right">271 ha</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-bold py-2">Mật độ xây dựng</td>
                  <td className="py-2 text-right">khoảng 22%</td>
                  <td className="font-bold p-2">Quy mô phát triển</td>
                  <td className="py-2 text-right">71 tòa căn hộ</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-bold py-2">Thời điểm khởi công</td>
                  <td className="py-2 text-right">Năm 2018</td>
                  <td className="font-bold p-2">Tiến độ</td>
                  <td className="py-2 text-right">Đang xây dựng</td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-lg font-bold text-green-700 mb-4">
              Điểm nổi bật Vinhomes Grand Park
            </h3>
            <ul className="list-disc pl-6 text-gray-700 text-xs">
              <li className="mb-2">
                <span className="font-bold">Vị trí tiềm năng:</span> Vinhomes
                Grand Park sở hữu “tọa độ vàng” của một dự án bất động sản đáng
                mơ ước, “cận giang, cận lộ”. Trong đó, với địa thế phong thủy
                tuyệt đẹp mang tài lộc và may mắn, với 2 mặt giáp sông gồm sông
                Tắc và sông Đồng Nai, cho không gian sinh thái hài hòa với thiên
                nhiên.
              </li>
              <li>
                <span className="font-bold">Thành phố công viên:</span> Lấy cảm
                hứng về một miền thiên nhiên thuần khiết ngay trong lòng đô thị,
                Đại công viên ven sông rộng 36ha ra đời với mô hình tích hợp
                nhiều công viên trong 1 công viên. Cư dân có thể trải nghiệm,
                khám phá tới 15 công viên tiện ích chủ đề.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/hinh-tong-quan-vgp.webp"
            alt="Vinhomes Grand Park Overview"
            width={600}
            height={400}
            className=" w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
