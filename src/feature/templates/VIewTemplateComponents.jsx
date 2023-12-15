import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MasterTemplate from './invitationTemplate/MasterTemplate';
import { colorTheme } from '../../hook/static/themeDetail';
import THEME_LIST from '../../hook/static/THEME_LIST.json';
import INVITAION_INFO from '../../hook/static/MOC_INVITATION_DETAIL.json';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const VIewTemplateComponents = () => {
  const [viewSetting, setViewSetting] = useState(false);
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
    <div className="relative">
      <div className="absolute flex flex-col gap-2 right-4 top-4">
        <Fab onClick={() => navigate('/template')}>
          <ArrowBackIosIcon />
        </Fab>
        <Fab onClick={() => setViewSetting(!viewSetting)} color="info">
          <SettingsSuggestIcon />
        </Fab>
        <div className={`${viewSetting ? 'flex' : 'hidden'} flex-col absolute z-10 bg-white p-3 right-16 top-0 rounded-lg w-32 gap-3 transition-all ease-in-out shadow-md`}>
          <p className="w-full bg-sky-100 p-2 rounded-md">
            <span className="uppercase font-medium    ">{code}</span>
          </p>
          <div className="flex gap-1 flex-col">
            <p>Warna:</p>
            <div className="flex flex-col gap-2 ">
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
      </div>

      <MasterTemplate
        invitaionTheme={{
          color: colorSchema,
          code: invitationCode,
          type: 'marriage',
        }}
        info={INVITAION_INFO}
      />
    </div>
  );
};

export default VIewTemplateComponents;
