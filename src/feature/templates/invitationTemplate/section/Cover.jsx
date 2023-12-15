import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useEffect, useState } from 'react';

const Cover = ({ theme, colorTheme, decoration, detail }) => {
  // init this day
  const currentDate = new Date();

  // Set the date to next week
  const nextWeekDate = new Date(currentDate);
  // console.log(nextWeekDate);
  nextWeekDate.setDate(currentDate.getDate() + 7);

  const targetDate = detail?.dumyData ? nextWeekDate : new Date(detail?.invitationDetail?.marriageInfo.date).getTime();

  // console.log(detail?.dumyData ? 'Dumy' : 'Asli');

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  // console.log(timeRemaining);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

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

      {/* <p className="text-lg font-semibold  text-center">{format(new Date(detail?.invitationDetail?.marriageInfo.date), 'EEEE dd-MM-yyyy', { locale: id })}</p> */}
      <p className="text-lg font-semibold  text-center">
        {format(detail?.dumyData ? nextWeekDate : new Date(detail?.invitationDetail?.marriageInfo.date), 'EEEE dd-MM-yyyy', { locale: id })}
      </p>
      <div className="flex gap-4">
        <div className="">
          <p
            className={` w-16 h-16 text-white flex justify-center items-center text-3xl rounded-3xl`}
            style={{ backgroundColor: colorTheme ? colorTheme.filter((data) => data.name === theme).map((data) => data.dark) : 'grey' }}
          >
            {timeRemaining.days}
          </p>
          <p className="text-center ">Hari</p>
        </div>
        <div className="">
          <p
            className={` w-16 h-16 text-white flex justify-center items-center text-3xl rounded-3xl`}
            style={{ backgroundColor: colorTheme ? colorTheme.filter((data) => data.name === theme).map((data) => data.dark) : 'grey' }}
          >
            {timeRemaining.hours}
          </p>
          <p className="text-center ">Jam</p>
        </div>
        <div className="">
          <p
            className={` w-16 h-16 text-white flex justify-center items-center text-3xl rounded-3xl`}
            style={{ backgroundColor: colorTheme ? colorTheme.filter((data) => data.name === theme).map((data) => data.dark) : 'grey' }}
          >
            {timeRemaining.minutes}
          </p>
          <p className="text-center ">Menit</p>
        </div>
        <div className="">
          <p
            className={` w-16 h-16 text-white flex justify-center items-center text-3xl rounded-3xl`}
            style={{ backgroundColor: colorTheme ? colorTheme.filter((data) => data.name === theme).map((data) => data.dark) : 'grey' }}
          >
            {timeRemaining.seconds}
          </p>
          <p className="text-center ">Detik</p>
        </div>
      </div>
      <div className="absolute bottom-0 rotate-180  scale-x-105">
        <img src={decoration} />
      </div>
    </div>
  );
};

export default Cover;
