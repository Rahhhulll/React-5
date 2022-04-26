import React from "react";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
</style>;

const style = {
  fontFamily: "Cinzel Decorative, cursive",
  textAlign: "center",
  fontSize: "20px",
  marginTop: "5%",
  color: "red",
};

const ContactUs = () => {
  return (
    <div style={style}>
      <h1>
        Contact Us <i className="far fa-address-book"></i>
      </h1>
    </div>
  );
};
export default ContactUs;
