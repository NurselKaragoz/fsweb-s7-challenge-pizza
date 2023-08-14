import React from "react";

import "./orderpage.css";
import { useState, useEffect } from "react";
import { Form, Label, Input, Option, Select } from "reactstrap";
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
              <li>Anasayfa</li>
              <li>-Seçenekler</li>
              <li>-Sipariş Oluştur</li>
            </ul>
          </nav>
        </div>
        <div className="ordertext">
          <h3>Position Absolute Acı Pizza</h3>
          <h1> Fiyat </h1>
          <p>lorem54</p>
          <div>
            <Form>
              <div className="orderoption">
                Boyut Seç
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
                    onchange={changeHandle}
                  ></Input>
                  Orta
                </Label>
                <Label>
                  <Input
                    type="radio"
                    name="option"
                    value={3}
                    onchange={changeHandle}
                  ></Input>
                  Büyük
                </Label>
              </div>
              <div className="hamur-selection">
                Hamur Seç
                <Label for="hamur-select">
                  <Input
                    type="select"
                    name="hamur"
                    id="hamur-select"
                    onChange={changeHandle}
                  >
                    <option value="Kalın">İnce</option>
                    <option value="Kalın">Kalın</option>
                  </Input>
                </Label>
              </div>
              <div>
                Ek Malzemeler
                <p>En fazla 10 malzeme seçebilirsiniz 5₺ </p>
                <Label>
                  Pepperoni
                  <Input
                    id="malzemeler"
                    type="checkbox"
                    name="malzemeler"
                    checked={formData.malzemeler}
                    onchange={changeHandle}
                  ></Input>
                </Label>
                <Label>
                  Sosis
                  <Input
                    id="malzemeler"
                    type="checkbox"
                    name="malzemeler"
                    checked={formData.malzemeler}
                    onchange={changeHandle}
                  ></Input>
                </Label>
                <Label>
                  Domates
                  <Input
                    id="malzemeler"
                    type="checkbox"
                    name="malzemeler"
                    checked={formData.malzemeler}
                    onchange={changeHandle}
                  ></Input>
                </Label>
                <Label>
                  Biber
                  <Input
                    id="malzemeler"
                    type="checkbox"
                    name="malzemeler"
                    checked={formData.malzemeler}
                    onchange={changeHandle}
                  ></Input>
                </Label>
              </div>
            </Form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Order;
