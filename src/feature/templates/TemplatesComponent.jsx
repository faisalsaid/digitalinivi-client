import { Stack, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import React from 'react';

const TemplatesComponent = () => {
  return (
    <Stack className="max-w-7xl min-h-screen mx-auto  " padding={2} gap={3}>
      <Typography component={'h4'} variant="h5" textAlign={'center'}>
        Template Undangan
      </Typography>
      <Stack>hlo</Stack>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
          <Card key={data}>
            <CardMedia
              sx={{ height: 180 }}
              image="https://cdn.dribbble.com/userupload/2972633/file/original-a04fbbe60fe11c10375ed9ff1fee84d2.png?resize=400x0"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Code: NKH-001
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
