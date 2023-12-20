import { Stack, Typography, Card, CardActions, CardContent, CardMedia, Button, Box, InputLabel, MenuItem, FormControl, Select, Divider } from '@mui/material';
import { useState } from 'react';
import THEME_LIST from '../../hook/static/THEME_LIST.json';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const TemplatesComponent = () => {
  const [category, setCategory] = useState('all');
  const [popular, setPopular] = useState('all');
  const navigate = useNavigate();
  const { curentUser } = useSelector((state) => state.user);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handelPopularChange = (event) => {
    setPopular(event.target.value);
  };
  return (
    <Stack className="max-w-7xl min-h-screen mx-auto  " gap={2}>
      <Stack direction={'row'} justifyContent={'space-between'} gap={2} padding={3}>
        <Typography color={'darkmagenta'} fontWeight={500} component={'h4'} variant="h3" textAlign={'center'}>
          Digitalinvi
        </Typography>
        <Stack direction={'row'} gap={2}>
          {curentUser && (
            <Button variant="contained" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
          )}
          {!curentUser && (
            <Button variant="contained" onClick={() => navigate('/signin')}>
              Sign IN
            </Button>
          )}
        </Stack>
      </Stack>
      <Divider />
      <Stack gap={2} padding={3}>
        <Stack direction={'row'} gap={2}>
          <div className="md:w-52">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Kategori" onChange={handleCategoryChange}>
                <MenuItem value={'all'}>Semua</MenuItem>
                <MenuItem value={'wedding'}>Pernikahan</MenuItem>
                {/* <MenuItem value={'birthday'}>Ulang Tahun</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <div className="md:w-52">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Populer</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={popular} label="Populer" onChange={handelPopularChange}>
                <MenuItem value={'all'}>Semua</MenuItem>
                <MenuItem value={'popular'}>Populer</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Stack>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {THEME_LIST.map((data) => (
            <Card key={data.code}>
              <CardMedia sx={{ height: 180 }} image={data.thumbnail} title="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="p">
                  {data.label}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                Undangan Penikahan Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci mollitia ad ullam?
              </Typography> */}
              </CardContent>
              <CardActions>
                {curentUser && <Button size="small">Pesan</Button>}
                <Button size="small" onClick={() => navigate(`/template/${data.code}`)}>
                  Lihat Contoh
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </Stack>
    </Stack>
  );
};

export default TemplatesComponent;
