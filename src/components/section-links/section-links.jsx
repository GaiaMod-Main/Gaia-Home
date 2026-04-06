import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import './section-links.css';

import ButtonComponent from './button.jsx';

const SectionLinksComponent = function (props) {
    const {
        intl
    } = props;
    return (
        <div
            className="sectionLinks"
        >
            <ButtonComponent
                intl={intl}
                label={'Packager'}
                link={'https://dinosaurmod.github.io/Dinosaurmod-Packager'}
            />
            <ButtonComponent
                intl={intl}
                label={'Credits'}
                link={'https://dinosaurmod.github.io/credits.html'}
            />
            <ButtonComponent
                intl={intl}
                label={'GitHub'}
                link={'https://github.com/Dinosaurmod'}
            />
        </div>
    )
}

SectionLinksComponent.propTypes = {
    intl: intlShape
};

export default injectIntl(SectionLinksComponent);