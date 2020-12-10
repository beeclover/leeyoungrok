import ProjectThumbnail from '.';

export default {
  title: 'atoms/thumbnail/Project',
  component: ProjectThumbnail,
};

export const story1 = () => <ProjectThumbnail />;
story1.storyName = 'Left (default)';

export const story2 = () => <ProjectThumbnail.Right />;
story2.storyName = 'Right';
