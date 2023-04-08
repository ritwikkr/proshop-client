import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto 0;
  height: 450px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  .carousel-root {
    width: 90%;
    height: 80%;
    .carousel {
      &:last-child {
        display: none;
      }
      height: 100%;
      .control-dots {
        li {
          width: 80px;
          height: 5px;
          border-radius: 0%;
        }
      }
      .slider-wrapper {
        height: 100%;
        .slider {
          height: 100%;
          .slide {
            position: relative;
            .image {
              background-color: rgb(239, 239, 241);
              width: 350px;
              height: 250px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 40px auto 0;
              img {
                width: 180px;
                height: 180px;
              }
              p.legend {
                position: absolute;
                opacity: 1;
                top: 0;
                left: 50%;
                bottom: unset;
                background-color: transparent;
                font-weight: 900;
                text-transform: uppercase;
                font-size: 20px;
              }
            }
          }
        }
      }

      .thumbs-wrapper {
        display: none;
      }

      .carousel .slide .legend {
        position: absolute;
        top: 5%;
        left: 50%;
        height: 40px;
        &:hover {
          background-color: blue;
        }
      }
    }
  }
`;

export default Wrapper;
