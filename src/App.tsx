import React from 'react';
import { useState, useEffect, FormEvent } from 'react';
import { Container, Area, Header, ScreamWarning, PhotoList, UploadForm } from './App.styles';
import * as Photos from './services/photos'
import { Photo } from './types/Photo'
import { PhotoItem } from './components/PhotoItem'

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
    getPhotos();
  }, []);

  
  const getPhotos =async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }


  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true)
      let result = await Photos.insert(file);
      setUploading(false)

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDeleteClick = async (name: string) => {
    await Photos.discard(name);
    getPhotos();
  }

  return (
    <Container>
      <Area>
        <Header>Photo Gallery</Header>

        <UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Submit" />
          {uploading && 'sending your memory...'}
        </UploadForm>

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
              <PhotoItem 
                key={index}  
                url={item.url}
                name={item.name}
                onDelete={handleDeleteClick}
              />
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