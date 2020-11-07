// components
import Layout from "@component/Layout";
import { Container, Row, Col } from "./style";
import UIUX from "@component/molecules/UIUX";
import IndustrialDesign from "@component/molecules/IndustrialDesign";
import UseTool from "@component/molecules/UseTool";
import Career from "@component/molecules/Career";

export default function Home(props) {
  return (
    <Layout>
      <Container>
        <Row>
          <Col col>배너(인물사진???) - 디자인을 하는 이유 & 나의 장점</Col>
        </Row>
        <Row>
          <Col col>
            <p>디자인을 하는 이유</p>
            <ul>
              <li>디자인을 통해 삶의 질을 높인다.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col col>
            <p>나의 장점</p>
            <ul>
              <li>
                새로운 것을 빠르게 습득한다 그리고 습득한 것을 기반으로 소비자의
                잠재적 니즈를 파악하여 알맞은 형태의 디자인을 만든다.(How)
              </li>
              <li>
                현재의 문제를 파악하고 해결 하기위해 필요한 다양한 정보를 빠르게
                습득해서 디자인에 적용한다.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col col>
            <UIUX />
          </Col>
          <Col col>
            <IndustrialDesign />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col col>
            <UseTool />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col col>
            <Career />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
