describe('Teste de API com Cypress', () => {
  const baseUrl = 'https://www.advantageonlineshopping.com';
  let authToken;

  before(() => {
    // Fazer login e obter o token antes de todos os testes
    cy.request({
      method: 'POST',
      url: `${baseUrl}/accountservice/accountrest/api/v1/login`,
      body: {
        email: 'teste@teste.com.br',
        loginPassword: '12Test!@#',
        loginUser: 'nat12309'
      }
    }).then((response) => {
      authToken = response.body.token;
    });
  });

  it('POST - Chamada usando o token', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/accountservice/accountrest/api/v1/login`,
      headers: {
        'Authorization': `Bearer ${authToken}`
      },
      body: {
        Authorization: 'Bearer ${authToken}',
        file: 'azul',
        loginUser: 'nat12309'
      }
      
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Mais verificações...
    });
  });

  // Mais testes que usam o token...
});