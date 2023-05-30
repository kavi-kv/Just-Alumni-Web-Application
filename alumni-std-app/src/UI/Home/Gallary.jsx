import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import itemData from './GallaryData'
import { Container } from '@mui/material';
import styles from './gallary.module.css'
import cover_img from '../../../public/cover-img.jpg'

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallary() {
  return (
    <>
        <div className={styles.cover_container}>
            <img src={cover_img} alt="cover_img" />
           
        </div>
        <div className='quotes'></div>
        <div className={styles.gallary_header}>
            
            {/* <p className={styles.details}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Consectetur beatae dicta eligendi explicabo cum,<br/> voluptatibus pariatur! Voluptate recusandae, iure deleniti quasi earum <br/>nobis odio eum asperiores ratione accusamus voluptatem sapiente.
            </p> */}
        </div>
        <Container sx={{ marginTop: '30px',marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       
        {
          
            <ImageList
            sx={{
                width: 1100,
                height: 1000,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: 'translateZ(0)',
            }}
            rowHeight={300}
            gap={1}
            >
            {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                    {...srcset(item.img, 250, 200, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                    />
                    <ImageListItemBar
                    sx={{
                        background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, ' +
                        'rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={item.title}
                    position="top"
                    actionIcon={
                        <IconButton
                        sx={{ color: 'white' }} 
                        aria-label={`star ${item.title}`}
                        >
                        <StarBorderIcon />
                        </IconButton>
                    }
                    actionPosition="left"
                    />
                </ImageListItem>
                );
            })}
        </ImageList>
        }
    </Container>
    <div className={styles.gallary_footer}>@JUST &copy; CopyRight 2023</div>
    </>
  );
}
