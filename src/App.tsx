import { useState, useEffect } from 'react';
import { Container, Area, Header, ScreamWarning, PhotoList } from './App.styles';
import * as Photos from './services/photos'
import { Photo } from './types/Photo'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos =async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }

    getPhotos();
  }, [])

  return (
    <Container>
      <Area>
        <Header>Photo Gallery</Header>

        {/* { upload } */}

        {loading &&
          <ScreamWarning>
            <div className='emoji'>wait just a little bit <span>🤏</span></div>
            <div>
              Loading your pieces of memories frozen in time...
            </div>
          </ScreamWarning>
        }

        {!loading && photos.length > 0 &&
          <PhotoList>
            {photos.map((item, index) => (
              <div>{item.name}</div>
            ))}
          </PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreamWarning>
            <div className='emoji'>No photos <span>😢</span></div>
            <div>
              You don't have any memories yet. Upload some to see them here!
            </div>
          </ScreamWarning>
        }
      </Area>
    </Container>
  )
}

export default App;