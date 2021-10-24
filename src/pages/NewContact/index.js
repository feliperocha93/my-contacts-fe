import PageHeader from '../../components/PageHeader';

import ContatcForm from '../../components/ContatcForm';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <ContatcForm buttonLabel="Cadastrar" />
    </>
  );
}
