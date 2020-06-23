import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, createdAt, amount }) => (
    <Link className="list-item" to={`/edit/${id}`} >
    <div>
        <h3 className="list-item_title">{description}</h3>
        <span className="list-item_sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <div>
<h3 className="list-item_data">{numeral(amount / 100).format('$0,0.00')}</h3>
</div>
    </Link>
);

export default ExpenseListItem;