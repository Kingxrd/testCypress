class TransactionsPage{
  backButton()
  {
    return cy.get('.fixedTopBox button.btn').contains("Back");
  }  
  
  getTransactionsTable() {
        return cy.get('table.table.table-bordered.table-striped tbody');
      }

  getTransactionsTableCSV() {
        return cy.get('table.table.table-bordered.table-striped tbody').find('tr').then(rows => {
          const transactionData = [];
        
          rows.each((index, row) => {
            const columns = row.children;
            const dateTime = columns[0].textContent.trim();
            const amount = columns[1].textContent.trim();
            const transactionType = columns[2].textContent.trim();
        
            transactionData.push({dateTime, amount, transactionType});
          });
        
          cy.writeFile('cypress/fixtures/transactions.csv', transactionData.map(t => `${t.dateTime},${t.amount},${t.transactionType}\n`).join(''));
        });
  }
}
export default TransactionsPage;