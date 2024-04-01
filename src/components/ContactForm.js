import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let dispatch = useDispatch();
  const createContact = (event) => {
    event.preventDefault(); //창 새로고침X
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });//ES6 최신문법 name:name,phoneNumber:phoneNumber 와 동일함
    setName("");
    setPhoneNumber("");
  };
  return (
    <Form onSubmit={(event) => createContact(event)} className="phone">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="전화번호를 입력해주세요"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>

      <Button variant="secondary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;



/*


const getName=(event)=>{
        setName(event.target.value)
    }

<Form.Control type="text" 
placeholder="이름을 입력해주세요" 
onChange={getName} />

위와 아래는 같은 내용임.
한번밖에 쓰이지 않는 함수를 굳이 따로 만들 필요없고 
바로 함수를 넣어서 사용해도됨

<Form.Control type="text" 
placeholder="이름을 입력해주세요" 
onChange={(event)=>setName(event.target.value)} />



*/