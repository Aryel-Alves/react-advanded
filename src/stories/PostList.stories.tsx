import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostList from '../components/post-list';

export default {
  title: 'Componentes/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = () => <PostList  />;

export const normal = Template.bind({});
normal.args = {};

