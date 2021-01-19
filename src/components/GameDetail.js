// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
// History
import { useHistory } from "react-router-dom";
// Media Resize
import { smallImage } from "../util";
// Images
import ps4 from "../img/ps4.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import wii from "../img/wii.svg";
import wiiU from "../img/wii-u-games-tool.svg";
import ps5 from "../img/ps5.svg";

const GameDetail = ({ pathID }) => {
  // Define History
  const history = useHistory();

  // Exit Detail
  const exitDetailHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Get Star images function
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }

    return stars;
  };

  // Get platform images function
  const getPlatformImg = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return ps4;
      case "PlayStation 5":
        return ps5;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "Wii":
        return wii;
      case "Wii U":
        return wiiU;
      default:
        return gamepad;
    }
  };

  // Grab data from state
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathID}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatformImg(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt="background"
                loading="lazy"
                layoutId={`image ${pathID}`}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt="screenshot"
                  loading="lazy"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  color: black;
  left: 10%;
  z-index: 10;
  img {
    width: 100%;
  }
  /* Mobile Styles */
  @media (max-width: 385px) {
    padding: 1rem;
    img {
      width: 100%;
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  /* Mobile Styles */
  @media (max-width: 380px) {
    display: block;
    h3 {
      font-size: 1rem;
      padding: 1rem;
      text-align: center;
    }
    p {
      font-size: 1rem;
    }
    img {
      width: 1rem;
      height: 1rem;
    }
    div.rating {
      margin-bottom: 1rem;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  /* Mobile Styles */
  @media (max-width: 385px) {
    display: block;
    h3 {
      text-align: left;
      padding: 0.5rem 0;
      color: #696969;
      font-weight: lighter;
    }
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  img {
    margin: 0rem 1rem;
  }
  /* Mobile Styles */
  @media (max-width: 385px) {
    img {
      margin-left: 0;
      margin-right: 0.75rem;
    }
    display: block;
    text-align: left;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  /* Mobile Styles */
  @media (max-width: 385px) {
    margin-top: 3rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  /* Mobile Styles */
  @media (max-width: 385px) {
    margin: 3rem 0rem;
    p {
      font-size: 0.75rem;
      line-height: 1.75rem;
    }
  }
`;

export default GameDetail;
