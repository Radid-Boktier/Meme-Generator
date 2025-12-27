import { useEffect, useState } from 'react';
import GetMemem from './GetMeme';
import TextInput from './TextInput';

export default function Main() {
  const [memeInfo, setMemeInfo] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imgUrl: 'http://i.imgflip.com/1bij.jpg',
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((resData) => setData(resData.data.memes));
  }, []);

  // console.log(data);
  function handleChange(event) {
    const { value, name } = event.target;
    console.log(value, name);
    setMemeInfo((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getImage() {
    const index = Math.floor(Math.random() * data.length);
    const img = data[index].url;
    // console.log(index, img);
    setMemeInfo((prevMeme) => ({
      ...prevMeme,
      imgUrl: img,
    }));
  }
  return (
    <main>
      <div className="form">
        <TextInput
          labelClassName={'topTextLabel'}
          labelText={'Top text'}
          inputId={'topInput'}
          inputType={'text'}
          inputPlaceholder={'One does not simply'}
          inputName={'topText'}
          handleChange={handleChange}
          value={memeInfo.topText}
        />
        <TextInput
          labelClassName={'bottomTextLabel'}
          labelText={'Bottom text'}
          inputId={'bottomInput'}
          inputType={'text'}
          inputPlaceholder={'Walk into Mordor'}
          inputName={'bottomText'}
          handleChange={handleChange}
          value={memeInfo.bottomText}
        />
        <button className="getImageButton" onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <GetMemem memeInfo={memeInfo} />
    </main>
  );
}
