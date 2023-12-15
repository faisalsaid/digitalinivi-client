import React from 'react';

const Bride = ({ theme, colorTheme, decoration, detail }) => {
  // console.log(detail);
  return (
    <>
      <div id="bride" className={` flex w-full min-h-screen flex-col justify-center items-center `}>
        <div className=" top-0  scale-x-105">
          <img src={decoration} />
        </div>
        <div className="p-4 flex flex-col gap-10 justify-center items-center ">
          <p className="text-center">Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Putra Putri Kami :</p>
          <div className="flex flex-col gap-10 sm:flex-row">
            <div className="flex flex-col items-center gap-4 flex-1 sm:w-1/2">
              <div className={`w-52 max-w-52 h-52 max-h-52 bg-green-100 border rounded-3xl flex flex-grow overflow-hidden`}>
                <img
                  className="max-h-full min-w-full object-cover align-bottom"
                  src="https://images.unsplash.com/photo-1582897291228-f7676bfcd52c?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <p className="text-center text-4xl" style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
                {detail?.invitationDetail?.groomDetail?.fullName}
              </p>
              <div className="flex flex-col gap-1 justify-center items-center">
                <p>Putra Dari:</p>
                <p className="font-semibold text-center">
                  {detail?.invitationDetail?.groomDetail?.father} & {detail?.invitationDetail?.groomDetail?.mother}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 flex-1 sm:w-1/2">
              <div className={`w-52 max-w-52 h-52 max-h-52 bg-green-100 border flex rounded-3xl flex-grow overflow-hidden `}>
                <img
                  className="max-h-full min-w-full object-cover align-bottom"
                  src="https://images.unsplash.com/photo-1517455850349-65b65b06f255?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <p className="text-center text-4xl" style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
                {detail?.invitationDetail?.brideDetail?.fullName}
              </p>
              <div className="flex flex-col gap-1 justify-center items-center">
                <p>Putri Dari:</p>
                <p className="font-semibold text-center">
                  {detail?.invitationDetail?.brideDetail?.father} & {detail?.invitationDetail?.brideDetail?.mother}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rotate-180  scale-x-105">
          <img src={decoration} />
        </div>
      </div>
    </>
  );
};

export default Bride;
