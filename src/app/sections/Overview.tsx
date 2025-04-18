import Image from "next/image";
export default function Overview() {
  return (
    <section id="overview" className="py-5">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] text-white flex items-end justify-end shadow-lg">
        <Image
          src="/images/hero-vinhomes-gp.webp"
          alt="Tổng quan Vinhomes Grand Park Quận 9"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 italic text-yellow-400">Vinhomes Grand Park</h1>
          <p className="text-sm md:text-base max-w-2xl">Đại đô thị đẳng cấp quốc tế với hệ sinh thái tiện ích hoàn hảo và môi trường sống lý tưởng</p>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 mt-5">
        <div className="md:w-1/2 text-left">
          <h2 className="text-base md:text-2xl font-bold text-green-700 underline mb-4">
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
            <h3 className="text-base md:text-lg font-bold text-green-700 mb-4">
              Điểm nổi bật Vinhomes Grand Park
            </h3>
            <ul className="list-disc pl-6 text-gray-700 text-xs">
              <li className="mb-2">
                <span className="font-bold">Vị trí tiềm năng:</span> Căn hộ Vinhomes Grand Park Quận 9
                sở hữu &quot;tọa độ vàng&quot; của một dự án bất động sản đẳng cấp
                tại Thành phố Thủ Đức, &quot;cận giang, cận lộ&quot;. Với địa thế phong thủy
                tuyệt đẹp mang tài lộc và may mắn, 2 mặt giáp sông gồm sông
                Tắc và sông Đồng Nai, mang đến không gian sinh thái hài hòa với thiên
                nhiên, lý tưởng cho cư dân thành phố.
              </li>
              <li className="mb-2">
                <span className="font-bold">Thành phố công viên:</span> Lấy cảm
                hứng về một miền thiên nhiên thuần khiết ngay trong lòng đô thị,
                Đại công viên ven sông rộng 36ha ra đời với mô hình tích hợp
                nhiều công viên trong 1 công viên. Cư dân có thể trải nghiệm,
                khám phá tới 15 công viên tiện ích chủ đề, đây là điểm nhấn độc đáo
                khiến Vinhomes Grand Park trở thành lựa chọn hàng đầu cho người mua căn hộ tại Quận 9.
              </li>
              <li className="mb-2">
                <span className="font-bold">Tiện ích đẳng cấp quốc tế:</span> Vinhomes Grand Park
                được đầu tư bài bản với hệ thống tiện ích đẳng cấp 5 sao, từ trường học quốc tế,
                bệnh viện Vinmec, trung tâm thương mại Vincom Mega Mall, đến hệ thống an ninh 24/7,
                đáp ứng mọi nhu cầu sống của cư dân hiện đại.
              </li>
              <li>
                <span className="font-bold">Cơ hội đầu tư:</span> Căn hộ Vinhomes Grand Park
                không chỉ là nơi an cư lý tưởng mà còn là tài sản đầu tư sinh lời hiệu quả
                với tiềm năng tăng giá mạnh mẽ nhờ vị trí đắc địa và uy tín từ chủ đầu tư Vingroup.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2">
          <figure>
            <Image
              src="/images/hinh-tong-quan-vgp.webp"
              alt="Tổng quan dự án Vinhomes Grand Park Quận 9"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <figcaption className="text-xs text-center mt-2 text-gray-600">Phối cảnh tổng thể dự án Vinhomes Grand Park Quận 9</figcaption>
          </figure>
          <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-md">
            <h4 className="text-sm font-bold text-green-700 mb-2">Dịch vụ tư vấn mua bán căn hộ Vinhomes Grand Park</h4>
            <p className="text-xs text-gray-700">Chúng tôi cung cấp dịch vụ tư vấn mua bán, cho thuê căn hộ chính chủ với giá tốt nhất. Hỗ trợ thủ tục pháp lý, vay vốn ngân hàng lãi suất ưu đãi. Liên hệ ngay để được tư vấn miễn phí!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
