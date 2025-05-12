describe('Teste de API com Cypress', () => {
  const baseUrl = 'https://www.advantageonlineshopping.com'; // exemplo de API pública

  it('GET - Lista de posts', () => {
    cy.request(`${baseUrl}/catalog/api/v1/products/15`)
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('productId');
        expect(response.body).to.have.property('categoryId');
      });
  });

});
