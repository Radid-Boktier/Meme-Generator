import { useState } from 'react';
import GetMemem from './GetMeme';
import TextInput from './TextInput';

export default function Main() {
  const [memeInfo, setMemeInfo] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imgUrl: 'http://i.imgflip.com/1bij.jpg',
  });
  function handleChange(event) {
    const { value, name } = event.target;
    // console.log(value, name);
    setMemeInfo((prevMeme) => ({
      ...prevMeme,
      [name]: value,
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
        <button className="getImageButton">Get a new meme image 🖼</button>
      </div>
      <GetMemem memeInfo={memeInfo} />
    </main>
  );
}
