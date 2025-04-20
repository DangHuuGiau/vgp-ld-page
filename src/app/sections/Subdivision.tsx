import Image from "next/image";

interface Props {
  setOpen: (open: boolean) => void;
}
export default function Subdivision(props: Props) {
  const { setOpen } = props;

  return (
    <section id="subdivision">
      <div className="md:px-52 my-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-left">
            <h2 className="text-xl font-bold text-green-700 underline">
              Các phân khu đang mở bán
            </h2>
            <p className="text-gray-700 text-xs mb-4">
              Hiện tại Vinhomes Grand Park đang là dự án có đa dạng loại hình
              sản phẩm, nhiều phân khúc giá đi kèm chính sách ưu đãi hấp dẫn để
              khách hàng dễ dàng sở hữu nhà an cư, đầu tư ở TP HCM.
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-xs">
              <li className="mb-2">
                <span className="font-bold text-green-700">
                  Phân khúc trung cấp:
                </span>{" "}
                Khu căn hộ có vườn Nhật xanh mướt, sẵn nhà, sẵn sổ giá từ 47
                triệu/m2 (từ 3,2 tỷ/2PN 68m2 rộng rãi)
              </li>
              <li>
                <span className="font-bold text-green-700">
                  Phân khúc cao cấp:
                </span>{" "}
                Khu căn hộ hạng sang liền kề Vincom, trực diện Công viên Grand
                Park giá từ 65 triệu/m2 (từ 4,4 tỷ/căn chưa trừ ưu đãi)
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/subdivision/sale-subdivision.png"
              alt="Vinhomes Grand Park Overview"
              width={300}
              height={300}
              className=" w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div
        className="relative text-white py-12 px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/subdivision/the-origami-bg-vgp.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 space-y-2">
            <div className="mb-4">
              <div className="flex gap-4">
                <Image
                  src="/images/subdivision/origami-logo-vgp.webp"
                  alt="The Origami"
                  width={100}
                  height={100}
                  className="inline-block"
                />
                <div className="border"></div>
                <div className="italic text-yellow-500">
                  <h2 className="text-xl font-bold mt-2 ">THE ORIGAMI</h2>
                  <p className="text-sm font-semibold text-w-500">
                    Căn hộ Vinhomes giá tốt nhất thị trường
                  </p>
                  <p className="text-sm font-semibold text-w-500">
                    Giá chỉ từ 48tr/m2
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-6 text-stone-200 text-xs">
              <li className="mb-2">
                {`TT theo tiến độ vẫn được áp dụng ƯU ĐÃI lên đến 24% => Tính ra mức giá sau ưu đãi chỉ từ `}
                <span className="font-bold">3,2 tỷ/căn 2PN rộng đến 68m2</span>
              </li>
              <li className="mb-2">Tặng gói nội thất lên đến 250 triệu đồng</li>
              <li className="mb-2">
                Căn hộ có vườn Nhật xanh mướt đủ loại nhà, hồ cá Koi, có cư dân
                về ở nhộn nhịp
              </li>
              <li className="mb-2">
                Hệ thống 24 trường công lập và quốc tế, công viên giải trí,
                Vincom,... chỉ cách nhà 5 phút di chuyển
              </li>
              <li className="mb-2">
                Tiện ích đủ đầy, dưới chân nhà là siêu thị, phòng gym, sân thể
                thao, công viên nội khu, hồ cá Koi...
              </li>
            </ul>
            <div className="border"></div>
            <p className="italic text-base font-bold animate-glow-text text-yellow-400">Giá chỉ từ 48tr/m2 - Chiết Khấu đến 25%</p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-yellow-500 text-red-700 font-bold py-2 px-4 rounded text-sm" onClick={() => setOpen(true)}>
                NHẬN BÁO GIÁ TẠI ĐÂY
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image
              src="/images/subdivision/THE-ORIGAMI-vgp.webp"
              alt="The Origami Overview"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div
        className="relative text-white py-12 px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/subdivision/the-solari-vgp.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 space-y-2">
            <div className="mb-4">
              <div className="flex gap-4">
                <Image
                  src="/images/subdivision/solari-vgp.webp"
                  alt="The Origami"
                  width={100}
                  height={100}
                  className="inline-block"
                />
                <div className="border"></div>
                <div className="italic">
                  <h2 className="text-xl font-bold mt-2 text-yellow-500">
                    THE SOLARI
                  </h2>
                  <p className="text-sm font-semibold text-yellow-500">
                    Phân khu trung tâm có mức giá tốt nhất
                  </p>
                  <p className="text-sm font-semibold text-yellow-500">
                    Giá chỉ từ 52tr/m2
                  </p>
                </div>
              </div>
            </div>
            <p className="text-stone-200 text-xs">
              Phân khu Solari bao gồm The Tropical, Glory Heights và The Oasis
              với vị trí đẹp đối diện TTTM Vincom, quảng trường Golden Eagle,
              công viên giải trí Grand Park, cạnh trạm Depot Vinbus, trường học
              quốc tế, Vinmec, sân golf,...
            </p>
            <p className="text-stone-200 text-xs">
              Nằm ở khu vực trung tâm sầm uất, quy tụ đầy đủ các tiện ích từ
              giáo dục - giải trí - y tế nhưng The Solari lại có mức giá rất
              tốt. Đây chính là lựa chọn dành cho những gia đình muốn tận hưởng
              một cuộc sống tiện nghi, chất lượng với mức tài chính hợp lý.
            </p>
            <div className="border"></div>
            <p className=" animate-glow-text text-yellow-400 text-base font-bold">Giá chỉ từ 52tr/m2 - Chiết khấu đến 17.3% + Tặng nội thất đến 200triệu</p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-yellow-500 text-red-700 font-bold py-2 px-4 rounded text-sm" onClick={() => setOpen(true)}>
                NHẬN BÁO GIÁ TẠI ĐÂY
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image
              src="/images/subdivision/THE-SOLARI-vgp.webp"
              alt="The Origami Overview"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div
        className="relative text-white py-12 px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/subdivision/BG-vgp.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 space-y-2">
            <div className="mb-4">
              <div className="flex gap-4">
                <Image
                  src="/images/subdivision/BEVERLY-logo.webp"
                  alt="The Origami"
                  width={100}
                  height={100}
                  className="inline-block"
                />
                <div className="border"></div>
                <div className="italic">
                  <h2 className="text-xl font-bold mt-2 text-yellow-500">
                    THE BEVERLY
                  </h2>
                  <p className="text-sm font-semibold text-yellow-500">
                    Phân khu cao cấp view đẹp nhất Vinhomes Grand Park
                  </p>
                  <p className="text-sm font-semibold text-yellow-500">
                  Giá chỉ từ 65tr/m2
                  </p>
                </div>
              </div>
            </div>
            <p className="text-stone-200 text-xs">
              Phân khu căn hộ The Beverly được ví như “hoa hậu” của Vinhomes
              Grand Park khi vừa tọa lạc ngay lõi trung tâm đô thị vừa sở hữu
              tầm view tuyệt đẹp về công viên 36ha và sông Đồng Nai.
            </p>
            <p className="text-stone-200 text-xs">
              Với thiết kế sang trọng, hiện đại và khác biệt nhất trong tất cả
              các phân khu của Vinhomes Grand Park, cùng hàng ngàn tiện ích ngay
              dưới thềm nhà đáp ứng tiêu chuẩn “Sống sang - View đẹp” của khách
              hàng thượng lưu tại TP. HCM.
            </p>
            <p className="text-stone-200 text-xs">
              The Beverly đang có chính sách hấp dẫn nhất năm, Mua nhà sang tặng
              Xe đẹp - Học bổng Vinschool, cùng ưu đãi tiền tỷ, mua nhà hời nhất
              năm. Hiện The Beverly đang đón cư dân về ở, khách hàng mua nhận
              bàn giao ngay.
            </p>
            <div className="border"></div>
            <p className=" animate-glow-text text-yellow-400 text-base font-bold">
            Giá chỉ từ 65tr/m2 - Chiết Khấu đến 15% + Tặng nội thất đến 540 triệu
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-yellow-500 text-red-700 font-bold py-2 px-4 rounded text-sm" onClick={() => setOpen(true)}>
                ĐĂNG KÝ TƯ VẤN DỰ ÁN
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 ">
            <Image
              src="/images/subdivision/THE-BEVERLY-vgp.webp"
              alt="The Origami Overview"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div
        className="relative text-white py-12 px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/subdivision/BG-vgp.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 space-y-2">
            <div className="mb-4">
              <div className="flex gap-4">
                <Image
                  src="/images/subdivision/glory-vang.png"
                  alt="The Glory Heights Logo"
                  width={100}
                  height={100}
                  className="inline-block"
                />
                <div className="border"></div>
                <div className="italic">
                  <h2 className="text-xl font-bold mt-2 text-yellow-500">
                    THE GLORY HEIGHTS
                  </h2>
                  <p className="text-sm font-semibold text-yellow-500">
                    Phân khu biểu tượng mới tại Vinhomes Grand Park - Nơi hội tụ tinh hoa sống đỉnh cao
                  </p>
                  <p className="text-sm font-semibold text-yellow-500">
                  Giá chỉ từ 60tr/m2
                  </p>
                </div>
              </div>
            </div>
            <p className="text-stone-200 text-xs">
            The Glory Heights là phân khu căn hộ cao cấp mới nhất, sở hữu vị trí "kim cương" ngay trung tâm đô thị Vinhomes Grand Park, liền kề công viên 36ha và hướng thẳng ra sông Đồng Nai thơ mộng.
            </p>
            <p className="text-stone-200 text-xs">
            Với thiết kế hiện đại, sang trọng và mang đậm dấu ấn tinh tế, The Glory Heights không chỉ là nơi an cư mà còn là biểu tượng sống đẳng cấp giữa lòng đại đô thị.
            </p>
            <div className="border"></div>
            <p className=" animate-glow-text text-yellow-400 text-base font-bold">
              Giá chỉ từ 60tr/m2 - Chiết khấu đến 23.5% + Tặng nội thất đến 200triệu
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-yellow-500 text-red-700 font-bold py-2 px-4 rounded text-sm" onClick={() => setOpen(true)}>
                ĐĂNG KÝ TƯ VẤN DỰ ÁN
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 ">
            <Image
              src="/images/subdivision/MASTERISE-vpg.webp"
              alt="The Origami Overview"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div
        className="relative text-white py-12 px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/subdivision/BG-opus-vpg.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2">
            <div className="mb-4">
              <div className="flex gap-4">
                <Image
                  src="/images/subdivision/opus-logo-vgp.png"
                  alt="The Origami"
                  width={100}
                  height={100}
                  className="inline-block"
                />
                <div className="border"></div>
                <div className="italic text-yellow-500">
                  <h2 className="text-xl font-bold mt-2 ">THE OPUS ONE</h2>
                  <p className="text-sm font-semibold text-w-500">
                    Phân khu “VIP” TOP 1 của Vinhomes Grand Park
                  </p>
                </div>
              </div>
            </div>
            <p className="text-stone-200 text-xs">
              Phân khu đẹp nhất, cao cấp nhất, được ví như “khu nhà giàu mới”
              tại TP. HCM với những giá trị khó thay thế được:
            </p>
            <ul className="list-disc pl-6 text-stone-200 text-xs">
              <li className="mb-2">
                {`TT theo tiến độ vẫn được áp dụng ƯU ĐÃI lên đến 24% => Tính ra mức giá sau ưu đãi chỉ từ `}
                <span className="font-bold">
                  “TOP 1” vị trí, nằm ngay lõi trung tâm, mặt tiền công viên
                  giải trí Grand Park, cạnh Vincom, Vinschool, sân tập golf,..{" "}
                </span>
              </li>
              <li className="mb-2">
                “TOP 1” tầm view tuyệt mỹ, về trung tâm, công viên và view sông
                lớn thoáng đãng.{" "}
              </li>
              <li className="mb-2">
                “TOP 1” tiện ích, về nhà như resort 5 sao
              </li>
              <li className="mb-2">
                “TOP 1” thiết kế & bàn giao cao cấp nhất đô thị
              </li>
              <li className="mb-2">Giá bán: Từ 4,4 tỷ/căn (chưa trừ ưu đãi)</li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <button className="bg-yellow-500 text-red-700 font-bold py-2 px-4 rounded text-sm" onClick={() => setOpen(true)}>
                ĐĂNG KÝ TƯ VẤN DỰ ÁN
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image
              src="/images/subdivision/THE-OPUS-ONE-vpg.png"
              alt="The Origami Overview"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
