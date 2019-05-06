import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { categoriesAPI } from '../../actions/category';
import { connect } from 'react-redux';

class WrapCategory extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render(){
    const { categories } = this.props;
    return(
      <nav>
        <ol className="d-flex justify-content-center font-weight-bolder">
        {/* <Link to={`/category/${category.path}`}>{category.name}</Link> */}
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
        </ol>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { getCategories: categoriesAPI })(WrapCategory);