import { MdOutlinePinDrop, MdOutlineDateRange, MdOutlineAccessTime } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';

// import icons END

const DateLocation = ({ theme, colorTheme, decoration }) => {
  return (
    <div className=" min-h-[calc(100vh-70px)] flex justify-between flex-col items-center">
      <div className=" top-0   scale-x-105">
        <img src={decoration} />
      </div>
      <div id="date" className="p-4 flex justify-center flex-col gap-8">
        <p className="text-center">Insya Allah Acara Akan Dilaksanakan Pada :</p>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-col gap-2 flex-1">
            <p className="font-medium">Akad Nikah :</p>
            <div className="flex gap-2 items-center">
              <div>
                <MdOutlineDateRange />
              </div>
              <p>Tanggal : Jumat, 28 April 2023</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <MdOutlineAccessTime />
              </div>
              <p>Pukul : 09.00 WIT - Selesai</p>
            </div>
            <div className="flex gap-2 items-baseline">
              <div>
                <MdOutlinePinDrop />
              </div>
              <p>Lokasi : Rumah Mempelai Wanita, Kapaha Hotel Monalisa Rt. 001 / Rw. 005 </p>
            </div>
            <button
              className=" text-white max-w-fit self-center px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-green-600 active:bg-green-800"
              style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
            >
              <FaMapMarkedAlt /> <span>Lihat Lokasi</span>
            </button>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="font-medium">Resepsi :</p>
            <div className="flex gap-2 items-center">
              <div>
                <MdOutlineDateRange />
              </div>
              <p>Tanggal : Jumat, 28 April 2023</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <MdOutlineAccessTime />
              </div>
              <p>Pukul : 09.00 WIT - Selesai</p>
            </div>
            <div className="flex gap-2 items-baseline">
              <div>
                <MdOutlinePinDrop />
              </div>
              <p>Lokasi : Gedung Ashari Al-Fatah </p>
            </div>
            <button
              onClick={() => alert('belum terisi')}
              className=" text-white max-w-fit self-center px-4 py-2 rounded-lg flex gap-2 items-center "
              style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
            >
              <FaMapMarkedAlt /> <span>Lihat Lokasi</span>
            </button>
          </div>
        </div>
      </div>
      <div className=" top-0 rotate-180  scale-x-105">
        <img src={decoration} />
      </div>
    </div>
  );
};

export default DateLocation;
