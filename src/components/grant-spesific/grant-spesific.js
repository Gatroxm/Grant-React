import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Links from '../links/links';
import Cargando from '../cargando/cargando';
class GrantSpesific extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grant: [] };
        this.id = props.id
    }
    componentWillMount() {
      fetch(`http://localhost:3001/grants/${this.id }`)
        .then((response) => {
          return response.json()
        })
        .then((grant) => {
          this.setState({ grant: grant })
        });
    }
    render() {
        if(this.state.grant.ok){
        return (
          <Container>
            <Row>
              <Col lg="12">
                <h1 className="my-3 text-center">{this.state.grant.grant.OPPORTUNITY_TITLE}</h1>
              </Col>
              <Col lg="12">
                <Card className="shadow-lg">
                  <Card.Body>
                    <Card.Title>{this.state.grant.grant.OPPORTUNITY_TITLE}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Nombre de Agencia {this.state.grant.grant.AGENCY_NAME}</Card.Subtitle>
                    <Card.Text>
                      <ul key={this.state.grant.grant.OPPORTUNITY_NUMBER}>
                        <li><strong>CÓDIGO DE AGENCIA:</strong> {this.state.grant.grant.AGENCY_CODE}</li>
                        <li><strong>NÚMERO DE OPORTUNIDAD:</strong> {this.state.grant.grant.OPPORTUNITY_NUMBER}</li>
                        <li><strong>CORREO ELECTÓNICO:</strong> {this.state.grant.grant.AGENCY_CONTACT_EMAIL}</li>
                        <li><strong>TELÉFONO DE CONTACTO:</strong> {this.state.grant.grant.AGENCY_CONTACT_PHONE}</li>
                        <li><strong>CONTACTO CONCEDENTE:</strong> {this.state.grant.grant.GRANTOR_CONTACT}</li>
                        <li><strong>FECHA DE CIERRE:</strong> {this.state.grant.grant.CLOSE_DATE}</li>
                        <li><strong>APLICACIÓN ESTIMADA FECHA DE VENCIMIENTO:</strong> {this.state.grant.grant.ESTIMATED_APPLICATION_DUE_DATE}</li>
                        <li><strong>FINANCIAMIENTO ESTIMADO:</strong> {this.state.grant.grant.ESTIMATED_FUNDING}</li>
                        <li><strong>FECHA POSTERIOR ESTIMADA:</strong> {this.state.grant.grant.ESTIMATED_POST_DATE}</li>
                        <li><strong>NÚMERO ESPERADO DE PREMIOS:</strong> {this.state.grant.grant.EXPECTED_NUMBER_OF_AWARDS}</li>
                        <li><strong>FIELD16:</strong> {this.state.grant.grant.FIELD16}</li>
                        <li><strong>ÚLTIMA FECHA ACTUALIZADA:</strong> {this.state.grant.grant.LAST_UPDATED_DATETIME}</li>
                        <li><strong>FECHA DE PUBLICACION:</strong> {this.state.grant.grant.POSTED_DATE}</li>
                        <li><strong>VERSIÓN:</strong> {this.state.grant.grant.VERSION}</li>
                      </ul>
                    </Card.Text>
                    <Links
                        link="/grants/"
                        nombre="Atras"
                        clases="btn btn-info"/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
        } else {
          if(this.state.grant.ok) {
            return(
              <Cargando />
              )
          }else {
            return(
              <Container>
                <Row>
                  <Col>
                    <Jumbotron className="shadow-lg">
                      <h1>Error!</h1>
                      <p>El id <span className="text-danger">{this.id}</span> que esta buscando no se encuentra dentro de nuestros registros</p>
                      <p>
                        <Links
                            link="/grants/"
                            nombre="Volver al listado"
                            clases="btn btn-info" />
                      </p>
                    </Jumbotron>
                  </Col>
                </Row>
              </Container>
            )
            
          }
        }
    }
  
  }
  
  export default GrantSpesific;
  