import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './section-info.css';

import codeIcon from './icons/code.svg';

import openEditor from './button.js';

const SectionInfoComponent = function (props) {
    const { intl } = props;
    return (
        <div className="section-info">
            <h1>Block-based coding with many special capabilities</h1>
<h1>
                    Built off of <a
                        href="https://scratch.org"
                        style="color:orange;">Scratch</a
                    >,
                    <a href="https://turbowarp.org" style="color:red;"
                        >TurboWarp</a
                    >, and
                    <a href="https://penguinmod.com" style="color:cyan;"
                        >PenguinMod</a
                    >
                </h1>
            <button onClick={openEditor} ><img src={codeIcon}></img>Try it out!</button>
        </div>
    )
}

SectionInfoComponent.propTypes = {
    intl: intlShape
};

const IntlSectionInfo = injectIntl(SectionInfoComponent);
export default (IntlSectionInfo)