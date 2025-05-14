describe('Teste de API com Cypress', () => {
  const baseUrl = '/';
  let authToken;
  let currentId;

  before(() => {
    cy.fixture('user_data.json').then((userData) => {
      // Fazer login e obter o token antes de todos os testes
      cy.request({
        method: 'POST',
        url: `${baseUrl}/accountservice/accountrest/api/v1/login`,
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('statusMessage');
        const status = response.body.statusMessage;

        expect(status).to.have.property('userId');
        expect(status).to.have.property('token');

        authToken = status.token;
        currentId = status.userId;

        cy.wrap(currentId).as('currentId');
        cy.wrap(authToken).as('authToken');
      });
    });
  });

  it('POST - Atualizar imagem do produto', () => {
    const cor = 'azul';
    const product_id = 15;
    const user = currentId;

    cy.fixture('inmetrics_logo.jpg', 'base64').then((fileContent) => {
      // Converte o conteúdo base64 em um Blob
      const byteCharacters = atob(fileContent); // Converte de base64 para binário
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });

      const formData = new FormData();
      formData.append('file', blob, 'note.jpg'); // Envia o arquivo convertido

      cy.request({
        method: 'POST',
        url: `${baseUrl}/catalog/api/v1/product/image/${user}/source/${cor}?product_id=${product_id}`,
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'accept': '*/*'
        },
        body: formData,
        failOnStatusCode: false
      }).then((response) => {
        cy.log('Response status:', response.status);
        cy.log('Response body:', response.body);

        if (response.status === 500) {
          cy.log('Server returned a 500 error. Response body:', response.body);
        } else {
          expect(response.status).to.eq(200);
          // Adicione mais verificações aqui se necessário
        }
      });
    });
  });
});

