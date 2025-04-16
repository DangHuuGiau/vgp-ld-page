import Image from "next/image";
export default function MasterPlan() {
  return (
    <section id="master-plan">
      <div
        className="relative text-white py-12 px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/BG-master-plan-vgp.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-4">
            <div className="flex gap-4">
              <div className="italic">
                <h2 className="text-xl font-bold mt-2 text-white underline">
                  TỔNG QUAN DỰ ÁN
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8 md:px-32">
            <div className="space-y-2">
              <p className="text-white text-xs">TÊN THƯƠNG MẠI</p>
              <p className="text-white text-xs">Vinhomes Grand Park</p>
              <div className="border"></div>
              <p className=" text-white text-xs">TÊN DỰ ÁN</p>
              <p className=" text-white text-xs">
                Khu dân cư & công viên Phước Thiện, phường Long Bình và Long
                Thạnh Mỹ, TP. Thủ Đức
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-white text-xs">VỊ TRÍ</p>
              <p className="text-white text-xs">Vinhomes Grand Park</p>
              <p className=" text-white text-xs">
                Đường Vành đai 3, phường Long Thạnh Mỹ và Long Bình, TP. Thủ Đức
                (Quận 9 cũ), TP. HCM
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-white text-xs">QUY MÔ DỰ ÁN</p>
              <p className="text-white text-xs">
                272 ha, mật độ xây dựng ~22,5%
              </p>
              <div className="border"></div>
              <p className=" text-white text-xs">NHÀ THẦU XÂY DỰNG</p>
              <p className=" text-white text-xs">
                Coteccons, Hòa Bình, Central, Unicons
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-0 ">
            <Image
              src="/images/TONG-QUAN-DU-AN-VGP.webp"
              alt="The Origami Overview"
              width={1920}
              height={750}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
