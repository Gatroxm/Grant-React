import React from 'react';
import Links from '../components/links/links';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
const Home = () => {
    return(
        <Container>
            <Row>
                <Col lg="12">
                <Jumbotron className="my-3 p-3">
                    <Container>
                        <h1 className="display-4">Documentación de Servicios Base de Datos GRANTS</h1>
                        <p className="lead">Servicios desarrollados en node.js para mostrar todos los registros y uno en especifico</p>
                        <p className="lead">rutas: </p>
                        <span className="d-block my-2">Todos los registros limitados en 1000</span>
                        <code>http://localhost:3001/grants</code>
                        <span className="d-block my-2">Registro unico por ID = 006-FY2020</span>
                        <code>http://localhost:3001/grants/006-FY2020</code>
                        <hr className="my-4" />
                        <p>Enlace al repositorio</p>
                        <a className="btn btn-primary btn-lg" href="https://github.com/Gatroxm/servicios-grants" target="_blank">Repositorio</a>
                        <hr className="my-4" />
                        <p>Ingresar a la App</p>
                        <Links 
                            link="/grants" 
                            nombre="Granst"
                            clases="btn btn-info" />
                    </Container>
                </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;