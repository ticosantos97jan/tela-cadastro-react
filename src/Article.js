import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './App.css';


const Article = (props) => {
  return (
    <div>
      <Jumbotron  fluid  className="jum bg-dark ">
        <Container fluid  className="cont">
        <div>
          <CardBody className="card-body bg-info">
        <Form className="form  " type="card" action="/addproduto" method="POST">
      <FormGroup>
        <Label for="Name">Nome do Produto:</Label>
        <Input className="input" type="text" name="name" id="name" placeholder="Insira o nome " />
      </FormGroup>
      <FormGroup>
        <Label for ="Description">Descrição:</Label>
        <Input className="input" type="text" name="description" id="description" placeholder="descreva o produto" />
      </FormGroup>
      <FormGroup>
        <Label for ="Code">Código:</Label>
        <Input className="input" type="text" name="code" id="code" placeholder="Insira o código" />
      </FormGroup>
      <FormGroup>
        <Label for ="Price">Preço:</Label>
        <Input className="input" type="price" name="price" id="price" placeholder="Insria o preço" />
      </FormGroup>
      <FormGroup>
        <Label for ="Quant">Quantidade:</Label>
        <Input className="input" type="number" name="quant" id="quant" placeholder="Insira a quantidade" />
      </FormGroup>
      <Button className="button">Cadastrar</Button>
    </Form>

     </CardBody>





        </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;