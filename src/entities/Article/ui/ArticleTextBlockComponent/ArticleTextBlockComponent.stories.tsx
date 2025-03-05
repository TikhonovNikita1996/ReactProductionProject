import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {ArticleTextBlockComponent} from './ArticleTextBlockComponent';

export default {
    title: 'shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {},
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};