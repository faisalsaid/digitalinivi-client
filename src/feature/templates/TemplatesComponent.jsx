import { Stack, Typography, Card, CardActions, CardContent, CardMedia, Button, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useState } from 'react';
import THEME_LIST from '../../hook/static/THEME_LIST.json';

const TemplatesComponent = () => {
  const [category, setCategory] = useState('all');
  const [popular, setPopular] = useState('all');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handelPopularChange = (event) => {
    setPopular(event.target.value);
  };
  return (
    <Stack className="max-w-7xl min-h-screen mx-auto  " padding={2} gap={3}>
      <Typography component={'h4'} variant="h5" textAlign={'center'}>
        Template Undangan
      </Typography>
      <Stack direction={'row'} gap={2}>
        <div className="md:w-52">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Kategori" onChange={handleCategoryChange}>
              <MenuItem value={'all'}>Semua</MenuItem>
              <MenuItem value={'wedding'}>Pernikahan</MenuItem>
              <MenuItem value={'birthday'}>Ulang Tahun</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="md:w-52">
          <FormControl fullWidth>
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
            <CardMedia
              sx={{ height: 180 }}
              image="https://cdn.dribbble.com/userupload/2972633/file/original-a04fbbe60fe11c10375ed9ff1fee84d2.png?resize=400x0"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Undangan Penikahan Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci mollitia ad ullam?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Pesan</Button>
              <Button size="small">Lihat</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Stack>
  );
};

export default TemplatesComponent;
