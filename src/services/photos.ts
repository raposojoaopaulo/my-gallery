import { Photo } from '../types/Photo'
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder);

  for(let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i])

    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    })
  }

  return list;
}

export const insert = async (file: File) => {
  if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    let randonName = v4();
    let newFile = ref(storage, `images/${randonName}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl
    } as Photo;
  } else {
    return new Error('Invalid file!');
  }
}

export const discard = async (name: string) => {
  let discardedPhoto = ref(storage, `images/${name}`);
  await deleteObject(discardedPhoto);
}