import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


class UIMessageItem extends React.Component {
  componentDidMount() {
    const timeoutId = setTimeout(() => {
      this.refs['messageItem'].classList.add('hidden');
      clearTimeout(timeoutId);
    }, 2000);
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
        uiMessages.map((m, index) =>
          <UIMessageItem {...m} key={index} />
        )
      }
    </ul>
  </section>
);
UIMessageList.propTypes = {
  uiMessages: PropTypes.array
};


const mapStateToProps = state => ({
  uiMessages: state.uiMessages
});


export default connect(mapStateToProps)(UIMessageList);
