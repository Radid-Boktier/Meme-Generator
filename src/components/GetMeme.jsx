export default function GetMemem({ memeInfo }) {
  return (
    <div className="meme">
      <img className="memeImage" src={memeInfo.imgUrl} />
      <span className="top">{memeInfo.topText}</span>
      <span className="bottom">{memeInfo.bottomText}</span>
    </div>
  );
}
