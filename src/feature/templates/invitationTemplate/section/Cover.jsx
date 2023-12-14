import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const Cover = ({ theme, colorTheme, decoration, detail }) => {
  return (
    <div id="cover" className={` w-full min-h-[calc[100vh-70px]] p-2 py-24 relative flex justify-center items-center flex-col gap-8`}>
      <div className="absolute top-0   scale-x-105">
        <img src={decoration} />
      </div>
      <p className={`text-lg font-semibold text-center`}>Kami Mengundang Anda ke pernikahan :</p>
      <div className={`w-52 h-52 bg-green-100 border rounded-3xl flex flex-grow overflow-hidden`}>
        <img
          className="max-h-full min-w-full object-cover align-bottom"
          src="https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <p className={`  text-center text-6xl `} style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
        <span className="capitalize">{detail?.invitationDetail?.groomDetail?.nickName}</span> &{' '}
        <span className="capitalize"> {detail?.invitationDetail?.brideDetail?.nickName}</span>
      </p>
      {console.log(detail?.invitationDetail?.marriageInfo.date)}
      <p className="text-lg font-semibold  text-center">{format(new Date(detail?.invitationDetail?.marriageInfo.date), 'EEEE dd-MM-yyyy', { locale: id })}</p>
      <div className="flex gap-4">
        {['Hari', 'Jam', 'Menit'].map((data) => (
          <div key={data} className="">
            <p
              className={` w-16 h-16 text-white flex justify-center items-center text-3xl rounded-3xl`}
              style={{ backgroundColor: colorTheme ? colorTheme.filter((data) => data.name === theme).map((data) => data.dark) : 'grey' }}
            >
              99
            </p>
            <p className="text-center ">{data}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 rotate-180  scale-x-105">
        <img src={decoration} />
      </div>
    </div>
  );
};

export default Cover;
