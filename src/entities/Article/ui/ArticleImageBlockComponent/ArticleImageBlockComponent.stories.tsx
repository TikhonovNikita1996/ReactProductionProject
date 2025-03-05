import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {ArticleImageBlockComponent} from './ArticleImageBlockComponent';

export default {
    title: 'shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {},
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};