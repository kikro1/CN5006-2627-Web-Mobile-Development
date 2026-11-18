import { useState, useEffect } from "react";
import Love from "./Love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

function EmojiCounter({ pic: selectedEmoji }) {
  const [image, setImage] = useState(Love);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const emojiImages = {
      Love,
      Like,
      Sad,
    };

    setImage(emojiImages[selectedEmoji] || Love);
  }, [selectedEmoji]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <p>
        {selectedEmoji}
        <button type="button" onClick={handleClick}>
          {count}
          <img src={image} alt={selectedEmoji} />
        </button>
      </p>

      <p>&nbsp;</p>
    </div>
  );
}

export default EmojiCounter;
