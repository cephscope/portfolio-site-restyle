import React from 'react';

const ExpenseLogPage = () => {
  return (
    <section className="work-detail">
        <a href="https://expense--app.herokuapp.com/" target="_blank" className="work-detail__item">
          <img src="./images/ftb.png" />
          <h1>Take it for a spin →</h1>
        </a>
        <h1>Expense Logger</h1>
        <p>An application to record, search, and filter your expenses.</p>
        <p>Expense Logger authenticates each user, giving them access to a private database.</p>
        <p>I used Redux (with middleware) for state management, so managing your expenses is quick and painless even when dispatching to the database. <a className="section-link" href="https://expense--app.herokuapp.com/" target="_blank">Try it out!</a></p>
        <br />
        <a className="section-link" href="https://github.com/cephscope/exepense-app" target="_blank">View project on GitHub</a>
    </section>
  );
};

export default ExpenseLogPage;