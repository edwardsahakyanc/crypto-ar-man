import React, {useState} from "react";
import styled from "styled-components";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const Like = styled.div`
  width: 46px;
  height: 46px;
  background-color: #101010;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  svg{
    width: 22px;
    height: 22px;
  }
  .not-liked {
    display: block;
    color: #b5b5b5;
    position: relative;
    z-index: 1;
  }
  .is-liked {
    display: none;
    color: #ca255f;
    position: relative;
    z-index: 1;
  }
  &.is-active {
    .not-liked {
      display: none;
    }
    .is-liked {
      display: block;
    }
  }
  //Watch me get bouncy
@-webkit-keyframes bouncy {
  from, to { -webkit-transform: scale(1, 1); }
  25% { -webkit-transform: scale(0.9, 1.1); }
  50% { -webkit-transform: scale(1.1, 0.9); }
  75% { -webkit-transform: scale(0.95, 1.05); }
}
@keyframes bouncy {
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05);}
}

//Settings
.bouncy {
  -webkit-animation: bouncy 0.6s;
  animation: bouncy 0.6s;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
`

const LikeButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <Like className={`like-button ${isActive ? "is-active" : " "}`} onClick={() => setIsActive(!isActive)}>
                <FavoriteIcon className="is-liked bouncy"/>
                <FavoriteBorderIcon className="not-liked bouncy"/>
            </Like>
        </div>
    )
}

export default LikeButton