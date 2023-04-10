import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  padding: 60px;
  .main {
    display: flex;
    .user {
      width: 400px;
      .title {
        font-size: 30px;
        margin-bottom: 20px;
      }
      .body {
        margin-right: 40px;
        form {
          .form-content {
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            label {
              margin-bottom: 5px;
              font-size: 20px;
            }
            input {
              width: 100%;
              height: 40px;
              padding-left: 10px;
              border: none;
              outline: none;
              font-size: 18px;
              background-color: rgb(249, 247, 250);
            }
            button {
              height: 40px;
              background-color: black;
              color: white;
              border: none;
              outline: none;
              text-transform: uppercase;
              font-weight: bold;
              width: 100%;
              margin-top: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .orders {
<<<<<<< HEAD
=======
      width: 1200px;
>>>>>>> origin/master
      .title {
        font-size: 30px;
        margin-bottom: 20px;
      }
      .body {
        margin: 20px 0;
        table,
        th,
        td {
          border: 1px solid gray;
          border-collapse: collapse;
        }
        table thead tr th {
<<<<<<< HEAD
=======
          width: 200px;
>>>>>>> origin/master
          height: 40px;
        }
        table tbody tr {
          height: 40px;
          background-color: rgb(236, 237, 237);
          td {
            text-align: center;
            width: 300px;
            button {
              border: none;
              background-color: white;
              height: 30px;
              width: 100px;
              text-transform: uppercase;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    width: 100vw;
    .main {
      width: 100%;
      display: block;
      .user {
        margin: auto;
        input {
          width: 100%;
        }
      }
      .orders {
<<<<<<< HEAD
        > .body {
          > table {
            tbody tr td {
              width: unset;
            }
            thead tr th,
            tbody tr td {
              padding: 0 20px;
            }
          }
        }
=======
        display: none;
>>>>>>> origin/master
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .main {
<<<<<<< HEAD
      .orders {
        > .body {
          > table {
            thead tr th,
            tbody tr td {
              padding: 0 10px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    > .main {
      border: 2px solid red;
      > .orders {
        display: none;
=======
      .user {
>>>>>>> origin/master
      }
    }
  }
`;

export default Wrapper;
