import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';



class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key = {book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                    </li>
            );
            });
    };
    render() {
        return (
            <ul className="List-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    };
}

function mapStateToProps(state) {
    //Whatever returned will show up as props inside of bookList
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
    // the second selectBook is the action we imported in the top
    //Whenever selectBook is called, the result should be passed to all of our reducers by the dispatch function
    return bindActionCreators({selectBook: selectBook},dispatch)
}

//Promote BookList from a component to a container -- it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);