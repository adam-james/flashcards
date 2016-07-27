import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';

import { UI_MESSAGE_TIMEOUT } from '../constants';


class UIMessageItem extends React.Component {
  componentDidMount() {
    const timeoutId = setTimeout(() => {
      this.refs['messageItem'].classList.add('hidden');
      clearTimeout(timeoutId);
    }, UI_MESSAGE_TIMEOUT);
  }

  render() {
    return (
      <li ref="messageItem">{this.props.message}</li>
    );
  }
}
UIMessageItem.propTypes = {
  message: PropTypes.string
};


const UIMessageList = ({uiMessages}) => (
  <section className="ui-message-list">
    <ul>
      {
        map(uiMessages, (m, index) =>
          <UIMessageItem {...m} key={index} />
        )
      }
    </ul>
  </section>
);
UIMessageList.propTypes = {
  uiMessages: PropTypes.object
};


const mapStateToProps = state => ({
  uiMessages: state.uiMessages
});


export default connect(mapStateToProps)(UIMessageList);
