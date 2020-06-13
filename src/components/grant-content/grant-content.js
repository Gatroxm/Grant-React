import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cargando from '../cargando/cargando';
import DataTable from 'react-data-table-component';
import './grant-content.css';


class GrantContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { grants: [] };
	}

	componentWillMount() {

		fetch('https://app-grant-services.herokuapp.com/grants')
			.then((response) => {
				return response.json()
			})
			.then((grants) => {
				this.setState({ grants: grants })
			});
	}

	handleRowClicked = (event) => {
		const id = event.OPPORTUNITY_NUMBER;
		window.location.href = `/grants/${id}`;
	}

	render() {
		if (this.state.grants.ok) {
			const columnas = [
				{
					name: 'OPPORTUNITY NUMBER',
					selector: 'OPPORTUNITY_NUMBER',
					sortable: true,
				},
				{
					name: 'OPPORTUNITY TITLE',
					selector: 'OPPORTUNITY_TITLE',
					sortable: true,
				},
				{
					name: 'AGENCY CODE',
					selector: 'AGENCY_CODE',
					sortable: true,
				},
				{
					name: 'AGENCY NAME',
					selector: 'AGENCY_NAME',
					sortable: true,
				},
				{
					name: 'POSTED DATE',
					selector: 'POSTED_DATE',
					sortable: true,
				},
				{
					name: 'CLOSE DATE',
					selector: 'CLOSE_DATE',
					sortable: true,
				},
				{
					name: 'LAST UPDATED DATETIME',
					selector: 'LAST_UPDATED_DATETIME',
					sortable: true,
				},
			]
			return (
				<Container fluid>
					<Row>
						<Col>
							<DataTable
								title="Listado de Registros Gants"
								columns={columnas}
								data={this.state.grants.grants}
								defaultSortField="title"
								pagination
								onRowClicked={this.handleRowClicked}
							/>
						</Col>
					</Row>
				</Container>


			);

		} else {
			return (
				<Cargando />
			);
		}
	}
}
export default GrantContent;
