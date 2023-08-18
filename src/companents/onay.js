import React, { useEffect } from "react";
import "./onaypage.css";
import axios from "axios";

axios
  .get("https://reqres.in/api/users?delay=3")
  .then((res) => {
    console.log("success=>", res);
    console.log("deneme", res.data.value);
  })
  .catch((err) => console.log(err.response));

const Onay = () => {
  return (
    <>
      <div className="text-onay">
        <h1 id="baslik">
          <strong>Teknolojik Yemekler</strong>
        </h1>
        <h2> TEBRİKLER!</h2>
        <h2> SİPARİŞİNİZ ALINDI</h2>
        <div className="ordered-what">Sipariş Detayı </div>
      </div>
    </>
  );
};
export default Onay;
