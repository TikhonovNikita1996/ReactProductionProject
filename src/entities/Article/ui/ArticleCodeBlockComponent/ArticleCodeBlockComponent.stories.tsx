import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {ArticleCodeBlockComponent} from './ArticleCodeBlockComponent';

export default {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {},
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};