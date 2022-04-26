import React from "react";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
</style>;

const style = {
  fontFamily: "Cinzel Decorative, cursive",
  fontSize: "20px",
  textAlign: "center",
  marginTop: "5%",
  color: "red",
};

const Home = () => {
  return (
    <div style={style}>
      <h1>
        Home Page <i className="fas fa-home"></i>
      </h1>
    </div>
  );
};

export default Home;
