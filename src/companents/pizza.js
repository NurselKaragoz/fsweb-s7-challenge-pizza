import React from "react";
import "./orderpage.css";
import { useState, useEffect } from "react";
import { Form, Label, Input } from "reactstrap";
import Counter from "../counter";
import { Link } from "react-router-dom";
import Home from "./home";

const Order = () => {
  const [formData, setFormData] = useState({ malzemeler: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit edildi", formData);
  };
  function changeHandle(e) {
    const { value, name, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "chekbox" ? checked : value });
  }
  useEffect(() => {
    console.log("Data=>>", formData);
  }, [formData]);

  return (
    <>
      <nav>
        <div className="order-navbar">
          <h1>Teknolojik Yemekler</h1>
          <nav>
            <ul className="listofpage">
              <Link to="/"> Anasayfa </Link>
              <Link to="/pizza">-Seçenekler </Link>
              <Link to="/succes">-Sipariş Oluştur</Link>
            </ul>
          </nav>
        </div>
        <div className="ordertext">
          <h3>Position Absolute Acı Pizza</h3>
          <h1> Fiyat </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            id suscipit eros. Sed convallis ipsum nec lectus tempus malesuada.
            Ut lacinia tortor turpis, non vehicula neque vestibulum eu. Morbi
            commodo tortor quis quam sodales accumsan. In imperdiet, ligula non
            tincidunt finibus, leo enim bibendum sem, sit amet porttitor ipsum
            diam venenatis augue. Etiam ornare tellus at sodales feugiat
          </p>
          <div>
            <Form id="pizza-form">
              <div className="order-select">
                <div className="orderoption">
                  <h3>
                    Boyut Seç<span className="yıldız">*</span>
                  </h3>
                  <Label>
                    <Input
                      type="radio"
                      name="option"
                      value={1}
                      onChange={changeHandle}
                    ></Input>
                    Küçük
                  </Label>
                  <Label>
                    <Input
                      type="radio"
                      name="option"
                      value={2}
                      onChange={changeHandle}
                    ></Input>
                    Orta
                  </Label>
                  <Label>
                    <Input
                      type="radio"
                      name="option"
                      value={3}
                      onChange={changeHandle}
                    ></Input>
                    Büyük
                  </Label>
                </div>
                <div className="hamur-selection">
                  <h3>
                    Hamur Seç <span className="yıldız">*</span>
                  </h3>
                  <Label for="hamur-select">
                    <Input
                      type="select"
                      name="hamur"
                      id="hamur-select"
                      onChange={changeHandle}
                      placeholder="Hamur Kalınlığı"
                    >
                      <option value="Kalın">İnce</option>
                      <option value="Kalın">Kalın</option>
                    </Input>
                  </Label>
                </div>
              </div>
              <div className="ek-malzemeler">
                <h3>Ek Malzemeler</h3>
                <p>En fazla 10 malzeme seçebilirsiniz 5₺ </p>
                <Label htmlFor="pepperoni">
                  Pepperoni
                  <Input
                    id="pepperoni"
                    type="checkbox"
                    name="pepperoni"
                    checked={formData.pepperoni}
                    onChange={changeHandle}
                  ></Input>
                </Label>
                <Label htmlFor="sosis">
                  Sosis
                  <Input
                    id="sosis"
                    type="checkbox"
                    name="sosis"
                    checked={formData.sosis}
                    onChange={changeHandle}
                  ></Input>
                </Label>
                <Label>
                  Domates
                  <Input
                    id="domates"
                    type="checkbox"
                    name="domates"
                    checked={formData.domates}
                    onChange={changeHandle}
                  ></Input>
                </Label>
                <Label>
                  Biber
                  <Input
                    id="biber"
                    type="checkbox"
                    name="biber"
                    checked={formData.biber}
                    onChange={changeHandle}
                  ></Input>
                </Label>
                <div>
                  <Label htmlFor="note">
                    Sipariş Notu
                    <hr />
                    <Input
                      id="note"
                      type="text"
                      name="note"
                      value={formData.note}
                      onChange={changeHandle}
                      placeholder="Siparişinize eklemek istediğiniz bir not var mı ?"
                      size="300"
                    ></Input>
                  </Label>
                </div>
                <div>
                  <Label htmlFor="bilgi">
                    Kişisel Bilgilerinizi Girin
                    <hr />
                    <Input
                      id="name-input"
                      type="text"
                      name="bilgi"
                      value={formData.bilgi}
                      onChange={changeHandle}
                      placeholder="İsim, Soyisim ve adres bilgilerini giriniz."
                      size="300"
                    ></Input>
                  </Label>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </nav>
      <div className="counter-btn">
        <Counter />
      </div>
    </>
  );
};
export default Order;
