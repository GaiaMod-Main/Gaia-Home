import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import Utils from '../../lib/utils';

import styles from './recent-changes.css';

const messages = defineMessages({
    recentChangesText: {
        id: "home.section.recentchanges.title",
        defaultMessage: 'Recent changes',
        description: 'search bar label'
    },
    failText: {
        id: "home.section.recentchanges.failmessage",
        defaultMessage: 'Failed to load recent changes.',
        description: 'search bar label'
    },
    seeMoreText: {
        id: "home.section.recentchanges.seemore",
        defaultMessage: 'See more',
        description: 'search bar label'
    }
})

const RecentChangesComponent = function (props) {
    const { intl } = props;
    return (
        <div id="recent-changes">
            <div className="header">
                <span>{Utils.formatMessage(messages.recentChangesText, intl, "Recent changes")}</span>
                <a href="https://github.com/gaiamod-main" target="_blank" rel="noopener noreferrer">
                    {Utils.formatMessage(messages.seeMoreText, intl, "See more")}
                </a>
            </div>
            <ul className="commit-list"></ul>
            <div id="error-message" style={{ display: 'none' }}>
                {Utils.formatMessage(messages.failText, intl, "Failed to load recent changes.")}
            </div>
        </div>
    )
}

RecentChangesComponent.propTypes = {
    intl: intlShape
};

const IntlRecentChanges = injectIntl(RecentChangesComponent);
export default (IntlRecentChanges)
