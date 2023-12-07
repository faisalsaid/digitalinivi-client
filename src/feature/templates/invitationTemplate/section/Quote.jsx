import React from 'react';

const Quote = ({ theme, colorTheme }) => {
  return (
    <div className="px-6 py-14 text-white flex gap-4 flex-col" style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}>
      <p className="text-center">
        “Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Bahwa Dia Menciptakan Pasangan-Pasangan Untukmu Dari (Jenis) Dirimu Sendiri Agar Kamu Merasa Tenteram KepadaNya. Dia
        Menjadikan Di Antaramu Rasa Cinta Dan Kasih Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir”
      </p>
      <p className="text-center text-xl">Q.S. Ar-Rum : 21</p>
    </div>
  );
};

export default Quote;
