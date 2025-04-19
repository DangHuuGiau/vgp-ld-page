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
            <table className="w-full text-left text-gray-700 mb-6 text-sm md:text-base">
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
            <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base">
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
          <div className="border-l-4 border-yellow-400 shadow-lg p-4 mb-2 animate-pulse-slow rounded-lg mt-5">
            <h3 className="text-lg md:text-xl font-bold text-yellow-600 mb-2 flex items-center gap-2">
              <span role="img" aria-label="ưu đãi">🎉</span> Ưu Đãi Đặc Biệt Chỉ Có Tại Vinhomes Grand Park!
            </h3>
            <ul className="list-disc pl-6 text-sm md:text-base text-gray-800 mb-2">
              <li className="mb-1"><span role="img" aria-label="căn hộ mới">👋</span> <b>Căn hộ mới liền kề Vincom lớn nhất miền Nam</b> chỉ từ <span className="text-green-700 font-bold">2.1 tỷ/căn</span></li>
              <li className="mb-1"><span role="img" aria-label="quà tặng">🎁</span> <b>Tặng Xe Vinfast VF3</b> - Quà tặng chiết khấu đến <span className="text-red-600 font-bold">2.5 tỷ</span> (Số lượng giới hạn)</li>
              <li className="mb-1"><span role="img" aria-label="ưu đãi">✨</span> <b>Tặng gói tân gia lên tới 540 triệu đồng</b></li>
              <li className="mb-1"><span role="img" aria-label="doanh nghiệp">🏢</span> <b>Ưu đãi thêm cho KH Doanh nghiệp, cư dân Thủ Đức:</b> <span className="text-green-700 font-bold">3%</span></li>
              <li className="mb-1"><span role="img" aria-label="vinclub">💳</span> <b>Ưu đãi hội viên VinClub:</b> <span className="text-green-700 font-bold">1,7%</span></li>
              <li className="mb-1"><span role="img" aria-label="chuyển khoản">💸</span> <b>Ưu đãi dành cho KH chuyển khoản:</b> <span className="text-green-700 font-bold">đến 20.3%</span></li>
              <li className="mb-1"><span role="img" aria-label="ngân hàng">🏦</span> <b>Ngân hàng hỗ trợ vay</b> <span className="text-green-700 font-bold">70-80%</span>, HTLS 0% <span className="font-bold">18-24 tháng đầu</span></li>
            </ul>
            <div className="text-sm md:text-base text-gray-900 mb-1 font-semibold">✅ Các loại hình căn hộ:</div>
            <ul className="list-disc pl-8 text-sm md:text-base text-gray-700">
              <li>Studio: 30-34m²</li>
              <li>Căn 1PN: 46.5-54m²</li>
              <li>Căn 2PN: 59-80m²</li>
              <li>Căn 3PN: 82-100m²</li>
            </ul>
            <div className="mt-3 text-xs text-gray-500 italic">Nhanh tay liên hệ để nhận ưu đãi giới hạn và tư vấn chi tiết!</div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
          <figure>
            <Image
              src="/images/hinh-tong-quan-vgp.webp"
              alt="Tổng quan dự án Vinhomes Grand Park Quận 9"
              width={500}
              height={300}
              className="w-full h-auto"
            />
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
