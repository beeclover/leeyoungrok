// data
import interactionDesignData from './interactionDesignData';
import industrialDesignData from './industrialDesignData';
// components
import { Container, Row, Col } from './style';
import ProjectList from '@component/molecules/ProjectList';

export default function Home() {
  return (
    <>
      <div style={{ paddingTop: '100px' }} />
      <Container>
        <Row>
          <Col col>
            <img src="/img/paper.png" alt="" width="150" />
            <h1>Collect works</h1>
          </Col>
        </Row>
        <Row>
          <Col col={12} lg={6}>
            <ProjectList data={interactionDesignData} />
          </Col>
          <Col col={12} lg={6}>
            <ProjectList data={industrialDesignData} />
          </Col>
        </Row>
      </Container>
      <div style={{ paddingTop: '100px' }} />
    </>
  );
}
