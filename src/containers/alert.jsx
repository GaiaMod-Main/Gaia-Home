import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import Alert from '../components/alert/alert.jsx';

class AlertBar extends React.Component {
    render () {
        const {
            ...props
        } = this.props;
        return (
            <Alert
                {...props}
            />
        );
    }
}

export default AlertBar;
