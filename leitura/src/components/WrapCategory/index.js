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
        
        {categories.map((category, index) => (
          <Link to={`/category/${category.path}`} key={index} className="category-link">{category.name}</Link>
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
