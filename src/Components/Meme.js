import React from "react";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  function generateMeme() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

    const url = randomMeme.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

  return (
    <div>
      <div className="meme-form">
        <input
          type="text"
          placeholder="Top Text"
          className="meme-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Bottom Text"
          className="meme-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="meme-button" onClick={generateMeme}>
          Get a new meme image
        </button>
      </div>
      <div className="parent-generate-img">
        <img className="generated-img" src={meme.randomImage}></img>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
