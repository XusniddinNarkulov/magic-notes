import React from "react";
import ReactDOM from "react-dom";

// const textarea = document.querySelector("textarea");
// const cardGrid = document.querySelector(".cardGrid");
// console.log(textarea);

let now = new Date();
let defCard = (
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
      maxLength="300"
      style={{
        boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#00AF73",
        border: "0",
        outline: "none",
        height: "75%",
        padding: "3%",
        borderRadius: "5px",
      }}
    ></textarea>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>300 remaining</p>
      <button
        className="save"
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
);

class CardsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // addCard() {
  //   textarea.forEach((val) => {
  //     if (val.value == "") {
  //       save.setAttribute("disabled");
  //     }
  //   });
  // }

  date = {
    day: now.getDay(),
    month: now.getMonth(),
    year: now.getFullYear(),
  };

  render() {
    // this.addCard();
    // save.addEventListener("submit", (e) => {
    //   textarea.forEach((val) => {
    //     if (val.value == "") {
    //       save.setAttribute("disabled");
    //     } else {
    //       let noteCard = (
    //         <form
    //           className="card"
    //           style={{
    //             borderRadius: "10px",
    //             backgroundColor: "#00AF73",
    //             padding: "4%",
    //             height: "30vh",
    //             display: "flex",
    //             flexDirection: "column",
    //             justifyContent: "space-between",
    //           }}
    //         >
    //           <textarea
    //             maxLength="300"
    //             style={{
    //               boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
    //               backgroundColor: "#00AF73",
    //               border: "0",
    //               outline: "none",
    //               height: "75%",
    //               padding: "3%",
    //               borderRadius: "5px",
    //             }}
    //           >
    //             {val.value}
    //           </textarea>

    //           <div
    //             style={{
    //               display: "flex",
    //               justifyContent: "space-between",
    //               alignItems: "center",
    //             }}
    //           >
    //             <p>300 remaining</p>
    //             <button
    //               className="save"
    //               style={{
    //                 border: "3px solid green",
    //                 borderRadius: "15px",
    //                 padding: "2% 4%",
    //                 cursor: "pointer",
    //               }}
    //             >
    //               Save
    //             </button>
    //           </div>
    //         </form>
    //       );
    //       cardGrid.innerHTML += noteCard;
    //     }
    //   });
    // });

    return (
      <div
        className="cardGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2%",
          marginTop: "2%",
        }}
      >
        {defCard}
      </div>
    );
  }
}

export default CardsComponent;
