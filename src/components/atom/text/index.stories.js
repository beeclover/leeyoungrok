import PageTitle from './PageTitle';
import SubTitle from './SubTitle';

export default {
  title: 'atoms/text/Title',
};

export const story1 = (args) => <PageTitle {...args} />;
story1.storyName = 'PageTitle';
story1.args = {
  children: 'Lorem ipsum',
};

export const story2 = (args) => <SubTitle {...args} />;
story2.storyName = 'SubTitle';
story2.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit proin vel tortor id euismod accumsan cursus congue. Ac, varius malesuada eget viverra tincidunt fusce.',
};
