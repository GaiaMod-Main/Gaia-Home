import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './alert.css';

const messages = defineMessages({
    alertText: {
        id: "alert.alertbar.happy",
        defaultMessage: 'GaiaMod is a powerful free visual coding Game Engine (hosted on web) based on PenguinMod.',
        description: 'alert title'
    },
    alertCreateText: {
        id: "alert.alertbar.create",
        defaultMessage: 'Try it!',
        description: 'button title'
    },
})


const AlertComponent = function (props) {
    const { intl } = props;
	

    return (
<div class="alert-banner"><p><img src="https://electramod-home.vercel.app/happy.svg" alt=":D" />{intl ? intl.formatMessage(messages.alertText) : "GaiaMod is a powerful free visual coding Game Engine (hosted on web) based on PenguinMod."}<a href="https://gaiamod-main.github.io/"><button>{intl ? intl.formatMessage(messages.alertCreateText) : "Try it!"}</button></a><button class="alert-dismiss></button></p>
    )
}


AlertComponent.propTypes = {
    intl: intlShape
};

const Alert = injectIntl(AlertComponent);
export default (Alert)