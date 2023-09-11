import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 160px);
  > .main {
    width: 70%;
    margin: 30px auto 0;
    > .content {
      margin-top: 30px;
      > .delivery-address {
        > .body {
          > .address {
            margin-top: 10px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            > label {
              cursor: pointer;
              padding: 20px;
              display: flex;
              align-items: flex-start;
              > input {
                margin-top: 2px;
                margin-right: 5px;
              }
              > .details {
                > .name {
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                > .address {
                  width: 250px;
                  font-size: 15px;
                  color: gray;
                  margin-bottom: 10px;
                }
                > .number {
                  color: gray;
                  font-size: 15px;
                  > span {
                    color: black;
                    font-weight: bold;
                  }
                }
              }
            }
          }
          > .add-address {
            cursor: pointer;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            margin-top: 20px;
            padding: 20px;
            font-weight: bold;
            display: flex;
            align-items: center;
            > p {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
