import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';


const names = ["Aylton (Juninho) Alves",
    "Baiano (capoteiro)",
    "Tamar Bajgielman",
    "Maria Lúcia Nova da Costa",
    "Diguinho",
    "Leonardo Ciuffo Faver" ,
    "Ricardo Ganem",
    "Orlando Graeff",
    "Kazumi Hayama",
    "Molly and Philip Jenkins",
    "Renaud Jordão",
    "Paulo Kageyama",
    "Midori Katsumoto",
    "Teachers and Students from Escola Municipal João Kopke",
    "Jan van der Lande","Thomas Laubisc",
    "Toninho Lima",
    "Anna Karla Machado",
    "Cesar Mascarenhas",
    "Lulú Mascarenhas",
    "The team of EMATER in Petrópolis",
    "The team of  IEF in Petrópolis",
    "Maria do Rosário",
    "Joel Julio da Silva",
    "Luizinho & Sardinha",
    "John Schoellerman",
    "Marcos Taquechel",
    "Denise Tarín",
    "Maria Alice (Cice) da Silva Telles",
    "Tião",
    "Isabella Torquato",
    "Pieter Woudt"]


const PeoplePage = () => (
    <>
    <br></br>
    
    <Container>
    <h2><strong>
      <FormattedMessage id="people.placeholder" />
      </strong>
    </h2>
    <p>
      <FormattedMessage id="people.content1" />
    </p>
    <ul>
    {names.map(name => (
        <li>{name}</li>
    ))}
    </ul>
   
    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    </Container>
  
  </>
);

const customProps = {
  localeKey: 'people',
};


export default withLayout(customProps)(PeoplePage);
