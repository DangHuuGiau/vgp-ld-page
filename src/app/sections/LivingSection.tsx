import Image from "next/image";

export default function LivingSection() {
  return (
    <section className="bg-green-900 text-white p-4">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-52">
        <h2 className="text-base md:text-xl font-bold mb-6">
          Sống một đời thật đáng tại Vinhomes Grand Park
        </h2>
        <p className="mb-6 text-xs md:text-sm">
          Ở Vinhomes Grand Park, nhà không chỉ tính bằng m², mà đó là nơi để cảm
          nhận cuộc sống đúng nghĩa. Từ không gian đến nhịp sống đều phù hợp cho
          tất cả các thành viên trong gia đình. Mua nhà với những giá trị đi kèm
          mà hiếm nơi nào ở TP. HCM có được:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs md:text-sm">
          <div className="bg-green-800 p-4 rounded">
            <h3 className="font-bold  mb-2">Sống xanh</h3>
            <p>
              Hơn 200ha tương đương với 70% diện tích khu đô thị dành cho cây
              xanh, cảnh quan mặt nước và các tiện ích công cộng.
            </p>
          </div>
          <div className="bg-green-700 p-4 rounded">
            <h3 className="font-bold  mb-2">Sống trọn tiện nghi</h3>
            <p>
              - Từ hồ bơi, gym, spa, kidzone, tennis... ngay trong nội khu
              <br />- Đến hệ tiện ích “all-in-one” gồm Vincom, Vinschool, Công
              viên giải trí Grand Park, Vinmec, sân tập golf, quảng trường, bến
              du thuyền...
            </p>
          </div>
          <div className="bg-green-800 p-4 rounded">
            <h3 className="font-bold  mb-2">Sống nuôi dưỡng tinh thần</h3>
            <p>
              4 mùa lễ hội đỉnh nóc với các sự kiện đình đám như 8wonder Music
              Festival, Amazing Grand Park; cùng những màn countdown hoành
              tráng,...
            </p>
          </div>
          <div className="bg-green-700 p-4 rounded">
            <h3 className="font-bold  mb-2">
              Sống an toàn trong cộng đồng văn minh
            </h3>
            <p>
              - Nơi hội tụ cư dân thành đạt, tri thức của thành phố.
              <br />- Hệ thống an ninh đảm bảo 24/7, luôn có đội ngũ bảo vệ, hỗ
              trợ cư dân.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {[
          "Vinhomes-Grand-Park-new-1024x576.webp",
          "Vinhomes-Grand-Park-new1-1024x576.webp",
          "Vinhomes-Grand-Park-new3-1024x683.webp",
          "Vinhomes-Grand-Park-new6-1024x683.webp",
          "Vinhomes-Grand-Park-new7-1024x574.webp",
          "Vinhomes-Grand-Park-new8-1024x537.webp",
          "Vinhomes-Grand-Park-new9-1024x683.webp",
          "Vinhomes-Grand-Park-new10-1024x681.webp",
          "Vinhomes-Grand-Park-new11-1024x681.webp",
          "Vinhomes-Grand-Park-new12-1024x681.webp",
          "Vinhomes-Grand-Park-new15-1024x768.webp",
          "Vinhomes-Grand-Park-new19.jpg",
        ].map((img, index) => (
          <div key={index} className=" overflow-hidden rounded-lg">
            <Image
              src={`/images/living/${img}`}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
