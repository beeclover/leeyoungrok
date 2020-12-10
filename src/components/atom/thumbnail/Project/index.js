// components
import { Wrap, FixedBox, AwesomeCircle, Circle, Content } from './style';

const ProjectThumbnail = () => {
  return (
    <Wrap>
      <FixedBox>
        <Content />
        <Circle>
          <AwesomeCircle />
        </Circle>
      </FixedBox>
    </Wrap>
  );
};
ProjectThumbnail.Right = () => {
  return (
    <Wrap>
      <FixedBox.Right>
        <Content />
        <Circle.Right>
          <AwesomeCircle />
        </Circle.Right>
      </FixedBox.Right>
    </Wrap>
  );
};

export default ProjectThumbnail;
