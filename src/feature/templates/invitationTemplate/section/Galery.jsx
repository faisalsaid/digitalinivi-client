import React from 'react';

const Galery = ({ theme, colorTheme, decoration, detail }) => {
  if (Object.keys(detail).length === 0) {
    return (
      <>
        <p>...loading</p>
      </>
    );
  }
  return (
    <div id="galery" className=" flex flex-col min-h-screen justify-center items-center">
      <div className=" top-0   scale-x-105">
        <img src={decoration} />
      </div>
      <div className="p-4 flex  flex-col gap-4 ">
        <p className="text-xl">Galeri Photo :</p>
        <div className="columns-2 sm:columns-2 md:columns-3 gap-3 ">
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://plus.unsplash.com/premium_photo-1683290222216-a9fab340cbf8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://plus.unsplash.com/premium_photo-1670430623154-24626c42fb33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1460364157752-926555421a7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1487621199565-dc425a60897b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
          <div className="w-full mb-3">
            <img
              className="max-w-full rounded-md"
              src="https://images.unsplash.com/photo-1533418466759-ac54bd32122e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wedding-1"
            ></img>
          </div>
        </div>
      </div>
      <div className=" top-0 rotate-180  scale-x-105">
        <img src={decoration} />
      </div>
    </div>
  );
};

export default Galery;
