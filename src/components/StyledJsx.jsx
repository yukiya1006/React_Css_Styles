export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          width: 500px;
          height: 100px;
          border: solid 2px blue;
          border-radius: 50px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10px;
        }

        .title {
          color: green;
          transition: 0.5s;
          &:hover {
            transform: scale(2);
          }
        }

        .button {
          border: none;
          background-color: skyblue;
          border-radius: 50px;
          color: white;
          &:hover {
            background-color: red;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
