import React from "react";
import "./orderpage.css";
import { useState, useEffect } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import Counter from "../counter";
import { Link } from "react-router-dom";

const Order = () => {
  const [formData, setFormData] = useState({
    pepperoni: false,
    domates: false,
    biber: false,
    sosis: false,
    value: "1",
    option: "1",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit edildi", formData);
  };
  function changeHandle(e) {
    const { value, name, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }
  useEffect(() => {
    console.log("Data=>>", formData);
  }, [formData]);

  console.log(fiyat);
  console.log(formData.value);
  console.log(formData.option);
  let boyutFiyat = 0;
  if (formData.option == 1) {
    boyutFiyat = 85.5;
  } else if (formData.option == 2) {
    boyutFiyat = 105.5;
  } else {
    boyutFiyat = 120;
  }

  let secimlerFiyat =
    formData.biber * 5 +
    formData.domates * 5 +
    formData.sosis * 5 +
    formData.pepperoni * 5;

  let fiyat = secimlerFiyat + boyutFiyat;

  console.log(fiyat);

  return (
    <>
      <div className="genel">
        <div className="navbar">
          <div className="order-navbar">
            <h1>
              <strong>Teknolojik Yemekler </strong>
            </h1>
          </div>
          <div className="link-text">
            <Link className="link-order" to="/">
              Anasayfa
            </Link>
            <Link className="link-order" to="/pizza">
              -Seçenekler
            </Link>
            <li className="link-order" to="/succes">
              -Sipariş Oluştur
            </li>
          </div>
        </div>

        <div className="ordertext">
          <h3>Position Absolute Acı Pizza</h3>
          <div className="price">
            <h6>
              <strong>{boyutFiyat}₺</strong>
            </h6>
            <p>4.9</p>
            <p>200</p>
          </div>

          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırınd yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
            denir.
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
                      defaultChecked={true}
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
                    >
                      <option value="Ince">İnce</option>
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
                      placeholder="İsim, Soyisim ve Adres bilgilerini giriniz."
                      size="300"
                    ></Input>
                  </Label>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="footer">
          <div className="counter-btn">
            <Counter />
          </div>
          <div className="sipariş-ver">
            <p>
              <strong>Sipariş Toplamı</strong>
            </p>
            <p>Seçimler {secimlerFiyat}₺</p>
            <p>Toplam {fiyat}₺</p>
            <Label>
              <Button size="lg" block color="warning" onClick={handleSubmit}>
                <Link className="btn-sipariş" to="/succes">
                  Sipariş Ver
                </Link>
              </Button>
            </Label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
