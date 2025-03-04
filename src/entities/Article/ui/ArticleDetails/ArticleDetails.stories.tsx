import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {ArticleDetails} from './ArticleDetails';

export default {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    argTypes: {},
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {};