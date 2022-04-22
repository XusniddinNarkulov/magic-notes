import React from "react";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "5%",
          marginTop: "2%",
        }}
      >
        <form
          className="card"
          style={{
            borderRadius: "10px",
            backgroundColor: "#00AF73",
            padding: "4%",
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <textarea
            style={{
              boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
              backgroundColor: "#00AF73",
              border: "0",
              outline: "none",
              height: "75%",
              padding: "3%",
              borderRadius: "5px",
            }}
          >
            Salom
          </textarea>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>300 remaining</p>
            <button
              style={{
                border: "3px solid green",
                borderRadius: "15px",
                padding: "2% 4%",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CardComponent;
