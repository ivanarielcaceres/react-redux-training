import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Button, Input, Row, Col } from 'reactstrap';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  search = () => {
    console.log('keyword', this.state.keyword);
    this.props.doSearch(this.state.keyword);
  };

  render = () => {
    return (
      <div>
        <Row>
          <Col>
            <Input
              placeholder="keyword"
              value={this.state.keyword}
              onChange={e => this.setState({ keyword: e.target.value })}
            />
          </Col>
          <Col>
            <Button onClick={this.search}>
              {' '}
              <FaSearch />{' '}
            </Button>
          </Col>
        </Row>
      </div>
    );
  };
}
