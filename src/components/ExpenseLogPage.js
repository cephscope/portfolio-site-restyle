import React from 'react';

const ExpenseLogPage = () => {
  return (
    <section className="work-detail">
        <a href="https://expense--app.herokuapp.com/" target="_blank" className="work-detail__item">
          <img src="./images/ftb.png" />
          <h1>give it a spin</h1>
        </a>
        <p>An application for tracking your expenses.</p>
        <p>Expense data stored in a user-authenticated database.</p>
        <p>Quick search and filter functionality.</p>
        <a href="https://github.com/cephscope/exepense-app" target="_blank">View project on GitHub</a>
    </section>
  );
};

export default ExpenseLogPage;