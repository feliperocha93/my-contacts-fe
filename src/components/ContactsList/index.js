import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

const cards = [0, 1, 2];

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {cards.map((card) => ((
          <Card key={card}>
            <div className="info">
              <div className="contact-name">
                <strong>Felipe Rocha</strong>
                <small>instagram</small>
              </div>
              <span>fee.rocha@hotmail.com</span>
              <span>(11) 99999-9999</span>
            </div>

            <div className="actions">
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        )))}

      </ListContainer>
    </Container>
  );
}
