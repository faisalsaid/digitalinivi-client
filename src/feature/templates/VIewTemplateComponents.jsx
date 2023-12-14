import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MasterTemplate from './invitationTemplate/MasterTemplate';
import { colorTheme } from '../../hook/static/themeDetail';
import THEME_LIST from '../../hook/static/THEME_LIST.json';
import INVITAION_INFO from '../../hook/static/MOC_INVITATION_DETAIL.json';

const VIewTemplateComponents = () => {
  const { code } = useParams();
  useEffect(() => {
    const result = THEME_LIST.filter((theme) => theme.code === code);
    if (result.length === 0) {
      navigate('/template');
    }
    setInvitationCode(code);
  }, [code]);

  const [colorSchema, setColorSchema] = useState('daun');
  const [invitationCode, setInvitationCode] = useState('');
  const navigate = useNavigate();

  const handleColorSchema = (value) => {
    setColorSchema(value);
  };

  return (
    <>
      <div className="p-6  justify-between flex-col gap-2 ">
        <p>
          Kode Thema : <span className="uppercase">{code}</span>
        </p>
        <div className="flex gap-1 flex-col">
          <p>Warna Tema :</p>
          <div className="flex gap-6 items-center">
            {colorTheme &&
              colorTheme.map((data, i) => (
                <div key={data.name} className="flex gap-2 items-center   px-2  rounded-md border" style={{ backgroundColor: data.light, borderColor: data.dark }}>
                  <input className="cursor-pointer" type="radio" name="theme_color" id={data.name} value={data.name} onChange={() => handleColorSchema(data.name)} />
                  <label className="cursor-pointer " htmlFor={data.name}>
                    <span className="capitalize">{data.name}</span>
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
      <MasterTemplate
        invitaionTheme={{
          color: colorSchema,
          code: invitationCode,
          type: 'marriage',
        }}
        info={INVITAION_INFO}
      />
    </>
  );
};

export default VIewTemplateComponents;
